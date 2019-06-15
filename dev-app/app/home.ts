import { GetViewModelFromRouter } from "../services/getViewModelFromRouter";
import { autoinject } from "aurelia-framework";
import { SplitPane } from "elements/split-pane";

@autoinject
export class home{
    splitPane: SplitPane;

   constructor(private getViewModel:GetViewModelFromRouter){

   }

    activate(){
        this.setSplitPane();
    }

    async setSplitPane(){
        
        try {
            this.splitPane = await this.getViewModel.exec('splitPane');
            this.splitPane.setContenidoTitle('hola')
        } catch (error) {
            alert(error);
        }
    }

}