import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private service:AllService
  ) { }

  ngOnInit(): void {
    var params = this.route.params
    params.forEach(param=>{
      var queryString = Object.keys(param).map(key => key + '=' + param[key]).join('&');
      this.service.get('?'+queryString).subscribe(mposts=>{
        this.service.log(mposts)
      },
      error=>this.service.log(error)
      )
    })
  }

}
