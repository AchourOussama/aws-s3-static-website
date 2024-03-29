# variable "AWS_ACCESS_KEY" {
# }

# variable "AWS_SECRET_KEY" {
# }

variable "AWS_REGION" {
  default = "us-east-1"
}

variable "AMIS" {
  type = map(string)
  default = {
    us-east-1    = "ami-05c13eab67c5d8861"
    us-west-2    = "ami-00448a337adc93c05"
    eu-central-1 = "ami-0a485299eeb98b979"
  }
}



