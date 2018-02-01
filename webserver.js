import Express from 'express';
import path from 'path';

const app = Express();

/* serves main page */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

/* serves all the static files */
app.get(/^(.+)$/, (req, res) => {
    console.log('static file request : ' + req.params[0]);
    res.sendFile(path.join(__dirname, req.params[0]));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on " + port);
});
