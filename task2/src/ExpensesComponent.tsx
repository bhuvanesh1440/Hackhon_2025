import React from "react";
import { useState } from "react";
import './Expenses.css'
interface Expense {
  id: string,
  amount: number;
  category: string;
  date: string;
}

export const ExpensesComponent: React.FC = (): JSX.Element => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [currentamount, setcurrentAmount] = useState<number | string>(0);
  const [currentcategory, setcurrentCategory] = useState<string>("");
  const [currentdate, setcurrentDate] = useState<string>("");

  const addExpenses = () => {
    // console.log(currentamount);
    // console.log(currentcategory);
    // console.log(currentdate);

    const data: Expense = {
      amount: parseFloat(currentamount.toString()),
      category: currentcategory,
      date: currentdate,
      id: new Date().toISOString()
    };

    console.log(data.amount);
    console.log(data.category);
    console.log(data.date);

    setExpenses([...expenses, data]);

    setcurrentAmount(0);
    setcurrentCategory("");
    setcurrentDate("");
    console.log(expenses);
  };

  const editExpense = (id: string) => {
    const expenseObj = expenses.filter((exp)=>exp.id === id)[0]
    const newAmount = prompt("Enter the New Amount");

    if (newAmount !== null) {
      const newCategory = prompt("Enter the New Category");
      const newDate = prompt("Enter the New Date");
      expenseObj.amount = parseFloat(newAmount);

      newCategory?expenseObj.category = newCategory:<></>;
      newDate?expenseObj.date = newDate:<></>;

      // expenseObj.category = newCategory;
      setExpenses([...expenses])

      // const newExpense: Expense[] = [...expenses];

      // console.log(newExpense);
      // newExpense[id].amount = parseFloat(newAmount.toString());
      // newCategory ? (newExpense[id].category = newCategory) : <></>;
      // newDate ? (newExpense[id].date = newDate) : <></>;

      // const data: Expense[] = [...expenses];
      // console.log(data);

    }
  };

  // const deleteExpense = (index: number) => {};
  const deleteExpense = (id: string) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      const updatedExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(updatedExpenses);
    }
  }

  return (
    <>
    <h1>Expense Tracker</h1>
    <div className="box">
    <div className="first">
      <label htmlFor="">Amount: <input
        type="text"
        value={currentamount}
        onChange={(e) => setcurrentAmount(e.target.value)}
      /></label>
      
      <label htmlFor="">Category: <input
        type="text"
        value={currentcategory}
        onChange={(e) => setcurrentCategory(e.target.value)}
      /></label>
      
      <label htmlFor="">Date: <input
        type="date"
        value={currentdate}
        onChange={(e) => setcurrentDate(e.target.value)}
      /></label>
      

      <button onClick={addExpenses}>Add</button>
      </div>

      <div>

      <div className="second">
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>
                <button className="edit" onClick={() => editExpense(expense.id)}>Edit</button>
                <button className="delete" onClick={() => deleteExpense(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
    </>
  );
};
