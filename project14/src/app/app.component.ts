import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';
import { WorkerBaseService } from './shared/worker-base.service';
//import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  //workers: MyWorker[];
  myWorkerType = MyWorkerType;

  workers;

  constructor(private myWorkerBase: WorkerBaseService) {


  }
  ngOnInit() {

    this.getData();
  }




  getByType(type: number) {

    return this.workers.filter((worker) => worker.type === type);
    
  }


  // onDeleteById(id: number) {

  //   let index = this.workers.findIndex((worker) => worker.id === id);
  //   if (index !== -1) {
  //     this.workers.splice(index, 1);
  //  }
  // }

  async onDeleteById(event:number) {

    try {
      
    await this.myWorkerBase.deleteWorkers(event);   
    } catch (err) {
      console.error(err);
    } finally {
      this.getData(); 
    }
  }


 

 async  onChangeWorker(event: MyWorker) {
    //console.log("component ts");
    // let new_worker = worker;
    // this.workers.push(new_worker);
    //////////////////////////////////
    //this.onDeleteById(worker);

     try {
     let new_worker = event;

     console.log(new_worker);
      
     // await this.myWorkerBase.postWorkers(new_worker);
     // await this.onDeleteById(event.id);  

     await this.myWorkerBase.changeWorkers(event);
      
     } catch (err) {
       console.error(err);
     } finally {
       this.getData();
     }

  }


  async onAddWorker(event: MyWorker) {
    try {
      console.log(event);
      await this.myWorkerBase.postWorkers(event);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }
  


  // onAddWorker(worker) {

  //   let id =
  //     this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
  //   worker.id = id;
  //   this.workers.push(worker);

  // }

  async getData() {

    try {

      this.workers = await this.myWorkerBase.getWorkers();

    } catch (err) {
      console.error(err);
    }
  }



}
