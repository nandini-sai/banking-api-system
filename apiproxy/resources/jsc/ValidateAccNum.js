var accNum = context.getVariable("apigee.accNum");
var flag = context.getVariable("apigee.accFlag");

var accNumIsValid = false;

if (accNum !== null && accNum !== undefined) {
    accNumIsValid = /^[1-9][0-9]{9}$/.test(accNum.toString());
}

context.setVariable("accNum.valid", accNumIsValid);