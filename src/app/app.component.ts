import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Amiibo';

  getListOfAmiibo(list) {
    console.log(`Minha lista é esta aqui: \n ${list}`)
  }
}
