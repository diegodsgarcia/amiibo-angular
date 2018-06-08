import { Component, OnInit } from '@angular/core';
import { Amiibo } from '../../models/Amiibo'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  amiibos: Amiibo[] = []

  constructor() {
    const mario = new Amiibo(
      'Mario',
      'Mario',
      'Super Smash Bros',
      'Super Mario',
      'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
      [{
				"au": "2014-11-29",
				"eu": "2014-11-28",
				"jp": "2014-12-06",
				"na": "2014-11-21"
			}]
    )

    for(let i = 0; i < 10; i++) {
      this.amiibos.push(mario)
    }
  }

  ngOnInit() {
  }

}
