import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  exports: [
    MatSidenavModule,
    MatExpansionModule
  ]
})

export class AngularMaterialModule {}
