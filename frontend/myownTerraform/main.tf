# ---------------------------- S3 bucket----------------------------# 

resource "aws_s3_bucket" "website" {
  bucket = var.domain_name
  #force_destroy = true
  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
  
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  # error_document {
  #   key = "error.html"
  # }

  # routing_rule {
  #   condition {
  #     key_prefix_equals = "docs/"
  #   }
  #   redirect {
  #     replace_key_prefix_with = "documents/"
  #   }
  # }
}
output "bucket_url" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}

# enabling bucket public access 
# Note : There is still the "Account-level bucket access" , i enabled it from the console

resource "aws_s3_bucket_public_access_block" "website" {
  # provider = aws.main

  bucket                  = aws_s3_bucket.website.id
  #ignore_public_acls      = true
  #restrict_public_buckets = true
  block_public_acls       = true
  block_public_policy     = true
}

# bucket policy 

resource "aws_s3_bucket_policy" "website" {
  
  bucket = aws_s3_bucket.website.id
  #policy = data.aws_iam_policy_document.website.json
  policy = data.aws_iam_policy_document.website.json
  depends_on = [
    aws_s3_bucket_policy.website
  ]

}


data "aws_iam_policy_document" "website" {
  statement {
    principals {
      type = "AWS"
      identifiers = [
        "*",
      ]
    }    
    #statement ID
    sid = "PublicReadGetObject"

    actions = [
      "s3:GetObject",
      "s3:ListBucket",
    ]

    resources = [
      aws_s3_bucket.website.arn,
      "${aws_s3_bucket.website.arn}/*",
    ]
  }
}

# ---------------------------- Route 53----------------------------# 

data "aws_route53_zone" "main" {
  name         = "oussamaachour.com"
  private_zone = false
}

# resource "aws_route53_record" "www" {
#   zone_id = data.aws_route53_zone.selected.zone_id
#   name    = "www.${data.aws_route53_zone.selected.name}"
#   type    = "A"
#   ttl     = "300"
#   records = ["10.0.0.1"]
# }

resource "aws_route53_record" "root_domain" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = true
  }
  depends_on = [ data.aws_route53_zone.main ]
}
# ---------------------------- ACM Certificate----------------------------# 

resource "aws_acm_certificate" "cert" {
  domain_name       = var.domain_name
  validation_method = "DNS"
  provider = aws.acm

  lifecycle {
    create_before_destroy = true
  }
}

data "aws_acm_certificate" "cert" {
  domain   = var.domain_name
  statuses = ["ISSUED"]
}
output "website_url"{
  value="https://${var.domain_name}"
}
# ---------------------------- CloudFront----------------------------# 

locals {
  s3_origin_id = "S3-${aws_s3_bucket.website.id}"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.website.bucket_domain_name
    origin_id                = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  
  # logging_config {
  #   include_cookies = false
  #   bucket          = "mylogs.s3.amazonaws.com"
  #   prefix          = "myprefix"
  # }

  aliases = ["oussamaachour.com"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD","OPTIONS"]
    target_origin_id = local.s3_origin_id

    viewer_protocol_policy = "allow-all"
    
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  # The costs depend  on the data transfer out to (internet and origin) and number of HTTPs requests 
  # The price class 
  price_class = "PriceClass_All"

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    #Note : default certificate could only use the default cloudfront domain name ""
    #cloudfront_default_certificate = true
    acm_certificate_arn = data.aws_acm_certificate.cert.arn
    #To know what does it mean
    ssl_support_method       = "sni-only"

  }

  depends_on = [aws_s3_bucket.website, aws_acm_certificate.cert]
}

