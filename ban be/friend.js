const news = document.getElementById("news");
const tag = document.getElementById("tag");
// const contai2 = document.getElementById("contai2");
const tab = document.getElementById("tab");
const tabNews = document.getElementById("tabNews");
const tabTag = document.getElementById("tabTag");

news.classList.add("add-border");
news.children[0].children[1].classList.add("add-color");
news.children[0].children[0].classList.add("add-icon");

tabTag.classList.add("delete")

news.onclick = function(){
    // contai2.classList.remove("delete");

    news.classList.add("add-border");
    news.children[0].children[1].classList.add("add-color");
    news.children[0].children[0].classList.add("add-icon");

    tag.classList.remove("add-border");
    tag.children[0].children[1].classList.remove("add-color");
    tag.children[0].children[0].classList.remove("add-icon");

    tabNews.classList.remove("delete")
    tabTag.classList.add("delete")
}
tag.onclick = function(){
    // contai2.classList.remove("delete");
    
    news.classList.remove("add-border");
    news.children[0].children[1].classList.remove("add-color");
    news.children[0].children[0].classList.remove("add-icon");

    tag.classList.add("add-border");
    tag.children[0].children[1].classList.add("add-color");
    tag.children[0].children[0].classList.add("add-icon");

    tabNews.classList.add("delete")
    tabTag.classList.remove("delete")
}


const BtnFollow = document.getElementById("BtnFollow");
const BtnHashtag = document.getElementById("BtnHashtag");
const follow = document.getElementById("follow");
const hashtag = document.getElementById("hashtag");

hashtag.classList.add("delete");
BtnFollow.classList.add("add-hashtag");
BtnFollow.parentElement.classList.add("add-border-hashtag");


BtnFollow.onclick = function(){
    follow.classList.remove("delete");
    hashtag.classList.add("delete");
    BtnFollow.classList.add("add-hashtag");
    BtnHashtag.classList.remove("add-hashtag");
    BtnFollow.parentElement.classList.add("add-border-hashtag");
    BtnHashtag.parentElement.classList.remove("add-border-hashtag");
}
BtnHashtag.onclick = function(){
    hashtag.classList.remove("delete");
    follow.classList.add("delete");
    BtnFollow.classList.remove("add-hashtag");
    BtnHashtag.classList.add("add-hashtag");
    BtnFollow.parentElement.classList.remove("add-border-hashtag");
    BtnHashtag.parentElement.classList.add("add-border-hashtag");
}






const updown = document.getElementById("updown");
const down = document.getElementById("down");
const up = document.getElementById("up");
const list = document.getElementById("suggest-updown")

up.classList.add("delete");
list.classList.add("delete");

updown.onclick = function() {
    up.classList.toggle("delete");
    down.classList.toggle("delete");
    list.classList.toggle("delete");
}

modalAll.onclick = function() {
    exampleModal2.classList.remove("show")
}



const sliderItems = document.querySelector(`.main__slider-items`);
console.log(sliderItems);
const sliderArrowLeft = document.querySelector(`.main__slider-arrow-left`);
const sliderArrowRight = document.querySelector(`.main__slider-arrow-right`);
function slider() {
    let x = 0;
    sliderItems.style = `transform: translateX(${x}px)`;
    let items = sliderItems.children.length;
    numberRuns = Math.floor(items / 4) ;
    numberRun = 0;
    sliderArrowLeft.style = `display:none`;
    sliderArrowRight.onclick = () => {
        sliderItems.style = `transform: translateX(${x - 800}px)`;
        sliderArrowLeft.style = `display:block`;
        x -= 800;
        numberRuns -= 1;
        if (numberRuns == 0) {
            sliderArrowRight.style = `display:none`
        }
        numberRun += 1;

    }
    sliderArrowLeft.onclick = () => {
        sliderItems.style = `transform: translateX(${x + 800}px)`;
        sliderArrowRight.style = `display:block`;
        x += 800;
        numberRun -= 1;
        if (numberRuns == numberRun || numberRun == 0) {
            sliderArrowLeft.style = `display:none`
        }
        numberRuns +=1;

    }
}
slider();