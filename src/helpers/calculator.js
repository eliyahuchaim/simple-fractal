export default class Calculator {

  static main(companies, engineerID, allEngineers){
      var theEngineer = Calculator.findEngineer(engineerID, allEngineers);
      if (theEngineer) {
        var similarCompanies = Calculator.findSimilarCompany(companies, theEngineer);
        var similarEngineers = Calculator.findSimilarEngineers(similarCompanies, theEngineer, allEngineers);
        var communicationScore = Calculator.calculateCommunicationScore(theEngineer, similarEngineers);
        var codingScore = Calculator.calculateCodingScore(theEngineer, similarEngineers);
        return {communicationPercentile: communicationScore, codingPercentile: codingScore};
      } else {
        return "Engineer Not Found"
      };
  };

  static findEngineer(engineerID, allEngineers){
    return allEngineers.find(engineer => {
      return engineer.candidate_id == engineerID;
    })
  };

  static findSimilarCompany(companies, engineer){
    var theCompany = companies.find(company => company.company_id == engineer.company_id);
    return companies.filter(company => {
      return theCompany.fractal_index - company.fractal_index < 0.15
    })
  };

  static findSimilarEngineers(similarCompanies, engineer, allEngineers){
    var companies_ids = {};
    for (var i = 0; i < similarCompanies.length; i++) {
      companies_ids[similarCompanies[i].company_id] = similarCompanies[i].company_id
    };
    return allEngineers.filter(eng => {
      return !!companies_ids[eng.company_id] && eng.title == engineer.title
    })
  };

  static calculateCommunicationScore(engineer, allEngineers){
    var percentile = 0;
    var lessThan = 0;
    var amountOfEngineers = allEngineers.length;
    for (var i = 0; i < allEngineers.length; i++) {
      if (allEngineers[i].communication_score < engineer.communication_score) {
        lessThan +=1
      };
    };
    percentile = parseInt((100 - (lessThan * 100 / amountOfEngineers)))
    return percentile;
  };

  static calculateCodingScore(engineer, allEngineers){
    var percentile = 0;
    var lessThan = 0;
    var amountOfEngineers = allEngineers.length;
    for (var i = 0; i < allEngineers.length; i++) {
      if (allEngineers[i].coding_score < engineer.coding_score) {
        lessThan +=1
      };
    };
    percentile = parseInt((100 - (lessThan * 100 / amountOfEngineers)))
    return percentile;
  };




};
