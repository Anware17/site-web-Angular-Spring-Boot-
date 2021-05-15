import { Component, OnInit } from '@angular/core';
import { Laboratoire } from '../laboratoire';
import { LaboratoireService } from '../services/laboratoire.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-laboeratoires-details',
  templateUrl: './laboeratoires-details.component.html',
  styleUrls: ['./laboeratoires-details.component.css']
})
export class LaboeratoiresDetailsComponent implements OnInit {
  id: number ;
  laboratoire: Laboratoire ;
  constructor(private route: ActivatedRoute, private laboService: LaboratoireService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.laboratoire = new Laboratoire();
    this.laboService.getLaboratoireById(this.id).subscribe( data => {
      this.laboratoire = data;
    });
  }
}
