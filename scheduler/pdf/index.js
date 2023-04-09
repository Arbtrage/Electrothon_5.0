const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));
doc
  .fontSize(25)
  .text('Your Personalised Medical Report: ', 10, 10);

doc.end();