package com.cg.department.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.department.entity.Department;
import com.cg.department.repository.DepartmentRepository;

@Service
public class DepartmentService {
@Autowired
private DepartmentRepository dRepository;
	public Department addDepartment(Department department) {
		return dRepository.save(department);
	}
	public List<Department> getAllDepartment() {
		// TODO Auto-generated method stub
		return dRepository.findAll();
	}
	public Department getById(int departmentId) {
		// TODO Auto-generated method stub
		return dRepository.findById(departmentId).orElse(null);
	}
	
}
