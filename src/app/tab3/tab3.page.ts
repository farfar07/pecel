import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  pembeli = '';
  diskon = 0;
  pesanan = '';
  charLength = 27;
  jajanan: any[] = [
    {
      produk: 'Basreng',
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
          harga: 6500,
        },
        {
          gramasi: 250,
          harga: 12500,
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
      produk: 'Mie Lidi',
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
      produk: 'Makaroni Bantat',
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
      produk: 'Slondok',
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
    {
      produk: 'Seblak Cikruh',
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
      produk: 'Seblak Kering',
      varian: [
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
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
  ];

  constructor(
    private alertController: AlertController,
    private storage: StorageService
  ) {
    setInterval(() => {
      this.autoSave();
    }, 1000);
  }

  autoSave() {
    this.storage.set('pesanan', this.pesanan);
    this.storage.set('Pembeli', this.pembeli);
  }

  ionViewWillEnter() {
    this.storage.get('Pembeli')?.then((res) => {
      if (res !== null) {
        this.pembeli = res;
      }
    });

    this.storage.get('pesanan')?.then((res) => {
      this.pesanan = res;
      this.hitungTrx();
    });
  }

  async hapusOrder() {
    const alert = await this.alertController.create({
      header: 'Kosongkan Field Input?',

      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya',
          handler: () => {
            this.pesanan = '';
            this.pembeli = '';
            this.diskon = 0;
          },
        },
      ],
    });

    await alert.present();
  }

  totalan: any[] = [];
  subtotal = 0;
  diskonrate = 0;
  total = 0;
  packing = 0;
  ongkir = 0;
  jumlahItem = 0;
  kirimOrder() {
    let contentPrint: string = '```';

    contentPrint += 'Buat : ' + this.pembeli + '%0A';

    contentPrint += 'Dari : puxiboo %0A';

    contentPrint += '-'.repeat(this.charLength) + '%0A';

    this.totalan.forEach((x) => {
      contentPrint += x.nama + '%0A';
      let qty =
        x.qty.toLocaleString('id') + ' x ' + x.harga.toLocaleString('id');
      let total = (x.qty * x.harga).toLocaleString('id');
      contentPrint +=
        qty +
        ' '.repeat(this.charLength - (qty.length + total.length)) +
        total +
        '%0A';
    });

    contentPrint += '-'.repeat(this.charLength) + '%0A';

    if (this.subtotal !== this.total) {
      let lblSubtotal = 'Subtotal';
      let subtotal = this.subtotal.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblSubtotal +
        ' '.repeat(this.charLength - (subtotal.length + lblSubtotal.length)) +
        subtotal +
        '\n%0A';
    }
    if (this.diskon > 0) {
      let lblDiskon: string = 'Diskon';
      let diskon = this.diskon.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblDiskon +
        ' '.repeat(this.charLength - (lblDiskon.length + diskon.length)) +
        diskon +
        '\n%0A';
    }

    if (this.packing > 0) {
      let lblPacking: string = 'Packing';
      let packing = this.packing.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblPacking +
        ' '.repeat(this.charLength - (lblPacking.length + packing.length)) +
        packing +
        '\n%0A';
    }

    if (this.ongkir > 0) {
      let lblOngkir: string = 'Ongkir';
      let ongkir = this.ongkir.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblOngkir +
        ' '.repeat(this.charLength - (lblOngkir.length + ongkir.length)) +
        ongkir +
        '\n%0A';
    }

    if (this.total > 0) {
      let lblTotal = 'Total ';
      let lblJmlItm = '(' + this.jumlahItem + 'pcs)';
      let total = this.total.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblTotal +
        lblJmlItm +
        ' '.repeat(
          this.charLength - (lblTotal.length + total.length + lblJmlItm.length)
        ) +
        total +
        '\n%0A';
    }
    contentPrint +=
      '%0A%0Atolong dicek lagi yaaa.%0Akalau dah bener tolong ditransfer ke%0ABCA 1760050306 a/n Muhammad Faris Farhan atau%0A082217310673 a/n Dita Aulya Gandara (spay,dana)%0A```';
    console.log(contentPrint);
    window.open('https://wa.me/6282217310673?text=' + contentPrint);
    setTimeout(() => {
      window.close();
    }, 100);
  }

  hitungTrx() {
    const a = this.pesanan.split('\n');
    let pesenan: any[] = [];
    a.forEach((x) => {
      let nama =
        x.split(';')[0] + ' ' + x.split(';')[1] + ' ' + x.split(';')[2];
      let qty = x.split(';')[3];
      let harga = this.jajanan
        .find((y) => y.produk === x.split(';')[0])!
        .ukuran.find(
          (z: any) => z.gramasi == parseInt(x.split(';')[2].replace('gr', ''))
        )!.harga;

      pesenan.push({ nama: nama, qty: qty, harga: harga });
    });

    var groupByProduk: any[] = [];
    pesenan.reduce(function (res, value) {
      if (!res[value.nama]) {
        res[value.nama] = {
          nama: value.nama,
          harga: value.harga,
          qty: 0,
        };
        groupByProduk.push(res[value.nama]);
      }
      res[value.nama].qty += parseInt(value.qty);
      return res;
    }, {});
    this.totalan = this.belanjaeunSortBy(groupByProduk, 'nama');

    this.subtotal = 0;
    this.diskon = 0;
    this.total = 0;
    this.jumlahItem = 0;
    this.totalan.forEach((x) => {
      this.subtotal += x.qty * x.harga;
      this.jumlahItem += parseInt(x.qty);
    });
    this.diskon = this.subtotal * (this.diskonrate / 100);
    this.subtotal = this.subtotal;
    this.total = this.subtotal + this.packing + this.ongkir - this.diskon;
  }
  belanjaeunSortBy(psenan: any[], prop: string) {
    return psenan.sort((a, b) =>
      a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    );
  }

  async shareOrder() {
    let contentPrint: string = '```';

    contentPrint += 'Buat : ' + this.pembeli + '\n';

    contentPrint += 'Dari : puxiboo \n';

    contentPrint += '-'.repeat(this.charLength) + '\n';

    this.totalan.forEach((x) => {
      contentPrint += x.nama + '\n';
      let qty =
        x.qty.toLocaleString('id') + ' x ' + x.harga.toLocaleString('id');
      let total = (x.qty * x.harga).toLocaleString('id');
      contentPrint +=
        qty +
        ' '.repeat(this.charLength - (qty.length + total.length)) +
        total +
        '\n';
    });

    contentPrint += '-'.repeat(this.charLength) + '\n';

    if (this.subtotal !== this.total) {
      let lblSubtotal = 'Subtotal';
      let subtotal = this.subtotal.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblSubtotal +
        ' '.repeat(this.charLength - (subtotal.length + lblSubtotal.length)) +
        subtotal +
        '\n';
    }
    if (this.diskon > 0) {
      let lblDiskon: string = 'Diskon';
      let diskon = this.diskon.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblDiskon +
        ' '.repeat(this.charLength - (lblDiskon.length + diskon.length)) +
        diskon +
        '\n';
    }

    if (this.packing > 0) {
      let lblPacking: string = 'Packing';
      let packing = this.packing.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblPacking +
        ' '.repeat(this.charLength - (lblPacking.length + packing.length)) +
        packing +
        '\n';
    }

    if (this.ongkir > 0) {
      let lblOngkir: string = 'Ongkir';
      let ongkir = this.ongkir.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblOngkir +
        ' '.repeat(this.charLength - (lblOngkir.length + ongkir.length)) +
        ongkir +
        '\n';
    }

    if (this.total > 0 || this.diskon === this.subtotal) {
      let lblTotal = 'Total ';
      let lblJmlItm = '(' + this.jumlahItem + 'pcs)';
      let total = this.total.toLocaleString('id', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      contentPrint +=
        lblTotal +
        lblJmlItm +
        ' '.repeat(
          this.charLength - (lblTotal.length + total.length + lblJmlItm.length)
        ) +
        total +
        '\n';
    }
    contentPrint +=
      '\ntolong dicek lagi yaaa.\nkalau dah bener tolong ditransfer ke\nBCA 1760050306 a/n Muhammad Faris Farhan atau\n082217310673 a/n Dita Aulya Gandara (spay,dana)\n```';
    console.log(contentPrint);
    await Share.share({
      text: contentPrint,
    });
  }
}
