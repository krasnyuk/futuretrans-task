import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { EntityDetailsPageComponent } from './components/entity-details-page/entity-details-page.component';
import { LoadPageComponent } from './components/load-page/load-page.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [EntityDetailsPageComponent, LoadPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
      MatProgressSpinnerModule
  ]
})
export class EntityDetailsModule { }
