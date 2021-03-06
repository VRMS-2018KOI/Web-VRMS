module.exports = (app) => {

    app.get('/crt', (req, res) => {
        console.log('/crt 패스 요청됨.');
        res.render('reportTest.ejs');
    });
    
    app.post('/crt', (req, res) => {
        console.log('post crt!')
        let telephone = req.body.telephone;
        let x = req.body.x;
        let y = req.body.y;
        let num = req.body.num;

        const database = req.app.get('database');

        console.log('telephone: '+telephone+', x: '+x+', y: '+y+', num: '+num);

        let reportuser = new database.ReportModel({
            'telephone': telephone,
            'position.x': x,
            'position.y': y,
            'num': num,
            'danger': true
        });
        reportuser.save(err => {
            if(err)
                throw err;
            console.log('successfully saved reported user at ReportModel database');
        });
        res.redirect('/main');
    });
};