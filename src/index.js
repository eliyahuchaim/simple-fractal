import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Parse from './helpers/parseCSV';
import Calculator from './helpers/calculator';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<App parseCompany={Parse.fetchCompanyData} parseEngineers={Parse.fetchEngineerData} calculator={Calculator.main} />, document.getElementById('root'));
registerServiceWorker();
