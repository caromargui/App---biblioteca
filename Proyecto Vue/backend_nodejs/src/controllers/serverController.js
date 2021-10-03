const person = require('../models/person');
const book = require('../models/book');

let users = [
    { id: 1, nombre: "Geremias", apellido: "Beltran" },
    { id: 2, nombre: "Isadora", apellido: "Montiel" },
    { id: 3, nombre: "Laureano", apellido: "Gómez" },
    { id: 4, nombre: "Carlos", apellido: "Castro" }
]

class ServerController {
    constructor() {

    }

    registerUser(req, res) {
        person.create(req.body, (error, data) => {
            if (error) {
                //next(error);
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    registerBook(req, res) {
        book.create(req.body, (error, data) => {
            if (error) {
                //next(error);
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    /* register(req, res) {
        //obtener datos
        let { id, nombre, apellido } = req.body;
        console.log("Usuario registrado con éxito");
        console.table({ id, nombre, apellido });
        users.push(req.body);
        res.status(200).json({
            message: "Usuario registrado con éxito"
        });
    } */

    /*    update(req, res) {
            let { id, nombre, apellido } = req.body;
            console.table({ id, nombre, apellido });
    
            users.forEach(element => {
                if (id == element.id) {
                    element.nombre = nombre;
                    element.apellido = apellido;
                }
            });
    
            if (users != null) {
                res.status(200).json(users);
            } else {
                res.status(400).json({ message: "Usuario no encontrado" });
            }
        }*/

    updateUser(req, res) {
        let { id, nombre, apellido, edad, email } = req.body;
        let obj = { nombre, apellido, edad, email }
        person.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    updateBook(req, res) {
        let { id, name, author, year, available } = req.body;
        let obj = { name, author, year, available }
        book.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


    /*deleteUser(req, res) {
        let { id } = req.body;
        console.table({ id });
        let tempUser = [];
        users.forEach(element => {
            if (id != element.id) {
                tempUser.push(element);
            }
        });
        users = tempUser;
        if (users != null) {
            res.status(200).json(users);
        } else {
            res.status(400).json({ message: "Usuario no encontrado" });
        }
    }*/

    deleteUser(req, res) {
        let { id } = req.body;
        person.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    deleteBook(req, res) {
        let { id } = req.body;
        book.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


    /*    getUsers(req, res) {
            let id = req.params.id;
            let userResp = null;
            users.forEach(element => {
                if (id == element.id) {
                    userResp = element;
                }
            });
    
            if (userResp != null) {
                res.status(200).json(userResp);
            } else {
                res.status(400).json({ message: "Usuario no encontrado" });
            }
        }*/

    getUsers(req, res) {
        let id = req.params.id;
        person.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getBooks(req, res) {
        let id = req.params.id;
        book.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    /*    getAllUsers(req, res) {
            res.status(200).json(users);
        }*/

    getAllUsers(req, res) {
        person.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getAllBooks(req, res) {
        book.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = ServerController;