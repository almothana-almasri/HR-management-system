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
    new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/Ghazi-Samer.png"),
    new Employee(1001, "Lana Ali", "Finance", "Senior","./assets/Lana-Ali.png"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","./assets/Tamara-Ayoub.png"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior","./assets/Safi-Walid.png"),
    new Employee(1004, "Omar Zaid", "Development", "Senior","./assets/Omar-Zaid.png"),
    new Employee(1005, "Rana Saleh", "Development", "Junior","./assets/Rana-Saleh.png"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./assets/Hadi-Ahmad.png")
  ]
  Employee.prototype.calculateSalary = function(){
    let min, max
    if (this.level === "Senior") {
        min= 1500
        max= 2000
    } else if (this.level === "Mid-Senior") {
        min=1000
        max=1500
    } else if (this.level === "Junior") {
        min=500
        max=1000
    }
    const randomSalary = Math.floor(Math.random() * (max - min + 1) + min)
    const tax = 0.075
    const netSalary = randomSalary * (1 - tax)
    this.salary = netSalary
  }

  Employee.prototype.render = function(){
    document.write(`<h1>Employee name: ${this.fullName} </h1>`)
    document.write(`<h2>salary = ${this.salary} </h2>`)
}
// employees.forEach(function(Employee) {
//     Employee.calculateSalary()
//     Employee.render()
//   })

/* Events Assigmnent JS */

const generateID = () => {
  let uniqueFourDigitsID = Math.floor(1000 + Math.random() * 9000);
  return uniqueFourDigitsID
}

const form = document.getElementById("form")
form.addEventListener("submit", submitHandler)
const employees2 = []
function submitHandler(event){
  event.preventDefault();
  const fullName = document.getElementById("full-name").value
  const department = document.getElementById("department").value
  const level = document.getElementById("level").value
  const imageUrl = document.getElementById("image-url").value
  const employeeId = generateID();
  const newEmployee = new Employee(employeeId, fullName, department, level, imageUrl);
  newEmployee.calculateSalary();
  employees2.push(newEmployee);
  newEmployee.render2();
  form.reset()
}

Employee.prototype.render2 = function(){
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

  const main = document.getElementById("main")
  main.appendChild(employeeCard);
}

/* Events Assigmnent JS */