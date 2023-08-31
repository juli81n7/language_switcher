"use strict";

// her finder jeg mit select html element, og laver det til en konstant
const select = document.getElementById("language");
// her finder vi den værdi der er valgt i select

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

// her definere vi det ummiddelbare array vi skal have fat i - nemlig "da"
const locale = "da";
// her pejer vi ned i de object som vi skal bruge ud fra den array vi lige har konstatereret
//- altså arrayet texts som så pejer ind i objectet som er defineret med vores konstant locale[locale]
//og derefter in i  objectet texts
const object = texts[locale].texts;

// det sender vi så videre ned i vores function der bruger det objevt til at ændre textindholdet
change(object);

function change(obj) {
  // her laver vi en for each med det object som er i konstanten object, som altså looper igennem de to forskellige text arrays der er i det objekt
  obj.forEach((each) => {
    // for at kunne gør dette dynamisk, finder vi stedet det skal ændre sig i ved at bruge array elementet location i vores qsl,
    //og indholdet skal så ændre sig til elementer text
    document.querySelector(each.location).innerHTML = each.text;
  });
}

// her laver vi en eventlistener der lytter på om select elementet undergår en ændring, herefter sætter vi locale til vores nye select.value,
// og bruger den nye locale som enten er "da" eller "de" til at peje på det nye object vi skal sætte igennem vores change funktion
select.addEventListener("change", () => {
  let locale = select.value;
  console.log(locale);
  const object = texts[locale].texts;
  console.log(array);
  change(object);
});
