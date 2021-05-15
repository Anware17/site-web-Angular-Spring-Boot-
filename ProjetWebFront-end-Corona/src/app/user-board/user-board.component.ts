import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoRes() {
    
          this.router.navigate(['/create-reservation-test-pcr']);
  }
  
}
