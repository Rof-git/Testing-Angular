import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('HeroService: fetched heroes');
    return crises;
  }
  getCrisis(id: number): Observable<Crisis> {
  const crisis = CRISES.find(h => h.id === id)!;
  return of(crisis);
}
}