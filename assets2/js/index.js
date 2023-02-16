// section 4

const methods = document.querySelectorAll(
  ".section-4 .content table tr td .method .choose p"
);

const paypals = document.querySelectorAll(
  ".section-4 .content table tr td .paypal"
);

const cryptos = document.querySelectorAll(
  ".section-4 .content table tr td .crypto"
);

methods[0].addEventListener("click", () => {
  enableActive(methods[0]);
  cryptos.forEach((item) => {
    if (item.classList.contains("show")) {
      item.classList.remove("show");
    }
  });
  paypals.forEach((item) => {
    item.classList.add("show");
  });
});

methods[1].addEventListener("click", () => {
  enableActive(methods[1]);
  paypals.forEach((item) => {
    if (item.classList.contains("show")) {
      item.classList.remove("show");
    }
  });
  cryptos.forEach((item) => {
    item.classList.add("show");
  });
});

function enableActive(target) {
  methods.forEach((method) => {
    method.classList.remove("active");
  });
  target.classList.add("active");
}

// section 5

// dropdowns

const parentItems = document.querySelectorAll(".section-5 .content .item");

const dropDownBtns1 = document.querySelectorAll(
  ".section-5 .content .item .title .dropDownBtns1 svg"
);
const dropDownBtns2 = document.querySelectorAll(
  ".section-5 .content .item .title .dropDownBtns2 svg"
);
const dropDownBtns3 = document.querySelectorAll(
  ".section-5 .content .item .title .dropDownBtns3 svg"
);
const dropDownBtns4 = document.querySelectorAll(
  ".section-5 .content .item .title .dropDownBtns4 svg"
);
const dropDownBtns5 = document.querySelectorAll(
  ".section-5 .content .item .title .dropDownBtns5 svg"
);
const dropDownBtns6 = document.querySelectorAll(
  ".section-5 .content .item .title .dropDownBtns6 svg"
);
const dropDown1 = document.getElementById("myDropDown1");
const dropDown2 = document.getElementById("myDropDown2");
const dropDown3 = document.getElementById("myDropDown3");
const dropDown4 = document.getElementById("myDropDown4");
const dropDown5 = document.getElementById("myDropDown5");
const dropDown6 = document.getElementById("myDropDown6");

dropDownBtns1.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeDropDown(dropDownBtns1, dropDown1, parentItems[0]);
  });
});
dropDownBtns2.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeDropDown(dropDownBtns2, dropDown2, parentItems[1]);
  });
});
dropDownBtns3.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeDropDown(dropDownBtns3, dropDown3, parentItems[2]);
  });
});
dropDownBtns4.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeDropDown(dropDownBtns4, dropDown4, parentItems[3]);
  });
});
dropDownBtns5.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeDropDown(dropDownBtns5, dropDown5, parentItems[4]);
  });
});
dropDownBtns6.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeDropDown(dropDownBtns6, dropDown6, parentItems[5]);
  });
});
function makeDropDown(btns, dropDown, parentItem) {
  if (btns[0].classList.contains("show")) {
    btns[0].classList.remove("show");
    btns[1].classList.add("show");
    dropDown.classList.add("show");
    parentItem.classList.add("active");
  } else {
    btns[1].classList.remove("show");
    btns[0].classList.add("show");
    dropDown.classList.remove("show");
    parentItem.classList.remove("active");
  }
}
