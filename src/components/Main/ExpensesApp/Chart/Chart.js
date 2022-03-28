import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
	const dataPoints = props.dataPoints;
	const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
	const dataPointsSum = dataPointValues.reduce((prevValue, currValue) => prevValue + currValue);
	const ChartBars = dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} sum={dataPointsSum} />);
	return (
		<>
			<div className="chart" style={props.style} onAnimationEnd={props.onAnimationEnd}>
				{ChartBars}
			</div>
		</>
	);
};

export default Chart;
