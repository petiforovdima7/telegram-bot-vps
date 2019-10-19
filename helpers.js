
 module.exports = {
	logStart() {
		console.log('Bot has been started ...') 
	}, 
	debug(obj = {}) {
		return JSON.stringify(obj, null, 4)
	},
	getChatId(msg) {
		return msg.chat.id
	}
 }
//  module.exports = debug
