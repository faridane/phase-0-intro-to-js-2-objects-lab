const employee = {
    name:"",
    streetAddress:"",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key]=value;
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key,value){
    const newEmployee = {...employee};
    newEmployee[key]=value;
    delete newEmployee.value;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    const newEmployee = employee;
    newEmployee[key]=value;
    delete newEmployee.value;
    return newEmployee;
}

