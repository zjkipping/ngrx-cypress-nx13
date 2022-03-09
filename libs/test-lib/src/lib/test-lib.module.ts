import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MainPageComponent } from './main-page/main-page.component';
import { counterReducer } from './state/reducer';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './state/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([CounterEffects]),
    RouterModule.forChild([{ path: '', component: MainPageComponent }]),
  ],
  declarations: [MainPageComponent],
})
export class TestLibModule {}
