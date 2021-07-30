let span1 = document.querySelector('.span-1');
let span2 = document.querySelector('.span-2');
let span3 = document.querySelector('.span-3');
let bookRecept = document.querySelector('.book-recept');
let bookClue = document.querySelector('.book-clue');
let activeElement = document.querySelectorAll('.activeElement');

var isMenuShow = false;
let isf = false;
let st;
let vr;
span1.addEventListener('click', func1);
span2.addEventListener('click', func2);
for (let elems of activeElement) {
  elems.addEventListener('dragstart', (e) => {
    let posStart = getPosition(e);
    st = e.pageY;
    vr = e.pageX;

    //console.log(st, vr);
  })
  elems.addEventListener('dragend', (e) => {
    let g = getPosition(e);
    //console.log(g.x, g.y);
    console.log('Начальные ', st, vr);
    console.log('Конечные ', g.y, g.x);
    // if (!isf) {

    //   isf = true;
    // } else {
    e.target.style.top = (-st + e.pageY) + 'px';
    e.target.style.left = (-vr + e.pageX) + 'px';
    //}

  });
}



function func1() {
  if (isMenuShow) {
    //bookRecept.style.display = 'block';
    //bookRecept.style.left = '0px';
    bookRecept.style.opacity = '0';
    bookRecept.style.pointerEvents = 'none';
    isMenuShow = false;
  } else {
    //bookRecept.style.display = 'none';
    bookRecept.style.opacity = '1';
    //bookRecept.style.left = '-200px';
    bookRecept.style.pointerEvents = 'auto';
    isMenuShow = true;
  }
}
function func2() {
  if (isMenuShow) {
    //bookRecept.style.display = 'block';
    //bookRecept.style.left = '0px';
    bookClue.style.opacity = '0';
    bookClue.style.pointerEvents = 'none';
    isMenuShow = false;
  } else {
    //bookRecept.style.display = 'none';
    bookClue.style.opacity = '1';
    //bookRecept.style.left = '-200px';
    bookClue.style.pointerEvents = 'auto';
    isMenuShow = true;
  }
}

let arr1 = [];
arr1.push('water');
arr1.push('fire');
arr1.push('earth');
arr1.push('air');
arr1.push('wind');
arr1.push('pressure');
arr1.push('alcohol');
arr1.push('sea');
arr1.push('steam');
arr1.push('lava');
arr1.push('volcano');
arr1.push('island');
arr1.push('swamp');     //water+fire = steam;arr[0]+arr[1] = arr[9];
arr1.push('rock');
arr1.push('metal');

span3.addEventListener('click', () => {
  //console.log('ff');
  let res = resultElemetn(0, 1);
  console.log(res);
});

function resultElemetn(indexEl1, indexEl2) {
  //если существуют комбинации то вернём резулт. го запишем комбинации в switch-case
  console.log(indexEl1, indexEl2);
  switch (parseInt(indexEl1)) {
    case 0:
      if (parseInt(indexEl2) == 0) return arr1[7];
      if (parseInt(indexEl2) == 1) return arr1[6];
      if (parseInt(indexEl2) == 2) return arr1[12];
      if (parseInt(indexEl2) == 3) return arr1[8];

    case 1:
      if (parseInt(indexEl2) == 0) return arr1[8];
  }
}

let arr2 = [
  [], [], [], [], [], [], [],
];

function getPosition(e) {
  var x = y = 0;

  if (!e) {
    var e = window.event;
  }

  if (e.pageX || e.pageY) {
    x = e.pageX;
    y = e.pageY;
  } else if (e.clientX || e.clientY) {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: x, y: y }
}
// switch (x) {
//   case '':

//     break;
// }
// console.log(arr1);