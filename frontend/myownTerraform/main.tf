# ---------------------------- S3 bucket----------------------------# 

resource "aws_s3_bucket" "website" {
  bucket = "oussamaachour.com"
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

data "aws_route53_zone" "selected" {
  name         = "oussamaachour.com."
  private_zone = false
}

# resource "aws_route53_record" "www" {
#   zone_id = data.aws_route53_zone.selected.zone_id
#   name    = "www.${data.aws_route53_zone.selected.name}"
#   type    = "A"
#   ttl     = "300"
#   records = ["10.0.0.1"]
# }