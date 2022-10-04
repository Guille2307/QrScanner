import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  guardados: Registro[] = [];

  constructor(private storage: Storage) {
    this.cargarStorage();
  }

  async cargarStorage() {
    const storage = await this.storage.create();
    this.guardados = (await this.storage.get('registros')) || [];
  }

  async guardarRegistro(format: string, text: string) {
    await this.cargarStorage();
    const nuevoregistro = new Registro(format, text);
    this.guardados.unshift(nuevoregistro);
    this.storage.set('registros', this.guardados);
    console.log(this.guardados);
  }
}
