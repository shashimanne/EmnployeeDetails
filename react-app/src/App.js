import logo from './logo.svg';
import './App.css';
import { Employee } from './components/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Naviagtions } from './components/navigations';
import { Department } from './components/Department';
import { AddDepartment} from './components/AddDepartment';
import { EmployeeService } from './components/EmployeeService';
import { AddEmployees } from './components/AddEmployees';
import { EmpDetails } from './components/EmpDetails';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      { <Naviagtions></Naviagtions> }
      <Routes>
      <Route path="employees" element={<Employee />}></Route>
      <Route path="department" element={<Department/>}></Route>
      <Route path="getEmployee/:id" element={<EmpDetails/>}></Route>

      <Route path="employeeService" element={<EmployeeService />}></Route>

      <Route path="addDepartment" element={<AddDepartment/>}></Route>
      <Route path="addEmployee" element={<AddEmployees/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
