'use strict';
const retrievedEmployeeArr = localStorage.getItem('employees');
const retrievedEmployeeObj = JSON.parse(retrievedEmployeeArr);

const departmentData = {};
for (const employee of retrievedEmployeeObj) {
    if (!departmentData[employee.department]) {
        departmentData[employee.department] = {
            count: 0,
            totalSalary: 0,
            averageSalary: 0
        };
    }
    departmentData[employee.department].count++;
    departmentData[employee.department].totalSalary += employee.salary;
}
for (const departmentName in departmentData) {
    const department = departmentData[departmentName];
    department.averageSalary = department.totalSalary / department.count;
}
const totalData = {
    count: 0,
    totalSalary: 0,
    averageSalary: 0
};
for (const departmentName in departmentData) {
    const department = departmentData[departmentName];
    totalData.count += department.count;
    totalData.totalSalary += department.totalSalary;
}
totalData.averageSalary = totalData.totalSalary / totalData.count;

const departmentTable = document.createElement('table');

const headerRow = document.createElement('tr');
const departmentHeader = document.createElement('th');
departmentHeader.textContent = 'Department';
const countHeader = document.createElement('th');
countHeader.textContent = '# of employees';
const totalSalaryHeader = document.createElement('th');
totalSalaryHeader.textContent = 'Total Salary';
const averageSalaryHeader = document.createElement('th');
averageSalaryHeader.textContent = 'Average';
headerRow.appendChild(departmentHeader);
headerRow.appendChild(countHeader);
headerRow.appendChild(totalSalaryHeader);
headerRow.appendChild(averageSalaryHeader);
departmentTable.appendChild(headerRow);

const body = document.createElement('tbody');
for (const departmentName in departmentData) {
  const department = departmentData[departmentName];
  const row = document.createElement('tr');
  const departmentCell = document.createElement('td');
  departmentCell.textContent = departmentName;
  const countCell = document.createElement('td');
  countCell.textContent = department.count;
  const totalSalaryCell = document.createElement('td');
  totalSalaryCell.textContent = `$${department.totalSalary.toFixed(2)}`;
  const averageSalaryCell = document.createElement('td');
  averageSalaryCell.textContent = `$${department.averageSalary.toFixed(2)}`;
  row.appendChild(departmentCell);
  row.appendChild(countCell);
  row.appendChild(totalSalaryCell);
  row.appendChild(averageSalaryCell);
  body.appendChild(row);
}
departmentTable.appendChild(body);

const footerRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.textContent = 'Total';
const totalCountCell = document.createElement('td');
totalCountCell.textContent = totalData.count;
const totalSalaryFooterCell = document.createElement('td');
totalSalaryFooterCell.textContent = `$${totalData.totalSalary.toFixed(2)}`;
const averageSalaryFooterCell = document.createElement('td');
averageSalaryFooterCell.textContent = `$${totalData.averageSalary.toFixed(2)}`;
footerRow.appendChild(totalCell);
footerRow.appendChild(totalCountCell);
footerRow.appendChild(totalSalaryFooterCell);
footerRow.appendChild(averageSalaryFooterCell);
departmentTable.appendChild(footerRow);

document.body.appendChild(departmentTable);
