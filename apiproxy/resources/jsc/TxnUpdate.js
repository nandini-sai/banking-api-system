 var accountInfo = context.getVariable("accountInfo");
var amount = parseFloat(context.getVariable("apigee.amount"));
var flag = context.getVariable("apigee.accFlag");

var account = JSON.parse(accountInfo);
var message = "";
var status = "";

// Normalize flag to lowercase safely
if (flag) {
    flag = String(flag).toLowerCase();
} else {
    flag = "";
}

// Transaction logic
if (flag === "debit") {
    if (amount > account.balance) {
        message = "Insufficient Balance";
        status = "Transaction Failed";
    } else {
        account.balance = account.balance - amount;
        message = "Amount debited successfully";
        status = "Transaction Successful";
    }
} else if (flag === "credit") {
    account.balance = account.balance + amount;
    message = "Amount credited successfully";
    status = "Transaction Successful";
} else {
    message = "Invalid Transaction Flag";
    status = "Transaction Failed";
}

// Set output variables
context.setVariable("updatedAccount", JSON.stringify(account));
context.setVariable("updatedBalance", account.balance);
context.setVariable("transaction.message", message);
context.setVariable("transaction.status", status);
