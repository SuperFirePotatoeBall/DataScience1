window.addEventListener('scroll', handleScroll)

const titleHeight = 1000;
const questionHeight = 2000;



function handleScroll (){
    //Title
    var title = document.getElementById("titleDiv");
    if (getScrollDistance() > titleHeight){
        title.style.opacity = 0;
    } else if (getScrollDistance() <= titleHeight){
        title.style.opacity = 100;
    }
    //Question
    var question = document.getElementById("questionDiv");
    if (getScrollDistance() > questionHeight || getScrollDistance() <= titleHeight){
        question.style.opacity = 0;
    } else if (getScrollDistance() <= questionHeight){
        question.style.opacity = 100;
    }
}
function getScrollDistance() {
    var scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    return scrollDistance;
}