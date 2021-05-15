import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoCreateLab() {
    
    this.router.navigate(['/laboratoire']);
}
gotoListLab() {
    
  this.router.navigate(['/laboratoires']);
}
}
