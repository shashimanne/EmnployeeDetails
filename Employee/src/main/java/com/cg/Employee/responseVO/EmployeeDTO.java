package com.cg.Employee.responseVO;

import com.cg.Employee.entity.Employee;

public class EmployeeDTO {
	private Employee employee;
	private Department department;
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	
}
