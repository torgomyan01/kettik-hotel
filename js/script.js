function $(target){
  return document.querySelectorAll(target);
}

function $el(target){
  return document.querySelector(target);
}


const heroInputPlace = $el('#hero-input-place');
const heroOneLine = $el('#hero-one-line');
const heroTwoLine = $el('#hero-two-line');
const heroInputRes = $el('#hero-input-res');


heroInputPlace.addEventListener('focus', HeroOneInputFocus)

heroInputPlace.addEventListener('blur', HeroOneInputFocus)

function HeroOneInputFocus(){
  if(window.innerWidth < 1113){
    return;
  }
  const thisParent = this.parentElement;

  thisParent.classList.toggle('focus')
  heroOneLine.classList.toggle('opacity-0')
  heroInputRes.classList.toggle('hidden')
}


const heroInputData = $('.hero-input-data');
const heroCalendar = $el('#hero-calendar');

heroInputData.forEach(item => {
  if(window.innerWidth < 1113){
    return;
  }
  item.addEventListener('focus', HeroInputDataFocus)

  item.addEventListener('blur', HeroInputDataFocus)
})


function HeroInputDataFocus(){
  if(window.innerWidth < 1113){
    return;
  }
  const thisParent = this.parentElement.parentElement;
  thisParent.classList.toggle('focus');
  heroOneLine.classList.toggle('opacity-0')
  heroTwoLine.classList.toggle('opacity-0')
  heroCalendar.classList.toggle('hidden')
}

const heroInputSelectChild = $el('#hero-input-select-child');
const heroInputSelectChildBody = $el('#hero-select-child-body');
const heroInputSelectChildClose = $el('#hero-input-select-child-close');

heroInputSelectChild.addEventListener('click', HeroSelectChildFocus)

function HeroSelectChildFocus(){
  if(window.innerWidth < 1113){
    return;
  }
  heroInputSelectChild.classList.add('focus');
  heroInputSelectChildBody.classList.remove('hidden');
  heroInputSelectChildClose.classList.remove('hidden');
}

heroInputSelectChildClose.addEventListener('click', function(){
  if(window.innerWidth < 1113){
    return;
  }
  heroInputSelectChild.classList.remove('focus');
  heroInputSelectChildBody.classList.add('hidden');
  heroInputSelectChildClose.classList.add('hidden');
})

// AOS.init({
//   duration: 1000
// })
//
