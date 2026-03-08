// ----------- Космічні зірки -----------

const canvas = document.getElementById("starCanvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let stars=[]

for(let i=0;i<200;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.5
})
}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

stars.forEach(star=>{

ctx.beginPath()
ctx.arc(star.x,star.y,star.size,0,Math.PI*2)
ctx.fillStyle=`rgba(255,255,255,${Math.random()})`
ctx.fill()

star.y+=star.speed

if(star.y>canvas.height){
star.y=0
star.x=Math.random()*canvas.width
}

})

requestAnimationFrame(drawStars)

}

drawStars()

// ----------- Текст -----------

const title=document.getElementById("title")
const stage2=document.getElementById("stage2")
const typing=document.getElementById("typing")

const text="Дорога Альона, вітаю тебе з 8 березня. Ти неймовірна дівчина. Нажаль я ще не настільки багатий щоб дарувати квіти, проте мені вистачить знань і умінь створити це чудо."

function startTyping(){

let i=0

function type(){

if(i<text.length){
typing.innerHTML+=text.charAt(i)
i++
setTimeout(type,40)
}

}

type()

}

// ----------- Перехід -----------

setTimeout(()=>{

title.classList.add("titleDisappear")

setTimeout(()=>{

stage2.style.display="block"
stage2.querySelector(".box").classList.add("boxAppear")

startTyping()

},2000)

},4000)


// ----------- Галерея -----------

const gallery=document.getElementById("gallery")
const slides=document.querySelectorAll(".slide")
const btn=document.getElementById("continueBtn")

let index=0

btn.addEventListener("click",openGallery)

function openGallery(){

stage2.style.display="none"
gallery.style.display="flex"

index=0
showSlide(index)

}

// ----- ефект друку для фото -----

function typePhotoText(element){

const fullText=element.dataset.text
element.innerHTML=""
element.classList.add("typingCursor")

let i=0

function type(){

if(i<fullText.length){
element.innerHTML+=fullText.charAt(i)
i++
setTimeout(type,35)
}else{
element.classList.remove("typingCursor")
}

}

type()

}

// ----- показ слайду -----

function showSlide(i){

slides.forEach((slide,idx)=>{

slide.classList.remove("active")

if(idx===i){

slide.classList.add("active")

const textEl=slide.querySelector(".photoText")

if(textEl){

if(!textEl.dataset.text){
textEl.dataset.text=textEl.innerText
}

typePhotoText(textEl)

}

}

})

}

// ---- клік на фото ----

slides.forEach((slide)=>{

const img=slide.querySelector("img")

if(img){

img.addEventListener("click",()=>{

index++

if(index>=slides.length){
index=slides.length-1
}

showSlide(index)

})

}

})

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth
canvas.height=window.innerHeight

})