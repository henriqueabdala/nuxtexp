const app = require('express')();

// Require API routes
const simulador = require('./routes/simulador.js')

// Import API Routes
app.use('/simulador', simulador)


// Export express app
module.exports = {
    path: "/server-middleware/",
    handler: app
}