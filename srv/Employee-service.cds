using btp.emp as emp from '../db/data.model';

service EmployeeService {
    entity Emp as select from emp.EMP;
}