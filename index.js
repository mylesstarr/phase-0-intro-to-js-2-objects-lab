const employee = {name: 'name', address: 'address'}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const updateEmployeeWithKeyAndValue = { ... object }
    updateEmployeeWithKeyAndValue[key] = value;
    return updateEmployeeWithKeyAndValue
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
};

function deleteFromEmployeeByKey(employee, key) {
    const upddatedEmployeeWithoutKey = { ... employee}
    delete upddatedEmployeeWithoutKey[key]
    return upddatedEmployeeWithoutKey
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}