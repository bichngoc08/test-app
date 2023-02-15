import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-first]',
  //templateUrl: './first.component.html',
  template:`
  <h2 class="text-success">Sample Text</h2>
  <p class="text-error">Sample Text </p> 
  <div class="{{primary}}">Sample Text</div>
  <div [class]="primary">Sample Text</div>

  <div>Enter your name: <input type="text" [id]="nameId" [value]="name"/></div>
  <br/>
  <div>Enter your email: <input type="text" id="{{emailId}}" value="{{email}}" [disabled]="isDisabled"/></div>

  <br/>
  <h2 style="color:red;">Sample Text</h2>
  <p [style.color]="isError ? 'red': 'darkgreen'">Sample Text</p>
  <p [style]="{'color': 'darkorange','font-size':'26px'}">Sample Text</p>
  <p [style]="textStyle">Sample Text</p>
  <br/>
  <button (click)="onClick($event)">Click me</button>
  `,
  styles: [`
    .text-success {
      color: darkgreen;
    }
    .text-error {
      color: darkred;
    }
    .text-primary {
      color: navy;
    }

  `]
  ,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  
  public framework: string = "Angular"
  public name: string ="Peter"
  public email: string = "test@gmail.com"
  public nameId: string ="nId"
  public emailId: string ="eId"
  public isDisabled: boolean =true
  public primary = "text-primary"
  public normal = "text-normal"
  public multiClass = {
    "text-primary": true,
    "text-normal": true
  }
  public isError: boolean = false;
  public textStyle = {
    color: 'darkorange',
    fontSize: '26px',
  } 

  constructor() {}

  ngOnInit(): void{  
  }
  
  test() {
    return "sample text";
    } 
  
    onClick(event: any): void{
      //To do something
      console.log("Sample text");
      console.log(event);
    }
}

  
