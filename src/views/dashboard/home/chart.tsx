import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const chartData = [
  {
    name: 'Jan',
    price: 3200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    price: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    price: 2000,
    pv: 2600,
    amt: 2290,
  },
  {
    name: 'Apr',
    price: 2780,
    pv: 3908,
    amt: 2600,
  },
  {
    name: 'May',
    price: 1890,
    pv: 3800,
    amt: 1600,
  },
  {
    name: 'Jun',
    price: 2390,
    pv: 3200,
    amt: 2500,
  },
  {
    name: 'Jul',
    price: 3490,
    pv: 2600,
    amt: 2100,
  },
  // {
  //   name: 'Aug',
  //   price: 2500,
  //   pv: 1900,
  //   amt: 2100,
  // },
  // {
  //   name: 'Sep',
  //   price: 2800,
  //   pv: 3500,
  //   amt: 2100,
  // },
  // {
  //   name: 'Oct',
  //   price: 2000,
  //   pv: 2100,
  //   amt: 1600,
  // },
  // {
  //   name: 'Nov',
  //   price: 2500,
  //   pv: 2500,
  //   amt: 1600,
  // },
  // {
  //   name: 'Dec',
  //   price: 3900,
  //   pv: 2900,
  // },
];

export function Chart() {
  return (
    <ResponsiveContainer width="100%" height={400} className="mt-6">
      <BarChart width={150} height={40} data={chartData}>
        <XAxis
          dataKey="name"
          fontSize={12}
          stroke="#888888"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tickFormatter={(value) => `$${value}`}
          fontSize={12}
          stroke="#888888"
          tickLine={false}
          axisLine={false}
        />
        <Bar dataKey="price" fill="#21bf73" radius={[4, 4, 0, 0]} />
        <Bar dataKey="pv" fill="#adedc6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
