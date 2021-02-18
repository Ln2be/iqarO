import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../all.service';

interface sTo {
  form:string,
  model:Object
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private service:AllService,
    private router:Router
  ) { }

  idModel = {
    search:'id',
    id:''
  }

  passModel = {
    search:'pass',
    pass:''
  }

  kindModel = {
    search:'kind',
    kind:'',
    departement:''
  }


  ngOnInit(): void {
  }

  send(name:string){
    var formToModel:sTo[] = [
      { form:'kindForm', model:this.kindModel },
      { form:'idForm', model:this.idModel },
      { form:'passForm', model:this.passModel }
    ]

    var modelAr = formToModel.filter(v => v.form==name)
    var model = modelAr[0].model

    this.router.navigate(['/mposts', model])
  }

  get diagnostic() { return JSON.stringify(this.kindModel); }
}
