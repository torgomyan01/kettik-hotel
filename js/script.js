function $(target) {
  return document.querySelectorAll(target);
}

function $el(target) {
  return document.querySelector(target);
}

AOS.init({
  duration: 1000
})


const heroInputPlace = $el('#hero-input-place');
const heroOneLine = $el('#hero-one-line');
const heroTwoLine = $el('#hero-two-line');
const heroInputRes = $el('#hero-input-res');

const mobileCalendar = $el('#mobile-calendar');
const closeCalendar = $el('#close-calendar');

closeCalendar.addEventListener('click', function (){
  mobileCalendar.classList.remove('active');
})


const mobileSort = $el('#mobile-sort');
const closeSort = $el('#close-sort');
const openSort = $el('#open-sort');

closeSort.addEventListener('click', function (){
  mobileSort.classList.remove('active');
})

openSort.addEventListener('click', function (){
  mobileSort.classList.add('active');
})

const mobileMap = $el('#mobile-map');
const openMap = $el('#open-map');
const closeMap = $el('#close-map');


openMap.addEventListener('click', function (){
  mobileMap.classList.add('active');
})

closeMap.addEventListener('click', function (){
  mobileMap.classList.remove('active');
})

heroInputPlace.addEventListener('focus', HeroOneInputFocus)

heroInputPlace.addEventListener('blur', HeroOneInputFocus)

function HeroOneInputFocus() {
  const type = +this.dataset.mobileSuccess

  if (window.innerWidth < 1113 && !type) {
    return;
  }
  const thisParent = this.parentElement;

  thisParent?.classList.toggle('focus')
  thisParent?.parentElement?.classList.toggle('focus')
  heroOneLine?.classList.toggle('opacity-0')
  heroInputRes?.classList.toggle('hidden')
}


const heroInputData = $('.hero-input-data');
const heroCalendar = $el('#hero-calendar');

heroInputData.forEach(item => {
  item.addEventListener('focus', HeroInputDataFocus)

  item.addEventListener('blur', HeroInputDataFocus)
})


function HeroInputDataFocus() {
  if (window.innerWidth < 1113) {
    mobileCalendar.classList.add('active');
    return;
  }
  const thisParent = this.parentElement.parentElement;
  thisParent.classList.toggle('focus');
  heroOneLine?.classList.toggle('opacity-0')
  heroTwoLine?.classList.toggle('opacity-0')
  heroCalendar?.classList.toggle('hidden')
}

const heroInputSelectChild = $el('#hero-input-select-child');
const heroInputSelectChildBody = $el('#hero-select-child-body');
const heroInputSelectChildClose = $el('#hero-input-select-child-close');

heroInputSelectChild?.addEventListener('click', HeroSelectChildFocus)

function HeroSelectChildFocus() {
  if (window.innerWidth < 1113) {
    return;
  }
  heroInputSelectChild?.classList.add('focus');
  heroInputSelectChildBody?.classList.remove('hidden');
  heroInputSelectChildClose?.classList.remove('hidden');
}

heroInputSelectChildClose?.addEventListener('click', function () {
  if (window.innerWidth < 1113) {
    return;
  }
  heroInputSelectChild?.classList.remove('focus');
  heroInputSelectChildBody?.classList.add('hidden');
  heroInputSelectChildClose?.classList.add('hidden');
})


const rangeDay = $('.range-day');
const priceMinMax = $el('#price-min-max');

rangeDay.forEach((item) => {


  noUiSlider.create(item, {
    start: [25, 800],
    connect: true,
    step: 15,
    range: {
      'min': 0,
      'max': 1000
    },
  });

  item.noUiSlider.on('update', function (values, handle) {
    const hourStart = (+values[0]).toFixed(0).replace(/.00/, '');
    const hourEnd = (+values[1]).toFixed(0).replace(/.00/, '');

    priceMinMax.innerText = `${hourStart}$ - 1${hourEnd}$+`;
  });

})


let h, i;
let dataValues = [];
let svgs = document.querySelectorAll('.svg');

for (i = 0; i < svgs.length; i++) {
  dataValues.push(svgs[i].dataset["value"]);
}

function drawcircles(duration = '5s') {

  let circlelines = document.querySelectorAll('.load-circle');

  for (h = 0; h < circlelines.length; h++) {
    let totalLength = circlelines[h].getTotalLength();
    let offset = totalLength - ((dataValues[h] / 100) * totalLength);
    circlelines[h].style.transitionDuration = duration;
    circlelines[h].style.strokeDashoffset = offset + "px";
  }
}

drawcircles();



const searchResultTab = $('.search-result-tab');

searchResultTab.forEach((item) => {

  item.addEventListener('click', function () {
    searchResultTab.forEach((itemData) => itemData.classList.remove('active'));

    this.classList.add('active');
  })
})

