const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const upload = require('../middlewares/multerConfig');

// File upload route
router.get("/upload", (req, res) => {
  res.render("upload.hbs");
});

router.post("/upload", upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).render("upload.hbs", {
        error: "No file selected"
      });
    }
    
    res.render("upload.hbs", {
      success: `File uploaded successfully: ${req.file.filename}`,
    //   fileInfo: {
    //     originalName: req.file.originalname,
    //     filename: req.file.filename,
    //     size: (req.file.size / 1024).toFixed(2) + ' KB',
    //     mimetype: req.file.mimetype
    //   }
    });
  } catch (error) {
    res.status(500).render("upload.hbs", {
      error: "Upload failed: " + error.message
    });
  }
});

// Route to view uploaded files
router.get("/files", (req, res) => {
  const uploadsPath = path.join(__dirname, '../uploads');
  fs.readdir(uploadsPath, (err, files) => {
    if (err) {
      return res.status(500).render("files.hbs", {
        error: "Could not read files"
      });
    }
    
    const fileList = files.map(file => {
      const filePath = path.join(uploadsPath, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        size: (stats.size / 1024).toFixed(2) + ' KB',
        uploadDate: stats.birthtime.toLocaleString()
      };
    });
    
    res.render("files.hbs", {
      files: fileList
    });
  });
});

module.exports = router;
