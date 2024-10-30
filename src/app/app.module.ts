import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // Aqui você pode adicionar outros componentes que deseja declarar
  ],
  imports: [
    BrowserModule,
    // Adicione outros módulos Angular aqui, como FormsModule, HttpClientModule, etc.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
