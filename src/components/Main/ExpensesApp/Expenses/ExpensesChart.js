import {monthsShort} from "../Extras/Dates";
import Chart from "../Chart/Chart";

const ExpensesChart = props => {
	const chartDataPoints = monthsShort.map(month => {
		return {label: month, value: 0};
	});
	for (const expense of props.expenses) {
		const expenseMonth = new Date(expense.date).getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	}
	return (
		<>
			<Chart dataPoints={chartDataPoints} style={props.style} onAnimationEnd={props.onAnimationEnd} />
		</>
	);
};

export default ExpensesChart;
