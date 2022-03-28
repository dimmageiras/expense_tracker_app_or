import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {
	const items = props.expenses.map(item => {
		const id = item.id;
		const title = item.title;
		const date = new Date(item.date);
		const amount = item.amount;
		return <ExpenseItem key={id} id={id} title={title} date={date} amount={amount} onEditExpense={props.handleEditExpense} onDeleteExpense={props.handleDeleteExpense} />;
	});
	const noExpenses = <h2 className="expenses-list__fallback">No expenses yet!</h2>;
	const expensesContent = <ul className="expenses-list">{items}</ul>;
	return <>{props.expenses.length !== 0 ? expensesContent : noExpenses}</>;
};

export default ExpensesList;
