const mysql = require('mysql2');
module.exports = {
    connectDB () {
        const connection = mysql.createConnection({
            host: "185.43.220.11",
            user: "dimas679_my",
            database: "dimas679_my",
            password: "39misovo"
        });
        connection.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            } else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });
    }
}
 // Пример запроса mysql
 //  connection.query('SELECT * FROM `admins` LIMIT 2', function (err, rows, fields) {
 // 	connection.end();
 // 	if (!err)
 // 		console.log('The solution is: ', rows);
 // 	else
 // 		console.log('Error while performing Query.');
 // });

