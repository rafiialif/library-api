const Library = require('../models/Library');

class LibraryRepo {

  constructor(model) {
    this.model = model;
  }

  // TODO: Buat fungsi dengan nama `tambahBuku` untuk menambah buku baru pada perpustakaan
  // Parameter infoBuku merupakan sebuah objek buku dengan key judulBuku, pengarangBuku, genreBuku
  async tambahBuku(infoBuku) {
    const newBuku = {judulBuku:infoBuku.judulBuku, pengarangBuku:infoBuku.pengarangBuku, genreBuku:infoBuku.genreBuku, isDipinjam:false};
        const buku = new this.model(newBuku);
        return await buku.save();
  }

  // TODO: Buat fungsi dengan nama `listBuku` untuk mendapatkan semua data buku yg tersedia
  async listBuku() {
      return await this.model.find();
  }

  // TODO: Buat fungsi dengan nama `cariBuku` untuk mencari buku berdasarkan ID buku
  async cariBuku(id) {
      return await this.model.findByID(id);
  }

  // TODO: Buat fungsi `hapusBuku` untuk dapat menghapus buku dengan ID
  async hapusBuku(id) {
      return await this.model.findByIDAndDelete(id);
  }

  // TODO: Buat fungsi dengan nama `rubahInfoBuku` untuk merubah informasi buku dengan ID
  async rubahInfoBuku(id, infoBukuBaru) {
      const query = {_id: id};
      return await this.model.findOneAndUpdate(query, {$set: infoBukuBaru});
  }

  // Fungsi dengan nama `rubahStatusPeminjaman` untuk merubah informasi buku dengan ID
  async rubahStatusPeminjaman(id) {
    const buku = await this.model.findById(id)
    console.log(buku)
    const query = {_id: id };
    return await this.model.findOneAndUpdate(query, { $set: {isDipinjam: !(buku.isDipinjam) } });
  }
}

module.exports = new LibraryRepo(Library);
