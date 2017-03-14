var crypto = require('crypto')
  , moment = require('moment')

module.exports = function (sharedSecret) {
  function generate(cpn, dateFormat) {
    var checksum = crypto.createHash('sha1')
      , now = moment()
      , toHash = sharedSecret + '$' + cpn + '$' + now.format(dateFormat || 'YYYYMMDD')

    checksum.update(toHash)
    return checksum.digest('hex')
  }

  return generate
}
