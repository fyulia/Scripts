import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { MyWorker } from './worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerBaseService {


  baseApi = "http://localhost:3000/workers";

  constructor(private http: HttpClient) { }

  getWorkers(): Promise<any> {
    return this.http.get(this.baseApi).toPromise();

  }

  postWorkers(data: MyWorker) {
    return this.http.post(this.baseApi, data).toPromise();
  }

  deleteWorkers(data) {
    return this.http.delete(this.baseApi + "/" + data).toPromise();
  }

  changeWorkers(data: MyWorker) {
    return this.http.put(this.baseApi + "/" + data.id, data).toPromise();
  }


}
