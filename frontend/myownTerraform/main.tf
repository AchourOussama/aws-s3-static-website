resource "aws_s3_bucket" "website" {
  bucket = "ouss-website-bucket"

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
  block_public_acls       = false
  block_public_policy     = false
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