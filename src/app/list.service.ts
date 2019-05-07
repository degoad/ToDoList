import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class ListService {

list = [];

constructor(private storage: Storage) { }

addItem( name ){
  return this.getItems().then(items=>{
    if(items){
      items.push(name)
      return this.storage.set("list", items)
    }else{
      return this.storage.set("list", [name]);
    }
  })
}
removeItem(item){
    return this.getItems().then(items=>{
      if(items){
        var index = items.indexOf(item);
        items.splice(index, 1);
      return this.storage.set("list", items)
      }
    })
}
getItems(){
  return this.storage.get("list");
}





}
