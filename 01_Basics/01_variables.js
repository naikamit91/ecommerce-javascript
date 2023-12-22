const accountId = 144553
let accountEmail = "amit@xyz.com"
var accountPassword ="12345"
accountCity = "Jaipur"

// accountId = 2 -- not allowed
console.log(accountId);

accountEmail ="123@gmail.com"
accountPassword ="54321"
accountCity ="Banglore"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
