const helper = require('./helpers');

function createContactsArray(len){
    for(var i = 1, arr = []; i <= len; i++) {
      arr.push({'name': 'Contact ' + i});
    }
    return arr;
  }
  var contacts = createContactsArray(3);

  console.log(helper.debug(contacts))