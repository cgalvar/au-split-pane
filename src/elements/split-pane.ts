import { SplitPaneBindableProperties, category, option } from "./helpers";

export class SplitPane extends SplitPaneBindableProperties{
    
    private _enable: boolean = true;
    contenidoTitle: string;

    categories : category[] = [];

    constructor(){
        super()
    }

    activate(){

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

    setContenidoTitle(title:string){
        this.contenidoTitle = title;
    }

}



