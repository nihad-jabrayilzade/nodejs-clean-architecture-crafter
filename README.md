```
- src
  - application
    - di
    - api
      - rest
        - {entity}
          - controller
            - {Entity}Controller.ts
          - documentation
  - core
    - common
      - exception
      - mapper
      - repository
        - port
        - result
      - use-case
        - result
        - port
      - type
      - util
        - assert
        - checker
        - delay
    - domain
      - {entity}
        - di
        - entity
          - {Entity}.ts
        - exception
          - {Entity}NotFoundException.ts
          - {Entity}AlreadyExistsException.ts
        - repository
          - port
            - Get{Entity}RepositoryPort.ts
            - Get{entities}RepositoryPort.ts
            - Create{Entity}RepositoryPort.ts
            - Update{Entity}RepositoryPort.ts
            - Delete{Entity}RepositoryPort.ts
          - result
            - Get{Entity}RepositoryResult.ts
            - Get{entities}RepositoryResult.ts
            - Create{Entity}RepositoryResult.ts
            - Update{Entity}RepositoryResult.ts
            - Delete{Entity}RepositoryResult.ts
          - {Entity}Repository.ts
        - use-case
          - port
            - Get{Entity}UseCasePort.ts
            - Get{entities}UseCasePort.ts
            - Create{Entity}UseCasePort.ts
            - Update{Entity}UseCasePort.ts
            - Delete{Entity}UseCasePort.ts
          - result
            - Get{Entity}UseCaseResult.ts
            - Get{entities}UseCaseResult.ts
            - Create{Entity}UseCaseResult.ts
            - Update{Entity}UseCaseResult.ts
            - Delete{Entity}UseCaseResult.ts
          - Get{Entity}UseCase.ts
          - Get{entities}UseCase.ts
          - Create{Entity}UseCase.ts
          - Update{Entity}UseCase.ts
          - Delete{Entity}UseCase.ts
    - service
      - {entity}
        - Get{Entity}Service.ts
        - Get{entities}Service.ts
        - Create{Entity}Service.ts
        - Update{Entity}Service.ts
        - Delete{Entity}Service.ts
  - infrastructure
    - persistence
      - typeorm
        - {entity}
          - TypeOrm{Entity}Entity.ts
          - TypeOrm{Entity}Repository.ts
          - TypeOrm{Entity}Mapper.ts
```

# API Error response

```
{
  "status": "error", // This can be ‘error’ or ‘success’
  "statusCode": 404,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested resource was not found.",
    "details": "The user with the ID '12345' does not exist in our records.",
    "timestamp": "2023-12-08T12:30:45Z",
    "path": "/api/v1/users/12345",
  },
  "requestId": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
}
```

# API Success response

```
object {
  string apiVersion?;
  string method?;
  object {
    integer currentItemCount?;
    integer itemsPerPage?;
    integer startIndex?;
    integer totalItems?;
    integer pageIndex?;
    integer totalPages?;
    array [
      object {}*;
    ] items?;
  }* data?;
  object {
    integer code?;
    string message?;
    array [
      object {
        string domain?;
        string reason?;
        string message?;
      }*;
    ] errors?;
  }* error?;
}*;
```
