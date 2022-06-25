import avgYearPerIndustryOut from 'tests/static/avgYearPerIndustryOut.json';
import avgYearPerIndustry from 'views/Charts/avgYearPerIndustry';

describe('avgYearPerIndustry', () => {
  test('It should calculate properly the avarage year per industry', () => {
    expect(JSON.stringify(avgYearPerIndustry())).toStrictEqual(JSON.stringify(avgYearPerIndustryOut));
  });
});
