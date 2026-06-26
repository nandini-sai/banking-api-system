var flag = context.getVariable("apigee.accFlag");
if(flag && (flag.toLowerCase() === "credit" || flag.toLowerCase() === "debit")){
    context.setVariable("accFlag.valid", "true");
}else{
    context.setVariable("accFlag.valid", "false");
}