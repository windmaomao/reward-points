import { reward } from './reward';

const transactions = [
  { user: 'John', date: '2012-03', amount: 103 },
  { user: 'John', date: '2012-04', amount: 75 },
  { user: 'John', date: '2012-05', amount: 75 },
  { user: 'John', date: '2012-05', amount: 75 },
  { user: 'John', date: '2012-08', amount: 75 },
  { user: 'John', date: '2012-09', amount: 75 },
  { user: 'Duo', date: '2012-01', amount: 103 },
  { user: 'Duo', date: '2012-01', amount: 75 },
  { user: 'Duo', date: '2012-02', amount: 75 },
  { user: 'Duo', date: '2012-03', amount: 75 },
  { user: 'Duo', date: '2012-05', amount: 75 },
  { user: 'Duo', date: '2012-05', amount: 75 },
];

export default function handler(req, res) {
  res.status(200).json(reward(transactions));
}
