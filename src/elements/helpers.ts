import {bindable} from 'aurelia-framework';


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