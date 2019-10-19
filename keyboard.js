const kb = require('./keyboard-buttons.js')
module.exports = {
    home: [
        [kb.home.pay],
        [kb.home.books]
    ],
    pay: [
        [kb.pay.one, kb.pay.two, kb.pay.three],
        [kb.pay.back]
    ],
    books: [
        [kb.books.eng],
        [kb.books.pol],
        [kb.books.ger],
        [kb.books.back]
    ],
    eng: [
        [kb.books.back]
    ],
    engBooks: [
        [kb.engBooks.speakout],
        [kb.engBooks.empower],
        [kb.engBooks.new],
        [kb.engBooks.gram],
        [kb.engBooks.allboks],
        [kb.books.back]
    ],
    polBooks: [
        [kb.polishBooks.krok],
        [kb.books.back]
    ],
    germanBooks: [
        [kb.germanBooks.german],
        [kb.books.back]
    ]
}