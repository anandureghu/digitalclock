// font-family: 'Faster One', cursive;
// font-family: 'Megrim', cursive;
// font-family: 'Michroma', sans-serif;
// font-family: 'Qahiri', sans-serif;
// font-family: 'Stick', sans-serif;
// font-family: 'Turret Road', cursive;
// font-family: 'Wallpoet', cursive;
// font-family: 'ZCOOL QingKe HuangYou', cursive;
// font-family: 'Zen Dots', cursive;

const fonts = ['Faster One', 'Megrim', 'Micharma', 'Stick', 'Turret Road', 'Wallpoet', 'ZCOOL QingKe HuangYou', 'Zen Dots','Qahiri'];

const colors = ['303F9F', '00897B', 'FFA000', 'C62828', '673AB7', 'BDBDBD', 'F5F7FA'];


const clock = document.querySelector(".clock");
const title = document.querySelector("title");
const font = document.querySelector('.font');
const color = document.querySelector('.color');
let colorCount = 0;
let fontCount = 0;
const tick = () => {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if(h>12){
        h -= 12;
    }

    if(h<10){
        h = String("0" + h);
    }
    if(m<10){
        m = String("0" + m);
    }
    if(s<10){
        s = String("0" + s);
    }



    const time = `${h} : ${m} : ${s}`;
    clock.innerHTML = time;
    title.textContent = time;
}

setInterval(tick, 1000);


color.addEventListener('click', (e) => {
    clock.style.color = "#" + colors[colorCount];
    colorCount += 1;
    if(colorCount > colors.length) {
        colorCount = 0;
    }
    
});

font.addEventListener('click', (e) => {
    clock.style.fontFamily = fonts[fontCount];
    title.style.fontFamily = fonts[fontCount];
    fontCount += 1;
    if(fontCount > fonts.length) {
        fontCount = 0;
    }
})