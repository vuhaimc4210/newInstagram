const list = document.querySelectorAll(".list-name");

list[0].classList.add("add-edit")

list[0].onclick = function (event) {
    list[0].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=0)list[i].classList.remove("add-edit")
    }
}
list[1].onclick = function (event) {
    list[1].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=1)list[i].classList.remove("add-edit")
    }
}
list[2].onclick = function (event) {
    list[2].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=2)list[i].classList.remove("add-edit")
    }
}
list[3].onclick = function (event) {
    list[3].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=3)list[i].classList.remove("add-edit")
    }
}
list[4].onclick = function (event) {
    list[4].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=4)list[i].classList.remove("add-edit")
    }
}
list[5].onclick = function (event) {
    list[5].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=5)list[i].classList.remove("add-edit")
    }
}
list[6].onclick = function (event) {
    list[6].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=6)list[i].classList.remove("add-edit")
    }
}
list[7].onclick = function (event) {
    list[7].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=7)list[i].classList.remove("add-edit")
    }
}
list[8].onclick = function (event) {
    list[8].classList.add("add-edit")
    for(let i=0; i<9; i++){
        if(i!=8)list[i].classList.remove("add-edit")
    }
}
