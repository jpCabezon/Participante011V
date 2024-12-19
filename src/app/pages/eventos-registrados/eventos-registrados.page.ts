import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventos-registrados',
  templateUrl: './eventos-registrados.page.html',
  styleUrls: ['./eventos-registrados.page.scss'],
})
export class EventosRegistradosPage implements OnInit {

  qrdata: string = '';

  constructor(private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.queryParams.subscribe((params) => {
      this.qrdata = params['qrData'];
    });
  }
}

