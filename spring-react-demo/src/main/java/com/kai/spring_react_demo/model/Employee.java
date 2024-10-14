package com.kai.spring_react_demo.model;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    private Long id;
    private String firstname;
    private String lastname;

    @Column(unique = true)
    private String emailAddress;
}
