const data = [
  {
    place: 'INDIAN AIR FORCE',
    title: 'C-130J',
    title2: 'SUPER HERCULES',
    description: "The Indian Air Force's C-130J Super Hercules is a highly integrated and sophisticated configuration primarily designed to support India's special operations requirement. Equipped with an Infrared Detection Set (IDS), the aircraft can perform precision low-level flying, airdrops and landing in blackout conditions.",
    image: 'https://media.defense.gov/2021/May/14/2002641733/-1/-1/0/210430-F-PM645-9345.JPG'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'MIG',
    title2: '21',
    description: 'The only aircraft in a major Air Force of similar vintage, still in active service, that I can think of are- Boeing B-52, Tupolev Tu-16 Badger, Lockheed C-130, Tupolev Tu-95/142 Bear and the flying forever Antonov An-2 biplane.',
    image: 'https://i.ytimg.com/vi/6MlhE7GDFLU/maxresdefault.jpg'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'SUKHOI',
    title2: 'SU-30',
    description: 'It is a multirole fighter for all-weather, air-to-air and air interdiction missions.',
    image: 'https://defencedirecteducation.com/wp-content/uploads/2021/05/Screenshot149.png'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'DASSAULT',
    title2: 'RAFALE',
    description: 'The Dassault Rafale is a French twin-engine, canard delta wing, multirole fighter aircraft designed and built by Dassault Aviation. Equipped with a wide range of weapons, the Rafale is intended to perform air supremacy, interdiction, aerial reconnaissance, ground support, in-depth strike, anti-ship strike and nuclear deterrence missions.',
    image: 'https://images5.alphacoders.com/104/thumb-1920-1045664.jpg'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'SPECAT',
    title2: 'JAGUAR',
    description: 'The SEPECAT Jaguar is an Anglo-French jet attack aircraft originally used by the British Royal Air Force and the French Air Force in the close air support and nuclear strike role. It is still in service with the Indian Air Force.',
    image: 'https://www.dailypioneer.com/uploads/2019/story/images/big/air-force-lauds-pilot-of-jaguar-aircraft-for-averting-tragedy-in-ambala-2019-06-29.jpg'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'HAL',
    title2: 'TEJAS',
    description: 'The Light Combat Aircraft (LCA) Tejas is an Indian single-engine, fourth-generation, multirole light fighter designed by the Aeronautical Development Agency (ADA) in collaboration with Aircraft Research and Design Centre (ARDC) of Hindustan Aeronautics Limited (HAL).',
    image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/tejas-light-combat-aircraft-abhishek-singh.jpg'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'BOEING',
    title2: 'CHINOOK',
    description: 'An American twin-engine, tandem rotor, heavy-lift helicopter Boeing CH-47 Chinook is developed by American rotorcraft company Vertol and manufactured by Boeing Vertol. For Indian Air Force Chinooks will boost the nation\'s heavy heavy-lift capability.',
    image: 'https://blog.trishuldefenceacademy.com/wp-content/uploads/2019/11/BoeingChinook.jpg'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'BOEING APACHE',
    title2: 'AH-64 E',
    description: 'The AH-64 Apache is the world\'s most advanced multi-role combat helicopter. With the induction of Boeing AH-64E Apache helicopters, the Attack Helicopter fleet of IAF got a major boost. It is known for its greater thrust and lift, joint digital operability, improved survivability, and cognitive decision aiding.',
    image: 'https://blog.trishuldefenceacademy.com/wp-content/uploads/2019/11/apache.jpeg'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'Mil',
    title2: 'MI-26',
    description: 'It is a Russian/Soviet heavy transport helicopter. Without a doubt it is called as the pride of Indian Air Force as it is the largest and most powerful helicopter gone into a mass production.',
    image: 'https://blog.trishuldefenceacademy.com/wp-content/uploads/2019/11/Mi26.jpg'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'Mil MI-17',
    title2: 'V5',
    description: 'Mi-17V-5 is a military transport variant in the Mi-8/17 family of helicopters. It is produced by Kazan Helicopters which is a subsidiary of Russian Helicopters. It is a twin-turbine transport helicopter used by the IAF to transport the Prime Minister of India domestically.',
    image: 'https://blog.trishuldefenceacademy.com/wp-content/uploads/2019/11/17V5.jpg'
  },
  {
    place: 'INDIAN AIR FORCE',
    title: 'HAL',
    title2: 'CHETAK',
    description: 'Originally the Aerospatiale Alouette III is a single-engine, light, multi-purpose helicopter capable of fulfilling many different roles developed by French aircraft company.',
    image: 'https://blog.trishuldefenceacademy.com/wp-content/uploads/2019/11/chetak.jpg'
  },
];

const _ = (id) => document.getElementById(id);
const cards = data.map((i, index) => `<div class="card" id="card${index}" style="background-image:url(${i.image})"></div>`).join('');
const cardContents = data.map((i, index) => `<div class="card-content" id="card-content-${index}">
  <div class="content-start"></div>
  <div class="content-place">${i.place}</div>
  <div class="content-title-1">${i.title}</div>
  <div class="content-title-2">${i.title2}</div>
</div>`).join('');
const sildeNumbers = data.map((_, index) => `<div class="item" id="slide-item-${index}">${index + 1}</div>`).join('');

