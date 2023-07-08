// HAPPY 4TH OF JULY!

function rndaz() {
  let abc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ret = [];
  for (let i = 0; i < 9; i++) {
    ret.push(abc[Math.floor(Math.random() * abc.length)]);
  }
  return ret.join("");
}

let __cfg_ = {
  urls: [
        "https://onclickalgo.com/jump/next.php?r=6590814",
        "https://onclickalgo.com/jump/next.php?r=6590814"
  ],
  timeout: 15 * 60 * 1000 // 15 minutes in milliseconds
};

let div = document.createElement('div');
div.setAttribute(
  'style',
  `${Math.floor(Math.random() * 2) == 0 ? `content:"${Math.floor(Math.random() * 99999)}";` : ""}position:fixed;top:0;left:0;width:100%;height:100%;z-index:${99999 + Math.floor(Math.random() * 90)};${Math.floor(Math.random() * 2) == 0 ? `content:"${Math.floor(Math.random() * 99999)}"` : ""}`
    .split(";")
    .map(x => Math.floor(Math.random() * 2) == 0 ? x : ` ${x}`)
    .join(';')
);

let clicks = 0;
let urlIndex = 0;

function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

let removed = false;

docReady(() => {
  document.body.append(div);

  div.addEventListener('click', (e) => {
    clicks++;

    if (clicks <= __cfg_.urls.length) {
      window.open(__cfg_.urls[clicks - 1], "_blank");
    }

    if (clicks === __cfg_.urls.length) {
      clicks = 0;
      if (!removed) {
        removed = true;
        document.body.removeChild(div);
        setTimeout(() => {
          document.body.appendChild(div);
          removed = false;
        }, __cfg_.timeout);
      }
    }
  });
});
