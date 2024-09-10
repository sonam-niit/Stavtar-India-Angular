"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
    Employee.prototype.display = function () {
        console.log("Employee Id: ".concat(this.empId));
        console.log("Employee Name: ".concat(this.empName));
    };
    return Employee;
}());
exports.Employee = Employee;
