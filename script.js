window.onload = function(){
    sliderNav();
    menuNav();
    catalogNav();
    paginationNav();
}

const sliderNav=()=>{
    const slider = document.querySelector('.slider');
    const left = slider.querySelector('.left');
    const right = slider.querySelector('.right');
    const slides = slider.querySelectorAll('.slide');
    let slidesArr = Array.from(slides);
    let timer = startTimer(slidesArr);
    right.addEventListener('click',function(e){
        clearInterval(timer);
        moveSlide(slidesArr);
        timer = startTimer(slidesArr);
    });
    left.addEventListener('click',function(e){
        clearInterval(timer);
        moveSlide(slidesArr);
        timer = startTimer(slidesArr);
    })
}

function startTimer(param){
    let timer = setInterval(function(){
        moveSlide(param);
    },4000);
    return timer;
}

const moveSlide = (slidesArr)=>{
    let current = slidesArr.find(item => item.classList.contains('checked'));
        current.classList.remove('checked');
        let currentIndex = slidesArr.indexOf(current);
        if(currentIndex == 0){
            slidesArr[currentIndex+1].classList.add('checked');
        }
        else if(currentIndex = slidesArr.length-1){
            slidesArr[0].classList.add('checked');
        }
}

const menuNav = ()=>{
    const icon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    icon.addEventListener('click',function(){
        menu.classList.toggle('menu-active');
    });
}

const catalogNav =()=>{
    let blocks = document.querySelectorAll('.left-block-item');
    let sublists = document.querySelectorAll('.sublist');
    let links = document.querySelectorAll('.sublist a');
    blocks.forEach(block => {
        let sublist = block.querySelector('.sublist');
        block.addEventListener('click',function(e){
            sublist.classList.toggle('display');
        });
    });

    links.forEach(link=>{
        link.addEventListener('click',function(e){
            e.preventDefault();
            e.stopPropagation();
            if(e.target.parentElement.classList.contains('sublist-item')){
                e.target.parentElement.classList.add('checked');
            }
        })
    })
}

const paginationNav=()=>{
    const pagination = document.querySelector('.pagination');
    let items = Array.from(pagination.children);
    pagination.addEventListener('click',function(e){
        let target = e.target;
        if(target.tagName = 'A'){
            let current = items.find(item => item.classList.contains('active'));
            current.classList.remove('active');
            target.classList.add('active');
            e.preventDefault();
        }
    })
}
