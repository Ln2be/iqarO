import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AllService } from '../all.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  

  constructor(
    private service:AllService,
    private router:Router
  ) {     
  }

  ngOnInit(): void {
    var user = this.service.getUser()
    this.router.navigate(['/mposts', {password:user, search:'latest'}])
  }

}
