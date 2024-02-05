import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  jajanan: any[] = [
    {
      produk: 'Basreng Stik',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas Cikruh',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 3000,
        },
        {
          gramasi: '100gr',
          harga: 6000,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 40000,
        },
        {
          gramasi: '1 bal',
          harga: 70000,
        },
      ],
    },
    {
      produk: 'Makaroni Kriuk',
      varian: [
        {
          rasa: 'Pedas Cikruh',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 2500,
        },
        {
          gramasi: '100gr',
          harga: 5500,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 35000,
        },
        {
          gramasi: '1 bal',
          harga: 72000,
        },
      ],
    },
    {
      produk: 'Cimol Kriuk',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas DJ',
        },
        {
          rasa: 'Extra DJ',
        },
      ],
      ukuran: [
        {
          gramasi: '100gr',
          harga: 7000,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 40000,
        },
        {
          gramasi: '1 bal',
          harga: 73000,
        },
      ],
    },
    {
      produk: 'Kripca',
      varian: [
        {
          rasa: 'Ori DJ',
        },
        {
          rasa: 'Pedas DJ',
        },
        {
          rasa: 'Extra DJ',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 4000,
        },
        {
          gramasi: '100gr',
          harga: 8500,
        },
        {
          gramasi: '250gr',
          harga: 17000,
        },
        {
          gramasi: '500gr',
          harga: 31000,
        },
        {
          gramasi: '1kg',
          harga: 50000,
        },
        {
          gramasi: '1 bal',
          harga: 70000,
        },
      ],
    },
    {
      produk: 'Mie Lidi',
      varian: [
        {
          rasa: 'Ori DJ',
        },
        {
          rasa: 'Pedas DJ',
        },
        {
          rasa: 'Extra DJ',
        },
        {
          rasa: 'Balado',
        },
        {
          rasa: 'Jagung Manis',
        },
      ],
      ukuran: [
        {
          gramasi: '100gr',
          harga: 6000,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
      ],
    },
    {
      produk: 'Makaroni Bantat',
      varian: [
        {
          rasa: 'Ori DJ',
        },
        {
          rasa: 'Pedas DJ',
        },
        {
          rasa: 'Extra DJ',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 2500,
        },
        {
          gramasi: '100gr',
          harga: 5500,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 35000,
        },
        {
          gramasi: '1 bal',
          harga: 72000,
        },
      ],
    },
    {
      produk: 'Siomay',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas Cikruh',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 2500,
        },
        {
          gramasi: '100gr',
          harga: 5500,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 35000,
        },
        {
          gramasi: '1 bal',
          harga: 72000,
        },
      ],
    },
    {
      produk: 'Usus Krispi',
      varian: [
        {
          rasa: 'Pedas Cikruh',
        },
      ],
      ukuran: [
        {
          gramasi: '100gr',
          harga: 8000,
        },
        {
          gramasi: '250gr',
          harga: 20000,
        },
        {
          gramasi: '500gr',
          harga: 35000,
        },
        {
          gramasi: '1kg',
          harga: 65000,
        },
        {
          gramasi: '1 bal',
          harga: 115000,
        },
      ],
    },
    {
      produk: 'Krupuk Kriwil',
      varian: [
        {
          rasa: 'Ori DJ',
        },
        {
          rasa: 'Pedas DJ',
        },
        {
          rasa: 'Extra DJ',
        },
        {
          rasa: 'Balado',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 3000,
        },
        {
          gramasi: '100gr',
          harga: 6000,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 40000,
        },
        {
          gramasi: '1 bal',
          harga: 75000,
        },
      ],
    },
    {
      produk: 'Solondok',
      varian: [
        {
          rasa: 'Ori DJ',
        },
        {
          rasa: 'Pedas DJ',
        },
        {
          rasa: 'Extra DJ',
        },
        {
          rasa: 'Balado',
        },
        {
          rasa: 'Jagung Manis',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 3000,
        },
        {
          gramasi: '100gr',
          harga: 6000,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 40000,
        },
        {
          gramasi: '1 bal',
          harga: 75000,
        },
      ],
    },
    {
      produk: 'Krupuk Seblak',
      varian: [
        {
          rasa: 'Pedas Cikruh',
        },
        {
          rasa: 'Pedas DJ',
        },
        {
          rasa: 'Extra Pedas DJ',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 3000,
        },
        {
          gramasi: '100gr',
          harga: 6000,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 40000,
        },
        {
          gramasi: '1 bal',
          harga: 75000,
        },
      ],
    },
    {
      produk: 'Kripik Singkong',
      varian: [
        {
          rasa: 'Pedas Cikruh',
        },
      ],
      ukuran: [
        {
          gramasi: '50gr',
          harga: 3000,
        },
        {
          gramasi: '100gr',
          harga: 6000,
        },
        {
          gramasi: '250gr',
          harga: 14000,
        },
        {
          gramasi: '500gr',
          harga: 22500,
        },
        {
          gramasi: '1kg',
          harga: 40000,
        },
        {
          gramasi: '1 bal',
          harga: 75000,
        },
      ],
    },
  ];

  selectedProduk = '';
  selectedVarian = '';
  selectedUkuran = '';
  qty = 0;
  qtyDisplay = '';
  harga = 0;
  order: any[] = [];

  magicword: boolean = false;

  customAlertOptions = {
    header: 'List Produk',
  };

  constructor(
    private alertController: AlertController,
    private storage: StorageService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.presentAlertConfirm();
  }

  ionViewDidEnter() {
    this.storage.get('blanjaan')?.then((res) => {
      if (res !== null) {
        this.order = res;
      }
    });
  }

  ionViewWillLeave() {
    this.magicword = false;
  }
  selectProduk(ev: any) {
    this.selectedProduk = ev.detail.value;
    this.cariVarian();
  }

  cariVarian(): any[] {
    return this.jajanan.find((x) => x.produk === this.selectedProduk)!.varian;
  }

  selectVarian(ev: any) {
    this.selectedVarian = ev.detail.value;
    this.cariUkuran();
  }

  cariUkuran(): any[] {
    return this.jajanan.find((x) => x.produk === this.selectedProduk)!.ukuran;
  }

  selectUkuran(ev: any) {
    this.selectedUkuran = ev.detail.value;
    let x = this.jajanan.find((x) => x.produk === this.selectedProduk)!.ukuran;
    this.harga = x.find((y: any) => y.gramasi === this.selectedUkuran)!.harga;
  }

  addmore() {
    if (
      this.selectedProduk !== '' &&
      this.selectedVarian !== '' &&
      this.selectedUkuran !== '' &&
      this.qty > 0
    ) {
      this.order.push({
        produk: this.selectedProduk,
        varian: this.selectedVarian,
        ukuran: this.selectedUkuran,
        harga: this.harga,
        qty: this.qty,
      });
      this.storage.set('blanjaan', this.order);
      // this.selectedProduk = '';
      this.selectedVarian = '';
      this.selectedUkuran = '';
      this.harga = 0;
      this.qty = 0;
      this.qtyDisplay = '0';
    } else {
      alert('Lengkapi inputan!');
    }
  }

  async hapusOrder() {
    const alert = await this.alertController.create({
      header: 'Hapus Order',
      message: 'Yakin Hapus Order? Setelah dihapus maka data akan hilang',

      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya',
          handler: () => {
            this.storage.remove('blanjaan');
            this.order = [];
            this.selectedProduk = '';
            this.selectedVarian = '';
            this.selectedUkuran = '';
            this.harga = 0;
            this.qty = 0;
            this.qtyDisplay = '0';
          },
        },
      ],
    });

    await alert.present();
  }

  inputValidator(evt: any) {
    setTimeout(() => {
      if (evt.value.toString() !== '') {
        let rate = parseInt(evt.value.toString().replace(/[^0-9]/g, ''));
        this.qty = Math.round(rate);
        this.qtyDisplay = Intl.NumberFormat('id-ID', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(rate);
      } else {
        this.qty = 0;
        this.qtyDisplay = '0';
      }
    }, 50);
  }

  async removeItem(produk: any, index: number) {
    const alert = await this.alertController.create({
      header: 'Peringatan',
      message:
        'Hapus produk ' +
        produk.produk +
        ' ' +
        produk.varian +
        ' ' +
        produk.ukuran +
        'gr',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
        },
        {
          text: 'Hapus',
          handler: () => {
            this.order.splice(index, 1);
            this.storage.set('blanjaan', this.order);
          },
        },
      ],
    });

    await alert.present();
  }

  charLength: number = 27;
  kirimOrder() {
    let contentPrint = '';
    let grandTotal = 0;
    this.order.forEach((x) => {
      contentPrint +=
        '-' +
        x.produk +
        ' ' +
        x.varian +
        ' ' +
        x.ukuran +
        ' ' +
        ' '.repeat(
          this.charLength -
            (x.varian.length + x.produk.length + x.ukuran + x.qty + 'x '.length)
        ) +
        '(' +
        x.qty +
        ')' +
        '%0A';

      grandTotal += parseInt(x.qty) * parseInt(x.harga);
    });

    contentPrint +=
      'Total' +
      ' '.repeat(
        this.charLength -
          ('Total'.length + grandTotal.toLocaleString('id').length)
      ) +
      grandTotal.toLocaleString('id') +
      '\n%0A';
    console.log(this.order);
    window.open('https://wa.me/6282217310673?text=' + contentPrint);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Danger!',
      message: 'Please input magic word...',
      inputs: [
        {
          id: 'MagicWord',
          name: 'MagicWord',
          type: 'text',
          placeholder: 'Magic Word...',
        },
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            this.router.navigateByUrl('tabs/tab1');
          },
        },
        {
          text: 'Masuk',
          handler: (ev) => {
            if (ev.MagicWord === 'jajandong') {
              this.magicword = true;
            } else {
              window.alert('Salaaah! aowkaowkaowk');
              this.router.navigateByUrl('tabs/tab1');
            }
          },
        },
      ],
    });

    await alert.present();
  }

  belanjaeunSortBy(prop: string) {
    return this.jajanan.sort((a, b) =>
      a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    );
  }
}
