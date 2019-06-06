
const sound = new Audio()

const playSound = (drum) => {
    
    switch (drum) {  //assign sound file to sound.src
        case 'b': sound.src = './sounds/boom.wav'; break;
        case 'c': sound.src = './sounds/clap.wav'; break;
        case 'h': sound.src = './sounds/hihat.wav'; break;
        case 'k': sound.src = './sounds/kick.wav'; break;
        case 'o': sound.src = './sounds/openhat.wav'; break;
        case 'r': sound.src = './sounds/ride.wav'; break;
        case 's': sound.src = './sounds/snare.wav'; break;
        case 't': sound.src = './sounds/tink.wav'; break;
        case 'm': sound.src = './sounds/tom.wav'; break;
        default:  sound.src = ''; break;
    } //end switch

    sound.play()
} //end playSound

// Play music by keypress
document.addEventListener("keypress", () => {
    let drum = event.key
    playSound(drum)
})

//Play music by click

b.addEventListener("click", () => {playSound('b')})
c.addEventListener("click", () => {playSound('c')})    
h.addEventListener("click", () => {playSound('h')})
k.addEventListener("click", () => {playSound('k')})
o.addEventListener("click", () => {playSound('o')})
r.addEventListener("click", () => {playSound('r')})
s.addEventListener("click", () => {playSound('s')})
t.addEventListener("click", () => {playSound('t')})
m.addEventListener("click", () => {playSound('m')})