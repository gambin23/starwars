import { Component, OnInit, Input } from '@angular/core';
import { Resident } from '../../../models/resident.model';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { IDictionary } from 'src/app/models/dictionary.interface';

@Component({
  selector: 'app-residents-cards',
  templateUrl: './residents-cards.component.html',
  styleUrls: ['./residents-cards.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})

export class ResidentsCardsComponent implements OnInit {
  @Input() residents: Resident[];
  @Input() images: IDictionary<string>;

  columns: string[] = ['name', 'gender', 'height', 'mass'];

  constructor() { }

  ngOnInit() {
  }

}

