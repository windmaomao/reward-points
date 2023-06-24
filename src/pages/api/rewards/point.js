const cutoffs = [100, 50];
const multipliers = [2, 1];

export function point(amount) {
  let total = amount;
  let rewards = 0;
  const n = cutoffs.length;

  for (let i = 0; i < n; i++) {
    if (total > cutoffs[i]) {
      rewards += (total - cutoffs[i]) * multipliers[i];
      total = cutoffs[i];
    }
  }

  return rewards;
}
