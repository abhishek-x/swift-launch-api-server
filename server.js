const app = require('./app');
const config = require('./config/config');

app.get('/', (req, res) => {
    res.send('API Server is running...');
});

app.listen(config.port, () => {
    console.log(`API Server Running on http://localhost:${config.port}`);
});