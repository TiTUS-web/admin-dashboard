import Chart from "react-google-charts";
import mockDataPopulation from "../data/mockDataPopulation";

const GeographyChart = () => {
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="650px"
      data={mockDataPopulation}
    />
  );
};

export default GeographyChart;
