import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8085/api/v1/employees';

export const listEmployees = async ()=>{
    const response = await axios.get(EMPLOYEE_BASE_REST_API_URL);
   
    return response;
};

export const createEmployee = async (employee) => {
    const response = await axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    return response;
}

export const getEmployeeById = async (employeeId) => {
    const response = await axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    return response;
}

export const updateEmployee = async (employeeId, employee) => {
    const response = await axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
    return response;
}

export const deleteEmployee = async (employeeId) => {
    const response = await axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    return response;
}