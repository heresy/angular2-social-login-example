import { NgModule }      from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
    "google": {
      "clientId": "GOOGLE_CLIENT_ID"
    },
    "linkedin": {
      "clientId": "LINKEDIN_CLIENT_ID"
    },
    "facebook": {
      "clientId": "FACEBOOK_CLIENT_ID",
      "apiVersion": "v2.4"
    }
  };

@NgModule({
  imports: [ 
              BrowserModule,
              Angular2SocialLoginModule.initWithProviders(providers)
          ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(){}
}
