import React, { useState } from "react";
import { uniqueId } from "../Utils";
import "../Components/TransactionForm.css"


function TransactionForm({ onNewTransaction }) {
  const [nameValue, setNameValue] = useState("");
  const [amounValue, setAmountValue] = useState("");

  const addTransaction = (type, evt) => {
    evt.preventDefault();
    const data = {
      id: uniqueId(),
      name: nameValue,
      amount: parseInt(amounValue),
      type: type,
    };
    onNewTransaction(data);
    setNameValue("");
    setAmountValue("");
  };
  return (
    <div>
      <h2>Add New Transactions</h2>
      <form className="transaction-form" >
        <label>
          Name
          <div>
            <input id="newTransInput" type="text" value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}/>
          </div>
        </label>
        <label>
          Amount
          <div>
            <input
              type="number" value={amounValue}
              onChange={(e) => setAmountValue(e.target.value)}/>
          </div>
        </label>
        <div>
          <button className="incomeBtn" onClick={(e) => addTransaction("income", e)}>Add Income</button>
          <button className="expenseBtn" onClick={(e) => addTransaction("expense", e)}>Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
