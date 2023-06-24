import { reward } from './reward';

const transactions = [
  { user: 'Will', date: '2012-03', amount: 103 },
  { user: 'Will', date: '2012-04', amount: 75 },
  { user: 'Will', date: '2012-05', amount: 175 },
  { user: 'Will', date: '2012-05', amount: 75 },
  { user: 'John', date: '2012-08', amount: 25 },
  { user: 'John', date: '2012-09', amount: 75 },
  { user: 'Maggie', date: '2012-01', amount: 105 },
  { user: 'Maggie', date: '2012-01', amount: 15 },
  { user: 'Maggie', date: '2012-02', amount: 175 },
  { user: 'Maggie', date: '2012-03', amount: 5 },
  { user: 'Smith', date: '2012-03', amount: 8 },
  { user: 'Smith', date: '2012-03', amount: 88 },
  { user: 'Adam', date: '2012-05', amount: 75 },
  { user: 'Adam', date: '2012-05', amount: 25 },
];

export default function handler(req, res) {
  res.status(200).json(reward(transactions));
}
