import { Component, Input, OnChanges, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;
  // @Output(): comunicacao de filho para pai
  @Output() emitindoItemParaEditar = new EventEmitter<Item>();
  @Output() emitindoIdParaDeletar = new EventEmitter();
  
  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { 
    console.log('OnInit');
  }

  ngOnChanges(): void {
    //primeiro o onChange é iniciado mandando dados para os componentes depois inicia o OnInit
    console.log('OnChange');
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  deletarItem() {
    console.log('deletar item')
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy() {
    console.log('componente item removido')
  }

}
