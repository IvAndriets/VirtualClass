import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from "./services";

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class VirtualClassAuthModule {
  static forRoot(): ModuleWithProviders<VirtualClassAuthModule> {
    return {
      ngModule: VirtualClassAuthModule,
      providers: [
        ...services,
      ],
    };
  }
}
