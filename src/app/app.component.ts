import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mm1Form!: FormGroup;
  mmmForm!: FormGroup;
  md1Form!: FormGroup;

  /*MM1*/
  lmm1 = -1;
  wmm1 = -1;
  lqmm1 = -1;
  wqmm1 = -1;
  romm1 = -1;
  p0mm1 = -1;
  pnmm1 = -1;
  totalServiciomm1 = -1;
  totalEsperasSistemamm1 = -1;
  totalEsperaColamm1 = -1;
  costoFinalSistemamm1 = -1;
  costoFinalColamm1 = -1;

  /*MMM*/
  lmmm = -1;
  wmmm = -1;
  lqmmm = -1;
  wqmmm = -1;
  rommm = -1;
  p0mmm = -1;
  pnmmm = -1;
  totalServiciommm = -1;
  totalEsperasSistemammm = -1;
  totalEsperaColammm = -1;
  costoFinalSistemammm = -1;
  costoFinalColammm = -1;

  /*MD1*/
  lmd1 = -1;
  wmmd1 = -1;
  lqmd1 = -1;
  wqmd1 = -1;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.mm1Form = this.formBuilder.group({
      llegadasPromedio: [''],
      atendidoPorPeriodo: [''],
      horasLaborales: [''],
      valorEvaluado: [''],
      numeroCanales: [''],
      costoServicio: [''],
      costoInsatisfaccion: [''],
      tipoCalculo: ['']
    });
    this.mmmForm = this.formBuilder.group({
      llegadasPromedio2: [''],
      atendidoPorPeriodo2: [''],
      valorEvaluado2: [''],
      horasLaborales2: [''],
      numeroCanales2: [''],
      costoServicio2: [''],
      costoInsatisfaccion2: [''],
      tipoCalculo2: ['']
    });
    this.md1Form = this.formBuilder.group({
      llegadasPromedio3: [''],
      atendidoPorPeriodo3: [''],
    });
  }

  calcularMM1() {
    var wmm1Temporal;
    var wqmm1Temporal;
    if (this.mm1Form.invalid) return;
    this.lmm1 = parseFloat((this.llegadasPromedio/(this.atendidoPorPeriodo-this.llegadasPromedio)).toFixed(2));
    this.wmm1 = 1/(this.atendidoPorPeriodo-this.llegadasPromedio);
    wmm1Temporal=this.wmm1;
    this.wmm1 = this.wmm1*60;
    this.lqmm1 = parseFloat((Math.pow(this.llegadasPromedio,2)/(this.atendidoPorPeriodo*(this.atendidoPorPeriodo-this.llegadasPromedio))).toFixed(2));
    this.wqmm1 = this.llegadasPromedio/(this.atendidoPorPeriodo)*(this.atendidoPorPeriodo-this.llegadasPromedio);
    wqmm1Temporal=this.wqmm1;
    this.wqmm1 = this.wqmm1*60;
    this.romm1 = parseFloat((this.llegadasPromedio/this.atendidoPorPeriodo).toFixed(2));
    this.p0mm1 = parseFloat((1-(this.llegadasPromedio/this.atendidoPorPeriodo)).toFixed(2));
    this.pnmm1 = parseFloat((Math.pow((this.llegadasPromedio/this.atendidoPorPeriodo),(this.valorEvaluado+1))).toFixed(2));

    this.totalServiciomm1 = this.costoServicio*this.numeroCanales;
    this.totalServiciomm1 = parseFloat((this.totalServiciomm1*this.horasLaborales).toFixed(2));

    this.totalEsperasSistemamm1 = this.llegadasPromedio*wmm1Temporal*this.costoInsatisfaccion;
    this.totalEsperasSistemamm1 = parseFloat((this.totalEsperasSistemamm1*this.horasLaborales).toFixed(2));

    this.totalEsperaColamm1 = this.llegadasPromedio*wqmm1Temporal*this.costoInsatisfaccion;
    this.totalEsperaColamm1 = parseFloat((this.totalEsperaColamm1*this.horasLaborales).toFixed(2));

    this.costoFinalSistemamm1 = parseFloat((this.totalServiciomm1+this.totalEsperasSistemamm1).toFixed(2));
    this.costoFinalColamm1 = parseFloat((this.totalServiciomm1+this.totalEsperaColamm1).toFixed(2));
  }

  calcularMMm() {
    // if (this.mmmForm.invalid) return;
    this.p0mmm = parseFloat((1/(((1/this.factorial(1))+((this.llegadasPromedio2/this.atendidoPorPeriodo2)^1))+(1/this.factorial(this.numeroCanales2))*((this.llegadasPromedio2/this.atendidoPorPeriodo2)^this.numeroCanales2)*((this.numeroCanales2*this.atendidoPorPeriodo2)/((this.numeroCanales2*this.atendidoPorPeriodo2)-this.llegadasPromedio2)))).toFixed(2));
    this.lmmm = parseFloat(((((this.llegadasPromedio2*this.atendidoPorPeriodo2)*Math.pow((this.llegadasPromedio2/this.atendidoPorPeriodo2),this.numeroCanales2))/((this.factorial(this.numeroCanales2-1)*(Math.pow((this.numeroCanales2*this.atendidoPorPeriodo2-this.llegadasPromedio2),2))*this.p0mmm+(this.llegadasPromedio2/this.atendidoPorPeriodo2))))).toFixed(2));
    this.wmmm = parseFloat((this.lmmm/this.llegadasPromedio2).toFixed(2));
    this.lqmmm = parseFloat((this.lmmm-this.llegadasPromedio2/this.atendidoPorPeriodo2).toFixed(2));
    this.wqmmm = parseFloat((this.lqmmm/this.llegadasPromedio2).toFixed(2));
    this.rommm = parseFloat((this.llegadasPromedio2/(this.numeroCanales2* this.llegadasPromedio2)).toFixed(2));
    this.totalServiciommm = parseFloat((this.costoServicio2*this.numeroCanales2).toFixed(2));
    this.totalEsperasSistemammm = parseFloat(( this.llegadasPromedio*this.wmmm*this.costoInsatisfaccion2).toFixed(2));
    this.totalEsperaColammm = parseFloat((this.llegadasPromedio*this.wqmmm*this.costoInsatisfaccion2).toFixed(2));
    this.costoFinalSistemammm = parseFloat((this.totalServiciommm +this.totalEsperasSistemammm).toFixed(2));
    this.costoFinalColammm = parseFloat((this.totalServiciommm +this.totalEsperaColammm).toFixed(2));
  }

  calcularMD1() {
    if (this.md1Form.invalid) return;
    this.lqmd1 = parseFloat((Math.pow(this.llegadasPromedio3,2)/(2*this.atendidoPorPeriodo3*(this.atendidoPorPeriodo3-this.llegadasPromedio3))).toFixed(2));
    this.wqmd1 = parseFloat((this.llegadasPromedio3/(2*this.atendidoPorPeriodo3*(this.atendidoPorPeriodo3-this.llegadasPromedio3))).toFixed(2));
    this.lmd1 = parseFloat((this.lqmd1 +(this.llegadasPromedio3/this.atendidoPorPeriodo3)).toFixed(2));
    this.wmmd1 = parseFloat((this.wqmd1+(1/this.atendidoPorPeriodo3)).toFixed(2));

  }



  factorial(num:Number){
    let fact = 1;
    for (let i = 1; i <= num; i++) {
            fact = fact * i;
    }
    return fact;
  }
  /*MM1*/
  get llegadasPromedio() { return this.mm1Form.get('llegadasPromedio')?.value  }
  get atendidoPorPeriodo() { return this.mm1Form.get('atendidoPorPeriodo')?.value }
  get valorEvaluado() { return this.mm1Form.get('valorEvaluado')?.value }
  get horasLaborales() { return this.mm1Form.get('horasLaborales')?.value }
  get numeroCanales() { return this.mm1Form.get('numeroCanales')?.value }
  get costoServicio() { return this.mm1Form.get('costoServicio')?.value }
  get costoInsatisfaccion() { return this.mm1Form.get('costoInsatisfaccion')?.value }
  get tipoCalculo() { return this.mm1Form.get('tipoCalculo')?.value }
  /*MMm*/
  get llegadasPromedio2() { return this.mmmForm.get('llegadasPromedio2')?.value }
  get atendidoPorPeriodo2() { return this.mmmForm.get('atendidoPorPeriodo2')?.value }
  get horasLaborales2() { return this.mmmForm.get('horasLaborales2')?.value }
  get numeroCanales2() { return this.mmmForm.get('numeroCanales2')?.value }
  get costoServicio2() { return this.mmmForm.get('costoServicio2')?.value }
  get costoInsatisfaccion2() { return this.mmmForm.get('costoInsatisfaccion2')?.value }
  get tipoCalculo2() { return this.mmmForm.get('tipoCalculo2')?.value }
  /*MD1*/
  get llegadasPromedio3() { return this.md1Form.get('llegadasPromedio3')?.value }
  get atendidoPorPeriodo3() { return this.md1Form.get('atendidoPorPeriodo3')?.value }

}
