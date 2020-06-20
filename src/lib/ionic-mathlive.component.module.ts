import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonMathliveComponent } from './ionic-mathlive.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [IonMathliveComponent],
  declarations: [IonMathliveComponent]
})
export class IonicMathliveModule {}
