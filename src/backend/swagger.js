import swaggerJsdoc from "swagger-jsdoc";
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: { 
      title: "API REST - Proyect streamingfilm",
    version: "1.0.0",
    description: "Documentación de API REST con Express, Prisma y Postman.",
    contact:{
        autor: 'Isaac Pérez',
        email: '1627141@senati.edu.pe',
        telephone: '+51 983569753'
    }
},
    servers: [{
        url: "http://localhost:3000",
        description: "Servidor de desarrollo"
    }],
  },
  apis: ["./routes/*.js"],
};
export const swaggerSpec = swaggerJsdoc(swaggerOptions);

