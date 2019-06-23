import {Component, OnInit} from '@angular/core';
import {PersonsService} from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})

export class PersonsComponent implements OnInit {
  persons: string[];

  constructor(private service: PersonsService) {
  }

  ngOnInit(): void {
    this.persons = this.service.persons;
  }
}
