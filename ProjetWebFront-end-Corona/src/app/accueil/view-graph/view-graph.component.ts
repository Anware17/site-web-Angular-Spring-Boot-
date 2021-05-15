import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;

@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.css']
})
export class ViewGraphComponent implements OnInit {

  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Evolution du covid-19'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Juin','Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Tunis',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
      name: 'Sousse',
      data: [163, 203, 276, 408, 547, 729, 628]
  }, {
      name: 'Mahdia',
      data: [18, 31, 54, 156, 339, 818, 1201]
  },{
    name: 'Monastir',
    data: [25, 35, 60, 110, 200, 700, 2000]
  },{
    name: 'Jandouba',
    data: [188, 131, 254, 356, 439,918, 4201]
},{
  name: 'Gbeli',
  data: [50, 121, 154, 256, 339, 1018, 1501]
},{
  name: 'Gabes',
  data: [18, 31, 54, 156, 939, 1118, 5201]
},{
  name: 'Ariana',
  data: [318, 431, 54, 556, 839, 918, 4201]
},{
  name: 'Silyana',
  data: [12, 131, 254, 456, 739, 718, 3201]
}

  ]
  }

  constructor() { }

  ngOnInit(){
    Highcharts.chart('container', this.options);
  }


}
