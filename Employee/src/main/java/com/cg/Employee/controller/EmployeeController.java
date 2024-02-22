package com.cg.Employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.Employee.entity.Employee;
import com.cg.Employee.responseVO.EmployeeDTO;
import com.cg.Employee.service.EmployeeService;
//@CrossOrigin("*")

@RestController
@RequestMapping("/employee")
public class EmployeeController {
		@Autowired
	
		private EmployeeService emservice;
	@PostMapping("/")
	public Employee addEmployee(@RequestBody Employee employee) {
		return emservice.addEmployee(employee);

}

@GetMapping("/")
public List<Employee> getAllEmployee(){
	return  emservice.getAllEmployee();
}

/*@GetMapping("/{employeeId}")
public  ResponseEntity<Employee> getByEmployeeId(@PathVariable("employeeId")int employeeId) {
	return new ResponseEntity<Employee>( emservice.getById(employeeId),HttpStatus.OK);
}*/
@GetMapping("/{EmployeeId}")
public ResponseEntity<EmployeeDTO>  getByEmployeeAndDepartment(@PathVariable("EmployeeId")int EmployeeId) {
	return new ResponseEntity<EmployeeDTO> (emservice.getByEmployeeId(EmployeeId),HttpStatus.OK);
}
	}
