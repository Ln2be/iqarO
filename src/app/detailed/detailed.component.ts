import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {

  mpost:any
  constructor(
    private service:AllService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    var params = this.route.params
    params.forEach(param=>{
      var queryString = Object.keys(param).map(key => key + '=' + param[key]).join('&');
      this.service.getPost('?'+queryString).subscribe(mpost=>{
        this.mpost=mpost
      })
    })
  }

}
