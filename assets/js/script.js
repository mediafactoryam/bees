$(document).ready(() => {
   // define images
   var images = [
    "/assets/img/SVG/spoon/phase-1.svg",
    "/assets/img/SVG/spoon/phase-2.svg",
    "/assets/img/SVG/spoon/phase-3.svg",
    "/assets/img/SVG/spoon/phase-4.svg",
    "/assets/img/SVG/spoon/phase-3.svg",
    "/assets/img/SVG/spoon/phase-2.svg",
    "/assets/img/SVG/spoon/phase-1.svg",

];

var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 10,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 5,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			// ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
                
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 2000})
					.setTween(tween)
					.addTo(controller);



});
