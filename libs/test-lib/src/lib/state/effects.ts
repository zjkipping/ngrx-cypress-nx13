import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, tap } from 'rxjs';

import { delayedReset, reset } from './actions';

@Injectable()
export class CounterEffects {
  delayedReset = createEffect(() =>
    this.actions.pipe(
      ofType(delayedReset),
      delay(2000),
      map(() => reset())
    )
  );

  constructor(private actions: Actions) {}
}
