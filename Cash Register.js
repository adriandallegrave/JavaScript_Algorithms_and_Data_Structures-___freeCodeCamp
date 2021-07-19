function nextBill(cid, change, currentChange) {
    let value = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
    let result = {newCid: cid, stillDuo: change, newCurrentChange: currentChange};
  
    for (let i = 0; i < value.length; i++) {
        if (change >= value[i] && cid[i][1] > 0) {
            cid[i][1] -= value[i];
            result["newCid"] = cid;
            result["stillDuo"] -= value[i];
            result["newCurrentChange"][i][1] += parseFloat((parseFloat(value[i])).toFixed(3));
            return result;
        }
    }
    
    return false;
}
  
function checkCashRegister(price, cash, cid) {
  
    cid = cid.reverse();
    let change = cash - price;
    let currentChange = [['ONE HUNDRED', 0], ['TWENTY', 0], ['TEN', 0], ['FIVE', 0], ['ONE', 0], ['QUARTER', 0], ['DIME', 0], ['NICKEL', 0], ['PENNY', 0]];
  
    while (change > 0) {
        let step = nextBill(cid, change, currentChange);
        if (!step) {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        cid = step.newCid;
        change = (parseFloat(step.stillDuo)).toFixed(2);
        currentChange = step.newCurrentChange;
    }
  
    for (let i = 0; i < currentChange.length; i++) {
        currentChange[i][1] = (parseFloat(currentChange[i][1])).toFixed(2);
    }
  
    let totalCid = 0;
    for (let i = 0; i < cid.length; i++) { totalCid += cid[i][1] };
    let status = totalCid > 0 ? "OPEN" : "CLOSED";   
  
    if (status == "OPEN") {
        for (let i = 0; i < currentChange.length; i++) {
            if (currentChange[i][1] == 0) {
                currentChange.splice(i, 1);
                i--;
            }
        }
    }
  
    if (status == "CLOSED") {
        currentChange = currentChange.reverse();
    }
  
    for (let i = 0; i < currentChange.length; i++) {
        currentChange[i][1] = parseFloat(currentChange[i][1]);
    }
  
    return {status: status, change: currentChange};
}