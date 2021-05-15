import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  constructor(public crudApi: UserService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router) { }

  ngOnInit() {
  
   
    this.infoForm();
   }

  
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        //id: null,
        username: ['', [Validators.required, Validators.minLength(3)]],
        role: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        pwdd: ['', [Validators.required, Validators.minLength(4)]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
    const val = this.crudApi.dataForm.value;
    if (val.password == val.pwdd)
    {
      if (this.crudApi.choixmenu == "A")
      {
        this.addData();
      }
      else
      {
       this.updateData()
      }
    }
    else
    {
      this.toastr.warning( 'Vérifiez votre mot de passe ...');  
    }
}
  
   

addData() {
  this.crudApi.createData(this.crudApi.dataForm.value).
  subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success'); 
    this.submitted = true;
    const val = this.crudApi.dataForm.value;
    if (val.role =="Admin" )
    {
   
  
     this.router.navigate(['/adminBoard']);
 }
 else
 {
   
   this.router.navigate(['/userBoard']);
 }
    //this.router.navigate(['/login']);
  });
}
  updateData()
  {
  
    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
      this.toastr.success( 'Modification Faite avec Success');

      this.router.navigate(['/login']);
    });
  }


}