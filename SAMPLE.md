# How to Document NestJS APIs with Swagger
## 1. install @nestjs/cli in global
` npm install -g @nestjs/cli & npm install pnpm -g`

## 2. create a new NestJS project
`nest new project-name`

## 3.generate resource for demo api (select REST API)
`nest g resource demo`
generate CRUD API for demo resource

## 4. install swagger module
`pnpm add @nestjs/swagger swagger-ui-express`

## 5. add swagger module configuration
```TypeScript
cosnt apiPath = 'api';
const options = new DocumentBuilder()
    .setTitle('Demo API')
    .setDescription('The Demo API description')
    .setVersion('1.0')
    .addTag('demo')
    .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup(`${apiPth}`, app, document);
```	

## 6. run nestJS Server 
`pnpm run start:dev`

## 7. open browser and navigate to http://localhost:3000/api

## 8. create JSON Data and Change tsconfig.json
testing: replace database with the json file 
```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
```

## 9. update the demo controller to use the json data
add response decorator to the methods