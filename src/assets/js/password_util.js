var crypto = require('crypto-js');
function decoder() { }

var getRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') //convert to hexa format
        .slice(0, length); //return requred number of charecters
};

var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt); //Use SHA512
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
};

var util = new decoder();


decoder.prototype.saltHashPassword = function (userPassword) {
    var salt = getRandomString(16); //Generate Randon String
    var passwordData = sha512(userPassword, salt);
    return passwordData;
}

decoder.prototype.checkHashPassword = function (userPassword, salt) {
    var passwordData = sha512(userPassword, salt);
    return passwordData;
}

export { util };




