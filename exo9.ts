//in development.

function money(inputAmount: number) {
  const moneyBills: Array<number> = [
    500, 200, 20, 10, 5, 2, 0.5, 0.02, 0.01
  ];
  let amount: number = inputAmount; // copy string
  let coinsToReturn: Array<number> = []; // create coins to return array
  // loop through as long as the amount is bigger than 0
  while (amount > 0) {
    // loop through the coins array
    for (let coin of moneyBills) {
      // if the current coin from the coins array is smaller or as large as the amount
      if (coin <= amount) {
        amount = amount - coin; // substract coin from amount
        amount = Math.round(amount * 100) / 100; // round to the second decimal // why round? that's why: https://javascript.info/number#imprecise-calculations // alternative and more elegant solution +amount.toFixed(2);
        coinsToReturn.push(coin); // push the coin to the return array
        break;
      }
    }
  }
  interface Counts {
    500: number;
    200: number;
    20: number;
    10: number;
    5: number;
    2: number;
    0.5: number;
    0.02: number;
    0.01: number;

  };
  let countx: Counts = {
    500: 0,
    200: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    0.5: 0,
    0.02: 0,
    0.01: 0,

  }
  for (let num of coinsToReturn) {
    {
      countx[Number(num)] = countx[num] ? countx[num] + 1 : 1;
    }
    for (let i = 0; i < moneyBills.length; i++) {
        console.log(moneyBills[i] +" x "+ countx[moneyBills[i]]);
    }
  }
}

money(1245213.43);