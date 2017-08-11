// example from class

'use strict'
const app = require('./app.js')

const onSuccess = function () {
  console.log('this works')
}
const onError = function (error) {
  console.error(error)
}
const signInSuccess = function (data) {
  console.log('signed in')
  app.user = data.user
}

const resetSuccess = function () {
  console.log(' password changed successfully')
}
module.exports = {
  onSuccess,
  onError,
  signInSuccess,
  resetSuccess
}
