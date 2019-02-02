import { Component, OnInit, Input } from '@angular/core';
import { Resident } from '../../../models/resident.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-residents-table',
  templateUrl: './residents-table.component.html',
  styleUrls: ['./residents-table.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})

export class ResidentsTableComponent implements OnInit {
  @Input() residents: Resident[];

  columns: string[] = ['name', 'gender', 'height', 'mass'];

  constructor(  ) { }

  ngOnInit() {
  }

}

