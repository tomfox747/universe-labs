const app = require('./app')
const port = 8080

// start express server on port 5000
app.listen(8000, () => {
    console.log(`server started on port ${port}`);
});