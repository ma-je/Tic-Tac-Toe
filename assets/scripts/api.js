const app = require('./app.js')

const addUser = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }})
}
const logInUser = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}
// to finish const signout = function (data) {
const logOut = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const passwordChange = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}
// connect with API for new games
const createGame = function () {
  // console.log("Let's get started")
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    success: function (response) {
      console.log(response)
    }

  })
}
module.exports = {
  addUser,
  logInUser,
  logOut,
  passwordChange,
  createGame
}
