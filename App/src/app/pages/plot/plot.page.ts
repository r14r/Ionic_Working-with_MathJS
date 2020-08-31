import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as Plotly from 'plotly.js';

@Component({
    selector: 'app-plot',
    templateUrl: './plot.page.html',
    styleUrls: ['./plot.page.scss'],
})
export class PlotPage implements OnInit {

    @ViewChild('plotCanvas') plotCanvas;

    constructor() {
        console.log('PlotPage::constructor | ');

    }

    ngOnInit() {
        console.log('PlotPage::ngOnInit | ');

        this.basicChart()
    }

    basicChart() {
        console.log('PlotPage::basicChart | ');


        console.log('PlotPage::basicChart | get canvas element');
        const element = this.plotCanvas.nativeElement

        const data = [{
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16]
        }]

        const style = {
            margin: { t: 0 }
        }

        return;
        console.log('PlotPage::basicChart | plot data');
        Plotly.plot(element, data, style)
    }
}
