import { Component, OnInit } from '@angular/core';
import { MyDet, _detectors } from '../shared/models/det.model';

@Component({
    selector: 'app-det',
    templateUrl: './det.component.html',
    styleUrls: ['./det.component.css']
})
export class DetectorsComponent implements OnInit {

    detectors: MyDet[]; //массив датчиков

    constructor() {
        this.detectors = _detectors;
    }

    ngOnInit(): void {  //вызывается один раз после установки свойств компонента, которые участвуют в привязке. Выполняет инициализацию компонента
   
        console.log(_detectors)
      }

    deleteDetect(start) {
        for (let i = 0; i < this.detectors.length; i++) {
            console.log(this.detectors[i]);
            console.log(start);
            if (this.detectors[i].newId == start)
                this.detectors.splice(i, 1)
        }
    }

    addDetect(_name, _color) {

        console.log(name);
        console.log(status);
        MyDet.id++;
        var status = Boolean(Math.round(Math.random()));

        this.detectors.push({ newId: MyDet.id, status, name: _name, color: _color })

    }
}

