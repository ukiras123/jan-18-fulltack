const mongoose = require('mongoose');

const mongoConnect = () => {
    console.log("DB Connected")
    return mongoose.connect(`mongodb+srv://todouser:Px7icaA3qWgHi17E@todo.sv1imwp.mongodb.net/todoapp`)
}

module.exports = {
    mongoConnect
}