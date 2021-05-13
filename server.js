const app = require('./app')

// start express server on port 5000
app.listen(process.env.PORT || 5000, () => {
    console.log(`server started on port ${port}`);
});