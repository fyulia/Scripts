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
  searchName = ""
  searchSurname = "";
  workers;

  constructor(private myWorkerBase: WorkerBaseService) {


  }
  ngOnInit() {

    this.getData();
  }




  getByType(type: number) {

    return this.workers.filter((worker) => worker.type === type);

  }

  async onDeleteById(event: number) {

    try {

      await this.myWorkerBase.deleteWorkers(event);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }




  async  onChangeWorker(event: MyWorker) {
    try {
      

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



  async getData() {

    try {

      this.workers = await this.myWorkerBase.getWorkers();

    } catch (err) {
      console.error(err);
    }
  }



}
