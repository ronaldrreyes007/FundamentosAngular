import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ronald';
  age = 39;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  person = {
     name:'Ronald',
     age:18,
     avatar: 'https://www.w3schools.com/howto/img_avatar.png'


  }

  toggleButton(){
      this.btnDisabled = !this.btnDisabled;
  }
  increaseage(){
    this.person.age +=1;
  }
  onScroll(event: Event){
    const element  = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element  = event.target as HTMLInputElement;
   this.person.name =  element.value;
  }
}
