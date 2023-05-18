import { AppContainerComponent } from './app-container/app-container.component';
import { LoaderComponent } from "./loader-component/loader-component";
import { ErrorPlaceholderComponent } from "./error-placeholder/error-placeholder.component";
import { PageComponent } from "./page/page.component";
import { UILayoutComponent } from "./layout/layout.component";
import { LayoutHeaderComponent } from "./layout-header/layout-header.component";

export const components = [
  AppContainerComponent,
  LoaderComponent,
  ErrorPlaceholderComponent,
  PageComponent,
  UILayoutComponent,
  LayoutHeaderComponent,
];

export * from './app-container/app-container.component';
export * from './loader-component/loader-component';
export * from './error-placeholder/error-placeholder.component';
export * from './page/page.component';
export * from './layout/layout.component';
export * from './layout-header/layout-header.component';
