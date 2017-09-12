import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']
})
export class FilterlistComponent implements OnInit {
 @Input() listContent:{label:string,listItems:{code:string;label:string;}[]};

 search:string;

  @Output() onKeyWordChange = new EventEmitter<Object>();
    
    constructor() { }

  ngOnInit() {
  }
    
    onChange($event){
        this.onKeyWordChange.emit(this.search);
    }

}
