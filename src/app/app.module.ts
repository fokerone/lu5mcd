import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './shared/menu/menu.component';
import { CardComponent } from './shared/card/card.component';
import { HfComponent } from './estacion/hf/hf.component';
import { VhfComponent } from './estacion/vhf/vhf.component';
import { ClimaComponent } from './estacion/clima/clima.component';
import { GeneradorComponent } from './qslCard/generador/generador.component';
import { ContactosComponent } from './qrz/contactos/contactos.component';
import { SdrComponent } from './estacion/sdr/sdr.component';

@NgModule({
  declarations: [
    AppComponent,
    HfComponent,
    VhfComponent,
    ClimaComponent,
    GeneradorComponent,
    ContactosComponent,
    SdrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuComponent,
    CardComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
