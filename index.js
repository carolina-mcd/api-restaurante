const app = require('./src/server')
require('./src/database')

app.listen(3333, () => {
    console.log('Server is running at http://localhost:3333')
});
