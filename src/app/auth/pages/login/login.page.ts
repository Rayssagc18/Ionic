import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  /*Construtor vai subir a tecnologia FormBuilder e dar o apelido fb*/

  ngOnInit(): void {
    this.createForm(); /*Criar um método vazio- void
    e demos um  nome*/
  }
  private createForm(): void {
    this.authForm = this.fb.group({
      email: [' ', [Validators.required, Validators.email]],
      /*validação required (Não aceita nulo), valida email*/
      password: [' ', [Validators.required, Validators.minLength(6)]]
      /*Validar somente acima de 6 caracteres*/
    });
  }
}

onSubmit(): void {
  console.log('AutoForm: ', this.authForm.value);
  /*console é para sair na tela, como acontece no console no Java */
}
