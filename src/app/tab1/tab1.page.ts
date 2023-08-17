import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  jajanan: any[] = [
    {
      produk: 'Basreng',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
    {
      produk: 'Makaroni Cikruh',
      varian: [
        {
          rasa: 'Pedas',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
    {
      produk: 'Cimol',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas',
        },
        {
          rasa: 'Extra',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 4000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
      ],
    },
    {
      produk: 'Kripca',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas',
        },
        {
          rasa: 'Extra',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 8000,
        },
        {
          gramasi: 250,
          harga: 18500,
        },
      ],
    },
    {
      produk: 'Mie',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas',
        },
        {
          rasa: 'Extra',
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
          gramasi: 100,
          harga: 8000,
        },
        {
          gramasi: 250,
          harga: 18000,
        },
      ],
    },
    {
      produk: 'Makaroni',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas',
        },
        {
          rasa: 'Extra',
        },
      ],
      ukuran: [
        {
          gramasi: 75,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
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
          rasa: 'Pedas',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
    {
      produk: 'Usus Krispi',
      varian: [
        {
          rasa: 'Pedas',
        },
      ],
      ukuran: [
        {
          gramasi: 100,
          harga: 10000,
        },
        {
          gramasi: 250,
          harga: 21500,
        },
      ],
    },
    {
      produk: 'Krupuk Galing',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas',
        },
        {
          rasa: 'Extra',
        },
        {
          rasa: 'Balado',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 8000,
        },
      ],
    },
    {
      produk: 'Solondok',
      varian: [
        {
          rasa: 'Ori',
        },
        {
          rasa: 'Pedas',
        },
        {
          rasa: 'Extra',
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
          gramasi: 100,
          harga: 8000,
        },
        {
          gramasi: 250,
          harga: 16000,
        },
      ],
    },
  ];

  selectedProduk = '';
  selectedVarian = '';
  selectedUkuran = '';
  qty = 1;
  qtyDisplay = '1';
  harga = 0;
  order: any[] = [];

  customAlertOptions = {
    header: 'List Produk',
  };

  constructor(
    private alertController: AlertController,
    private storage: StorageService
  ) {}

  ionViewWillEnter() {
    this.storage.get('order')?.then((res) => {
      if (res !== null) {
        this.order = res;
      }
    });
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
      this.storage.set('order', this.order);
      this.selectedProduk = '';
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
            this.storage.remove('order');
            this.order = [];
            this.selectedProduk = '';
            this.selectedVarian = '';
            this.selectedUkuran = '';
            this.notes = '';
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
            this.storage.set('order', this.order);
          },
        },
      ],
    });

    await alert.present();
  }

  async changeQty(produk: any, index: number) {
    const alert = await this.alertController.create({
      message:
        'Ubah Qty ' +
        produk.produk +
        ' ' +
        produk.varian +
        ' ' +
        produk.ukuran +
        'gr',
      inputs: [
        {
          id: 'Qty',
          name: 'Qty',
          type: 'number',
          placeholder: 'Qty',
        },
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
        },
        {
          text: 'Ganti',
          handler: (ev) => {
            this.order[index].qty = ev.Qty;
            this.storage.set('order', this.order);
          },
        },
      ],
    });

    await alert.present();
  }
  charLength: number = 27;
  notes = '';
  kirimOrder() {
    // let contentPrint: string = '```';
    // contentPrint += '-'.repeat(this.charLength) + '%0A';
    // let grandTotal = 0;
    // this.order.forEach((x) => {
    //   contentPrint += x.produk + ' ' + x.varian + ' ' + x.ukuran + 'gr' + '%0A';
    //   let qty =
    //     x.qty.toLocaleString('id') + ' x ' + x.harga.toLocaleString('id');
    //   let total = (x.qty * x.harga).toLocaleString('id');
    //   contentPrint +=
    //     qty +
    //     ' '.repeat(this.charLength - (qty.length + total.length)) +
    //     total +
    //     '%0A';

    //   grandTotal += x.qty * x.harga;
    // });
    // contentPrint += '-'.repeat(this.charLength) + '%0A';
    // contentPrint +=
    //   'Total' +
    //   ' '.repeat(
    //     this.charLength -
    //       ('Total'.length + grandTotal.toLocaleString('id').length)
    //   ) +
    //   grandTotal.toLocaleString('id') +
    //   '\n%0A';

    // contentPrint +=
    //   '%0A%0Atolong dicek lagi yaaa.%0Akalau dah bener tolong ditransfer ke%0ABCA 1760050306 a/n Muhammad Faris Farhan atau%0A082217310673 a/n Dita Aulya Gandara (spay,dana)%0A```';

    let contentPrint = '';
    let jumlahItem = 0;
    this.order.forEach((x) => {
      contentPrint +=
        x.produk +
        ';' +
        x.varian +
        ';' +
        x.ukuran +
        'gr' +
        ';' +
        x.qty +
        ';' +
        x.ukuran * x.qty +
        '%0A';

      jumlahItem += parseInt(x.qty);
    });
    if (this.notes !== '') {
      contentPrint += 'Notes: ' + this.notes + '%0A';
    }

    contentPrint += jumlahItem + ' item';

    window.open('https://wa.me/6282217310673?text=' + contentPrint);
    // setTimeout(() => {
    //   window.close();
    // }, 100);
  }
}
