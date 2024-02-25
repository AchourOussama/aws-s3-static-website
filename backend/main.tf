# lambda function 
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

# dynamo db 
resource "aws_dynamodb_table" "website-visits-table" {
  name             = "website-visits-table"
  hash_key         = var.hash_key
  billing_mode     = "PAY_PER_REQUEST"
  stream_enabled   = false
  #stream_view_type = "NEW_AND_OLD_IMAGES"

  attribute {
    name = var.hash_key
    type = "N"
  }

  # replica {
  #   region_name = "us-east-2"
  # }

  # replica {
  #   region_name = "us-west-2"
  # }
}


resource "aws_dynamodb_table_item" "visits-item" {
  table_name = aws_dynamodb_table.website-visits-table.name
  hash_key   = aws_dynamodb_table.website-visits-table.hash_key

  item = <<ITEM
  {

    "id": {"N": "0"},
    "count": {"N": "15"}
  }
  ITEM
  
  # item {
  #   var.hash_key= {N: 10}
  # }
  
}

