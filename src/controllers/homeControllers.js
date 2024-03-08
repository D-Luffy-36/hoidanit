



const connection = require('../config/database');

const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * FROM Users',
        function(err, results, fields) {
            users = results;
            console.log("results: ", results) 
        }
    );
    console.log("check user:", users)
    res.send("hello");
}

const getHoiDanit = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getHoiDanit
}
