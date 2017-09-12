import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twolistselction',
  templateUrl: './twolistselction.component.html',
  styleUrls: ['./twolistselction.component.css']
})
export class TwolistselctionComponent implements OnInit {
 leftContent={
     label:"Available",
     listItems:[
         {"code":"1","label":"Austin"},
         {"code":"2","label":"Round Rock"},
         {"code":"3","label":"Cedar Park"},
         {"code":"4","label":"Leander"},
         {"code":"5","label":"Pflugerville"},
         {"code":"6","label":"Georgetown"},
         {"code":"7","label":"Buda"},
         {"code":"8","label":"Kyle"},
         {"code":"9","label":"San Marcos"},
         {"code":"10","label":"Hutto"},
         {"code":"11","label":"Drpping Springs"},
         {"code":"12","label":"New Braunfels"},
         {"code":"13","label":"Bastrop"},
     ]
     
 }

    rightContent={
        label:"Selected",
        listItems:[]
        
    }
  constructor() { }

  ngOnInit() {
  }
    
    

}
