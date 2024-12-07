import { Timestamp } from "firebase/firestore";

// usuarios
export interface User {
    id?: string;   
    userId: string;                  
    nombre: string;     
    apellidoPat: string;             
    apellidoMat: string;
    direccion: string;
    email: string; 
    fechaNac: Date;
    genero: string;                                
    telefono: number; 
  }
  