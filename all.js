let scale = document.querySelector(".scale");
let num = document.querySelector('.num');
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let hourPointer = document.querySelector('#hour');
let minPointer = document.querySelector('#min');
let secPointer = document.querySelector('#sec');

//onload取得時間並渲染  避免出現空窗空白
window.onload = ()=>getTime();

//創造刻度
(function creatScale() {
  let str = "";
  for (let i = 1; i <= 30; i++) {
    str += `<div class="test n-${i}">
            <span></span>
            <span></span>
            </div>`;
  }
  scale.innerHTML = str;
})();

//創造外圍數字
(function creatNum(){
    let str = '<div>';
    for(let i = 0; i<4; i++){
        str += `<span>${(i+1)*3}</span>`
    }
    str += `</div>`
    num.innerHTML = str;
})();

//取得時間
function getTime(){
    let time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();
    hour.innerHTML = h<10? '0'+h :h;
    min.innerHTML = m<10? '0'+m : m;
    sec.innerHTML = s<10? '0'+s : s;
    //指針移動
    function runPointer(){
        //水平線為0度  -90修正角度
        hourPointer.style.transform = "rotate(" + (((h*30)-90)+(m/2)) + "deg)";
        minPointer.style.transform = "rotate(" + ((m*6)-90) + "deg)";
        secPointer.style.transform = "rotate(" + ((s*6)-90) + "deg)";
    }
    runPointer();
    
}

//定時器
setInterval(() => {
    getTime();
}, 1000);
