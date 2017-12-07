const companyURL = 'http://localhost:8000/companies';
const engineersURL = 'http://localhost:8000/engineers';

export default class Parse {

  static fetchCompanyData(){
    return fetch('http://localhost:8000/companies', {
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        'cache-control': 'no-cache'
      },
    }).then(resp => resp.json()).then(resp => Parse.parseCompanyData(resp))
  };

  static createCompanyObjects(columns, companyData){
    var compObj = {};
    compObj[columns[0]] = parseInt(companyData[0]);
    compObj.fractal_index = parseFloat(companyData[1]);
    return compObj;
  }

  static parseCompanyData(data){
    var companyStore = [];
    data = data.split('\n');
    var columns = data.shift().split(",");

   for (var i = 0; i < data.length; i++) {
     companyStore.push(Parse.createCompanyObjects(columns, data[i].split(",")))
    };
   console.log(companyStore);
   return companyStore;
  };


  static fetchEngineerData(){
    return fetch('http://localhost:8000/engineers', {
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        'cache-control': 'no-cache'
      },
    }).then(resp => resp.json()).then(resp => Parse.parseEngineerData(resp))
  };

  static createEngineerObject(columns, engineer){
    // debugger
    var engineerObj = new Object;
    for (var i = 0; i < columns.length; i++) {
      // debugger
      if (!isNaN(parseInt(engineer[i]))){
        if (i === 4) {
          engineerObj.company_id = parseInt(engineer[i])
        } else {
          engineerObj[columns[i]] = parseInt(engineer[i]);
        }
      } else {
        engineerObj[columns[i]] = engineer[i];
      }
    };
    return engineerObj;
  };

  static parseEngineerData(data){
    // debugger
    data = data.split('\n');
    var columns = data.shift().split(",");
    var engineerStore = [];

    return data.map(engineer => {
      return Parse.createEngineerObject(columns, engineer.split(","))
    })
  };


};
