const cheat_meals = [
  { Name: "I Love Poke", Url: "https://www.ilovepoke.it/" },
  { Name: "Toyama", Url: "http://www.ristorantetoyama.it/" },
  { Name: "Wakaba", Url: "https://wakabamilano.blogspot.com/?m=1" },
  {
    Name: "El Chorillano",
    Url: "https://zero.eu/it/luoghi/166746-el-chorillano,milano/",
  },
 
  {
    Name: "Golfo di Mondello",
    Url: "https://m.facebook.com/GolfoDiMondelloMilano",
  },
  { Name: "Flower Burger", Url: "https://www.flowerburger.it/" },
  { Name: "Hamerica's", Url: "https://www.hamericas.com/" },
  { Name: "100 Montaditos", Url: "https://italy.100montaditos.com/it/menu/" },
  { Name: "Macha Cafe", Url: "https://www.machacafe.it/" },
  { Name: "Avobrothers", Url: "https://www.avobrothers.com/food" },
  { Name: "Grezzo", Url: "https://grezzorawchocolate.com/" },
  {
    Name: "La Romana",
    Url: "https://www.gelateriaromana.com/53-gelateria-milano.php",
  },
  { Name: "Kanji", Url: "http://www.kanjimilano.com/" },
  {Name: "La prosciutteria", URL:"https://laprosciutteria.com/"},
  {Name: "10 Corso Como", URL: "http://www.10corsocomo.com/"},
  {Name: "Savini", URL: "https://www.savinimilano.it/"},
  {Name:"Temakinho", URL: "https://www.temakinho.com/?lang=it"},
  {Name: "Hegui", URL: "http://www.hegui.one/"}
];

const rouletteContainer = document.querySelector(".roulette-container");
const roulette = document.querySelector(".roulette");
const linkTo = document.querySelector(".link-to");
const spin = document.querySelector(".spin");
spin.addEventListener("click", () => {
  rouletteContainer.classList.remove("tada");
  const total = cheat_meals.length;
  const selected = Math.floor(Math.random() * total);
  for (let i = 0; i <= total; i++) {
    setTimeout(
      ((i) => {
        return () => {
          roulette.innerText = cheat_meals[i % total].Name;
          linkTo.href = cheat_meals[i % total].Url;
          if (i === selected) {
            roulette.classList.add("tada");
          }
        };
      })(i),
      i * 100
    );
    if (i === selected) {
      break;
    }
  }
});
