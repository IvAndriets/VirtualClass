import { AppContainerComponent } from './app-container/app-container.component';
import { LoaderComponent } from "./loader-component/loader-component";
import { ErrorPlaceholderComponent } from "./error-placeholder/error-placeholder.component";

export const components = [
  AppContainerComponent,
  LoaderComponent,
  ErrorPlaceholderComponent,
];

export * from './app-container/app-container.component';
export * from './loader-component/loader-component';
export * from './error-placeholder/error-placeholder.component';
