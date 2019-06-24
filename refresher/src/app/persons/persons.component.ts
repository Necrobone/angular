import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonsService} from './persons.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})

export class PersonsComponent implements OnInit, OnDestroy {
  persons: string[];
  isFetching = false;
  private personList: Subscription;

  constructor(private service: PersonsService) {
  }

  ngOnInit(): void {
    this.personList = this.service.personsChanged.subscribe(persons => {
      this.persons = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.service.fetchPersons();
  }

  onRemovePerson(name: string) {
    this.service.removePerson(name);
  }

  ngOnDestroy(): void {
    this.personList.unsubscribe();
  }
}
