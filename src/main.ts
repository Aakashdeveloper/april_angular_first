import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  /*
  Module=> declrations
  component=> html css logical
  service=> help to share data and connect with external agent
  pipe=> modifiy the data
  gaurds=> help to protect routing
  */
