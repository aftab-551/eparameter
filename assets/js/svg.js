// Get the position on the page of the SVG
// var svg = $('#mail-svg').drawsvg();
var handSvgAnimation = $('#svg-1').drawsvg({duration: 2500});
var timeSvgAnimation = $('#svg-2').drawsvg();
var brainSvgAnimation = $('#svg-3').drawsvg();
var clockSvgAnimation = $('#svg-4').drawsvg();
var costSvgAnimation = $('#svg-5').drawsvg();
var globeSvgAnimation = $('#svg-6').drawsvg();
// var svgLocation = document.getElementById("mail-svg").getBoundingClientRect();
var handSvgLocation = document.getElementById("svg-1").getBoundingClientRect();
var timeSvgLocation = document.getElementById("svg-2").getBoundingClientRect();
var brainSvgLocation = document.getElementById("svg-3").getBoundingClientRect();
var clockSvgLocation = document.getElementById("svg-4").getBoundingClientRect();
var costSvgLocation = document.getElementById("svg-5").getBoundingClientRect();
var globeSvgLocation = document.getElementById("svg-6").getBoundingClientRect();

// total length of my svg's path
var handPath = document.getElementById('hand-path');
var length = handPath.getTotalLength();
// console.log('SVG Path Lenght: ' + length);

// Scroll offset that triggers animation start.
// In this case it is the bottom of the SVG.
// var offsetToTriggerAnimation = svgLocation.y + svgLocation.height;
var offsetToTriggerHandSvg = handSvgLocation.y + handSvgLocation.height;
var offsetToTriggerTimeSvg = timeSvgLocation.y + timeSvgLocation.height;
var offsetToTriggerBrainSvg = brainSvgLocation.y + brainSvgLocation.height;
var offsetToTriggerClockSvg = clockSvgLocation.y + clockSvgLocation.height;
var offsetToTriggerCostSvg = costSvgLocation.y + costSvgLocation.height;
var offsetToTriggerGlobeSvg = globeSvgLocation.y + globeSvgLocation.height;

// function scrollAnimation(evt){
//     var viewBottom = window.scrollY + window.innerHeight;
//     // let windowHeight = window.height();
//     console.log('scrolling');
//     if (viewBottom > offsetToTriggerAnimation) {
//         // Start the SMIL animation
//         svg.drawsvg('animate');
//         // Remove the event handler so it doesn't trigger again
//         document.removeEventListener("scroll", scrollAnimation);
//     }
// }

function handSvg(evt){
    var viewBottom = window.scrollY + window.innerHeight;
    // let windowHeight = window.height();
    // console.log('hand animation');
    if (viewBottom > offsetToTriggerHandSvg) {
        // Start the SMIL animation
        handSvgAnimation.drawsvg('animate');
        // console.log('hand animation triggered');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", handSvg);
    }
}

function timeAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > offsetToTriggerTimeSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        timeSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", timeAnimation);
    }
}

function brainAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > offsetToTriggerBrainSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        brainSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", brainAnimation);
    }
}

function clockAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > offsetToTriggerClockSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        clockSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", clockAnimation);
    }
}

function costAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > offsetToTriggerCostSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        costSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", costAnimation);
    }
}

function globeAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > offsetToTriggerGlobeSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        globeSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", globeAnimation);
    }
}

// document.addEventListener('scroll', scrollAnimation);
document.addEventListener('scroll', handSvg);
document.addEventListener('scroll', timeAnimation);
document.addEventListener('scroll', brainAnimation);
document.addEventListener('scroll', clockAnimation);
document.addEventListener('scroll', costAnimation);
document.addEventListener('scroll', globeAnimation);
//for mobile svg animation
// Get the position on the page of the SVG
// var svg = $('#mail-svg').drawsvg();
var mobilehandSvgAnimation = $('#svg-01').drawsvg({duration: 2500});
var mobiletimeSvgAnimation = $('#svg-02').drawsvg();
var mobilebrainSvgAnimation = $('#svg-03').drawsvg();
var mobileclockSvgAnimation = $('#svg-04').drawsvg();
var mobilecostSvgAnimation = $('#svg-05').drawsvg();
var mobileglobeSvgAnimation = $('#svg-06').drawsvg();
// var svgLocation = document.getElementById("mail-svg").getBoundingClientRect();
var mobilehandSvgLocation = document.getElementById("svg-01").getBoundingClientRect();
var mobiletimeSvgLocation = document.getElementById("svg-02").getBoundingClientRect();
var mobilebrainSvgLocation = document.getElementById("svg-03").getBoundingClientRect();
var mobileclockSvgLocation = document.getElementById("svg-04").getBoundingClientRect();
var mobilecostSvgLocation = document.getElementById("svg-05").getBoundingClientRect();
var mobileglobeSvgLocation = document.getElementById("svg-06").getBoundingClientRect();

