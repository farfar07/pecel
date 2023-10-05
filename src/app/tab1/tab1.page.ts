import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  order: any[] = [];

  constructor(
    private alertController: AlertController,
    private storage: StorageService,
    private toastController: ToastController
  ) {
    setInterval(() => {
      this.autoSaveNotes();
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
  pouch10 = 0;
  pouch12 = 0;
  pouch14 = 0;
  pouch16 = 0;
  kirimOrder() {
    const a = this.notes.split('\n');
    let b: any[] = [];
    let c: any[] = [];
    let d: any[] = [];
    let pouch10 = 0;
    let pouch12 = 0;
    let pouch14 = 0;
    let pouch16 = 0;
    a.forEach((x) => {
      let nama =
        x.split(';')[0] + ' ' + x.split(';')[1] + ' ' + x.split(';')[2];
      let nama2 = x.split(';')[0] + ' ' + x.split(';')[1];
      let qty = x.split(';')[3];
      let total = x.split(';')[4];
      b.push({ nama: nama, qty: qty, total: total });
      c.push({ nama: nama2, qty: qty, total: total });

      if (x.split(';')[0] !== 'Slondok' && x.split(';')[0] !== 'Mie Lidi') {
        //kalo cimol
        if (
          x.split(';')[0] === 'Cimol' &&
          x.split(';')[0] !== 'Krupuk Galing'
        ) {
          if (x.split(';')[2] === '50gr') {
            pouch12 += parseInt(x.split(';')[3]);
          } else if (x.split(';')[2] === '100gr') {
            pouch14 += parseInt(x.split(';')[3]);
          }
        }

        //kalo krupuk galing
        if (
          x.split(';')[0] !== 'Cimol' &&
          x.split(';')[0] === 'Krupuk Galing'
        ) {
          if (x.split(';')[2] === '50gr') {
            pouch12 += parseInt(x.split(';')[3]);
          } else if (x.split(';')[2] === '100gr') {
            pouch16 += parseInt(x.split(';')[3]);
          }
        }

        //kalo yg lainnnya
        if (
          x.split(';')[0] !== 'Cimol' &&
          x.split(';')[0] !== 'Krupuk Galing'
        ) {
          if (x.split(';')[2] === '50gr') {
            pouch10 += parseInt(x.split(';')[3]);
          } else if (x.split(';')[2] === '100gr') {
            pouch12 += parseInt(x.split(';')[3]);
          } else if (x.split(';')[2] === '250gr') {
            pouch16 += parseInt(x.split(';')[3]);
          }
        }
      }
    });
    console.log(
      'pouch 10:' + pouch10 + '\n',
      'pouch 12:' + pouch12 + '\n',
      'pouch 14:' + pouch14 + '\n',
      'pouch 16:' + pouch16 + '\n'
    );

    this.pouch10 = pouch10;
    this.pouch12 = pouch12;
    this.pouch14 = pouch14;
    this.pouch16 = pouch16;

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
    this.hitungTotal();
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

  charLength: number = 27;
  async copy(tipe: string) {
    let contentPrint = '';
    switch (tipe) {
      case 'bungkuseun':
        this.bungkuseun.forEach((x) => {
          contentPrint += x.nama + ' (' + x.qty + 'pcs)' + '\n';
        });
        break;
      case 'belanjaeun':
        this.belanjaeun.forEach((x) => {
          contentPrint += x.nama + ' (' + x.total + 'gr)' + '\n';
        });
        break;
    }
    contentPrint += 'Pouch 10 : ' + this.pouch10 + '\n';
    contentPrint += 'Pouch 12 : ' + this.pouch12 + '\n';
    contentPrint += 'Pouch 14 : ' + this.pouch14 + '\n';
    contentPrint += 'Pouch 16 : ' + this.pouch16 + '\n';
    await Clipboard.write({
      string: contentPrint,
    });
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Saldo copied.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  totalPesanan = 0;
  hitungTotal() {
    let x = 0;
    this.belanjaeun?.forEach((m: any) => {
      x += m.total;
    });
    this.totalPesanan = x;
  }

  kirim(tipe: string) {
    let contentPrint = '```';
    switch (tipe) {
      case 'bungkuseun':
        this.bungkuseun.forEach((x) => {
          contentPrint +=
            x.nama +
            ' '.repeat(this.charLength - (x.nama.length + x.qty.length + 5)) +
            '(' +
            x.qty +
            'pcs)' +
            '%0A';
        });
        break;
      case 'belanjaeun':
        this.belanjaeun.forEach((x) => {
          contentPrint +=
            x.nama +
            ' '.repeat(this.charLength - (x.nama.length + x.total.length + 4)) +
            '(' +
            x.total +
            'gr)' +
            '%0A';
        });
        break;
    }
    contentPrint += 'Pouch 10 : ' + this.pouch10 + '%0A';
    contentPrint += 'Pouch 12 : ' + this.pouch12 + '%0A';
    contentPrint += 'Pouch 14 : ' + this.pouch14 + '%0A';
    contentPrint += 'Pouch 16 : ' + this.pouch16 + '%0A';
    contentPrint += '```';
    window.open('https://wa.me/6282217310673?text=' + contentPrint);
  }
}
