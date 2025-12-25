// Fon musiqa
const music = document.getElementById("bgMusic");
music.volume = 0.15;
let started=false;
document.addEventListener("click",()=>{
    if(!started){
        music.play();
        started=true;
    }
});

// Modal
function openModal(videoId){
    document.getElementById("modal").style.display="flex";
    document.getElementById("video").src="https://www.youtube.com/embed/"+videoId;
    music.volume = 0.05;
}
function closeModal(){
    document.getElementById("modal").style.display="none";
    document.getElementById("video").src="";
    music.volume = 0.15;
}

// Filter
function filterMovies(type){
    const movies=document.querySelectorAll(".movie");
    movies.forEach(m=>{
        m.style.display=(type==="all"||m.classList.contains(type))?"block":"none";
    });
}

// Search
document.getElementById("search").addEventListener("keyup",function(){
    let val=this.value.toLowerCase();
    document.querySelectorAll(".movie").forEach(m=>{
        m.style.display = m.innerText.toLowerCase().includes(val)?"block":"none";
    });
});

// Language
const heroTitle = document.querySelector(".slide-info h2");
const heroDesc = document.querySelector(".slide-info p");

document.getElementById("lang").addEventListener("change",function(){
    const val=this.value;
    if(val==="uz"){
        heroTitle.innerText="Eng Zo‘r Filmlar Sizni Kutmoqda";
        heroDesc.innerText="Haqqiy kino atmosferasi, premium dizayn, jonli animatsiyalar";
    }
    if(val==="en"){
        heroTitle.innerText="The Best Movies Await You";
        heroDesc.innerText="Real cinematic atmosphere, premium design, live animations";
    }
    if(val==="ru"){
        heroTitle.innerText="Лучшие фильмы ждут вас";
        heroDesc.innerText="Настоящая киноатмосфера, премиальный дизайн, живые анимации";
    }
});

// Slider
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
document.getElementById("next").addEventListener("click",()=>{
    slides[currentIndex].classList.remove("active");
    currentIndex=(currentIndex+1)%slides.length;
    slides[currentIndex].classList.add("active");
    updateSlider();
});
document.getElementById("prev").addEventListener("click",()=>{
    slides[currentIndex].classList.remove("active");
    currentIndex=(currentIndex-1+slides.length)%slides.length;
    slides[currentIndex].classList.add("active");
    updateSlider();
});
function updateSlider(){
    const slider = document.getElementById("slider");
    slider.style.transform = `translateX(-${currentIndex*100}%)`;
}
setInterval(()=>{
    document.getElementById("next").click();
},8000);




