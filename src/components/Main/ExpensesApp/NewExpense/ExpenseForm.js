import {useState} from "react";
import {currentDay} from "../Extras/Dates";
import "./ExpenseForm.css";

const ExpenseForm = props => {
	const [userInput, setUserInput] = useState({title: "", amount: "", date: ""});
	const handleChange = event => {
		const input = event.target;
		const {name, value} = input;
		setUserInput(prevInput => ({...prevInput, [name]: value}));
	};
	const cancelEdit = () => props.onCancel();
	const handleSubmit = event => {
		event.preventDefault();
		const expenseData = {...userInput, amount: +userInput.amount};
		props.onSaveExpenseData(expenseData);
		setUserInput({title: "", amount: "", date: ""});
		cancelEdit();
	};
	return (
		<>
			<form onSubmit={handleSubmit} style={props.style}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input type="text" name="title" onChange={handleChange} value={userInput.title} required={true} autoFocus={true} />
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input type="number" name="amount" onChange={handleChange} value={userInput.amount} min="0.01" step="0.01" required={true} />
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input type="date" name="date" onChange={handleChange} value={userInput.date} min="2018-01-01" max={currentDay} required={true} />
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="button" onClick={cancelEdit}>
						Cancel
					</button>
					<button type="submit">Add Expense</button>
				</div>
			</form>
		</>
	);
};

export default ExpenseForm;
