import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amsfront';

  organisme = "SIP ACADEMY";  
  display(){
    alert("voulez vous afficher");
    console.log("afficher");
  }

  
  
}
