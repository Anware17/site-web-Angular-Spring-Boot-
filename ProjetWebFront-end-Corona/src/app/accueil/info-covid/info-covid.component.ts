import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info-covid',
  templateUrl: './info-covid.component.html',
  styleUrls: ['./info-covid.component.css']
})
export class InfoCovidComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigateByUrl('/');
   }
}
