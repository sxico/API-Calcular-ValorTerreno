const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3005, () => console.log('Servidor escutando a porta 3005'))