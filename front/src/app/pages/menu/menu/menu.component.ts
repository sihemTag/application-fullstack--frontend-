import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() showElements: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToAccount() {
    this.router.navigate(['/account']);
  }

}
