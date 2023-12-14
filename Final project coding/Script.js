const h = 200; // height of every part

const th = 200; //title height
const ih = th + 200; //intro height
const d1h = ih + h*4; //data 1 height
const d2h = d1h + h*5; //data 2 height
const d3h = d2h + h*2; //data 3 height
//no conclusion height because it goes to the end of the doc
const d11h = ih + h*1;
const d12h = ih + h*2;
const d13h = ih + h*3;
const d14h = ih + h*4;

const d21h = d1h + h*1;
const d22h = d1h + h*2;
const d23h = d1h + h*3;
const d24h = d1h + h*4;
const d25h = d1h + h*5;

const d31h = d2h + h*1;
const d32h = d2h + h*2;

var title = document.getElementById("titleDiv");
var intro = document.getElementById("introDiv");
var d1 = document.getElementById("data1Div");
var d2 = document.getElementById("data2Div");
var d3 = document.getElementById("data3Div");
var con = document.getElementById("conclusionDiv");

var data1Text = document.getElementById("data1Text");
var data2Text = document.getElementById("data2Text");
var data3Text = document.getElementById("data3Text");

const d11text = "To view the relationship between CO2 and lung cancer, let us look at two states, Arkansas and Utah.";
const d12text = "Both states released similar amounts of CO2 into the air, 62.02 megatonnes and 62.05 megatonnes, respectively.";
const d13text = "With such a similar amount of CO2 released, if it had a direct effect on lung cancer rates, we would expect both to have similar lung cancer rates.";
const d14text = "However, we don't see this; Arkansas has over four times as many cancer cases per million people.";

const d21text = "Well, maybe a different example would show a correlation, so let's look at California and New Mexico.";
const d22text = "Both have similar lung cancer rates, with approximately 453 lung cancer cases per million people.";
const d23text = "If CO2 were a prominent cause of lung cancer, we would expect both to have a relatively high output of CO2.";
const d24text = "California meets our expectations, releasing 324.03 megatonnes of CO2 into the atmosphere, the second highest of any state.";
const d25text = "But New Mexico? It only released 45.8 megatonnes of CO2, the 14th lowest state.";

const d31text = "These are only two examples, maybe seeing the whole graph will tell us more.";
const d32text = "As we can see, the number of cancer cases a state has is random, unaffected by how much CO2 they release each year.";

var titleTimes = [];
var introTimes = [];
var d1Times = [];
var d2Times = [];
var d3Times = [];
var conTimes = [];

handleScroll()

if (window.innerWidth > 600){
    window.addEventListener('scroll', handleScroll)
}
function handleScroll (){
    updateScrollDistancse()
    x = getScrollDistance()

    //Title
    if (0 <= x && x <= th){
        titleTime = setTimeout(function(){title.style.opacity = 100;}, 550);
        titleTimes.push(titleTime);
    } else {
        for (var i = 0; i < titleTimes.length; i++) {
            clearTimeout(titleTimes[i]);
        }
        title.style.opacity = 0;
    }

    //intro
    if (th < x && x <= ih){
       introTime = setTimeout(function(){intro.style.opacity = 100;}, 550);
       introTimes.push(introTime);
    } else {
        for (var i = 0; i < introTimes.length; i++) {
            clearTimeout(introTimes[i]);
        }
        intro.style.opacity = 0;
    }

    //data1
    if (ih < x && x <= d1h){
        d1Time = setTimeout(function(){d1.style.opacity = 100;}, 550);
        d1Times.push(d1Time);
        if (ih < x && x <= d11h){
            data1Text.textContent = d11text;
        } else if (d11h < x && x <= d12h){
            data1Text.textContent = d12text;
        }else if (d12h < x && x <= d13h){
            data1Text.textContent = d13text;
        }else if (d13h < x && x <= d14h){
            data1Text.textContent = d14text;
        }
    } else {
        for (var i = 0; i < d1Times.length; i++) {
            clearTimeout(d1Times[i]);
        }
        d1.style.opacity = 0;
    }

    //data2
    if (d1h < x && x <= d2h){
        d2Time = setTimeout(function(){d2.style.opacity = 100;}, 550);
        d2Times.push(d2Time);
        if (d1h < x && x <= d21h){
            data2Text.textContent = d21text;
        } else if (d21h < x && x <= d22h){
            data2Text.textContent = d22text;
        }else if (d22h < x && x <= d23h){
            data2Text.textContent = d23text;
        }else if (d23h < x && x <= d24h){
            data2Text.textContent = d24text;
        } else if (d24h < x && x <= d25h){
            data2Text.textContent = d25text;
        }
    } else {
        for (var i = 0; i < d2Times.length; i++) {
            clearTimeout(d2Times[i]);
        }
        d2.style.opacity = 0;
    }

    //data3
    if (d2h < x && x <= d3h){
        d3Time = setTimeout(function(){d3.style.opacity = 100;}, 550);
        d3Times.push(d3Time);
        if (d2h < x && x <= d31h){
            data3Text.textContent = d31text;
        } else if (d31h < x && x <= d32h){
            data3Text.textContent = d32text;
        }
    } else {
        for (var i = 0; i < d3Times.length; i++) {
            clearTimeout(d3Times[i]);
        }
        d3.style.opacity = 0;
    }

    //conclusion
    if (d3h < x){
        conTime = setTimeout(function(){con.style.opacity = 100;}, 550);
        conTimes.push(conTime);
    } else {
        for (var i = 0; i < conTimes.length; i++) {
            clearTimeout(conTimes[i]);
        }
        con.style.opacity = 0;
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