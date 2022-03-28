import {useState} from "react";
import {nanoid} from "nanoid";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = props => {
	const [isEditing, setIsEditing] = useState(false);
	const handleSaveExpenseData = enteredExpenseData => {
		const expenseData = {id: nanoid(), ...enteredExpenseData};
		props.onAddExpense(expenseData);
	};
	const handleEdit = boolean => {
		boolean ? setIsEditing(true) : setIsEditing(false);
	};
	const addExpenseBtn = <button onClick={handleEdit.bind(this, true)}>Add New Expense</button>;
	const expenseForm = <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onCancel={handleEdit.bind(this, false)} />;
	return (
		<>
			<Card className="new-expense">{!isEditing ? addExpenseBtn : expenseForm}</Card>
		</>
	);
};

export default NewExpense;
