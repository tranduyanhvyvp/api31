var express = require('express');
var router = express.Router();
import { loadData } from ('/home/duyanh1/xulyquanguqua/src/index.ts');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let dataArray = [
    {name : "item1", link: loadData}
  ];
  res.json({
    data:dataArray
  });
});

module.exports = router;
