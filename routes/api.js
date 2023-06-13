const express = require("express");
const router = express.Router();

router.get("/test1", async (req, res, next) => {
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
});

router.get("/test2", async (req, res, next) => {
  return res.status(200).json([{ id: 1, name: 'User 1' },{ id: 2, name: 'User 2' },{ id: 3, name: 'User 3' }]);
});

router.get("/test2-1", async (req, res, next) => {
  return res.status(200).json([{ id: 1, name: 'User 1' }]);
});
router.get("/test2-2", async (req, res, next) => {
  return res.status(200).json([{ id: 2, name: 'User 2' }]);
});
router.get("/test2-3", async (req, res, next) => {
  return res.status(200).json([{ id: 3, name: 'User 3' }]);
});

module.exports = router;
