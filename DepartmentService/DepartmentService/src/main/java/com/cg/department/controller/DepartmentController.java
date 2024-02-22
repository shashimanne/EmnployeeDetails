package com.cg.department.controller;

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

import com.cg.department.entity.Department;
import com.cg.department.service.DepartmentService;

//@CrossOrigin("*")
@RestController
@RequestMapping("/department")
public class DepartmentController {
	@Autowired

	private DepartmentService deservice;
@PostMapping("/")
public Department addDepartment(@RequestBody Department department) {
	return deservice.addDepartment(department);
}
@GetMapping("/")
public List<Department> getAllDepartment(){
	return  deservice.getAllDepartment();
}

    
@GetMapping("/{departmentId}")
public  ResponseEntity<Department> getByDepartmentId(@PathVariable("departmentId")int departmentId) {
	return new ResponseEntity<Department>  (deservice.getById(departmentId),HttpStatus.OK);
}

}  