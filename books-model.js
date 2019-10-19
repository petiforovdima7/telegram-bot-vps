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

connection.query('SELECT * FROM `books` WHERE `category` = "english" LIMIT 2', function (err, rows, fields) {
            connection.end();

            rows.forEach(function (item, i, rows) {
                const intems = item.id;
            });