const transactions = [
  { user: 'John', date: '2012-3-1', amount: 103 },
  { user: 'John', date: '2012-3-1', amount: 99 }
];

export default function handler(req, res) {
  res.status(200).json([
    { user: 'John', total: 345, months: [24, 45, 89] },
    { user: 'Duo', total: 345, months: [24, 45, 89] }
  ]);
}
