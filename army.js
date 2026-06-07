const data = [
  {
    place: 'INDIAN ARMY',
    title: 'AK',
    title2: '47',
    description: 'The Indian Army also uses a large number of AK-47 rifles, which are widely used by its troops. These rifles are imported from countries like Russia and Romania.',
    image: 'https://wallpapercave.com/wp/wp3224613.jpg'
  },
  {
    place: 'INDIAN ARMY',
    title: 'AK',
    title2: '74',
    description: 'The AK-74 is a variant of the AK-47 that fires the 5.45x39mm round. The Indian Army has a small number of AK-74 rifles in its inventory.',
    image: 'https://images4.alphacoders.com/633/thumb-1920-633440.jpg'
  },
  {
    place: 'INDIAN ARMY',
    title: 'TAV',
    title2: '21(TAVOR)',
    description: 'The TAR-21 is an Israeli-made assault rifle that fires the 5.56x45mm NATO round. The Indian Army uses this rifle primarily in counter-terrorism operations.',
    image: 'https://wallpapers4screen.com/Uploads/6-4-2017/36504/thumb2-tar-21-assault-rifle-tavor-assault-rifle-21-modern-israeli-machine-gun.jpg'
  },
  {
    place: 'INDIAN ARMY',
    title: 'M777',
    title2: 'HOWITZER',
    description: 'The M777 Howitzer is an American-made lightweight artillery gun that can be easily airlifted to high altitude and mountainous areas. It can fire up to 5 rounds per minute to a range of up to 30 km.',
    image: 'https://th.bing.com/th/id/OIP.QyvbD4CVDdm0a_eRKvHyGAHaE8?rs=1&pid=ImgDetMain'
  },
  {
    place: 'INDIAN ARMY',
    title: 'BRAHMOS',
    title2: 'MISSILE',
    description: 'The BrahMos is a supersonic cruise missile jointly developed by India and Russia. It has a range of up to 290 km and can be launched from land, sea, and air platforms. The Indian Army has deployed the land-based variant of the BrahMos missile.',
    image: 'https://englishtribuneimages.blob.core.windows.net/gallarycontent/2020/10/2020_10$largeimg_701145591.jpg'
  },
  {
    place: 'INDIAN ARMY',
    title: 'AKASH',
    title2: 'MISSILE',
    description: 'The Akash is a surface-to-air missile developed by India. It has a range of up to 30 km and is used for air defense of ground assets against enemy aircraft, helicopters, and UAVs. The Akash missile uses a command guidance system and has an electronic counter-countermeasures capability.',
    image: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/12/akash1512498290.jpg'
  },
  {
    place: 'INDIAN ARMY',
    title: 'DRDO SHIVALIK',
    title2: 'HAND GRENADE',
    description: 'The Shivalik grenade is an indigenous grenade to India. It was developed by the Terminal Ballistic Research Laboratory, TBRL, a laboratory of the Defence Research and Development Organization, DRDO, which is located in the foothills of the Shivalik mountains near Chandigarh, and hence, derives its name from here.',
    image: 'https://i.ytimg.com/vi/ww8NrWJ5NAk/maxresdefault.jpg'
  },
  {
    place: 'INDIAN ARMY',
    title: 'NETRA',
    title2: 'UAV',
    description: 'The Netra is a small, portable UAV used for surveillance and reconnaissance. It has a range of up to 2 km and can operate at an altitude of up to 200 meters. The Netra is equipped with a day/night camera and can transmit real-time video and imagery.',
    image: 'https://himachalwatcher.com/wp-content/uploads/2014/06/beas-search-operation-netra-drone.jpg'
  },
  {
    place: 'INDIAN ARMY',
    title: 'HAL',
    title2: 'DHRUV',
    description: 'The HAL Dhruv is a multi-role helicopter manufactured by Hindustan Aeronautics Limited. It is used by the Indian Army for reconnaissance, surveillance, and troop transport. It has a maximum speed of 290 km/h and a range of up to 640 km.',
    image: 'https://fighterjetsworld.com/wp-content/uploads/2021/06/HAL-Dhruv-Emergency-Landing.jpg'
  },
  {
    place: 'INDIAN ARMY',
    title: 'T-90S',
    title2: 'BHISHMA',
    description: 'This is a Russian-made tank that was inducted into the Indian Army in 2001. The T-90S is equipped with a 125 mm smoothbore gun, a 7.62 mm coaxial machine gun, and a 12.7 mm anti-aircraft machine gun.',
    image: 'https://th.bing.com/th/id/OIP.Zdvps2YaxG5XXwjzY1W8SgHaE7?rs=1&pid=ImgDetMain'
  },
  {
    place: 'INDIAN ARMY',
    title: 'ARJUN MAIN BATTLE',
    title2: 'TANK(MBT)',
    description: "This is India's first indigenously designed and developed tank. The Arjun MBT is equipped with a 120 mm main gun, a 7.62 mm coaxial machine gun, and a 12.7 mm anti-aircraft machine gun.",
    image: 'https://i.redd.it/m5z1kv557y281.jpg'
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
  if (event.currentTarget.classList.contains('arrow-left')) {
    clicks += 1;
    step();
  } else if (event.currentTarget.classList.contains('arrow-right')) {
    clicks += 1;
    step();
  }
}

const range = (n) => Array(n).fill(0).map((i, j) => i + j);
const set = gsap.set;

function getCard(index) { return `#card${index}`; }
function getCardContent(index) { return `#card-content-${index}`; }
function getSliderItem(index) { return `#slide-item-${index}`; }

function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, { ...properties, duration: duration, onComplete: resolve });
  });
}

