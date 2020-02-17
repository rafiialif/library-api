const mongoose = require('mongoose');

var Schema = mongoose.Schema;

/* TODO: Buat definisi skema untuk collection library disini
 * Skema berbentuk: - judulBuku, dengan tipe String
 *                  - pengarangBuku, dengan tipe String
 *                  - genreBuku, dengan tipe String
 *                  - isDipinjam, dengan tipe Boolean
*/
const librarySchema = new Schema({
  judulBuku: {
    type: String,
  },
  pengarangBuku: {
    type: String,
  },
  genreBuku: {
    type: String,
  },
  isDipinjam: {
    type: Boolean,
  },
});
const Library = mongoose.model('Library', librarySchema, "library");

  module.exports = Library;