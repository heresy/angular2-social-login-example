import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './main.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);