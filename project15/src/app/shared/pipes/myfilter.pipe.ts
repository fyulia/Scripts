import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {



 container = [];
  constructor() {

    //this.workers = this.workerBase.getWorkers();;

  }

  transform(items: any[], searchName: string): any[] {

    //this.container = items;
    let _fullname = searchName;
    let filteredValues = [];
    
    // if (searchName == ''){
    // return items;
    // }else{
    

    if((_fullname != "" || _fullname != null)) {

      return filteredValues ? items.filter(item => (item.name+" "+item.surname).toLowerCase().indexOf(_fullname.toLowerCase()) !== -1) : items;
       
    };

 

  }

 
}
