import { Component, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, delayedReset, increment, reset } from '../state/actions';
import { WindowCounterActions } from '../state/window-actions';

@Component({
  selector: 'ngrx-cypress-ng13-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>, private zone: NgZone) {
    this.count$ = store.select('count');

    (window as unknown as WindowCounterActions).mainPageActions = {
      delayedReset: () => {
        this.zone.run(() => {
          this.store.dispatch(delayedReset());
        });
      },
    };
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
