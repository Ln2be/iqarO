import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllService } from '../all.service';
import { Post } from '../post';
import { resize } from '../tools';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  mpost:Post={
    kind:'',
    location:{
      lat:0,
      lng:0
    },
    tel:'',
    description:'',
    images:[]
  }

  constructor(
    private service:AllService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    var params = this.route.params
    params.forEach(param=>{
    this.mpost.kind=param.kind
    this.mpost.location.lat=param.lat
    this.mpost.location.lng=param.lng
    })
  }

  async handleFiles(fileEl:any){
    const files:any[] = fileEl.files

    if(files){
      this.mpost.images=[]
      const upFiles = files.length<=3? files:files.slice(0,3)

      for(let file of upFiles){
        const reFile = await resize(file)
        // this.service.log(reFile)
        this.mpost.images.push(reFile)
      }
    }
  }

  send(){

    this.service.post(this.mpost).subscribe(post=>{
      this.router.navigate(['mdetailed',{id:post.id}])
    })
  }

  get diagnostic(){
    return JSON.stringify(this.mpost)
  }

}