let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let detailsEven = true;
let offsetTop = 200;
let offsetLeft = 700;
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
  const [active, ...rest] = order;
  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430;
  offsetLeft = width - 830;

  gsap.set("#pagination", { top: offsetTop + 330, left: offsetLeft, y: 200, opacity: 0, zIndex: 60 });
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
  gsap.set(".progress-sub-foreground", { width: 500 * (1 / order.length) * (active + 1) });

  rest.forEach((i, index) => {
    gsap.set(getCard(i), { x: offsetLeft + 400 + index * (cardWidth + gap), y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10 });
    gsap.set(getCardContent(i), { x: offsetLeft + 400 + index * (cardWidth + gap), zIndex: 40, y: offsetTop + cardHeight - 100 });
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
  });

  gsap.set(".indicator", { x: -window.innerWidth });
  const startDelay = 0.6;

  gsap.to(".cover", { x: width + 400, delay: 0.5, ease, onComplete: () => { setTimeout(() => { loop(); }, 500); } });

  rest.forEach((i, index) => {
    gsap.to(getCard(i), { x: offsetLeft + index * (cardWidth + gap), zIndex: 30, ease, delay: startDelay });
    gsap.to(getCardContent(i), { x: offsetLeft + index * (cardWidth + gap), zIndex: 40, ease, delay: startDelay });
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
    gsap.to(getCardContent(active), { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease });
    gsap.to(getSliderItem(active), { x: 0, ease });
    gsap.to(getSliderItem(prv), { x: -numberSize, ease });
    gsap.to(".progress-sub-foreground", { width: 500 * (1 / order.length) * (active + 1), ease });

    gsap.to(getCard(active), {
      x: 0, y: 0, ease, width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
        gsap.set(getCard(prv), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1 });
        gsap.set(getCardContent(prv), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40 });
        gsap.set(getSliderItem(prv), { x: rest.length * numberSize });
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
        const xNew = offsetLeft + index * (cardWidth + gap);
        gsap.set(getCard(i), { zIndex: 30 });
        gsap.to(getCard(i), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, delay: 0.1 * (index + 1) });
        gsap.to(getCardContent(i), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1) });
        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
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

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}

async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
    init();
  }
}

start();
