import { GetViewmodel } from "./get-viewmodel";
import { EventAggregator } from "aurelia-event-aggregator";

export class GetSplitPane extends GetViewmodel{
    constructor(private eventAgregator:EventAggregator) {
        super(eventAgregator, 'split-pane');
    }
}