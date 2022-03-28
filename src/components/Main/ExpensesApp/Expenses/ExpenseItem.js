import {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseEditControls from "./ExpenseEditControls";
import ExpenseEditForm from "./ExpenseEditForm";
import "./ExpenseItem.css";

const ExpenseItem = props => {
	const [isEditing, setIsEditing] = useState(false);
	const handleUpdateExpenseData = updatedExpenseData => props.onEditExpense(props.id, updatedExpenseData);
	const handleDeleteExpense = expenseToDelete => props.onDeleteExpense(expenseToDelete);
	const expenseEditControls = <ExpenseEditControls id={props.id} isEditable={isEditing} setIsEditable={setIsEditing} onDeleteExpenseItem={handleDeleteExpense} />;
	const ifEditable = (
		<ExpenseEditForm id={props.id} title={props.title} date={props.date} amount={props.amount} setIsEditable={setIsEditing} onUpdateExpenseData={handleUpdateExpenseData}>
			{expenseEditControls}
		</ExpenseEditForm>
	);
	const ifNotEditable = (
		<>
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2 className="expense-item__title">{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			{expenseEditControls}
		</>
	);
	return (
		<>
			<li>{!isEditing ? <Card className="expense-item">{ifNotEditable}</Card> : ifEditable}</li>
		</>
	);
};

export default ExpenseItem;
