const app = require('./app.js')
// to sign up
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
// to log in
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
// to request logout
const logOut = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}
// change password
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
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

//
//   })
// }
//
// // index - get games associated with user
// const index = function () {
//   return $.ajax({
//     url: app.host + '/users',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=$TOKEN'
//     }
//   })

module.exports = {
  addUser,
  logInUser,
  logOut,
  passwordChange,
  createGame
}
