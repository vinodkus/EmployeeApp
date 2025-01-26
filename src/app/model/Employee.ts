export class Employee {
    employeeId: number;
    employeeName:string;
    contactNo:string;
    emailId:string;
    deptId: number;
    password:string;
    gender:string;
    role:string;
    createdDate:Date;

    /**
     *
     */
    constructor() {
       this.employeeId=0;
       this.employeeName='';
       this.contactNo='';
       this.emailId='';
       this.deptId=0;
       this.password='';
       this.gender='';
       this.role='';
       this.createdDate=new Date();
        
    }
}  

export interface IparentDept {
    departmentId: number;
    departmentName: string;
    departmentLogo: string;
}

export class IChildDept
{
      childDeptId: number;
      parentDeptId: string;
      departmentName: string;
      /**
       *
       */
      constructor() {
        this.childDeptId=0;
        this.parentDeptId='';
        this.departmentName='';
      }
}

export interface IApiResponse
{
    message:string;
    status:boolean;
    data:any;
}