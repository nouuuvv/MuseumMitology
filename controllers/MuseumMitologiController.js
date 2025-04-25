const db = require("../configs/db.js");

// ammbil data Mitologi
exports.getAllMitologi = (req, res) => {
  db.query("SELECT * FROM Mitologi", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// ambil data Mitologi berdasarkan id
exports.getMitologiById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM Mitologi WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

// Tambah data Mitologi
exports.createMitologi = (req, res) => {
  const { judul_mitos, asal_daerah, jenis_mitos, deskripsi_mitos, foto_mitos } =
    req.body;
  db.query(
    "INSERT INTO Mitologi (judul_mitos, asal_daerah, jenis_mitos, deskripsi_mitos, foto_mitos) VALUES (?, ?, ?, ?, ?)",
    [judul_mitos, asal_daerah, jenis_mitos, deskripsi_mitos, foto_mitos],
    (err, results) => {
      if (err) throw err;
      res.json({
        id: results.insertId,
        judul_mitos,
        asal_daerah,
        jenis_mitos,
        deskripsi_mitos,
        foto_mitos,
      });
    }
  );
};

// Update data Mitologi
exports.updateMitologi = (req, res) => {
  const id = req.params.id;
  const { judul_mitos, asal_daerah, jenis_mitos, deskripsi_mitos, foto_mitos } =
    req.body;
  db.query(
    "UPDATE Mitologi SET judul_mitos = ?, asal_daerah = ?, jenis_mitos = ?, deskripsi_mitos = ?, foto_mitos = ? WHERE id = ?",
    [judul_mitos, asal_daerah, jenis_mitos, deskripsi_mitos, foto_mitos, id],
    (err, results) => {
      if (err) throw err;
      res.json({
        id,
        judul_mitos,
        asal_daerah,
        jenis_mitos,
        deskripsi_mitos,
        foto_mitos,
      });
    }
  );
};

// Hapus data Mitologi
exports.deleteMitologi = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Mitologi WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json({ message: "Mitologi deleted successfully" });
  });
};
