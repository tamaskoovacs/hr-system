import avgSalaryPerExper from 'views/Charts/avgSalaryPerExperSelector';
import avgSalaryPerExperOut from 'tests/static/avgSalaryPerExperOut.json';

describe('avgSalaryPerExp', () => {
  test('It should calculate properly the avarage salary per experience', () => {
    expect(JSON.stringify(avgSalaryPerExper())).toStrictEqual(JSON.stringify(avgSalaryPerExperOut));
  });
});
