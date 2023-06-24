import { reward } from './reward';

function _t(user, date, amount) {
  return { user, date, amount };
}

describe('reward transactions', () => {
  it('should reward a single transaction', () => {
    const list = reward([_t('a', '01', 51)]);

    // console.log(list);
    // console.log(list[0].dates);
    expect(list[0].rewards).toBe(1);
  });

  it('should reward two transactions', () => {
    const list = reward([
      _t('a', '01', 51),
      _t('a', '01', 51),
    ]);

    expect(list[0].rewards).toBe(2);
  });

  it('should reward two different dates', () => {
    const list = reward([
      _t('a', '01', 120),
      _t('a', '02', 51),
    ]);

    expect(list[0].rewards).toBe(91);
  });
});
