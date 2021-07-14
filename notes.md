## Dependencies used

- **dotenv**
  - use to hide important dev data
- **joi**
  - use to vaidate user input's data
- **bcrypt**
  - used for password hashing and comparing
- **jwt**
  - used for user authorization (token)

## Registration flow

- validation: check if user's input data is valid (Joi)
- check is user email already exists
- hash users password (bcrypt)
- add user to database

## Login flow

- validation: check if user's input data is valid (Joi)
- check is user exists (check email)
- check if password is correct (bcrypt)
- create user token (jwt)

## Token Authentication (jwt)

- check if user has a token
- verify token
- if token is verified, assign user id

### _other stuff_

- **private servers:**
  servers accessible only if user is logged in
