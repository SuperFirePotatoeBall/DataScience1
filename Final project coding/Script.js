const titleHeight = 200;
const questionHeight = 400;
const dataHeight = 600;
const analysisHeight = 800;
const visualizationHeight = 1000;

var title = document.getElementById("titleDiv");
var question = document.getElementById("questionDiv");
var data = document.getElementById("dataDiv");
var analysis = document.getElementById("analysisDiv");
var visualization = document.getElementById("visualizationDiv");
var answer = document.getElementById("answerDiv");

var titleTimes = [];
var questionTimes = [];
var dataTimes = [];
var analysisTimes = [];
var visualizationTimes = [];
var answerTimes = [];
if (window.innerWidth > 600){
    window.addEventListener('scroll', handleScroll)
}
function handleScroll (){
    updateScrollDistancse()
    x = getScrollDistance()

    //Title
    if (0 <= x && x <= titleHeight){ // 0 <= x <= titleHeight
        titleTime = setTimeout(function(){title.style.opacity = 100;}, 550);
        titleTimes.push(titleTime);
    } else {
        for (var i = 0; i < titleTimes.length; i++) {
            clearTimeout(titleTimes[i]);
        }
        title.style.opacity = 0;
    }

    //Question
    if (titleHeight < x && x <= questionHeight){ // titleHeight < x <= questionHeight
        questionTime = setTimeout(function(){question.style.opacity = 100;}, 550);
        questionTimes.push(questionTime);
    } else {
        for (var i = 0; i < questionTimes.length; i++) {
            clearTimeout(questionTimes[i]);
        }
        question.style.opacity = 0;
    }

    //Data
    if (questionHeight < x && x <= dataHeight){
        dataTime = setTimeout(function(){data.style.opacity = 100;}, 550);
        dataTimes.push(dataTime);
    } else {
        for (var i = 0; i < dataTimes.length; i++) {
            clearTimeout(dataTimes[i]);
        }
        data.style.opacity = 0;
    }

    //Analysis
    if (dataHeight < x && x <= analysisHeight){
        analysisTime = setTimeout(function(){analysis.style.opacity = 100;}, 550);
        analysisTimes.push(analysisTime);
    } else {
        for (var i = 0; i < analysisTimes.length; i++) {
            clearTimeout(analysisTimes[i]);
        }
        analysis.style.opacity = 0;
    }

    //Visualization
    if (analysisHeight < x && x <= visualizationHeight){
        visualizationTime = setTimeout(function(){visualization.style.opacity = 100;}, 550);
        visualizationTimes.push(visualizationTime);
    } else {
        for (var i = 0; i < visualizationTimes.length; i++) {
            clearTimeout(visualizationTimes[i]);
        }
        visualization.style.opacity = 0;
    }

    //Answer
    if (visualizationHeight < x){
        answerTime = setTimeout(function(){answer.style.opacity = 100;}, 550);
        answerTimes.push(answerTime);
    } else {
        for (var i = 0; i < answerTimes.length; i++) {
            clearTimeout(answerTimes[i]);
        }
        answer.style.opacity = 0;
    }
}
function getScrollDistance() {
    var scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    return scrollDistance;
}
function updateScrollDistancse() {
    var distanceElement = document.getElementById('scroll-distance');
    distanceElement.textContent = 'Scroll Distance: ' + getScrollDistance() + ' pixels';
}