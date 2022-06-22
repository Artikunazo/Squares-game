import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from './square/square.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SquareComponent],
  exports: [SquareComponent],
})
export class FeaturesModule {}
