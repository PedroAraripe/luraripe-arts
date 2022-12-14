const arts = [
  {
    title: "Pink Donut",
    desktop: require("./images/food/pink_donut_desktop.png"),
    categories: ["food"],
    mainColorAngle: 308
  },
  {
    title: "Cyan Donut",
    desktop: require("./images/food/cyan_donut_desktop.png"),
    categories: ["food"],
    mainColorAngle: 195
  },
  {
    title: "Purple Donut",
    desktop: require("./images/food/purple_donut_desktop.png"),
    categories: ["food"],
    mainColorAngle: 251
  },
];

const exposingArts = [];

for(let i = 0; i < 12; i++) {
  exposingArts.push(JSON.parse(JSON.stringify(arts[i > 2 ? i%3 : i])));
}

exposingArts.map((art, i) => {
  art.id = i + 1;

  return art;
});

export default exposingArts;