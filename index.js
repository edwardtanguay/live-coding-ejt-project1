import * as qfil from './qtools/qfil.js';

const employees = await qfil.getRecordsFromCsvFile('data/employees.csv');

console.log(employees);