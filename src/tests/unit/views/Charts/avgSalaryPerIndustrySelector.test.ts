import avgSalaryPerIndustry from 'views/Charts/avgSalaryPerIndustrySelector';
import avgSalaryPerIndustryOut from 'tests/static/avgSalarPerIndustryOut.json';

describe('avgSalaryPerIndustry', () => {
  test('It should calculate properly the avarage salary per industry', () => {
    expect(JSON.stringify(avgSalaryPerIndustry())).toStrictEqual(JSON.stringify(avgSalaryPerIndustryOut));
  });
});
