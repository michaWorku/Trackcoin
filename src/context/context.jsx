import React, { useState, createContext, useReducer, useContext } from "react";
import contextReducer from "./contextReducer";
import formatDate from "../utils/formatDate";

const initialTransaction =
  JSON.parse(localStorage.getItem("transactions")) || [];

const initialFormData = {
  id: "",
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};
const ExpenseTrackerContext = createContext(initialTransaction);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(
    contextReducer,
    initialTransaction
  );
  const [formData, setFormData] = useState(initialFormData);

  const [snackPack, setSnackPack] = useState([]);

  const init = () => {
    setFormData(initialFormData);
    setSnackPack([]);
  };

  const editTransaction = (id) => {
    const selected = transactions.filter(
      (transaction) => transaction.id === id
    )[0];

    setFormData({ ...selected, id });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        initialFormData,
        formData,
        setFormData,
        transactions,
        addTransaction,
        editTransaction,
        deleteTransaction,
        balance,
        snackPack,
        setSnackPack,
        init,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export const useGlobalContext = () => useContext(ExpenseTrackerContext);
