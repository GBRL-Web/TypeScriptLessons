//in development.

function money(inputAmount: number) {
  let amount: number = inputAmount;
  let moneyChanged: { [key: string]: any} = {};
  let billsToReturn: Array<number> = [];
  const moneyBills: number[] = [500, 200, 20, 10, 5, 2, 0.5, 0.02, 0.01];

  while (amount > 0) {
    for (let bill of moneyBills) {
      if (bill <= amount) {
        amount = amount - bill;
        amount = Math.round(amount * 100) / 100;
        billsToReturn.push(bill);
        break;
      }
    }
  }

  for (const element of billsToReturn) {
    moneyChanged[element] = moneyChanged[element] ? moneyChanged[element] + 1 : 1;
  }
  console.log(`For $${inputAmount} :`);
  for (const [key, value] of Object.entries(moneyChanged)) {
    console.log(`$${key} x ${value}`);
  }
}

money(3200);