// total length of my svg's path
var handPath = document.getElementById('hand-path');
var length = handPath.getTotalLength();
// console.log('SVG Path Lenght: ' + length);

// Scroll offset that triggers animation start.
// In this case it is the bottom of the SVG.
// var offsetToTriggerAnimation = svgLocation.y + svgLocation.height;
var mobileoffsetToTriggerHandSvg = mobilehandSvgLocation.y + mobilehandSvgLocation.height;
var mobileoffsetToTriggerTimeSvg = mobiletimeSvgLocation.y + mobiletimeSvgLocation.height;
var mobileoffsetToTriggerBrainSvg = mobilebrainSvgLocation.y + mobilebrainSvgLocation.height;
var mobileoffsetToTriggerClockSvg = mobileclockSvgLocation.y + mobileclockSvgLocation.height;
var mobileoffsetToTriggerCostSvg = mobilecostSvgLocation.y + mobilecostSvgLocation.height;
var mobileoffsetToTriggerGlobeSvg = mobileglobeSvgLocation.y + mobileglobeSvgLocation.height;

// function scrollAnimation(evt){
//     var viewBottom = window.scrollY + window.innerHeight;
//     // let windowHeight = window.height();
//     console.log('scrolling');
//     if (viewBottom > offsetToTriggerAnimation) {
//         // Start the SMIL animation
//         svg.drawsvg('animate');
//         // Remove the event handler so it doesn't trigger again
//         document.removeEventListener("scroll", scrollAnimation);
//     }
// }

function mobilehandSvg(evt){
    var viewBottom = window.scrollY + window.innerHeight;
    // let windowHeight = window.height();
    // console.log('hand animation');
    if (viewBottom > mobileoffsetToTriggerHandSvg) {
        // Start the SMIL animation
        mobilehandSvgAnimation.drawsvg('animate');
        // console.log('hand animation triggered');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", mobilehandSvg);
    }
}

function mobiletimeAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > mobileoffsetToTriggerTimeSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        mobiletimeSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", mobiletimeAnimation);
    }
}

function mobilebrainAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > mobileoffsetToTriggerBrainSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        mobilebrainSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", mobilebrainAnimation);
    }
}

function mobileclockAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > mobileoffsetToTriggerClockSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        mobileclockSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", mobileclockAnimation);
    }
}

function mobilecostAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > mobileoffsetToTriggerCostSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        mobilecostSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", mobilecostAnimation);
    }
}

function mobileglobeAnimation(evt){
    var viewBottom = (window.scrollY + 600) + window.innerHeight;
    // let windowHeight = window.height();
    if (viewBottom > mobileoffsetToTriggerGlobeSvg) {
        // console.log('computer animation');
        // Start the SMIL animation
        mobileglobeSvgAnimation.drawsvg('animate');
        // Remove the event handler so it doesn't trigger again
        document.removeEventListener("scroll", mobileglobeAnimation);
    }
}

// document.addEventListener('scroll', scrollAnimation);
document.addEventListener('scroll', mobilehandSvg);
document.addEventListener('scroll', mobiletimeAnimation);
document.addEventListener('scroll', mobilebrainAnimation);
document.addEventListener('scroll', mobileclockAnimation);
document.addEventListener('scroll', mobilecostAnimation);
document.addEventListener('scroll', mobileglobeAnimation);
                                                                                                      
                                                                                                      