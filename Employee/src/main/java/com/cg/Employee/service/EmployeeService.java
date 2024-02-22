package com.cg.Employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.cg.Employee.responseVO.*;
import com.cg.Employee.responseVO.Department;
import com.cg.Employee.entity.Employee;
import com.cg.Employee.repository.EmployeeRepository;
@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository emRepository;
	@Autowired
	private RestTemplate resttemplate;
	
	public Employee addEmployee(Employee employee) {
		return emRepository.save(employee);
	}

	public List<Employee> getAllEmployee() {
		return emRepository.findAll();
	}

	public EmployeeDTO getByEmployeeId(int EmployeeId) {
		Employee employee=emRepository.findById(EmployeeId).orElse(null);
		int deptId=employee.getDepartmentId();
	Department department=resttemplate.getForObject("http://localhost:9090/department/"+deptId, Department.class);		
		EmployeeDTO dto= new EmployeeDTO();
		dto.setEmployee(employee);
		dto.setDepartment(department);
		return dto;
	}

}