_('demo').innerHTML = cards + cardContents;
_('slide-numbers').innerHTML = sildeNumbers;

document.querySelector('.arrow-left').addEventListener('click', handlePagination);
document.querySelector('.arrow-right').addEventListener('click', handlePagination);

function handlePagination(event) {
  if (event.currentTarget.classList.contains('arrow-left')) { clicks += 1; step(); }
  else if (event.currentTarget.classList.contains('arrow-right')) { clicks += 1; step(); }
}

const set = gsap.set;
function getCard(index) { return `#card${index}`; }
function getCardContent(index) { return `#card-content-${index}`; }
function getSliderItem(index) { return `#slide-item-${index}`; }
function animate(target, duration, properties) {
  return new Promise((resolve) => { gsap.to(target, { ...properties, duration, onComplete: resolve }); });
}

let order = [0,1,2,3,4,5,6,7,8,9,10];
let detailsEven = true;
let offsetTop = 200, offsetLeft = 700, cardWidth = 200, cardHeight = 300, gap = 40, numberSize = 50;
const ease = "sine.inOut";

function init() {
  const [active, ...rest] = order;
  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430; offsetLeft = width - 830;
  gsap.set("#pagination", { top: offsetTop+330, left: offsetLeft, y: 200, opacity: 0, zIndex: 60 });
  gsap.set("nav", { y: -200, opacity: 0 });
  gsap.set(getCard(active), { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .text`, { y: 100 });
  gsap.set(`${detailsInactive} .title-1`, { y: 100 });
  gsap.set(`${detailsInactive} .title-2`, { y: 100 });
  gsap.set(`${detailsInactive} .desc`, { y: 50 });
  gsap.set(`${detailsInactive} .cta`, { y: 60 });
  gsap.set(".progress-sub-foreground", { width: 500*(1/order.length)*(active+1) });
  rest.forEach((i, index) => {
    gsap.set(getCard(i), { x: offsetLeft+400+index*(cardWidth+gap), y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10 });
    gsap.set(getCardContent(i), { x: offsetLeft+400+index*(cardWidth+gap), zIndex: 40, y: offsetTop+cardHeight-100 });
    gsap.set(getSliderItem(i), { x: (index+1)*numberSize });
  });
  gsap.set(".indicator", { x: -window.innerWidth });
  const startDelay = 0.6;
  gsap.to(".cover", { x: width+400, delay: 0.5, ease, onComplete: () => { setTimeout(() => { loop(); }, 500); } });
  rest.forEach((i, index) => {
    gsap.to(getCard(i), { x: offsetLeft+index*(cardWidth+gap), zIndex: 30, ease, delay: startDelay });
    gsap.to(getCardContent(i), { x: offsetLeft+index*(cardWidth+gap), zIndex: 40, ease, delay: startDelay });
  });
  gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;
function step() {
  return new Promise((resolve) => {
    order.push(order.shift());
    detailsEven = !detailsEven;
    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
    document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place;
    document.querySelector(`${detailsActive} .title-1`).textContent = data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent = data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent = data[order[0]].description;
    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
    gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease });
    gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
    gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
    gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
    gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease });
    gsap.set(detailsInactive, { zIndex: 12 });
    const [active, ...rest] = order;
    const prv = rest[rest.length - 1];
    gsap.set(getCard(prv), { zIndex: 10 });
    gsap.set(getCard(active), { zIndex: 20 });
    gsap.to(getCard(prv), { scale: 1.5, ease });
    gsap.to(getCardContent(active), { y: offsetTop+cardHeight-10, opacity: 0, duration: 0.3, ease });
    gsap.to(getSliderItem(active), { x: 0, ease });
    gsap.to(getSliderItem(prv), { x: -numberSize, ease });
    gsap.to(".progress-sub-foreground", { width: 500*(1/order.length)*(active+1), ease });
    gsap.to(getCard(active), {
      x: 0, y: 0, ease, width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft+(rest.length-1)*(cardWidth+gap);
        gsap.set(getCard(prv), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1 });
        gsap.set(getCardContent(prv), { x: xNew, y: offsetTop+cardHeight-100, opacity: 1, zIndex: 40 });
        gsap.set(getSliderItem(prv), { x: rest.length*numberSize });
        gsap.set(detailsInactive, { opacity: 0 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });
        clicks -= 1;
        if (clicks > 0) { step(); }
      },
    });
    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft+index*(cardWidth+gap);
        gsap.set(getCard(i), { zIndex: 30 });
        gsap.to(getCard(i), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, delay: 0.1*(index+1) });
        gsap.to(getCardContent(i), { x: xNew, y: offsetTop+cardHeight-100, opacity: 1, zIndex: 40, ease, delay: 0.1*(index+1) });
        gsap.to(getSliderItem(i), { x: (index+1)*numberSize, ease });
      }
    });
  });
}

async function loop() {
  await animate(".indicator", 2, { x: 0 });
  await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
  set(".indicator", { x: -window.innerWidth });
  await step();
  loop();
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function start() {
  try {
    await Promise.all(data.map(({ image }) => loadImage(image)));
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
    init();
  }
}

start();
