import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


const client1 ={
  name: 'Sergio',
  gender: 'male',
  age: '18',
  address: 'Guatemala, guatemala'
}

const client2 ={
  name: 'Magali',
  gender: 'female',
  age: '45',
  address: 'Guatemala, guatemala'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent,
            I18nSelectPipe,
            I18nPluralPipe,
            SlicePipe,
            JsonPipe,
            UpperCasePipe,
            KeyValuePipe,
            TitleCasePipe,
            AsyncPipe
          ],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export default class UncommonPageComponent {

  //i8nselect
  client = signal(client1)

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    if(this.client()===client1){
      this.client.set(client2)
      return
    }
    this.client.set(client1)
  }
      // Forma de hacerlo con if/else
  // changeClient(){
  //   if(this.client()===client1){
  //     this.client.set(client2)
  //   } else{
  //     this.client.set(client1)
  //   }
  // }


  // I18nPluralPipe

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Sergio',
    'Natalia',
    'Marcela',
    'Carlos',
    'Mateo',
    'Andres'
  ])

  deleteClient(){
    this.clients.update(prev => prev.slice(1))
  }

  // KeyValue Pipe
  profile = {
    name: 'Sergio',
    age: '18',
    address: 'Guatemal, Guatemala'
  }

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
      console.log('Promesa finalizada')
    },3500)
  })

  //Async pipe observable

  myObservableTimer = interval(2000).pipe(
    map((value)=> value + 1),
    tap((value)=>console.log('tap',value)))
}



