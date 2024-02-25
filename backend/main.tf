# ----------------------------lambda function----------------------------# 

resource "aws_lambda_function" "visits-counter" {
  
  filename      = "visits-counter.zip"
  function_name = "visits-counter"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "visits-counter.lambda_handler"

  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "python3.10"

  depends_on = [ aws_cloudwatch_log_group.visits-counter ]
}

data "archive_file" "lambda" {
  type        = "zip"
  source_file = "visits-counter.py"
  output_path = "visits-counter.zip"
}

# Lambda assume role 
resource "aws_iam_role" "iam_for_lambda" {
  name               = "iam_for_lambda"
  assume_role_policy = data.aws_iam_policy_document.lambda_policy.json
}


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
  }
 



# lambda integration with cloudwatch : this enables lambda to store logs in cloudwatch
resource "aws_cloudwatch_log_group" "visits-counter" {
  name              = "/aws/lambda/visits-counter"
  retention_in_days = 14
}

# permissions for accessing cloudwatch and dynamodb
data "aws_iam_policy_document" "visits-counter" {

  statement {
    effect = "Allow"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]

    resources = ["arn:aws:logs:*:*:*"]
  }
  statement {
    effect = "Allow"
    actions = [ 
         "dynamodb:GetItem",
         "dynamodb:PutItem",
         "dynamodb:UpdateItem"
     ]
     resources = [ "arn:aws:dynamodb:*:*:table/${aws_dynamodb_table_item.visits-item.table_name}"]
  }
}

resource "aws_iam_policy" "visits-counter" {
  name        = "visits-counter-logging"
  path        = "/"
  description = "IAM policy for logging from a lambda"
  policy      = data.aws_iam_policy_document.visits-counter.json
}

resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.iam_for_lambda.name
  policy_arn = aws_iam_policy.visits-counter.arn
}

# ----------------------------Dynamo DB----------------------------# 

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

# ----------------------------api gateway----------------------------# 

# The type of the api is : http   
 
resource "aws_apigatewayv2_api" "visits" {
  name          = "website-visits-api"
  protocol_type = "HTTP"
}
resource "aws_apigatewayv2_integration" "lambda_get_handler" {
  api_id = aws_apigatewayv2_api.visits.id

  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.visits-counter.invoke_arn
}

resource "aws_apigatewayv2_integration" "lambda_post_handler" {
  api_id = aws_apigatewayv2_api.visits.id

  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.visits-counter.invoke_arn
}

resource "aws_apigatewayv2_route" "get_handler" {
  api_id    = aws_apigatewayv2_api.visits.id
  route_key = "GET /visits"

  target = "integrations/${aws_apigatewayv2_integration.lambda_get_handler.id}"
}

resource "aws_apigatewayv2_route" "post_handler" {
  api_id    = aws_apigatewayv2_api.visits.id
  route_key = "POST /visits"

  target = "integrations/${aws_apigatewayv2_integration.lambda_post_handler.id}"
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.visits-counter.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.visits.execution_arn}/*/*"
}

resource "aws_apigatewayv2_stage" "visits" {
  api_id = aws_apigatewayv2_api.visits.id
  name   = "prod"
}