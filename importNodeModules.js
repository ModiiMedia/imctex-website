const fs = require('fs-extra')
const mkdirp = require("mkdirp")

fs.copy(`./node_modules/bulma`, './assets/styles/_dependencies', err => {
    if (err) {
        return console.error(err)
    } else {
        return console.log('imported bulma styles')
    }
})

// fs.copy('./node_modules/@fortawesome/fontawesome-free/css/', './assets/fontawesome/css/', err => {
//     if (err) {
//         return console.error(err)
//     } else {
//         return console.log('imported fontawesome css')
//     }
// })