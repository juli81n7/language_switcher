"use strict";
const select = document.getElementById("language");
let selectedValue = select.value;

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robåden", location: ".footer" },
    ],
  },
};
const locale = "da";
const object = texts[locale].texts;
change(object);

function change(obj) {
  obj.forEach((each) => {
    document.querySelector(each.location).innerHTML = each.text;
  });
}

select.addEventListener("change", () => {
  let locale = select.value;
  console.log(locale);
  const array = texts[locale].texts;
  console.log(array);
  change(array);
});
