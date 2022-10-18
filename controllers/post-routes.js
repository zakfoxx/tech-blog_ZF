const router = require("express").Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const posts = [
  {
    id: 1,
    post_name: "French Bread with Brie Cheese",
    description: "French baguette with warm brie",
    has_nuts: false,
  },
  {
    id: 2,
    post_name: "Cheese Plate with Spanish Chorizo",
    description:
      "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo",
    has_nuts: true,
  },
  {
    id: 3,
    post_name: "Fish Tacos",
    description:
      "Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion",
    has_nuts: false,
  },
  {
    id: 4,
    post_name: "Tropical Fruit Salad",
    description: "Guava, papaya, pineapple, mango, and star fruit",
    has_nuts: false,
  },
  {
    id: 5,
    post_name: "Pork Gyoza",
    description:
      "Homemade japanese dumplings stuffed with a pork and green onion filling, served with peanut dipping sauce",
    has_nuts: true,
  },
  {
    id: 6,
    post_name: "Yebeg Tibs with Injera Bread",
    description:
      "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere",
    has_nuts: false,
  },
  {
    id: 7,
    post_name: "Cape Malay Curry",
    description: "Chicken and vegitable curry dish with basmati rice",
    has_nuts: false,
  },
];

// get all posts
router.get("/", async (req, res) => {
  res.render("all", { posts });
});

// get one post
router.get("/post/:num", async (req, res) => {
  return res.render("[post]]", dishes[req.params.num - 1]);
});

module.exports = router;
