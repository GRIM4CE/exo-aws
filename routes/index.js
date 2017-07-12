'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const express = require('express');

const router = express.Router();

let links = [];

let cleanUpTitle = (file) => {
  let fileName = path.basename(file, '.html');
  fileName = _.replace(fileName, '-', ' ');
  fileName = _.startCase(fileName);
  return fileName;
};

fs.readdir('./dist/html', (err, files) => {
  files.forEach(file => {
    links.push({
      url: file,
      title: cleanUpTitle(file)
    });
  });
});

router.get('/', (req, res, next) => {
  res.render('index', {links: links});
});

module.exports = router;
