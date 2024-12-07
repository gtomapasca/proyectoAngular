import { Component, ChangeDetectorRef, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../../../core/services/user/user.service';

@Component({
  selector: 'app-task-usuario',
  templateUrl: './task-usuario.component.html',
  styleUrl: './task-usuario.component.css'
})
export class TaskUsuarioComponent implements OnInit{

  @Input() objUser: User = {
    id: 'id01',   
    userId: '1',                 
    nombre: 'GTP',                 
    apellidoMat: '',           
    apellidoPat: '',
    direccion: '',
    email: '', 
    fechaNac: new Date(),
    genero: '',                                
    telefono: 0,
  };

  users: User[] = []; 
  filteredUsers: User[] = [];

  @Output() save = new EventEmitter<User>(); 
  @Output() cancel = new EventEmitter<void>(); 

  constructor(private userService : UserService){
  }

  ngOnInit(): void {
    this.userService.getPerfilUser().subscribe(users => {
      console.log("ngOnInit-users: " + JSON.stringify(users));
      this.users = users;
    })
  }

  onSave() {
    console.log(">>> GTPX-onSave...");
    console.log(">>> GTPX-objUser-nombre: " + this.objUser.nombre);
    console.log(">>> GTPX-objUser-apePat: " + this.objUser.apellidoPat);
    this.save.emit(this.objUser); 
  }

  onCancel() {
    this.cancel.emit(); 
    //this.onCloseDialog(); 
  }

}
