const arts = [
  {
    title: "Pink Donut",
    desktop: require("./images/food/pink_donut_desktop.png"),
    categories: ["food"],
    mainColorAngle: 308,
    colorPalette: ['#bb79b2', '#ae7432', '#cd8fc5']
  },
  {
    title: "Cyan Donut",
    desktop: require("./images/food/cyan_donut_desktop.png"),
    categories: ["food"],
    mainColorAngle: 195,
    colorPalette: ['#89a5af', '#ae7432', '#8fc2ce']
  },
  {
    title: "Purple Donut",
    desktop: require("./images/food/purple_donut_desktop.png"),
    categories: ["food"],
    mainColorAngle: 251,
    colorPalette: ['#a29bbf', '#ae7432', '#885ec9']
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