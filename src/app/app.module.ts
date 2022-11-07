import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ModaComponent,
    FutbolComponent,
    BasquetComponent,
    RunningComponent,
    MarcasComponent,
    GaleriaComponent,
    NosotrosComponent,
    ContactoComponent,
    EmplearComponent,
    MenuprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
