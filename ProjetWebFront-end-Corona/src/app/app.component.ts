import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalModel } from './models/global.model';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  reservationForm:FormGroup;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){
    this.initForm();


  }
  initForm(){
   this.reservationForm=this.formBuilder.group(
    {  nomUser:'',
nomLab:'' ,
dateRes:'',
       heure:''
      }

    );
  }
  title = 'siteCoronaFrontend';
  onSubmitForm(){
    console.log(this.reservationForm.value);
  }

////////////////

}
