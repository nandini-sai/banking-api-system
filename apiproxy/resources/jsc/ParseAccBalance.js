 var raw = context.getVariable('accountInfo'); // JSON string from KVM
 var amount=parseFloat(context.getVariable('apigee.amount'));
 var flag=context.getVariable('apigee.accFlag');

function safeParse(s) {
  try { return JSON.parse(s); } catch (e) { return null; }
}

if (!raw) {
  context.setVariable('account.error', 'No data found for the given key');
  context.setVariable('account.exists', false);
} else {
  var obj = safeParse(raw);
  if (!obj) {
    context.setVariable('account.error', 'Stored KVM value is not valid JSON');
    context.setVariable('account.exists', false);
  } else {
    // Normalize keys (support firstname/firstName variants if needed)
    var first = obj.firstname || obj.firstName;
    var last  = obj.lastname  || obj.lastName;
    var cid   = obj.custId    || obj.customerId;
    var bal   = obj.balance;
    
    if(bal<=1000 && flag ==="debit"){
        context.setVariable('accInvalidBalance.valid',false);
    }
    
    else context.setVariable('accInvalidBalance.valid',true);

    context.setVariable('account.exists', true);
    context.setVariable('account.firstname', first);
    context.setVariable('account.lastname',  last);
    context.setVariable('account.custId',    cid);
    context.setVariable('account.balance',   bal);
  }
}

