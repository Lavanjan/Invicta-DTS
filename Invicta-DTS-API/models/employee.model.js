const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeeId: { type: String, required: true },
    employeeName: { type: String, required: true },
    employeeEmail: { type: String, required: true },
    employeeMobileNumber: { type: String, required: true },
    employeeDepartment: { type: String, required: true}
},{
    timestamps:true,
});

const employees = mongoose.model('employees', employeeSchema);

module.exports = employees;