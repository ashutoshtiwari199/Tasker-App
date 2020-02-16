const text = $('#text');
const black = $('#black');
const add = $('#add');
const modal = $('#modal');
const taskDoneButton = $('#taskDone');
const modalCross = $('#modalCross');
const taskdelete = $('#delete');
const taskDetails = $('#taskDetails');
const taskName = $('#taskName');
const tl = new TimelineMax();

tl.fromTo(text, 2.2, {
    transform: 'translate(-50%, -50%) translateX(200px)',
    opacity: 1
}, {
        transform: 'translate(-50%, -50%) translateX(0px)',
        opacity: 1,
        ease: Expo.easeInOut
    })
.fromTo(text, 2.2, {
    transform: 'translate(-50%, -50%) translateX(0px)',
    opacity: 1
}, {
    transform: 'translate(-50%, -50%) translateX(-200px)',
    opacity: 0,
    ease: Expo.easeInOut
})
.fromTo(black, 2, {
    x: '0%',
    opacity: 1
},
{
    x: '-120%',
    opacity: 0.7,
    ease: Expo.easeInOut,
    onComplete: function () {
        black.hide();
    }
}, '-=1.5')
.to('#topScreen', 1.4, {
    top: '0%', 
    ease: Expo.easeInOut
}, '-=1.4')
.fromTo('#topScreen .container', 2, {
    y: '30px',
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    onComplete: function(){
        $('#topScreen').css('position', 'static');
        $('#topScreen .container').css('pointerEvents', 'initial');
        $('#resultScreen').css('opacity', 1);
    },
    ease: Expo.easeInOut
})
.fromTo('#resultScreen .cont', 1.5, {
    opacity: 0,
    y: '30px'
}, {
    opacity: 1,
    y: 0,
    ease: Expo.easeInOut
}, '-=1')