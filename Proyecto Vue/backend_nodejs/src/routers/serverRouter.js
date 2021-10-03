const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
        this.router.get("/users", objServerC.getAllUsers);
        this.router.get("/users/:id", objServerC.getUsers);
        this.router.post("/users", objServerC.registerUser);
        this.router.put("/users", objServerC.updateUser);
        this.router.delete("/users", objServerC.deleteUser);  
        
        //Para los libros
        this.router.get("/books", objServerC.getAllBooks);
        this.router.get("/books/:id", objServerC.getBooks);
        this.router.post("/books", objServerC.registerBook);
        this.router.put("/books", objServerC.updateBook);
        this.router.delete("/books", objServerC.deleteBook);
    }
}

exports.default = ServerRouter;