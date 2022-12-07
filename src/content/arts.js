const arts = [];

  [...Array(12).keys()]
  .forEach((index) => {
    arts.push({
      id: index + 1,
      title: "Hello Donut!",
      mobile: require("./images/food/hello_donut_mobile.png"),
      desktop: require("./images/food/hello_donut_desktop.png"),
      categories: ["food"]
    })
  });

module.exports = arts;