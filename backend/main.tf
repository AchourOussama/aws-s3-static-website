# lamba function 
data "aws_iam_policy_document" "lambda_policy" {
  statement {
    sid = "AssumeRole"
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
    
    actions = ["sts:AssumeRole"]
  }
#    statement {
#     sid = "allowAccessToDynamoDB"
#     effect = "Allow"

#     principals {
#       type        = "Service"
#       identifiers = ["lambda.amazonaws.com"]
#     }
    
#     actions = [ 
#         "dynamodb:DeleteItem",
#         "dynamodb:GetItem",
#         "dynamodb:PutItem",
#         "dynamodb:Query",
#         "dynamodb:Scan",
#         "dynamodb:UpdateItem"]
#     resources = [  ]
#   }
#   statement {
#     sid = "allowAccessToCloudWatch"
#     principals {
#       type        = "Service"
#       identifiers = ["lambda.amazonaws.com"]  
#     }
#     actions = [  
#         "logs:CreateLogGroup",
#         "logs:CreateLogStream",
#         "logs:PutLogEvents" ]
#     resources = "*"
#   }
 
}

resource "aws_iam_role" "iam_for_lambda" {
  name               = "iam_for_lambda"
  assume_role_policy = data.aws_iam_policy_document.lambda_policy.json
}

data "archive_file" "lambda" {
  type        = "zip"
  source_file = "visits-counter.py"
  output_path = "visits-counter.zip"
}

resource "aws_lambda_function" "test_lambda" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename      = "visits-counter.zip"
  function_name = "visits-counter"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "visits-counter.lambda_handler"

  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "python3.10"

#   environment {
#     variables = {
#       foo = "bar"
#     }
#   }
}