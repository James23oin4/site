if (document.getElementById("audio") != null) {
  const audio = document.getElementById("audio");
  const source = document.getElementById("source");
  const timeEl = document.getElementById("time");
  const seek = document.getElementById("seek");
  audio.addEventListener("canplaythrough", soundLoaded, false);
  var isPlaying = false;
  let seekWidth;
  let time;
  let totalTime;
  function soundLoaded() {
    totalTime = audio.duration;

    console.log(totalTime);
    document.getElementById("totalTime").innerHTML = new Date(totalTime * 1000)
      .toISOString()
      .substr(15, 4);
  }
  audio.volume = 0.6;

  setInterval(
    () => {
      time = audio.currentTime;
      timeEl.innerHTML = new Date(time * 1000).toISOString().substr(15, 4);
      seekWidth = scale(time, 0, totalTime, 0, 620);
      console.log(seekWidth);
      seek.style.width = seekWidth + "px";
    },
    1000,
    1000
  );

  audio.onplaying = function () {
    isPlaying = true;
    document.getElementById("pause1").hidden = false;
    document.getElementById("pause2").hidden = false;
    document.getElementById("play").hidden = true;
  };
  audio.onpause = function () {
    isPlaying = false;
    document.getElementById("pause1").hidden = true;
    document.getElementById("pause2").hidden = true;
    document.getElementById("play").hidden = false;
  };
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
}
// moving background mouse effect

$(document).ready(function () {
  var documentHeight = $(document).height();
  var $magic = $(".magic"),
    magicWHalfWidth = $magic.width() / 2;
  magicWHalfHeight = $magic.height() / 2;
  $(document).on("mousemove", function (e) {
    if (e.pageY + magicWHalfHeight < documentHeight) {
      // fixed error at the bottom of page
      $magic.css({
        left: e.pageX - magicWHalfWidth,
        top: e.pageY - magicWHalfHeight,
      });
    }
  });
});

// scroll up btn

const scrollUpBtn = document.querySelector("footer .content .scroll-up");

scrollUpBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// bar

const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.querySelector("header .header ul");

open.addEventListener("click", () => {
  open.classList.add("close");
  close.classList.add("show");
  nav.classList.add("show");
});

close.addEventListener("click", () => {
  close.classList.remove("show");
  open.classList.remove("close");
  nav.classList.remove("show");
});
