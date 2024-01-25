module "s3-static-website" {
  source  = "cn-terraform/s3-static-website/aws"
  version = "1.0.8"
  website_domain_name = "oussama.com"
  name_prefix = "oussama-website"
  providers = {
    aws.main         = aws.main
    aws.acm_provider = aws.acm_provider
  }
}

