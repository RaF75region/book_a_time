#!/bin/bash
npx openapi-typescript ../backend/book_a_time.api/swagger.json --output ./src/types/swagger-types.ts
# echo "Running initial grpc..."

# protoc -I=../backend/book_a_time.grpc/Protos \
#   ../backend/book_a_time.grpc/Protos/*.proto \
#   --js_out=import_style=commonjs:src/models \
#   --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/models

# echo "gRPC code generation complete."