import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroComponent } from './hero/hero.component';
import { NameChildComponent } from './name/name-child.component';
import { NameParentComponent } from './name/name-parent.component';
import { VersionChildComponent } from './version/version-child.component';
import { VersionParentComponent } from './version/version-parent.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    HeroChildComponent,
    HeroComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }