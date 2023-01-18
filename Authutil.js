const validator = require("validator");

const valdate = ({ name, email, password, username }) => {
  return new Promise((res, rej) => {
    if (!email || !password || !username) rej("missing parameter");

    if (typeof email !== "string") rej("invalid email");
    if (typeof name !== "string") rej("invalid name");
    if (typeof password !== "string") rej("invalid password");
    if (typeof username !== "string") rej("invalid username");

    if (!validator.isEmail(email)) rej("invalid email format");

    if (username.length <= 2 || username.length >= 50)
      rej("length should be between 3 to 20");
    if (password.length < 4 || password.length > 12)
      rej("password length should be between 6 to 12");

    res();
  });
};

module.exports = { valdate };
