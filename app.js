'use strict'

function Employee(employeeId, fullName, department, level, imageUrl, ) {
    this.employeeId = employeeId
    this.fullName = fullName
    this.department = department
    this.level = level
    this.imageUrl = imageUrl
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
employees.forEach(function(Employee) {
    Employee.calculateSalary()
    Employee.render()
  })