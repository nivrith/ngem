import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.module';
import { SharedModule } from '@app/shared';
import { HeroModule } from '@polyrithm/angular-bulma';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HeroModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]

})
export class HomeModule { }
