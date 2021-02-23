import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AllService } from '../all.service';
import * as L from 'leaflet';
import { getParseErrors } from '@angular/compiler';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  inIfo = {
    kind:'',
    location:{
      lat:0,
      lng:0
    }
  }

  searchForm={
    ne:{
      lat:0,
      lng:0
    },
    sw:{
      lat:0,
      lng:0
    }
  }

  private map:any;

  constructor(
    private service:AllService,
    private router:Router
  ) {     
  }

  ngOnInit(): void {
    var user = this.service.getUser()
    // this.router.navigate(['/mposts', {password:user, search:'latest'}])
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 18.07908049761971, -15.965237617492678 ],
      zoom: 17,
    });

    var greenIcon = L.icon({
      iconUrl: 'assets/house.png',
      shadowUrl: 'assets/house_shadow.png',
  
      // iconSize:     [30, 30], // size of the icon
      // shadowSize:   [30, 30], // size of the shadow
      // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });


  var theMarker={}
  var theCircle:any
    this.map.on('click', (e:any)=>{

      if (theMarker != undefined) {
        this.map.removeLayer(theMarker);
  };
  if (theCircle != undefined) {
    this.map.removeLayer(theCircle);
};
      theMarker = L.marker(e.latlng,{icon:greenIcon, alt:"I", draggable:true}).on('dragend', (e)=>{
        this.inIfo.location=e.target._latlng
      }).addTo(this.map);

    theCircle = L.circle(e.latlng, {radius:500}).addTo(this.map)

    this.searchForm.ne = theCircle.getBounds()._northEast
    this.searchForm.sw = theCircle.getBounds()._southWest

    console.log(theCircle.getBounds()._northEast)
    this.inIfo.location=e.latlng

    })


    const tiles:any = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);
    
  }

  ngAfterViewInit(): void {
    this.initMap()
  }

  search(){
    const NE = this.searchForm.ne
    const SW = this.searchForm.sw

    var lats = NE.lat>SW.lat? [NE.lat,SW.lat]:[SW.lat,NE.lat]
    var lngs = NE.lng>SW.lng? [NE.lng,SW.lng]:[SW.lng,NE.lng]

    this.router.navigate(['/mposts',{kind:this.inIfo.kind,lat1:lats[0],lat2:lats[1],lng1:lngs[0],lng2:lngs[1]}])
  }

  get diagnostic(){
    return JSON.stringify(this.inIfo)
  }

}
