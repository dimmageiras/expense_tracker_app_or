import "./ExpenseEditControls.css";

const ExpenseEditControls = props => {
	const startEditButton = (
		<button type="button" className="editBtn" onClick={props.setIsEditable.bind(this, true)}>
			Edit
		</button>
	);
	const cancelEditButton = (
		<button type="button" className="cancelBtn" onClick={props.setIsEditable.bind(this, false)}>
			Cancel
		</button>
	);
	const submitButton = <button type="submit" className="submitBtn">Submit</button>;
	const deleteButton = (
		<button type="button" className="deleteBtn" onClick={props.onDeleteExpenseItem.bind(this, props.id)}>
			Delete
		</button>
	);
	return (
		<>
			<div className="expense-edit__controls">
				{!props.isEditable ? (
					<>
						{startEditButton}
						{deleteButton}
					</>
				) : (
					<>
						{submitButton}
						{cancelEditButton}
					</>
				)}
			</div>
		</>
	);
};

export default ExpenseEditControls;
