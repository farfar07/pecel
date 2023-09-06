import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  order: any[] = [];

  constructor(
    private alertController: AlertController,
    private storage: StorageService
  ) {
    setInterval(() => {
      this.autoSaveNotes();
      console.log('kontol');
    }, 1000);
  }

  autoSaveNotes() {
    this.storage.set('Notes', this.notes);
  }
  ionViewWillEnter() {
    this.storage.get('order')?.then((res) => {
      if (res !== null) {
        this.order = res;
      }
    });

    this.storage.get('Notes')?.then((res) => {
      this.notes = res;
    });
  }

  async hapusOrder() {
    const alert = await this.alertController.create({
      header: 'Kosong Notes',

      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya',
          handler: () => {
            this.notes = '';
          },
        },
      ],
    });

    await alert.present();
  }

  notes = '';
  belanjaeun: any[] = [];
  bungkuseun: any[] = [];
  kirimOrder() {
    const a = this.notes.split('\n');
    let b: any[] = [];
    let c: any[] = [];
    a.forEach((x) => {
      let nama =
        x.split(';')[0] + ' ' + x.split(';')[1] + ' ' + x.split(';')[2];
      let nama2 = x.split(';')[0] + ' ' + x.split(';')[1];
      let qty = x.split(';')[3];
      let total = x.split(';')[4];
      b.push({ nama: nama, qty: qty, total: total });
      c.push({ nama: nama2, qty: qty, total: total });
    });

    var bungkuseun: any[] = [];
    b.reduce(function (res, value) {
      if (!res[value.nama]) {
        res[value.nama] = {
          nama: value.nama,
          qty: 0,
        };
        bungkuseun.push(res[value.nama]);
      }
      res[value.nama].qty += parseInt(value.qty);
      return res;
    }, {});
    var belanjaeun: any[] = [];
    c.reduce(function (res, value) {
      if (!res[value.nama]) {
        res[value.nama] = {
          nama: value.nama,
          total: 0,
        };
        belanjaeun.push(res[value.nama]);
      }
      res[value.nama].total += parseInt(value.total);
      return res;
    }, {});

    this.belanjaeun = belanjaeun;
    this.bungkuseun = bungkuseun;
    // console.log(belanjaeun);
    // console.log(bungkuseun);

    // window.open('https://wa.me/6282217310673?text=' + contentPrint);
    // setTimeout(() => {
    //   window.close();
    // }, 100);
  }

  belanjaeunSortBy(prop: string) {
    return this.belanjaeun.sort((a, b) =>
      a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    );
  }

  bungkuseunSortBy(prop: string) {
    return this.bungkuseun.sort((a, b) =>
      a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    );
  }
}
