import "./ExpensesFilter.css";

const ExpensesFilter = props => {
	const handleDropDownChange = event => {
		const select = event.target;
		const selectedYear = !isNaN(Number(select.value)) ? Number(select.value) : select.value;
		props.onChangeFilter(selectedYear);
	};
	const dateToYear = date => new Date(date).getFullYear();
	const yearsToShow = [...new Set(props.expenses.map(item => dateToYear(item.date)))];
	const yearOptions = yearsToShow.map(item => (
		<option key={item} value={item}>
			{item}
		</option>
	));
	return (
		<>
			<div className="expenses-filter">
				<div className="expenses-filter__control">
					<label>Filter by year</label>
					<select onChange={handleDropDownChange} value={props.selectedYear}>
						<option value="all">All Years</option>
						{yearOptions}
					</select>
				</div>
			</div>
		</>
	);
};

export default ExpensesFilter;
