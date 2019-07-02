const fs = require('fs')
const mkdirp = require('mkdirp')
const axios = require('axios')

let url = 'https://www.imctex.com/wp-json/wp/v2/posts'

axios.get(url)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })