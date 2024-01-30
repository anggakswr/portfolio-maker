## Perubahan Design

Ada perubahan desain yang dilakukan seperti berikut:

- Menghilangkan tombol `Simpan Perubahan` di atas, lalu memindahkannya ke tiap kotak portfolio dan kotak profile, supaya lebih mudah untuk simpan data, dan lebih simple bagi user.
- Menghilangkan field `Nama` di portfolio karena tidak ditampilkan dimanapun, lagipula kurang jelas arti dari `Nama` ini apa.
- Mengubah padding pada portfolio di sebelah kanan supaya konsisten saja antara atas bawah kanan kiri.
- Menghilangkan mp4 pada upload gambar. Lagipula kalau video dijadikan base64 akan berat dan besar.

## Cara Menjalankan Project di Local Machine

Pertama, install dulu dependency-nya menggunakan package manager favoritmu, tapi saya pribadi menggunakan `pnpm`.

```bash
npm install
# or
yarn install
# or
pnpm install
```

Lalu jalankan development servernya, menggunakan perintah berikut, sesuai package manager yang kamu pilih.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
