import { SplitPaneBindableProperties, category, option } from "./helpers";
import { autoinject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@autoinject
export class SplitPane extends SplitPaneBindableProperties{
    
    private _enable: boolean = true;
    contenidoTitle: string;

    categories : category[] = [];

    constructor(private events:EventAggregator){
        super()
    }

    attached(){
        debugger;
        this.events.publish('split-pane-attached', this);
    }

    disable(){
        this._enable = false;
    }

    enable(){
        this._enable = true;
    }

    setOptions(options:option[]){
        this.options = options;
    }

    setCategory(category: category){
        this.categories.push(category);
    }

    setTitle(title:(option| string)){
        this.title = title;
    }

    setContentTitle(title:string){
        this.contenidoTitle = title;
    }

}



