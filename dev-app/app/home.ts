import { autoinject } from "aurelia-framework";
import { SplitPaneHelper } from "elements/helpers";



@autoinject
export class home{
    

   constructor(private splitPaneHelper:SplitPaneHelper){

   }

    activate(){
        
    }

    attached(){
        this.splitPaneHelper.setContentTitle('Hola')
    }

}