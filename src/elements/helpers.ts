import {bindable, autoinject} from 'aurelia-framework';
import { SplitPane } from './split-pane';
import { EventAggregator } from 'aurelia-event-aggregator';


export interface option{
    
    
    /**
     * route to go
     * 
     * @type {'string'}
     * @memberof option
     */
    href?: String
    text: String
    type: "link" | "title"
    icon?: string
}


export interface category{

    options: option[],
    name: string

}

export class SplitPaneBindableProperties{
    @bindable
    options:option[] = [];
    @bindable
    title:option | string; 

    constructor(){}

    addLink(text:string, href: string, icon?:string){
        this.options.push({type : 'link', text: text, href: href, icon: icon});
    }

    addTitle(text:string){
        this.options.push({type : 'title', text: text});
    }

    addOptions(options:option[]){
        this.options = this.options.concat(options);
    }

}

@autoinject
export class SplitPaneHelper {
    splitPane: SplitPane;
    
    constructor(private events:EventAggregator){
        this.setSplitPane();
    }

    private async setSplitPane(){  
            
        this.events.subscribeOnce('split-pane-attached', (splitPane)=>{
            this.splitPane = splitPane;
        })
                
    }

    async setContentTitle(title:string){
        await this.isItAttached();
        this.splitPane.setContentTitle(title);
    }

    isItAttached(){

        return new Promise((next, error)=>{
            if (!this.splitPane) {
                this.events.subscribeOnce('split-pane-attached', (splitPane)=>{
                    this.splitPane = splitPane;
                    next();
                })
            }
            else
                next();

        });

    }


}