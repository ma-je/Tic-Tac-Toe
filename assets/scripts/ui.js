// example from class

'use strict'

const onSuccess = function () {
  console.log('this works')
}
const onError = function (error) {
  console.error(error)
}

module.exports = {
  onSuccess,
  onError
}
