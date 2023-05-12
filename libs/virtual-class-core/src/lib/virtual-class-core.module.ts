import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { VirtualClassConfigModule } from "@virtual-class-frontend/virtual-class-config";
import { clients } from "./clients";
import { states } from "./stores/states";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    VirtualClassConfigModule,
  ],
})
export class VirtualClassCoreModule {
  static forRoot(): ModuleWithProviders<VirtualClassCoreModule> {
    return {
      ngModule: VirtualClassCoreModule,
      providers: [
        ...clients,
        ...states,
      ],
    };
  }
}
