import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-protege',
  templateUrl: './protege.component.html',
  styleUrls: ['./protege.component.css']
})
export class ProtegeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigateByUrl('/');
   }
}
