import { Component, OnInit } from '@angular/core';
import { Laboratoire } from '../laboratoire';
import { LaboratoireService } from '../services/laboratoire.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-laboratoire',
  templateUrl: './list-laboratoire.component.html',
  styleUrls: ['./list-laboratoire.component.css']
})
export class ListLaboratoireComponent implements OnInit {
  laboratoires: Laboratoire[];
  constructor(private laboService: LaboratoireService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.getLaboratoires();
  }
  private getLaboratoires(){
    this.laboService.getLaboratoiresList().subscribe(data => {
      this.laboratoires = data;
    });
  }

  laboDetails(id: number){
    this.router.navigate(['laboratoires-details', id]);
  }

  updateLaboratoire(id: number){
    this.router.navigate(['laboratoire', id]);
  }

  deleteLaboratoire(id: number){
    this.laboService.deleteLaboratoire(id).subscribe( data => {
      console.log(data);
      this.getLaboratoires();
    })
  }
}
