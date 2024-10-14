package com.kai.spring_react_demo.service;

import com.kai.spring_react_demo.entity.EmployeeEntity;
import com.kai.spring_react_demo.model.Employee;
import com.kai.spring_react_demo.repo.EmployeeRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepo employeeRepo;
    public EmployeeServiceImpl(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        // copy all the value from first parameter to the second
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepo.save(employeeEntity);

        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepo.findAll();

        List<Employee> employees = employeeEntities.stream().map(
                em -> new Employee(
                        em.getId(),
                        em.getFirstname(),
                        em.getLastname(),
                        em.getEmailAddress()
                )
        ).collect(Collectors.toList());

        return employees;
    }
}
