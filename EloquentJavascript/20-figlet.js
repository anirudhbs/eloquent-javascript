const figlet = require('figlet')
figlet.text('Virtus.pro', function (err, data) {
  if (err) console.error(err)
  else console.log(data)
})
