import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './app-welcome/app-welcome.component';
import { BlusherComponent } from './app-blusher/app-blusher.component';
import { BrushesComponent } from './app-brushes/app-brushes.component';
import { PerfumeComponent } from './app-perfume/app-perfume.component';
import { MascaraComponent } from './app-mascara/app-mascara.component';
import { HairComponent } from './app-hair/app-hair.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'blusher' , component: BlusherComponent},
  { path: 'brushes' , component: BrushesComponent},
  { path: 'perfume' , component: PerfumeComponent},
  { path: 'mascara' , component: MascaraComponent},
  { path: 'hair' , component: HairComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoutesScreenModule {}
