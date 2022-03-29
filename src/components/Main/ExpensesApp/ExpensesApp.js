import {useState} from "react";
import SecureLS from "secure-ls";
import NewExpense from "./NewExpense/NewExpense";
import Expenses from "./Expenses/Expenses";
import "./ExpensesApp.css";

const ls = new SecureLS({encodingType: "aes"});
localStorage.setItem("a message", "Your expenses database is being encrypted!");
!localStorage.getItem("expenses") && ls.set("expenses", JSON.stringify([]));
const parseData = JSON.parse(ls.get("expenses"));
const saveToLocalStorage = data => ls.set("expenses", JSON.stringify(data));

const ExpensesApp = () => {
	const [expenses, setExpenses] = useState(parseData);
	const handleAddExpense = newExpense => {
		setExpenses(prevExpenses => {
			const sortExpensesByDate = [newExpense, ...prevExpenses].sort((a, b) => new Date(b.date) - new Date(a.date));
			saveToLocalStorage(sortExpensesByDate);
			return sortExpensesByDate;
		});
	};
	const handleUpdateExpense = (expenseID, expense) => {
		const items = [...expenses];
		const expenseToUpdate = expenses.findIndex(expense => expense.id === expenseID);
		items[expenseToUpdate] = expense;
		const sortExpensesByDate = items.sort((a, b) => new Date(b.date) - new Date(a.date));
		saveToLocalStorage(sortExpensesByDate);
		setExpenses(sortExpensesByDate);
	};
	const deleteExpense = expenseID => {
		setExpenses(prevExpenses => {
			const removeExpense = prevExpenses.filter(expense => expense.id !== expenseID);
			saveToLocalStorage(removeExpense);
			return removeExpense;
		});
	};
	return (
		<>
			<NewExpense onAddExpense={handleAddExpense} />
			<Expenses items={expenses} onUpdateExpense={handleUpdateExpense} deleteExpense={deleteExpense} />
		</>
	);
};

export default ExpensesApp;
