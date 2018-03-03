export default (expenses) => {
   return expenses
            .map((expense) => expense.amount)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };
    