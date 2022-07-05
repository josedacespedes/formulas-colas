import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mm1Form!: FormGroup;
  title = 'formulas-colas';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.mm1Form = this.formBuilder.group({
      llegadasPromedio: ['', [Validators.required]],
      atendidoPorPeriodo: ['', [Validators.required]],
      valorEvaluado: ['', [Validators.required]],
      numeroCanales: [''],
      costoServicio: [''],
      costoInsatisfaccion: ['']
    });
  }

  calcularMM1() {
    alert("hola");
  }


  get llegadasPromedio() { return this.mm1Form.get('llegadasPromedio') as FormControl; }
  get atendidoPorPeriodo() { return this.mm1Form.get('atendidoPorPeriodo') as FormControl; }
  get valorEvaluado() { return this.mm1Form.get('valorEvaluado') as FormControl; }
  get numeroCanales() { return this.mm1Form.get('numeroCanales') as FormControl; }
  get costoServicio() { return this.mm1Form.get('costoServicio') as FormControl; }
  get costoInsatisfaccion() { return this.mm1Form.get('costoInsatisfaccion') as FormControl; }
}
