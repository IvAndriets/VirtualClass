import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from "@angular/router";
import { routes } from "./virtual-class-account.route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LandingComponent,
  ],
})
export class VirtualClassAccountModule {}
