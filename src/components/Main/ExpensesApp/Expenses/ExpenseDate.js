import {dd, shortMonth, yyyy} from "../Extras/Dates"; 
import "./ExpenseDate.css";

const ExpenseDate = props => {
	const month = shortMonth(props.date);
	const day = dd(props.date);
	const year = yyyy(props.date);
	return (
		<>
			<div className="expense-date">
				<div className="expense-date__month">{month}</div>
				<div className="expense-date__year">{year}</div>
				<div className="expense-date__day">{day}</div>
			</div>
		</>
	);
};

export default ExpenseDate;
