import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

@Injectable()
export class ViewComponent implements OnInit {
    

    optionMenuLateral: any = [
        { id:"1", name: "Drop"},
        { id:"2", name: "Incidencias"},
        { id:"3", name: "Carpetas"}
    ]
    optionWithMenuLateral: any = [

        { id:"1", name: "Mesas", group:"1"},
        { id:"2", name: "Maquinas",group:"1"},

        { id:"3", name: "Maquinas",group:"2"},
        { id:"4", name: "Generales",group:"2"},

        { id:"5", name: "Willian",group:"3"},
        { id:"6", name: "Manuel",group:"3"},
        { id:"7", name: "Clientes",group:"3"}
    ]
    optionWithMenuLateralClone: any = [

        { id:"1", name: "Mesas", group:"1"},
        { id:"2", name: "Maquinas",group:"1"},

        { id:"3", name: "Maquinas",group:"2"},
        { id:"4", name: "Generales",group:"2"},

        { id:"5", name: "Willian",group:"3"},
        { id:"6", name: "Manuel",group:"3"},
        { id:"7", name: "Clientes",group:"3"}
    ]
    tiposJuegosCasino = [
        { id:"1", name: "Bacarat"},
        { id:"2", name: "Poker"},
        { id:"3", name: "Blackjack"},
        { id:"4", name: "Ruleta Americana"},
        { id:"5", name: "Texas Bonus"},
    ]
    mesasCasino: any = [
        { id:"1", name: "Ruleta Americana 1", groupGame:'4'},
        { id:"2", name: "Ruleta Americana 2", groupGame:'4'},
        { id:"3", name: "Poker 1", groupGame:'2'},
        { id:"4", name: "Poker 2", groupGame:'2'},
        { id:"6", name: "Blackjack 1", groupGame:'3'},
        { id:"7", name: "Blackjack 2", groupGame:'3'},
        { id:"8", name: "Blackjack 3", groupGame:'3'},
        { id:"9", name: "Bacarat 1", groupGame:'1'},
        { id:"10", name: "Bacarat 2", groupGame:'1'},
        { id:"11", name: "Texas Bonus", groupGame:'5'}
    ]
    denominacionBilletes: any = [
        { id:"1", name: "100"},
        { id:"2", name: "50"},
        { id:"3", name: "20"},
        { id:"4", name: "10"},
        { id:"6", name: "5"},
        { id:"7", name: "1"}
    ]
    rangoMaquinas: any = [
        { id:"1", name: "Rango 1"},
        { id:"2", name: "Rango 2"},
        { id:"3", name: "Rango 3"},
        { id:"4", name: "Rango 4"}
    ]
    tecnicos: any = [
        { id:"1", name: "Daniel"},
        { id:"2", name: "Leonardo"},
        { id:"3", name: "Jairo"},
    ]
    novedadesMaquinas: any = [
        { id:"1", name: "Intervencion"},
        { id:"2", name: "Reinicio"},
        { id:"3", name: "Billete atascado"},
        { id:"4", name: "Billetera"},
        { id:"5", name: "Error en botones"},
        { id:"6", name: "Apertura"},
        { id:"7", name: "Encendido"},
        { id:"8", name: "Removicion de staker"},
        { id:"9", name: "Pantalla partida"},
        { id:"10", name: "Operativa"},
        { id:"11", name: "Fuera de servicio"},
        { id:"11", name: "Error de billetera"},
    ]
    novedadesGenerales: any = [
        { id:"1", name: "Prioridad 1", description: "Robo, Urto, Cliente Problematico, Trabajador Problematico, Pelea, Conflicto, Despidos, Renuncias."},
        { id:"2", name: "Prioridad 2", description: "Eventos, Autorizaciones, Permisos, Proveedores."},
        { id:"3", name: "Prioridad 3", description: "Drop, Cañota, Llaves, traslados."}
    ]
    maquinas: any = [

        { id:"1", name: "2",group:"1"},
        { id:"2", name: "3",group:"1"},
        { id:"3", name: "4",group:"1"},
        { id:"4", name: "5",group:"1"},
        { id:"5", name: "6",group:"1"},
        { id:"6", name: "7",group:"1"},
        { id:"7", name: "8",group:"1"},
        { id:"8", name: "9",group:"1"},
        { id:"9", name: "10",group:"1"},
        { id:"10", name: "11",group:"1"},
        { id:"11", name: "12",group:"1"},
        { id:"12", name: "14",group:"1"},
        { id:"13", name: "15",group:"1"},
        { id:"14", name: "165",group:"1"},

        { id:"15", name: "35",group:"2"},
        { id:"16", name: "36",group:"2"},
        { id:"17", name: "37",group:"2"},
        { id:"18", name: "38",group:"2"},
        { id:"19", name: "39",group:"2"},
        { id:"20", name: "41",group:"2"},
        { id:"21", name: "42",group:"2"},
        { id:"22", name: "44",group:"2"},
        { id:"23", name: "45",group:"2"},
        { id:"24", name: "46",group:"2"},

        { id:"25", name: "47",group:"3"},
        { id:"26", name: "48",group:"3"},
        { id:"27", name: "49",group:"3"},
        { id:"28", name: "50",group:"3"},
        { id:"29", name: "51",group:"3"},
        { id:"30", name: "52",group:"3"},
        { id:"31", name: "53",group:"3"},
        { id:"32", name: "54",group:"3"},
        { id:"33", name: "55",group:"3"},
        { id:"34", name: "56",group:"3"},
        { id:"35", name: "60",group:"3"},
        { id:"36", name: "61",group:"3"},
        { id:"37", name: "62",group:"3"},
        { id:"38", name: "83",group:"3"},
        { id:"39", name: "84",group:"3"},
        { id:"40", name: "85",group:"3"},
        { id:"41", name: "86",group:"3"},
        { id:"42", name: "87",group:"3"},
        { id:"43", name: "88",group:"3"},
        { id:"44", name: "109",group:"3"},
        { id:"45", name: "110",group:"3"},
        { id:"46", name: "111",group:"3"},

        { id:"47", name: "13",group:"4"},
        { id:"48", name: "34",group:"4"},
        { id:"49", name: "35",group:"4"},
        { id:"50", name: "36",group:"4"},
        { id:"51", name: "57",group:"4"},
        { id:"52", name: "58",group:"4"},
        { id:"53", name: "59",group:"4"},
        { id:"54", name: "63",group:"4"},
        { id:"55", name: "64",group:"4"},
        { id:"56", name: "65",group:"4"},
        { id:"57", name: "66",group:"4"},
        { id:"58", name: "67",group:"4"},
        { id:"59", name: "68",group:"4"},
        { id:"60", name: "71",group:"4"},
        { id:"61", name: "72",group:"4"},
        { id:"62", name: "89",group:"4"},
        { id:"63", name: "90",group:"4"},
        { id:"64", name: "91",group:"4"},
        { id:"65", name: "92",group:"4"},
        { id:"66", name: "93",group:"4"},
        { id:"67", name: "94",group:"4"},
        { id:"68", name: "95",group:"4"},
        { id:"69", name: "96",group:"4"},
        { id:"70", name: "97",group:"4"},
        { id:"71", name: "98",group:"4"},
        { id:"72", name: "103",group:"4"},
        { id:"73", name: "104",group:"4"},
        { id:"74", name: "105",group:"4"},
        { id:"75", name: "106",group:"4"},
        { id:"76", name: "107",group:"4"},
        { id:"77", name: "108",group:"4"},
        { id:"78", name: "112",group:"4"},
        { id:"79", name: "113",group:"4"},
        { id:"80", name: "114",group:"4"},
        { id:"81", name: "123",group:"4"},
        { id:"82", name: "125",group:"4"},
        { id:"83", name: "176",group:"4"},
        { id:"84", name: "177",group:"4"},
        { id:"85", name: "179",group:"4"},
        { id:"86", name: "180",group:"4"},
        { id:"87", name: "140",group:"4"},
        { id:"88", name: "141",group:"4"},
        { id:"89", name: "142",group:"4"},
        { id:"90", name: "143",group:"4"},
        { id:"91", name: "144",group:"4"},
        { id:"92", name: "145",group:"4"},
        { id:"93", name: "146",group:"4"},
        { id:"94", name: "147",group:"4"},

    ]
    clientesCarpetas = [
        //willian
        { id:"0", name: "Financista",group:"5"},
        { id:"1", name: "Tony",group:"5"},
        { id:"2", name: "Super",group:"5"},
        { id:"3", name: "Tiger",group:"5"},
        { id:"4", name: "Juan",group:"5"},
        { id:"5", name: "Antonio",group:"5"},
        { id:"6", name: "Daniel",group:"5"},
        { id:"7", name: "Lu",group:"5"},
        { id:"8", name: "Loco",group:"5"},
        { id:"9", name: "Alejandro",group:"5"},
        { id:"10", name: "Francisco",group:"5"},
        { id:"11", name: "Leo",group:"5"},
        { id:"12", name: "Lucky",group:"5"},
        { id:"13", name: "Jose",group:"5"},
        { id:"14", name: "Frank",group:"5"},
        { id:"15", name: "Maulin",group:"5"},
        { id:"16", name: "Lee",group:"5"},
        { id:"17", name: "Ale",group:"5"},
        { id:"18", name: "Cabezon",group:"5"},
        { id:"19", name: "Victor",group:"5"},
        { id:"20", name: "Jorge",group:"5"},
        { id:"21", name: "Jimy",group:"5"},
        { id:"22", name: "Vicente",group:"5"},
        { id:"23", name: "Julio",group:"5"},
        { id:"24", name: "Angel",group:"5"},
        { id:"25", name: "Jonny",group:"5"},
        { id:"26", name: "Santiago",group:"5"},
        { id:"27", name: "Freddy",group:"5"},
        { id:"28", name: "Carlos",group:"5"},
        { id:"29", name: "Viejo",group:"5"},
        { id:"30", name: "Zhema",group:"5"},
        { id:"31", name: "Ying",group:"5"},
        { id:"32", name: "Manuel",group:"5"},
        { id:"33", name: "Samuel",group:"5"},
        { id:"34", name: "Moah",group:"5"},
        { id:"35", name: "Frank 2",group:"5"},
        { id:"36", name: "Lian",group:"5"},
        { id:"36", name: "Tio",group:"5"},
        //Manuel   
        { id:"2", name: "Manuel",group:"6"},
        //Clientes 
        { id:"3", name: "Clientes",group:"7"}
    ]
    tiposMovimientosCarpetas = [
        { id:"1", name: "Marca"},
        { id:"2", name: "Devolucion"},
        { id:"3", name: "Pago"},
        { id:"4", name: "Abono"},
    ]

