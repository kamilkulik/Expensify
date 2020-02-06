const expensesTotal = (expensesArray) => {
  return expensesArray
  .map(cur => cur.amount)
  .reduce((acc, cur) => acc + cur, 0)
};

export default expensesTotal;