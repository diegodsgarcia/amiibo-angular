import { Component, OnInit } from '@angular/core'
import { Amiibo } from '../../models/Amiibo'

import { AmiiboService } from '../providers/amiibo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  amiibos: Observable<Amiibo[]>
  isLoad: boolean = false

  constructor(private amiiboService: AmiiboService) {}

  ngOnInit() {
    this.amiibos = this.amiiboService.getAll();

    this.amiibos.subscribe((amiibos) => this.isLoad = true)
  }

}
