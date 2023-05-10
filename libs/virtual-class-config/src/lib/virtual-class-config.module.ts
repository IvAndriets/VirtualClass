import { ModuleWithProviders, NgModule } from '@angular/core';
import { services } from "./services";
import { ENVIRONMENT } from "./tokens";

@NgModule()
export class VirtualClassConfigModule {
  static forRoot(environment: any): ModuleWithProviders<VirtualClassConfigModule> {
    return {
      ngModule: VirtualClassConfigModule,
      providers: [
        ...services,
        { provide: ENVIRONMENT, useValue: environment },
      ],
    };
  }
}
