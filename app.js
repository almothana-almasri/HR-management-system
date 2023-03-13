'use strict'

function Employee(employeeId, fullName, department, level, imageUrl) {
  this.employeeId = employeeId
  this.fullName = fullName
  this.department = department
  this.level = level
  this.imageUrl = imageUrl
  this.salary = this.calculateSalary
}
const employees = [
  new Employee(1000, "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg"),
  new Employee(1001, "Lana Ali", "Finance", "Senior", "assets/Lana.jpg"),
  new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg"),
  new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg"),
  new Employee(1004, "Omar Zaid", "Development", "Senior", "assets/Omar.jpg"),
  new Employee(1005, "Rana Saleh", "Development", "Junior", "assets/Rana.jpg"),
  new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg")
]
Employee.prototype.calculateSalary = function () {
  let min, max
  if (this.level === "Senior") {
    min = 1500
    max = 2000
  } else if (this.level === "Mid-Senior") {
    min = 1000
    max = 1500
  } else if (this.level === "Junior") {
    min = 500
    max = 1000
  }
  const randomSalary = Math.floor(Math.random() * (max - min + 1) + min)
  const tax = 0.075
  const netSalary = randomSalary * (1 - tax)
  this.salary = netSalary
}

Employee.prototype.render = function () {
  document.write(`<h1>Employee name: ${this.fullName} </h1>`)
  document.write(`<h2>salary = ${this.salary} </h2>`)
}


/* Events Assigmnent JS */

const generateID = () => {
  let uniqueFourDigitsID = Math.floor(1000 + Math.random() * 9000);
  return uniqueFourDigitsID
}

const form = document.getElementById("form")
form.addEventListener("submit", submitHandler)
let employees2 = []

function submitHandler(event) {
  event.preventDefault();
  console.log(event);
  const fullName = document.getElementById("full-name").value
  const department = document.getElementById("department").value
  const level = document.getElementById("level").value
  const imageUrl = document.getElementById("image-url").value
  const employeeId = generateID();
  const newEmployee = new Employee(employeeId, fullName, department, level, imageUrl);
  newEmployee.calculateSalary();
  employees2.push(newEmployee);
  // saveEmployeesToLocalStorage(employees2); // Local Storage Lab09 //
  newEmployee.render2();
  form.reset()
  saveData(employees2)
}


const employeeList = document.createElement("div");
employeeList.classList.add("employee-list");
const main = document.getElementById("main");


Employee.prototype.render2 = function () {
  const employeeCard = document.createElement("div");
  employeeCard.classList.add("employee-card");

  const image = document.createElement("img");
  image.setAttribute("src", this.imageUrl);

  const fullName = document.createElement("h3");
  fullName.textContent = this.fullName;

  const department = document.createElement("p");
  department.textContent = `Department: ${this.department}`;

  const level = document.createElement("p");
  level.textContent = `Level: ${this.level}`;

  const salary = document.createElement("p");
  salary.textContent = `Salary: $${this.salary}`;

  const employeeId = document.createElement("p");
  employeeId.textContent = `ID: ${this.employeeId}`;

  employeeCard.appendChild(image);
  employeeCard.appendChild(fullName);
  employeeCard.appendChild(department);
  employeeCard.appendChild(level);
  employeeCard.appendChild(salary);
  employeeCard.appendChild(employeeId);
  employeeList.appendChild(employeeCard);
  main.appendChild(employeeList);
}
employees.forEach(function (Employee) {
  Employee.calculateSalary();
  Employee.render2();
})
/* Events Assigmnent JS */
// Local Storage Lab09 //
function saveData(data) {
  let stringArr = JSON.stringify(data);
  localStorage.setItem('employees2Storage', stringArr);
}
let employees2StorageArr = []
function getData() {
  let retrievedArr = localStorage.getItem('employees2Storage');
  employees2StorageArr = JSON.parse(retrievedArr);
}
getData();
if (employees2StorageArr != null) {
  for (let i = 0; i < employees2StorageArr.length; i++) {
    new Employee(employees2StorageArr[i].employeeId, employees2StorageArr[i].fullName, employees2StorageArr[i].department, employees2StorageArr[i].level, employees2StorageArr[i].imageUrl)

    const employeeCard = document.createElement("div");
    employeeCard.classList.add("employee-card");

    const image = document.createElement("img");
    image.setAttribute("src", employees2StorageArr.imageUrl);

    const fullName = document.createElement("h3");
    fullName.textContent = employees2StorageArr.fullName;

    const department = document.createElement("p");
    department.textContent = `Department: ${employees2StorageArr.department}`;

    const level = document.createElement("p");
    level.textContent = `Level: ${employees2StorageArr.level}`;

    const salary = document.createElement("p");
    salary.textContent = `Salary: $${employees2StorageArr.salary}`;

    const employeeId = document.createElement("p");
    employeeId.textContent = `ID: ${employees2StorageArr.employeeId}`;

    employeeCard.appendChild(image);
    employeeCard.appendChild(fullName);
    employeeCard.appendChild(department);
    employeeCard.appendChild(level);
    employeeCard.appendChild(salary);
    employeeCard.appendChild(employeeId);
    employeeList.appendChild(employeeCard);
    main.appendChild(employeeList);
  }
}