package com.kai.spring_react_demo.service;

import com.kai.spring_react_demo.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();
}
