// Write your solution in this file!
    const employee = {
        name: "Angel",
        streetAddress: "1 Broadway",
    }

    function updateEmployeeWithKeyAndValue(employee, name, Sam) {
        const newEmployee = {...employee};
        newEmployee[name] = Sam;
        return newEmployee;
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, name, Sam) {
        newEmployee.streetAddress = "12 Broadway" ;
        return newEmployee;
    }

    function deleteFromEmployeeByKey(Sam, name) {
        const employee3 = {...name};
        return employee3;
    }

    function destructivelyDeleteFromEmployeeByKey(employee3, name) {
        delete employee3.name;
        return employee3;
    }