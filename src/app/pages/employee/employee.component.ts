// import { CommonModule } from '@angular/common'; // Add this import
import { IApiResponse, IparentDept } from '../../model/Employee';
import { MasterService } from './../../services/master.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-employee',
    imports: [],
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  parentDeptList:IparentDept[]=[];
  masterService=inject(MasterService);
  ngOnInit(): void {
    this.getParentDeptList();
  }
  getParentDeptList(){
    this.masterService.getParentDept().subscribe((res:IApiResponse)=>{
      debugger;
      console.log(res.data);
       this.parentDeptList=res.data;
    })
  }

}
