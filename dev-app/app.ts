import { SplitPaneBindableProperties } from "resources";
import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  public message: string = 'from Aurelia!';
  splitPaneSetting = new SplitPaneBindableProperties();
  router: any;

  constructor(){
    
  }

  activate(){
    this.setSplitPane();
  }

  setSplitPane(){

    this.splitPaneSetting.addTitle('Grupo hogar')

    this.splitPaneSetting.addOptions([
      {
        text: 'Inicio',
        href: 'home',
        type: 'link',
        icon: 'home'
      }
    ])

    this.splitPaneSetting.addLink('Internet', 'hola', 'public')

    

    this.splitPaneSetting.title = 'Hello';

  }

  configureRouter(config:RouterConfiguration, router:Router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'app/home' },
    ]);
  }

}
