import { BASE_URL } from "../Constants/constants";

// fetchEmployees: Async function to fetch all employees
export async function fetchEmployees() {
  try {
    const res = await fetch(`${BASE_URL}/employees`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

// fetchEmployee: Async function to fetch one employee based on id
export async function fetchEmployee(id) {
  try {
    const res = await fetch(`${BASE_URL}/employees/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

// createEmployee: Async function to create an employee
export async function createEmployee(employeeData) {
  try {
    const res = await fetch(`${BASE_URL}/employees`, {
      method: "POST",
      body: JSON.stringify(employeeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// createEmployee: Async function to create an employee
export async function updateEmployee(employeeData) {
  try {
    const res = await fetch(`${BASE_URL}/employees/${employeeData.id}`, {
      method: "PATCH",
      body: JSON.stringify(employeeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// deleteEmployee: Async function to delete an employee based on id
export async function deleteEmployee(id) {
  try {
    const res = await fetch(`${BASE_URL}/employees/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.error("Error deleting data:", res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}