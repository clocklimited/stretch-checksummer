var crypto = require('crypto')
  , moment = require('moment')

module.exports = function (sharedSecret) {
  function generate(cpn) {
    var checksum = crypto.createHash('sha1')
      , now = moment()
      , toHash = sharedSecret + '$' + cpn + '$' + now.format('YYYYMMDD')

    checksum.update(toHash)
    return checksum.digest('hex')
  }

  return generate
}
