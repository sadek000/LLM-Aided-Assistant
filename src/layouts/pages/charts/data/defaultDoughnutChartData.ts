// types
interface Types {
  labels: any;
  datasets: any;
}

const defaultDoughnutChartData: Types = {
  labels: ["ALDR Tech", "Github", "Bootsnipp", "Dev.to", "Codeinwp"],
  datasets: {
    label: "Projects",
    backgroundColors: ["info", "dark", "error", "secondary", "primary"],
    data: [15, 20, 12, 60, 20],
  },
};

export default defaultDoughnutChartData;
