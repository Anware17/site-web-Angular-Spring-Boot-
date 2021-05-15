import { Component, OnInit } from '@angular/core';
import {Laboratoire} from '../laboratoire';
import { LaboratoireService } from '../services/laboratoire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-laboratoire',
  templateUrl: './create-laboratoire.component.html',
  styleUrls: ['./create-laboratoire.component.css']
})
export class CreateLaboratoireComponent implements OnInit {

  constructor(private labService: LaboratoireService,
    private router: Router) { }

  ngOnInit(): void {
  }
  lab: Laboratoire = new Laboratoire();
  isOk = false ;

  saveLab(){
    this.labService.createLaboratoire(this.lab).subscribe( data =>{
      console.log(data);
      this.isOk = true ;
      this.goToLabList();
    },
    error => console.log(error));
  }

  goToLabList(){
    this.router.navigate(['/laboratoires']);
  }
  
  onSubmit(){
    console.log(this.lab);
    this.saveLab();
  }

}
