import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyDet, _detectors } from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project11';

  detectors: MyDet[]; 

   constructor() {
   for (let i = 0; i<10; i++){
      var status=Boolean(Math.round(Math.random()));
  MyDet.id++;
  
      if(status==true){
        var color='green';
      }
      else{
        color='red'
      }
      _detectors.push({newId: MyDet.id,status,name: 'Имя',color})
    }
    
    
  }

  onAddDetectors(i)
  {
  
    _detectors.push(i);
  }
  

}

console.log(_detectors)

  // myNumber = 10;
  // flag = true;
  // buttonEnabled = false;

  // blockX = 0;
  // blockY = 0;

  // inputValue = 'test';

  // @ViewChild('someInput') someInputName : ElementRef;

  // someArray: string[] = [
  //   'первый', 'второй', 'третий', 'четвертый'
  // ];

  // fontSize = 15;


  // constructor() {
  //   setTimeout(() => {
  //     this.buttonEnabled = true;
  //     this.fontSize = 20;
  //   }, 1500);
  //   console.log(this.someInputName);
  // }

  // ngOnInit() {
  //   console.log(this.someInputName);
  // }

  // ngAfterViewInit() {
  //   console.log(this.someInputName);
  // }

  // hello() {
  //   return 'Hello world';
  // }

  // getCoords(e: MouseEvent) {
  //   this.blockX = e.offsetX;
  //   this.blockY = e.offsetY;
  // }

  // getData (elm: HTMLInputElement) {
  //   // console.log(elm.value);
  //   console.log(this.someInputName.nativeElement.value);
  // }

