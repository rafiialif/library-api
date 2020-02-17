const express = require('express');

const app = express.Router();
const repo = require('../repos/LibraryRepo');

// TODO: Memanggil fungsi listBuku untuk mendapatkan data semua buku yang ada
app.get('/', (req, res) => {
  repo.listBuku().then((semuaBuku) => {
    res.json(semuaBuku);
  }).catch((error) => console.log(error));
});

// TODO: Memanggil fungsi cariBuku untuk mendapatkan spesifik buku berdasarkan ID
app.get('/:id', (req, res) => {
  const { id } = req.params;
  repo.cariBuku().then((buku) => {
    res.json(buku);
  }).catch((error) => console.log(error));
});

// TODO: Memanggil fungsi tambahBuku untuk menambah buku baru pada list
app.post('/', (req, res) => {
  const infoBukuBaru = req.body;
  console.log(infoBukuBaru)
  repo.tambahBuku(infoBukuBaru).then((buku) => {
    res.json(buku);
  }).catch((error) => console.log(error));
});

// TODO: Memanggil fungsi hapusBuku untuk menghapus buku tertentu
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repo.hapusBuku(id).then(
  res.status(200).json({
    message: 'Buku dengan id ${id} sudah terhapus'
  })
).catch((error) => console.log(error));
});

// TODO: Memanggil fungsi rubahStatusPeminjaman untuk merubah status peminjaman buku tertentu
app.put('/:id', (req, res) => {
  const { id } = req.params;
  repo.rubahStatusPeminjaman(id)
    .then((info) => {
      res.status(200).json({
        info: info,
        message: `Status Peminjaman buku dengan id ${id} sudah diubah`
      })
        .catch((error) => console.log(error));
    });
});

// Memanggil fungsi rubahInfoBuku untuk merubah info peminjaman buku tertentu
app.put('/rubah/:id', (req, res) => {
  const { id } = req.params;
  repo.rubahInfoBuku(id, req.body)
    .then((info) => {
      res.status(200).json({
        info: info,
        message: `Informasi buku dengan id ${id} sudah diubah`
      })
        .catch((error) => console.log(error));
    });
});
module.exports = app;
