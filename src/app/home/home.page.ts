import { Component } from '@angular/core';
import { ListService } from './../list.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

listitems;

constructor(public list: ListService){
  this.list.getItems().then(items=>{
    this.listitems = items;
  });
}
newTask(){
  var task = prompt("NewTask");
  if(task == null){
    return;
  }
  this.list.addItem(task).then(()=>{

    this.list.getItems().then(items=>{
      this.listitems = [];
      this.listitems = items;
    });
  })
}
delete(item){
this.list.removeItem(item).then(()=>{

  this.list.getItems().then(items=>{
    this.listitems = [];
    this.listitems = items;
  });
  });

}

}
