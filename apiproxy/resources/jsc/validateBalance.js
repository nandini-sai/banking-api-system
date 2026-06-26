var accBalance = context.getVariable("apigee.accBalance");
if (accBalance && /^[0-9]+$/.test(accBalance)) {
    context.setVariable("accBalance.valid", true);
}else{
    context.setVariable("accBalance.valid", false);
}