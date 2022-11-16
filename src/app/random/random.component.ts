import { Component, OnInit } from '@angular/core';
import { NotFoundError } from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  list1:any[] = [
    {
      element:"dress",
      cantidad: 1,
    },
    {
      element:"coat",
      cantidad: 1,

    },
    {
      element:"t-shirt",
      cantidad: 1,

    },
    {
      element:"jeans",
      cantidad: 1,

    }
  ];
  list2:any[] = [];
  choose: number = 0


  list: string = "";

clickAdd()
{
  this.list1.push({"element":this.list, cantidad: 1});
  this.list = ""

}
restar(index:any){
  this.list1[index].cantidad--;
  if (this.list1[index].cantidad < 1){
    this.list1[index].cantidad = 1

  }
}
sumar(index:any){
  this.list1[index].cantidad++;
}
eliminar(index:any){
  this.list1.splice(index,1);
}
mix(){
  this.list2 = [];
  console.log(this.list2);

  for (const elemento of this.list1) {
    for (let index = 0; index < elemento.cantidad;index++) {
      this.list2.push(elemento.element);

    }
    this.list2 = this.mezclar(this.list2)

  }

}

mezclar(array:any) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
}
next(){
  this.choose++;

}

constructor() { }

ngOnInit(): void {
}

}
