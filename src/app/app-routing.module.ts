import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModaComponent } from './componentes/moda/moda.component';
import { FutbolComponent } from './componentes/futbol/futbol.component';
import { BasquetComponent } from './componentes/basquet/basquet.component';
import { RunningComponent } from './componentes/running/running.component';
import { MarcasComponent } from './componentes/marcas/marcas.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EmplearComponent } from './componentes/emplear/emplear.component';

const routes: Routes = [
{
 path: "inicio",component:InicioComponent
},
{
path: "moda",component:ModaComponent
},
{
path: "futbol",component:FutbolComponent
},
{
path: "basquet",component:BasquetComponent
},
{
path: "running",component:RunningComponent
},
{
path: "marcas",component:MarcasComponent
},
{
path: "galeria",component:GaleriaComponent
},
{
path: "nosotros", component:NosotrosComponent
},
{
  path: "contacto", component:ContactoComponent
},
{
  path: "emplear", component:EmplearComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
