import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Parse from './helpers/parseCSV';

ReactDOM.render(<App parseCompany={Parse.fetchCompanyData} parseEngineers={Parse.fetchEngineerData} />, document.getElementById('root'));
registerServiceWorker();
