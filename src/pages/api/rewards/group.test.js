import { group } from './group';

function _t(user, date, amount) {
  return { user, date, amount };
}

describe('group transactions', () => {
  it('should group by users', () => {
    const list = group([
      _t('a', '01', 1),
      _t('b', '02', 5),
    ]);

    // console.log(list);
    expect(list).toHaveLength(2);
  });

  it('should sort user groups', () => {
    const list = group([
      _t('b', '01', 1),
      _t('a', '02', 5),
    ]);

    expect(list[0].user).toBe('a');
  });

  it('should group by a user and dates', () => {
    const list = group([
      _t('a', '01', 1),
      _t('a', '02', 5),
    ]);

    // console.log(list[0]);
    expect(list).toHaveLength(1);
    expect(list[0].dates).toHaveLength(2);
  });

  it('should sort a user dates', () => {
    const list = group([
      _t('a', '02', 1),
      _t('a', '01', 5),
    ]);

    expect(list).toHaveLength(1);
    expect(list[0].dates[0].date).toBe('01');
  });

  it('should group by a user and a date', () => {
    const list = group([
      _t('a', '02', 1),
      _t('a', '01', 5),
      _t('a', '02', 3),
    ]);

    // console.log(list[0].dates[1]);
    expect(list).toHaveLength(1);
    expect(list[0].dates[1].amounts).toHaveLength(2);
  });
});
