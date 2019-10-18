 const TelegramBot = require('node-telegram-bot-api');
 const debug = require('./helpers');
 const fs = require('fs');
 console.log('Bot has been started ...');
const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "https://sr35.hostlife.net/phpmyadmin",
  user: "dimas679_my",
  database: "dimas679_my",
  password: "39misovo"
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });


 const token = '918132583:AAHDSdMvNVGah1iO3sr46E7-1k4rJa7313M';

 const bot = new TelegramBot(token, {
	polling: {
		interval: 300,
		autoStart: true,
		params: {
			timeout: 10
		}
	}
 });
 bot.onText(/\/start/, msg => {
 	const chatId = msg.chat.id
 	bot.sendMessage(chatId, 'Привет привет :)')
 })
 bot.onText(/\/pay/, msg => {
 	const chatId = msg.chat.id
 	bot.sendInvoice(
 		chatId,
 		'Пополнение карты',
 		'Пополнение лицевого счета в POLYGLOT',
 		'payload',
 		'635983722:LIVE:i99138928133',
 		'stat_1',
 		'UAH',
 		[{
 			label: 'Пополнение карты ПриватБанка',
 			amount: 100,
 		}]
 	)

 })
 // Handle payment callbacks
 bot.on('pre_checkout_query', checkout => {
 	const checkoutId = checkout.id
 	bot.answerPreCheckoutQuery(checkout.id, true)
 })