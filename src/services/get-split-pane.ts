import { GetViewmodel } from "./get-viewmodel";
import { EventAggregator } from "aurelia-event-aggregator";
import { SplitPane } from "../elements/split-pane";

export class GetSplitPane extends GetViewmodel{
    constructor(private eventAgregator:EventAggregator) {
        super(eventAgregator, 'split-pane');
    }

    get():Promise<SplitPane>{
        return super.get();
    }


}