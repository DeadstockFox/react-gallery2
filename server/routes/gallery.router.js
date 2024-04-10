const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  const qText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  pool.query(qText, [req.params.id]).then((r) => {
    res.sendStatus(201);
  }).catch((e) => {
    console.log('Error in server-side PUT request:', e);
  })

});

// GET /gallery
router.get('/', (req, res) => {
  const qText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;
  pool.query(qText).then((r)=> {
    res.send(r.rows);
  }).catch((e) => {
    console.log('Error in server-side GET request:', e);
  })
});

module.exports = router;
