 var account = {
    custId:context.getVariable("apigee.custId"),
    firstname:context.getVariable("apigee.firstname"),
    lastname:context.getVariable("apigee.lastname"),
    balance:context.getVariable("apigee.balance")
};

var balance=parseFloat(context.getVariable("apigee.balance"));

if (balance<1000) {
    context.setVariable("lowBalance",true);
}
var accNum = context.getVariable("apigee.accNum");

context.setVariable("newAccount", JSON.stringify(account));