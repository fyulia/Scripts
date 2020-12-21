import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }


  onChangeWorker(worker: MyWorker) {
  //console.log("component ts");

      let new_worker = worker;
    
      this.workers.push(new_worker);
//////////////////////////////////

      this.onDeleteById(worker.id);
  
    // worker.name = prompt("Change worker name", worker.name);
    // worker.surname = prompt("Change worker surname", worker.surname);
    // let _type;
    
    // _type = prompt("Change worker type", (worker.type).toString());
    // worker.type = parseInt(_type);
    

  }



  onAddWorker(worker) {


    let id =
      this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    this.workers.push(worker);

  }

}
