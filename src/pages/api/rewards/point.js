export function point(amount) {
  let total = amount;
  let rewards = 0;

  if (total > 100) {
    rewards += (total - 100) * 2;
    total = 100;
  }

  if (total > 50) {
    rewards += (total - 50) * 1;
  }

  return rewards;
}
