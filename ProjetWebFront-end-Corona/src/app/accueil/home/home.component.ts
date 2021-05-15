import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/gloabl-data';
import { GlobalModel } from 'src/app/models/global.model';
import { ApiService } from 'src/app/api/api.service';
import * as Highcharts from 'highcharts';
declare var require: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 /* totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  loading = true;
  globalData: GlobalDataSummary[];
  datatable = [];
  chart = {
    PieChart : "PieChart" ,
    ColumnChart : 'ColumnChart' ,
    LineChart : "LineChart",
    height: 500,
    options: {
      animation:{
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }
  }


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {

  this.dataService.getGlobalData()
  .subscribe(
    {
      next: (result) => {
        console.log(result);
        this.globalData = result;
        result.forEach(cs => {
          if (!Number.isNaN(cs.confirmed)) {
            this.totalActive += cs.active
            this.totalConfirmed += cs.confirmed
            this.totalDeaths += cs.deaths
            this.totalRecovered += cs.active
          }

        })

        this.initChart('c');
      },
      complete : ()=>{
        this.loading = false;
      }
    }
  )
}



updateChart(input: HTMLInputElement) {
console.log(input.value);
this.initChart(input.value)
}

initChart(caseType: string) {

this.datatable = [];
// this.datatable.push(["Country", "Cases"])

this.globalData.forEach(cs => {
  let value :number ;
  if (caseType == 'c')
    if (cs.confirmed > 2000)
      value = cs.confirmed

  if (caseType == 'a')
    if (cs.active > 2000)
      value = cs.active
  if (caseType == 'd')
    if (cs.deaths > 1000)
      value = cs.deaths

  if (caseType == 'r')
    if (cs.recovered > 2000)
        value = cs.recovered


    this.datatable.push([
        cs.country, value
      ])
})
console.log(this.datatable);

}
*/






global: boolean;
country: string;
data: GlobalModel;
dailyData: any[];
countries: any[];
lineChartData: any[] = [
  {
    data: [65, 64, 33, 44], label: 'Temp label'
  }
];
lineChartType = 'line';
lineChartLabels: any[] = [
  'Label01', 'Label01', 'Label03'
];
barChartType = 'bar';
barChartLabels: any[] = [
  'Infected', 'Recovered', 'Deaths'
];
barChartData: any[] = [
  { data: [65, 76, 33], label: 'Lable' }
];
////////////////////
//constructor(private formBuilder: FormBuilder,private api: ApiService){
//this.data = new GlobalModel();}

constructor(private api: ApiService) {
 this.data = new GlobalModel();
}

ngOnInit(): void {
 Highcharts.chart('container', this.options);
  this.global = true;
  this.fetchData();
  this.fetchCountries();
  this.fetchDailyData();
}

fetchData() {
  this.api.fetchData().subscribe((res: any[]) => {
    this.data.confiremd = res['confirmed']['value'];
    this.data.recovered = res['recovered']['value'];
    this.data.deaths = res['deaths']['value'];
    this.data.lastupdate = res['lastUpdate'];
  });
}

fetchCountries() {
  this.api.fetchCountries().subscribe((res: any[]) => {
    var countries = res['countries'];
    this.countries = countries.map((name) => name['name']);
  });
}

fetchDataByCountry(country: string) {
  this.api.fetchDataByCountry(country).subscribe((res: any[]) => {
    this.data.confiremd = res['confirmed']['value'];
    this.data.recovered = res['recovered']['value'];
    this.data.deaths = res['deaths']['value'];
    this.data.lastupdate = res['lastUpdate'];

    this.barChartData = [
      {
        data: [this.data.confiremd, this.data.recovered, this.data.deaths],
        label: 'Population'
      }
    ];
  });
}

fetchDailyData() {
  this.api.fetchDailyData().subscribe((res: any[]) => {
    this.lineChartLabels = res.map((date) => date['reportDate']);
    var infectedData = res.map((confirmed) => confirmed['totalConfirmed']);
    var deaths = res.map((deaths) => deaths['deaths']['total']);
    var recovered = res.map((rev) => rev);

    this.lineChartData = [
      {
        data: infectedData,
        label: 'Cas confirmé'
      },
      {
        data: deaths,
        label: 'Décès'
      }
    ];
  });
}

countryChanged(value: string) {
  this.country = value;
  if(value == 'global') {
    this.fetchData();
    this.global = true;
  } else {
    this.fetchDataByCountry(value);
    this.global = false;
  }
}

///////////////////////////////////



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



//ngOnInit(){
 // Highcharts.chart('container', this.options);
//}






}
