import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laboratoire } from '../laboratoire';
import { LaboratoireService } from '../services/laboratoire.service';
@Component({
  selector: 'app-update-laboratoire',
  templateUrl: './update-laboratoire.component.html',
  styleUrls: ['./update-laboratoire.component.css']
})
export class UpdateLaboratoireComponent implements OnInit {
  id: number;
  isOk = false ;
  laboratoire: Laboratoire = new Laboratoire();
  constructor(private laboService: LaboratoireService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.laboService.getLaboratoireById(this.id).subscribe(data => {
      this.laboratoire = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.laboService.updateLaboratoire(this.id, this.laboratoire).subscribe( data =>{
      
      this.goToLaboratoiresList();
      this.isOk=true ;
    }
    , error => console.log(error));
  }

  goToLaboratoiresList(){
    this.router.navigate(['/laboratoires']);
  }

}