    @ViewChild("first_focus") first_focus!: ElementRef;
    queryParamsAll: any
    
    /* C H A R T */

    tableDropMesasChart:any = []
    tableDropMaquinasChart:any = []
    tableIncidenciasMaquinasChart:any = []

    /* --- --- --- */
    /* --- --- --- */

   
    /* T A B L E S */

    tableDropMesas:any = [];
    tableDropMaquinas:any = [];
    tableIncidenciasMaquinas:any = [];

    tableDropMesasTotal:number = 0
    tableDropMaquinasTotal:number = 0
    tableDropMaquinasTotalArr:any = []

    /* --- --- --- */
    /* --- --- --- */

    /* F O R M   G R O U P */

    dropFormMesas: FormGroup
    dropFormMaquinas: FormGroup
    incidenciasFormMaquinas: FormGroup
    
    /* --- --- --- */
    /* --- --- --- */

    /* N E W   G R O U P */

    
    newGameGroupDropMesas:any = []
    newGameGroupDropMaquinas:any = []
    newGameGroupIncidenciasMaquinas:any = []

    /* --- --- --- */
    /* --- --- --- */

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private fb: FormBuilder
    ){

        this._route.queryParamMap.subscribe((res:any) => {
            this.optionWithMenuLateral = this.optionWithMenuLateral.filter( (i:any ) => i.group === res.params.optionMenuLateral  )
            this.queryParamsAll = { optionWithMenuLateral: res.params.optionWithMenuLateral, optionMenuLateral: res.params.optionMenuLateral }
        })


        /* F O R M   B U I L D */

        let payloadDropFormMesas: any = {}
        payloadDropFormMesas  = { mesa:  ['', Validators.required], ...payloadDropFormMesas }
        this.denominacionBilletes.forEach(({name}:any) => {
            payloadDropFormMesas  = { [name]:  ['', Validators.pattern(/^-?(0|[1-9]\d*)?$/)], ...payloadDropFormMesas }
        });
        this.dropFormMesas = this.fb.group(payloadDropFormMesas);

        let payloadDropFormMaquinas: any = {}
        payloadDropFormMaquinas  = { maquina:  ['', Validators.required], ...payloadDropFormMaquinas }
        this.denominacionBilletes.forEach(({name}:any) => {
            payloadDropFormMaquinas  = { [name]:  ['', Validators.pattern(/^-?(0|[1-9]\d*)?$/)], ...payloadDropFormMaquinas }
        });
        this.dropFormMaquinas = this.fb.group(payloadDropFormMaquinas);

        let payloadIndicenciasFormMaquinas: any = {}
        payloadIndicenciasFormMaquinas  = { 
            maquina:  ['', Validators.required],
            tecnico:  ['', Validators.required],
            novedad:  ['', Validators.required]
        }
        this.incidenciasFormMaquinas = this.fb.group(payloadIndicenciasFormMaquinas);

        /* --- --- --- */
        /* --- --- --- */

    }

    ngOnInit() { }
    
    setParamsQuery(type:string,menu:any){
        if(type==='optionMenuLateral'){
            this.optionWithMenuLateral = this.optionWithMenuLateralClone
            this.optionWithMenuLateral = this.optionWithMenuLateral.filter( (i:any ) => i.group === menu.id  )
            this.queryParamsAll = { optionMenuLateral: menu.id, optionWithMenuLateral: this.queryParamsAll?.optionWithMenuLateral  }
            let optionWithMenuLateralGroup = (this.optionWithMenuLateral.find( ( i:any ) => i.id === this.queryParamsAll.optionWithMenuLateral))?.group
            if( parseInt(optionWithMenuLateralGroup) !== parseInt(this.queryParamsAll.optionMenuLateral) ){
                this._router.navigate(['.'], { relativeTo: this._route, queryParams: { optionMenuLateral: menu.id, optionWithMenuLateral: this.optionWithMenuLateral[0].id },queryParamsHandling: "merge" });
            }
        }
        if(type==='optionWithMenuLateral'){
            this.queryParamsAll = { optionWithMenuLateral: menu.id, optionMenuLateral: this.queryParamsAll?.optionMenuLateral }
        }
    }


    /* E D I T */

    setEditOrViewDataMesas(){
        this.dropFormMesas.controls['100'].setValue('')
        this.dropFormMesas.controls['50'].setValue('')
        this.dropFormMesas.controls['20'].setValue('')
        this.dropFormMesas.controls['10'].setValue('')
        this.dropFormMesas.controls['5'].setValue('')
        this.dropFormMesas.controls['1'].setValue('')
        if( this.tableDropMesas.length > 0 ){
            let payloadDropFormMesas = this.tableDropMesas.find( ( i:any) => i.mesa === this.dropFormMesas.value.mesa)
            if( payloadDropFormMesas ){
                this.dropFormMesas.controls['100'].setValue(payloadDropFormMesas['100'])
                this.dropFormMesas.controls['50'].setValue(payloadDropFormMesas['50'])
                this.dropFormMesas.controls['20'].setValue(payloadDropFormMesas['20'])
                this.dropFormMesas.controls['10'].setValue(payloadDropFormMesas['10'])
                this.dropFormMesas.controls['5'].setValue(payloadDropFormMesas['5'])
                this.dropFormMesas.controls['1'].setValue(payloadDropFormMesas['1'])
            }
        }
    }

    setEditOrViewDataMaquinas(){
        this.dropFormMaquinas.controls['100'].setValue('')
        this.dropFormMaquinas.controls['50'].setValue('')
        this.dropFormMaquinas.controls['20'].setValue('')
        this.dropFormMaquinas.controls['10'].setValue('')
        this.dropFormMaquinas.controls['5'].setValue('')
        this.dropFormMaquinas.controls['1'].setValue('')
        if( this.tableDropMaquinas.length > 0 ){
            let payloadDropFormMaquinas = this.tableDropMaquinas.find( ( i:any) => i.maquina === this.dropFormMaquinas.value.maquina)
            if( payloadDropFormMaquinas ){
                this.dropFormMaquinas.controls['100'].setValue(payloadDropFormMaquinas['100'])
                this.dropFormMaquinas.controls['50'].setValue(payloadDropFormMaquinas['50'])
                this.dropFormMaquinas.controls['20'].setValue(payloadDropFormMaquinas['20'])
                this.dropFormMaquinas.controls['10'].setValue(payloadDropFormMaquinas['10'])
                this.dropFormMaquinas.controls['5'].setValue(payloadDropFormMaquinas['5'])
                this.dropFormMaquinas.controls['1'].setValue(payloadDropFormMaquinas['1'])
            }
        }
    }

    /* --- --- --- */
    /* --- --- --- */


    /* S U B M I T */
    
    submitDropMesas(){
        if(this.dropFormMesas.valid){
            let mesaCurrent = this.mesasCasino.find( ( i:any) => i.id === this.dropFormMesas.value.mesa)
            if( this.dropFormMesas.controls['100'].value  === ''){ this.dropFormMesas.controls['100'].setValue('0') }
            if( this.dropFormMesas.controls['50'].value  === ''){ this.dropFormMesas.controls['50'].setValue('0') }
            if( this.dropFormMesas.controls['20'].value  === ''){ this.dropFormMesas.controls['20'].setValue('0') }
            if( this.dropFormMesas.controls['10'].value  === ''){ this.dropFormMesas.controls['10'].setValue('0') }
            if( this.dropFormMesas.controls['5'].value  === ''){ this.dropFormMesas.controls['5'].setValue('0') }
            if( this.dropFormMesas.controls['1'].value  === ''){ this.dropFormMesas.controls['1'].setValue('0') }
            if(this.tableDropMesas.find( ( i:any) => i.mesa === this.dropFormMesas.value.mesa ) ){
                let index = this.tableDropMesas.findIndex( ( i:any) => i.mesa === this.dropFormMesas.value.mesa )
                this.tableDropMesas[index] = {name:mesaCurrent.name,groupGame:mesaCurrent.groupGame,...(this.dropFormMesas.value)}
            }else{
                this.tableDropMesas.push({name:mesaCurrent.name,groupGame:mesaCurrent.groupGame,...(this.dropFormMesas.value)})
            }

            this.first_focus.nativeElement.focus();
            this.dropFormMesas.controls['mesa'].setValue('')
            this.denominacionBilletes.forEach(({name}:any) => {
                this.dropFormMesas.controls[name].setValue('')
            });
            
            this.tableDropMesasTotal=this.tableDropMesas.reduce( (acc:any, obj:any) => acc + ( (obj['100']*100)+(obj['50']*50)+(obj['20']*20)+(obj['10']*10)+(obj['5']*5)+(obj['1']*1) ) , 0)
            this.tableDropMesasChart = []


            this.newGameGroupDropMesas = []
            let payload: { label:string, barChartData: ChartConfiguration<'bar'>['data'], barChartOptions: ChartConfiguration<'bar'>['options'], barChartType: ChartType, barChartPlugins: any }
            this.tiposJuegosCasino.forEach((elementTypeGame:any) => {
                let dataGroup = this.tableDropMesas.filter( (i:any) => i.groupGame === elementTypeGame.id ).reduce( (acc:any, obj:any) => acc + ( (obj['100']*100)+(obj['50']*50)+(obj['20']*20)+(obj['10']*10)+(obj['5']*5)+(obj['1']*1) ) , 0)
                this.newGameGroupDropMesas.push({ data: [ dataGroup ], label: elementTypeGame.name })
            });   
            payload = {
                barChartData: {
                    labels: [ 'Monto $' ],
                    datasets: this.newGameGroupDropMesas
                },
                barChartOptions: { 
                    responsive: true,
                    scales: { x: {}, y: { } },
                    plugins: { legend: { display: true }, datalabels: { anchor: 'end', align: 'end' }, },
                },
                barChartType: 'bar',
                barChartPlugins: [DataLabelsPlugin],
                label: 'Mesas'
            }
            this.tableDropMesasChart.push(payload) 


            this.tiposJuegosCasino.forEach((elementTypeGame:any) => {
                this.newGameGroupDropMesas = []
                this.tableDropMesas.forEach((element:any) => {
                    if( elementTypeGame.id === element.groupGame ){
                        this.newGameGroupDropMesas.push({ data: [ (element['100']*100)+(element['50']*50)+(element['20']*20)+(element['10']*10)+(element['5']*5)+(element['1']*1) ], label: element.name })
                    }
                });
                let payload: { label:string, barChartData: ChartConfiguration<'bar'>['data'], barChartOptions: ChartConfiguration<'bar'>['options'], barChartType: ChartType, barChartPlugins: any }
                    payload = {
                        barChartData: {
                            labels: [ 'Monto $' ],
                            datasets: this.newGameGroupDropMesas
                        },
                        barChartOptions: { 
                            responsive: true,
                            scales: { x: {}, y: { } },
                            plugins: { legend: { display: true }, datalabels: { anchor: 'end', align: 'end' }, },
                        },
                        barChartType: 'bar',
                        barChartPlugins: [DataLabelsPlugin],
                        label: elementTypeGame?.name
                    }
                this.tableDropMesasChart.push(payload)
            });    
        }
        
    }

    submitDropMaquinas(){
        if(this.dropFormMaquinas.valid){
            let maquinaCurrent = this.maquinas.find( ( i:any) => i.id === this.dropFormMaquinas.value.maquina)
            if( this.dropFormMaquinas.controls['100'].value  === ''){ this.dropFormMaquinas.controls['100'].setValue('0') }
            if( this.dropFormMaquinas.controls['50'].value  === ''){ this.dropFormMaquinas.controls['50'].setValue('0') }
            if( this.dropFormMaquinas.controls['20'].value  === ''){ this.dropFormMaquinas.controls['20'].setValue('0') }
            if( this.dropFormMaquinas.controls['10'].value  === ''){ this.dropFormMaquinas.controls['10'].setValue('0') }
            if( this.dropFormMaquinas.controls['5'].value  === ''){ this.dropFormMaquinas.controls['5'].setValue('0') }
            if( this.dropFormMaquinas.controls['1'].value  === ''){ this.dropFormMaquinas.controls['1'].setValue('0') }
            if(this.tableDropMaquinas.find( ( i:any) => i.maquina === this.dropFormMaquinas.value.maquina ) ){
                let index = this.tableDropMaquinas.findIndex( ( i:any) => i.maquina === this.dropFormMaquinas.value.maquina )
                this.tableDropMaquinas[index] = {name:maquinaCurrent.name,groupGame:maquinaCurrent.group,...(this.dropFormMaquinas.value)}
            }else{
                this.tableDropMaquinas.push({name:maquinaCurrent.name,groupGame:maquinaCurrent.group,...(this.dropFormMaquinas.value)})
            }

            this.first_focus.nativeElement.focus();
            this.dropFormMaquinas.controls['maquina'].setValue('')
            this.denominacionBilletes.forEach(({name}:any) => {
                this.dropFormMaquinas.controls[name].setValue('')
            });
            
            this.tableDropMaquinasTotalArr = []
            this.rangoMaquinas.forEach((element:any) => {
                this.tableDropMaquinasTotalArr.push({ groupGame: element.id,
                    total: this.tableDropMaquinas.filter( (i:any) => i.groupGame === element.id ).reduce( (acc:any, obj:any) => acc + ( (obj['100']*100)+(obj['50']*50)+(obj['20']*20)+(obj['10']*10)+(obj['5']*5)+(obj['1']*1) ) , 0)
                })
            });


            this.tableDropMaquinasTotal=this.tableDropMaquinas.reduce( (acc:any, obj:any) => acc + ( (obj['100']*100)+(obj['50']*50)+(obj['20']*20)+(obj['10']*10)+(obj['5']*5)+(obj['1']*1) ) , 0)
            this.tableDropMaquinasChart = []



            this.newGameGroupDropMaquinas = []
            let payload: { label:string, barChartData: ChartConfiguration<'bar'>['data'], barChartOptions: ChartConfiguration<'bar'>['options'], barChartType: ChartType, barChartPlugins: any }
            this.rangoMaquinas.forEach((elementTypeGame:any) => {
                let dataGroup = this.tableDropMaquinas.filter( (i:any) => i.groupGame === elementTypeGame.id ).reduce( (acc:any, obj:any) => acc + ( (obj['100']*100)+(obj['50']*50)+(obj['20']*20)+(obj['10']*10)+(obj['5']*5)+(obj['1']*1) ) , 0)
                this.newGameGroupDropMaquinas.push({ data: [ dataGroup ], label: elementTypeGame.name })
            });   
            payload = {
                barChartData: {
                    labels: [ 'Monto $' ],
                    datasets: this.newGameGroupDropMaquinas
                },
                barChartOptions: { 
                    responsive: true,
                    scales: { x: {}, y: { } },
                    plugins: { legend: { display: true }, datalabels: { anchor: 'end', align: 'end' }, },
                },
                barChartType: 'bar',
                barChartPlugins: [DataLabelsPlugin],
                label: 'Rangos'
            }
            this.tableDropMaquinasChart.push(payload) 






            this.rangoMaquinas.forEach((elementTypeGame:any) => {
                this.newGameGroupDropMaquinas = []
                this.tableDropMaquinas.forEach((element:any) => {
                    if( elementTypeGame.id === element.groupGame ){
                        this.newGameGroupDropMaquinas.push({ data: [ (element['100']*100)+(element['50']*50)+(element['20']*20)+(element['10']*10)+(element['5']*5)+(element['1']*1) ], label: element.name })
                    }
                });
                let payload: { label:string, barChartData: ChartConfiguration<'bar'>['data'], barChartOptions: ChartConfiguration<'bar'>['options'], barChartType: ChartType, barChartPlugins: any }
                    payload = {
                        barChartData: {
                            labels: [ 'Monto $' ],
                            datasets: this.newGameGroupDropMaquinas
                        },
                        barChartOptions: { 
                            responsive: true,
                            scales: { x: {}, y: { } },
                            plugins: { legend: { display: true }, datalabels: { anchor: 'end', align: 'end' }, },
                        },
                        barChartType: 'bar',
                        barChartPlugins: [DataLabelsPlugin],
                        label: elementTypeGame?.name
                    }
                this.tableDropMaquinasChart.push(payload)
            });    
        }
        
    }

    submitIncidenciasMaquinas(){
        if(this.incidenciasFormMaquinas.valid){

            let maquinaCurrent = this.maquinas.find( ( i:any) => i.id === this.incidenciasFormMaquinas.value.maquina)
            let tecnicoCurrent = this.tecnicos.find( ( i:any) => i.id === this.incidenciasFormMaquinas.value.tecnico)
            let rangoCurrent = this.rangoMaquinas.find( ( i:any) => i.id === maquinaCurrent.group)
            let novedadCurrent = this.novedadesMaquinas.find( ( i:any) => i.id === this.incidenciasFormMaquinas.value.novedad)

            this.tableIncidenciasMaquinas.push({
                nameMaquina:maquinaCurrent.name,nameTecnico:tecnicoCurrent.name,idRango:rangoCurrent.id,nameRango:rangoCurrent.name,nameNovedad:novedadCurrent.name,groupGame: novedadCurrent.id,
                ...(this.incidenciasFormMaquinas.value)
            })

            this.first_focus.nativeElement.focus();
            this.incidenciasFormMaquinas.controls['maquina'].setValue('')
            this.incidenciasFormMaquinas.controls['tecnico'].setValue('')
            this.incidenciasFormMaquinas.controls['novedad'].setValue('')
            
            
            this.tableIncidenciasMaquinasChart = []



            this.newGameGroupIncidenciasMaquinas = []
            let payload: { label:string, barChartData: ChartConfiguration<'bar'>['data'], barChartOptions: ChartConfiguration<'bar'>['options'], barChartType: ChartType, barChartPlugins: any }
            this.novedadesMaquinas.forEach((elementTypeGame:any) => {
                let dataGroup = this.tableIncidenciasMaquinas.filter( (i:any) => i.groupGame == elementTypeGame.id ).reduce((acc:any)=>acc + 1, 0)
                this.newGameGroupIncidenciasMaquinas.push({ data: [ dataGroup ], label: elementTypeGame.name })
            });   
            payload = {
                barChartData: {
                    labels: [ 'Novedades globales' ],
                    datasets: this.newGameGroupIncidenciasMaquinas
                },
                barChartOptions: { 
                    responsive: true,
                    scales: { x: {}, y: { } },
                    plugins: { legend: { display: true }, datalabels: { anchor: 'end', align: 'end' }, },
                },
                barChartType: 'bar',
                barChartPlugins: [DataLabelsPlugin],
                label: 'Novedades'
            }
            this.tableIncidenciasMaquinasChart.push(payload) 





            this.newGameGroupIncidenciasMaquinas = []
            let payloadTecnicos: { label:string, barChartData: ChartConfiguration<'bar'>['data'], barChartOptions: ChartConfiguration<'bar'>['options'], barChartType: ChartType, barChartPlugins: any }
            this.tecnicos.forEach((elementTypeGame:any) => {
                let dataGroup = this.tableIncidenciasMaquinas.filter( (i:any) => i.tecnico == elementTypeGame.id ).reduce((acc:any)=>acc + 1, 0)
                this.newGameGroupIncidenciasMaquinas.push({ data: [ dataGroup ], label: elementTypeGame.name })
            });   
            payloadTecnicos = {
                barChartData: {
                    labels: [ 'Asistencias totales por tecnicos' ],
                    datasets: this.newGameGroupIncidenciasMaquinas
                },
                barChartOptions: { 
                    responsive: true,
                    scales: { x: {}, y: { } },
                    plugins: { legend: { display: true }, datalabels: { anchor: 'end', align: 'end' }, },
                },
                barChartType: 'bar',
                barChartPlugins: [DataLabelsPlugin],
                label: 'Tecnicos'
            }
            this.tableIncidenciasMaquinasChart.push(payloadTecnicos) 





            this.newGameGroupIncidenciasMaquinas = []
            let payloadRangos: { label:string, barChartData: ChartConfiguration<'bar'>['data'], barChartOptions: ChartConfiguration<'bar'>['options'], barChartType: ChartType, barChartPlugins: any }
            
            this.rangoMaquinas.forEach((elementTypeGame:any) => {
                let dataGroup = this.tableIncidenciasMaquinas.filter( (i:any) => i.idRango == elementTypeGame.id ).reduce((acc:any)=>acc + 1, 0)
                this.newGameGroupIncidenciasMaquinas.push({ data: [ dataGroup ], label: elementTypeGame.name })
            });   
            
            payloadRangos = {
                barChartData: {
                    labels: [ 'Novedades totales por rangos' ],
                    datasets: this.newGameGroupIncidenciasMaquinas
                },
                barChartOptions: { 
                    responsive: true,
                    scales: { x: {}, y: { } },
                    plugins: { legend: { display: true }, datalabels: { anchor: 'end', align: 'end' }, },
                },
                barChartType: 'bar',
                barChartPlugins: [DataLabelsPlugin],
                label: 'Rangos'
            }
            this.tableIncidenciasMaquinasChart.push(payloadRangos) 




            
            this.rangoMaquinas.forEach((elementTypeGame:any) => {
                this.newGameGroupIncidenciasMaquinas = []
                this.novedadesMaquinas.forEach((element:any) => {
                    this.tableIncidenciasMaquinas.forEach((elementTable:any) => {
                        if( elementTable.idRango == elementTypeGame.id &&  elementTable.novedad == element.id ){
                            let dataGroup = this.tableIncidenciasMaquinas.filter( (i:any) => i.idRango == elementTypeGame.id &&  i.novedad == element.id ).reduce((acc:any)=>acc + 1, 0)
                            this.newGameGroupIncidenciasMaquinas.push({ data: [ dataGroup ], label: element.name })
                        }
                    });
                });
                let payload: { label:string, barChartData: ChartConfiguration<'bar'>['data'], barChartOptions: ChartConfiguration<'bar'>['options'], barChartType: ChartType, barChartPlugins: any }
                    payload = {
                        barChartData: {
                            labels: [ 'Incidencias totales por rango' ],
                            datasets: this.newGameGroupIncidenciasMaquinas
                        },
                        barChartOptions: { 
                            responsive: true,
                            scales: { x: {}, y: { } },
                            plugins: { legend: { display: true }, datalabels: { anchor: 'end', align: 'end' }, },
                        },
                        barChartType: 'bar',
                        barChartPlugins: [DataLabelsPlugin],
                        label: elementTypeGame?.name
                    }
                this.tableIncidenciasMaquinasChart.push(payload)
            });  






        }
        
    }
  
    /* --- --- --- */
    /* --- --- --- */

}
