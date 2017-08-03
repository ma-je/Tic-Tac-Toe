const addUser = function (data) {
  return $.ajax({
    url: "http://localhost:4741/sign-up",
    method: 'POST',
    data: {
      "credentials": {
        "email": data.credentials.email,
        "password": data.credentials.password,
        "password_confirmation": data.credentials.password
      }
    }})
}
const logInUser = function (data) {
  return $.ajax({
    url: "http://localhost:4741/sign-up",
    method: 'POST',
    data: {
      "credentials": {
        "email": data.credentials.email,
        "password": data.credentials.password
      }
    }
})
}
// to finish const signout = function (data) {
const logOutUser = function (data) {
  return $.ajax({
    url: "http://localhost:4741/sign-up",
    method: 'POST',
    data: {
      "credentials": {
        "email": data.credentials.email,
        "password": data.credentials.password
      }
    }
  })
}

const newPassword = function() {
  return $.ajax ({
    url:"http://localhost:4741/sign-up",
    method: 'POST',
    data: {
      "credentials": {
        "email": data.credentials.email,
        "password": data.credentials.password
      }
    }
  })
}

module.exports = {
  addUser,
  logInUser,
  logOutUser
}
