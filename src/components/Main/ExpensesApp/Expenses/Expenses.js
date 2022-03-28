import {useState} from "react";
import {useDelayUnmount} from "../Extras/MountUnmount";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const animationTime = 1000;
const mountedStyle = {animation: "showChart " + animationTime + "ms ease-in"};
const unmountedStyle = {animation: "hideChart " + animationTime + "ms ease-out", animationFillMode: "forwards"};

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState("all");
	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};
	const allExpenses = props.items;
	const filteredExpenses = allExpenses.filter(item => new Date(item.date).getFullYear() === filteredYear);
	const expensesToShow = !Number(filteredYear) ? allExpenses : filteredExpenses.length !== 0 ? filteredExpenses : setFilteredYear("all");
	const ifAllYearsAndNoExpenses = filteredYear !== "all" && filteredExpenses.length !== 0 ? true : false;
	const showChart = useDelayUnmount(ifAllYearsAndNoExpenses, animationTime);
	const mountUnmount = ifAllYearsAndNoExpenses ? mountedStyle : unmountedStyle;
	const showHideChart = showChart && <ExpensesChart expenses={filteredExpenses} style={mountUnmount} />;
	return (
		<>
			<Card className="expenses">
				<ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} expenses={allExpenses} />
				{showHideChart}
				<ExpensesList expenses={expensesToShow} handleEditExpense={props.onUpdateExpense} handleDeleteExpense={props.deleteExpense} />
			</Card>
		</>
	);
};

export default Expenses;
