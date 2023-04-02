# HR-management-system
This is an Employee Management System that allows you to create, store, and display information about employees. The program is written in JavaScript and runs on the browser.

# Chanelog
## Version 1.2.1 - March 27,2023
- Fixed Accounting Page 
## Version 1.2.0 - March 14,2023
- Save all the employees in the Local Storage so when I refresh the page I will not lose my old data.
- Render each department information in a table: Department Name, Number of employees in each department, Average salary of the department, Total salary Where average salary is the summation of salaries for all employees in each department divided by the number of the employees in that, department and total salary is the summation of salaries for all employees in each department.
- Add a table footer which will have the total number of employees, the average salary for all departments and the total salary for all departments, as shown below.
## Version 1.1.1 - March 13,2023
- Rendered all employees in the home page and used flex to orgnize them
- Employess from user input are rendered in home page and saved in local storge
## Version 1.1.0 - March 11,2023
- Add a form with the following fields: Full name, Department with following options: Administration, Marketing, Development, Finance,
Level  with following options: Junior, Mid-Senior, Senior, Image url, and Submit button
- Create a function to generate a unique four digits employee id number.
- Add an event listener to get the data from the form instead of having hard coded data.
- Refactor the render prototype function to render each employee information in a separate card in the home page.
## Version 1.0.0 - March 7,2023
- create a constructor to generate an employee object Employee ID, Full Name, Department, Level, Image URL, Salary.
- Create a prototype function for calculating the salary using the provided table by generating a random number between the minimum and maximum salary for each level, use the below table to calculate the salary depends on the employee level.
- After calculating the random salary it calculates the net salary where the tax percent is 7.5.
# Features
1. Calculate salary depending on employee's level then subtract the tax
2. Render user input employees into home page with the option to upload their image
# How to Use
# Languages Used
- **HTML**
- **CSS**
- **JavasScript**

# Credits
This HR-management-system is developed by **Al-Mothana Al-Masri**