import "./ChartBar.css";

const ChartBar = props => {
	const zeroPct = "0%";
	const calcPct = Math.round((props.value * 100) / props.sum) + "%";
	const barFillHeight = !props.value > 0 ? zeroPct : calcPct;
	return (
		<>
			<div className="chart-bar">
				<abbr className="chart-bar__inner" text={barFillHeight + " of the yearly expenses"} tabIndex="0">
					<div className="chart-bar__fill" style={{height: barFillHeight}}></div>
				</abbr>
				<div className="chart-bar__label">{props.label}</div>
			</div>
		</>
	);
};

export default ChartBar;
