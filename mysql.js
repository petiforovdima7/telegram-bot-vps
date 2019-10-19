bot.onText(/\/mysql /, msg => {
    const chatId = msg.chat.id
           
    connection.query('SELECT * FROM `admins` LIMIT 2', function (err, rows, fields) {
               // connection.end();
               if (!err)
                   // console.log('The solution is: ', rows);
                   rows.forEach(function(item, i, rows) {
                        bot.sendMessage(chatId, debug(item.name))
                       //console.log( i + ": " + item + " (массив:" + rows + ")" );
                     });
               else
                   console.log('Error while performing Query.');
           })

})