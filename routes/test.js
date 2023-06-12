const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  if(req == 'test'){
    return res.status(200).json({
      "items":[
        {
          "id": 1,
          "image" : "discount.png",
          "description" : "特價品"
        },
        {
          "id": 2,
          "image" : "handshake.png",
          "description" : "握手"
        },
        {
          "id": 3,
          "image" : "not-found.png",
          "description" : "似乎有錯誤"
        },
        {
          "id": 4,
          "image" : "molecule.png",
          "description" : "化學"
        },
        {
          "id": 5,
          "image" : "paw.png",
          "description" : "貓掌"
        },
        {
          "id": 6,
          "image" : "underground.png",
          "description" : "地鐵"
        }
      ]
    });
  }
  else{
    return res.status(200)
  }
});

module.exports = router;
