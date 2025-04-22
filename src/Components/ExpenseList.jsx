import React from "react";
import "./ExpenseList.css";
import { v4 as uuidv4 } from "uuid";
export default function ExpenseList({ items }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount </th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((expense) => (
            <tr key={uuidv4()}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
