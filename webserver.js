import Express from 'express';

const app = Express();

/* serves main page */
app.get("/", function(req, res) {
    res.sendfile('dist/index.html');
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on " + port);
});
