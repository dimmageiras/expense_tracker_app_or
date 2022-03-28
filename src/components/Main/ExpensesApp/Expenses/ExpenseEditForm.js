import {useState} from "react";
import {yyyymmdd, currentDay} from "../Extras/Dates";
import Card from "../UI/Card";
import "./ExpenseEditForm.css";

const ExpenseEditForm = props => {
	const [item, setItem] = useState({
		id: props.id,
		title: props.title,
		amount: props.amount,
		date: yyyymmdd(props.date),
	});
	const handleChange = event => {
		const {name, value} = event.target;
		setItem(prevItem => ({...prevItem, [name]: value}));
	};
	const handleSubmit = event => {
		event.preventDefault();
		const updatedExpenseData = {...item, amount: +item.amount};
		props.onUpdateExpenseData(updatedExpenseData);
		props.setIsEditable(false);
	};
	const handleFocus = event => {
		event.target.select();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<Card className="expense-edit">
					<div className="expense-edit__date">
						<input type="date" name="date" className="expense-edit__input" onChange={handleChange} onFocus={handleFocus} value={item.date} min="2018-01-01" max={currentDay} required={true} />
					</div>
					<div className="expense-edit__description">
						<input type="text" name="title" className="expense-edit__input" onChange={handleChange} onFocus={handleFocus} value={item.title} required={true} autoFocus={true} />
						<input type="number" name="amount" className="expense-edit__input" onChange={handleChange} onFocus={handleFocus} value={item.amount} min="0.01" step="0.01" required={true} />
					</div>
					{props.children}
				</Card>
			</form>
		</>
	);
};

export default ExpenseEditForm;
