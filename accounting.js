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
departmentTable.innerHTML = `
  <thead>
    <tr>
      <th>Department</th>
      <th># of employees</th>
      <th>Total Salary</th>
      <th>Average</th>
    </tr>
  </thead>
  <tbody>
    ${Object.keys(departmentData).map((departmentName) => `
      <tr>
        <td>${departmentName}</td>
        <td>${departmentData[departmentName].count}</td>
        <td>$${departmentData[departmentName].totalSalary.toFixed(2)}</td>
        <td>$${departmentData[departmentName].averageSalary.toFixed(2)}</td>
      </tr>
    `).join('')}
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>${totalData.count}</td>
      <td>$${totalData.totalSalary.toFixed(2)}</td>
      <td>$${totalData.averageSalary.toFixed(2)}</td>
    </tr>
  </tfoot>
`;
document.body.appendChild(departmentTable);