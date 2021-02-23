import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  posts:any
  constructor(
    private route:ActivatedRoute,
    private service:AllService
  ) { }

  ngOnInit(): void {
    var params = this.route.params
    params.forEach(param=>{
      var queryString = Object.keys(param).map(key => key + '=' + param[key]).join('&');
      console.log(queryString)
      this.service.get('?'+queryString).subscribe(posts=>{
        this.posts=posts
        this.service.log(posts)
      },
      error=>this.service.log(error)
      )
    })
  }

}
