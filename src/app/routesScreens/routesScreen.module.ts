
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesScreenModule } from './routesScreen.routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  imports: [
    CommonModule,
    RoutesScreenModule,
    MatExpansionModule,
    AngularMaterialModule
  ],
  exports: [

  ],
  declarations: [

  ],
  providers: [
  ],
})

export class RoutesMainModule{ }

