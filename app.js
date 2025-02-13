const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "../resources/cat-heart.gif",
  "../resources/rusure.gif",
  "../resources/3shocked-1.gif",
  "../resources/4.crying.gif",
  "../resources/5.crying.gif",
  "../resources/idc.gif"
];

// to load the gifs faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "https://media.tenor.com/yhMZIW9G7BkAAAAi/peachcat-cat.gif";// gif credit: https://knowyourmeme.com/photos/2738959-mr-fresh-side-eye-cat
    text.innerHTML = "Mali ata napindot mo boss!";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "https://media.tenor.com/VmvykNbcTdkAAAAi/peachcat-crying.gif";// gif credit: https://tenor.com/view/tkthao219-peach-goma-gif-25008901
    text.innerHTML = "Bawal ka mag nooooooooo!";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "https://media.tenor.com/wY_NPIJiO8MAAAAi/peach-cat.gif";// gif credit: https://tenor.com/view/cat-kitty-gif-25340141
    text.innerHTML = "Bahala ka wala ka nang lambing!";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "https://media.tenor.com/ppJGvOm48zIAAAAi/peach-and-goma-peach-goma.gif";// gif credit: https://tenor.com/view/cat-gif-10173437195524493032
    text.innerHTML = "Wala ka nang no choice boss! hihi";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "https://media.tenor.com/sIAClHy5cSEAAAAi/strawberry-shortcake.gif";// gif credit: https://tenor.com/view/peach-cat-kiss-animated-love-mwah-gif-25743978

  text.innerHTML = "YAYYYYY!!!!!! <br> Iloveyouuu mwaaa!";
  no.style.display = "none";
  yes.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});