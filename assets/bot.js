const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;
let usersData = [];

const botSay = (data) => {
  return [
    `Hallo Kenalin aku Didi Bot, Siapa nama kamu?`,
    `Hai ${data?.nama}, salam kenal, usia kamu berapa?`,
    `Ohhh ${data?.umur}, hobi kamu apa?`,
    `waaww sama dong aku juga hobinya ${data?.hobi}, btw punya pacar ga?`,
    `Ohhh ${data?.pacar}, ya udah kalau gitu. Udahan yak`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

const botStart = () => {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ umur: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    botFinishing();
  } else {
    botEnd();
  }
};

const botDelay = (jawabanUser) => {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
    jawaban.value = "";
  }, [1000]);
  usersData.push(jawaban.value);
};

const botFinishing = () => {
  pertanyaan.innerHTML = `Thank You ${usersData[0]} udah main ke Didi Bot, kapan-kapan kita main ${usersData[2]} bareng ya!`;
  jawaban.value = "siap thanks juga!";
  jawaban.disabled = true;
};

const botEnd = () => {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    window.location.reload();
  }, [1000]);
};
