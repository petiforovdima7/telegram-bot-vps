 const TelegramBot = require('node-telegram-bot-api');
 const mysql = require('mysql2');
 const config = require('./config.js');
 const helper = require('./helpers');
 const kb = require('./keyboard-buttons.js');
 const keyboard = require('./keyboard.js')
 const fs = require('fs');
 const db = require('./db.js');
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

 helper.logStart()

 const bot = new TelegramBot(config.TOKEN, {
 	polling: {
 		interval: 300,
 		autoStart: true,
 		params: {
 			timeout: 10
 		}
 	}
 });
 bot.on('message', msg => {
 	switch (msg.text) {
 		case kb.home.books: {
 			bot.sendMessage(helper.getChatId(msg), `Выбирай язык зайчик`, {
 				reply_markup: {
 					keyboard: keyboard.books
 				}
 			})
 		}
 		break
 	case kb.books.eng: {
 		bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
 			// parse_mode: 'HTML',
 			reply_markup: {
 				keyboard: keyboard.engBooks
 			}

 		})

 	}
	 break
	 case kb.books.pol: {
		bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
			// parse_mode: 'HTML',
			reply_markup: {
				keyboard: keyboard.polBooks
			}

		})

	}
	break
	case kb.books.ger: {
		bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
			// parse_mode: 'HTML',
			reply_markup: {
				keyboard: keyboard.germanBooks
			}

		})

	}
	break
	
	case kb.polishBooks.krok: {
		connection.query('SELECT * FROM `books` WHERE `title` LIKE "%Krok%"', function (err, rows, fields) {
			// connection.end();
			// console.log(rows.length)
			//  for (var i = 0; i < rows.length; i++) {
			// 	console.log(rows.id)
			//  }
			const books = [];
			// const boksLink = [];

			rows.forEach(function (item, i, fields) {
				books.push(
					[{
						'text': item.title,
						'url': item.book
					}]
				)
			})
			bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
				// parse_mode: 'HTML',
				reply_markup: {
					inline_keyboard: books
				}
				
			})
			
	 })
	}
	 break
 	case kb.engBooks.speakout: {
		connection.query('SELECT * FROM `books` WHERE `title` LIKE "%speak%"', function (err, rows, fields) {
			// connection.end();
			// console.log(rows.length)
			//  for (var i = 0; i < rows.length; i++) {
			// 	console.log(rows.id)
			//  }
			const books = [];
			// const boksLink = [];

			rows.forEach(function (item, i, fields) {
				books.push(
					[{
						'text': item.title,
						'url': item.book
					}]
				)
			})
			bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
				// parse_mode: 'HTML',
				reply_markup: {
					inline_keyboard: books
				}
				
			})
			
	 })
	}
	 break
	 case kb.engBooks.empower: {
		connection.query('SELECT * FROM `books` WHERE `title` LIKE "%empover%"', function (err, rows, fields) {
			// connection.end();
			// console.log(rows.length)
			//  for (var i = 0; i < rows.length; i++) {
			// 	console.log(rows.id)
			//  }
			const books = [];
			// const boksLink = [];

			rows.forEach(function (item, i, fields) {
				books.push(
					[{
						'text': item.title,
						'url': item.book
					}]
				)
			})
			bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
				// parse_mode: 'HTML',
				reply_markup: {
					inline_keyboard: books
				}
				
			})
			
	 })
	}
	 break
	 case kb.germanBooks.german: {
		connection.query('SELECT * FROM `books` WHERE `category` LIKE "germany"', function (err, rows, fields) {
			// connection.end();
			// console.log(rows.length)
			//  for (var i = 0; i < rows.length; i++) {
			// 	console.log(rows.id)
			//  }
			const books = [];
			// const boksLink = [];

			rows.forEach(function (item, i, fields) {
				books.push(
					[{
						'text': item.title,
						'url': item.book
					}]
				)
			})
			bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
				// parse_mode: 'HTML',
				reply_markup: {
					inline_keyboard: books
				}
				
			})
			
	 })
	}
	 break
	 case kb.engBooks.new: {
		connection.query('SELECT * FROM `books` WHERE `title` LIKE "%New Total English%"', function (err, rows, fields) {
			// connection.end();
			// console.log(rows.length)
			//  for (var i = 0; i < rows.length; i++) {
			// 	console.log(rows.id)
			//  }
			const books = [];
			// const boksLink = [];

			rows.forEach(function (item, i, fields) {
				books.push(
					[{
						'text': item.title,
						'url': item.book
					}]
				)
			})
			bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
				// parse_mode: 'HTML',
				reply_markup: {
					inline_keyboard: books
				}
				
			})
			
	 })
	}
	 break
	 case kb.engBooks.gram: {
		connection.query('SELECT * FROM `books` WHERE `title` LIKE "%Grammar%"', function (err, rows, fields) {
			// connection.end();
			// console.log(rows.length)
			//  for (var i = 0; i < rows.length; i++) {
			// 	console.log(rows.id)
			//  }
			const books = [];
			// const boksLink = [];

			rows.forEach(function (item, i, fields) {
				books.push(
					[{
						'text': item.title,
						'url': item.book
					}]
				)
			})
			bot.sendMessage(helper.getChatId(msg), 'Вот что я нашел 🙈', {
				// parse_mode: 'HTML',
				reply_markup: {
					inline_keyboard: books
				}
				
			})
			
	 })
	}
	 break
	 case kb.engBooks.allboks: {
			bot.sendMessage(helper.getChatId(msg), 'Лови ссылку на сайт 🙈', {
				// parse_mode: 'HTML',
				reply_markup: {
					inline_keyboard: [
						[{
							'text': 'http://my.polyglot.sumy.ua',
							'url': 'http://my.polyglot.sumy.ua'
						}]
					]
				}
				
			})
	}
 	break
 	case kb.home.pay:
 		bot.sendMessage(helper.getChatId(msg), `Укажите сумму которую хотите оплатить`, {
 			reply_markup: {
 				keyboard: keyboard.pay
 			}
 		})
 	break
 	case kb.pay.back:
 		bot.sendMessage(helper.getChatId(msg), `Вернул вас назад`, {
 			reply_markup: {
 				keyboard: keyboard.home
 			}
 		})
 		break

 	case kb.pay.one: {
 		bot.sendInvoice(helper.getChatId(msg), 'Пополнение карты', 'Пополнение лицевого счета в POLYGLOT', 'payload', '635983722:LIVE:i99138928133', 'stat_1', 'UAH',
 			[{
 				label: 'Пополнение карты ПриватБанка',
 				amount: 9500,
 			}]
 		)
 	}
 	bot.on('pre_checkout_query', checkout => {
 		const checkoutId = checkout.id
 		bot.answerPreCheckoutQuery(checkout.id, true)
 	})
	 break
	 case kb.pay.two: {
		bot.sendInvoice(helper.getChatId(msg), 'Пополнение карты', 'Пополнение лицевого счета в POLYGLOT', 'payload', '635983722:LIVE:i99138928133', 'stat_1', 'UAH',
			[{
				label: 'Пополнение карты ПриватБанка',
				amount: 10500,
			}]
		)
	}
	bot.on('pre_checkout_query', checkout => {
		const checkoutId = checkout.id
		bot.answerPreCheckoutQuery(checkout.id, true)
	})
	break
	case kb.pay.three: {
		bot.sendInvoice(helper.getChatId(msg), 'Пополнение карты', 'Пополнение лицевого счета в POLYGLOT', 'payload', '635983722:LIVE:i99138928133', 'stat_1', 'UAH',
			[{
				label: 'Пополнение карты ПриватБанка',
				amount: 13000,
			}]
		)
	}
	bot.on('pre_checkout_query', checkout => {
		const checkoutId = checkout.id
		bot.answerPreCheckoutQuery(checkout.id, true)
	})
	break

 	}
 })
 //  bot.on('message', msg => {
 // 	console.log(helper.debug(msg))
 //    })
 bot.on('successful_payment', msg => {
 	// console.log(helper.debug(msg))
 	bot.sendMessage(helper.getChatId(msg), `Спасибо, мы уже передали информацию про вашу оплату в офис ✊`, {
 		reply_markup: {
 			keyboard: keyboard.home
 		}
 	})
 	const adminChat = -328036280;
 	const amount = msg.successful_payment.total_amount / 100;
 	const successfulMessage = `
	<strong>Поступила новая оплата от!🤔</strong>
	<strong>${msg.from.first_name}  ${msg.from.last_name}</strong>
	<pre>Сумма: ${amount} грн.</pre>`

 	bot.sendMessage(adminChat, successfulMessage, {
 		parse_mode: 'HTML'
 	})
 })
 bot.onText(/\/start/, msg => {
 	bot.sendMessage(helper.getChatId(msg), `Привет! ${msg.from.first_name} 🤔\nВыбери команду для начала работы 🤖`, {
 		reply_markup: {
 			keyboard: keyboard.home
 		}
 	})
 })

 bot.on('polling_error', (error) => {
 	console.log(helper.debug(error)); // => 'EPARSE'
 });