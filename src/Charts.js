import { VictoryChart, VictoryAxis, VictoryBar, VictoryPie } from 'victory';

export default function Charts() {
  const chartData = [
    { quarter: 1, units: 323405 },
    { quarter: 2, units: 678910 },
    { quarter: 3, units: 714111 },
    { quarter: 4, units: 461192 }
  ];

  return (<div style={{ width: '55%' }}>
    <VictoryChart domainPadding={25}>
      <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']} />
      <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
      <VictoryBar data={chartData} x='quarter' y='units' />
    </VictoryChart>
    <VictoryPie data={chartData} x='quarter' y='units' />
  </div>);
}