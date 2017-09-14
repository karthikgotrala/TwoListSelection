import { Component, OnInit, Input, EventEmitter,   Output } from '@angular/core';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']
})
export class FilterlistComponent implements OnInit {
 @Input() listContent:{label:string,componentId:string,listItems:{code:string;label:string;}[]};
 @Input() componentId:string;
 search:string;
 @Output() onKeyWordChange = new EventEmitter<Object>();
 @Output() onSelectedItem  =new EventEmitter<Object>();
  
 constructor() { }

  ngOnInit() {
  }
    
 onKeyUp($event){
     this.onKeyWordChange.emit(this.search);
 }
 onCheckboxChange(item,$event){
 this.onSelectedItem.emit({"componentId":this.listContent.componentId,"item": item});
 }

}
