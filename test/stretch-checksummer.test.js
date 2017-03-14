var randKey = '123456789'
  , stretchChecksummer = require('../stretch-checksummer')(randKey)
  , sinon = require('sinon')

require('should')

before(function() {
  sinon.useFakeTimers(1391526389000)
})

describe('stretch checksummer', function () {

  it('should return correct checksum when given a valid CPN', function () {
    var checksum = stretchChecksummer('112233445566')

    checksum.length.should.equal(40)
    checksum.should.equal('4cde938aeaef57eaafc80b76e31151fbe1cf9adf')
  })

  it('should allow the date format to be passed as an argument', function () {
    var checksum = stretchChecksummer('112233445566', 'YYYY-MM-DD mm:ss')

    checksum.length.should.equal(40)
    checksum.should.equal('46d6df8844afc9bf0b1e3d8ee94e79d65e34d5ba')
  })
})
