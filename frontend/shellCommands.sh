#copying website content to s3 
aws s3 sync ../website/build/ s3://ouss-website-bucket

#Recursively deleting all objects
aws s3 rm s3://name-of-bucket --recursive

#Note: To try the force_destroy option in the "S3 Bucket" terraform ressources
