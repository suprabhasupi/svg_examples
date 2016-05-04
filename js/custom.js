
// page 1
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "100%"
    }
});
new ScrollMagic.Scene({
        triggerElement: ".mainheader"
    })
    .setTween(".firstpage_background", {
        y: "-50%"
    })
    // .addIndicators()
    .addTo(controller);


// page 2                
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "80%"
    }
});
// build scenes
new ScrollMagic.Scene({
        triggerElement: ".second_row"
    })
    .setTween(".secondline", {
        x: "100%"
    })
    // .addIndicators()
    .addTo(controller);


new ScrollMagic.Scene({
        triggerElement: ".mac"
    })
    .setTween(".macimg", {
        x: "-110%"
    })
    // .addIndicators()
    .addTo(controller);

// page 3                
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.9,
        duration: "0%"
    }
});

// build scenes
new ScrollMagic.Scene({
        triggerElement: ".third_row"
    })
    .setTween(".thirdpage_left1", {
        x: "45%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: .4,
        duration: "0%"
    }
});

// build scenes
new ScrollMagic.Scene({
        triggerElement: ".third_row"
    })
    .setTween(".thirdpage_left2", {
        x: "45%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.9,
        duration: "0%"
    }
});


// build scenes
new ScrollMagic.Scene({
        triggerElement: ".third_row"
    })
    .setTween(".thirdpage_right1", {
        x: "30%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.6,
        duration: "0%"
    }
});


// build scenes
new ScrollMagic.Scene({
        triggerElement: ".thirdpage_right1"
    })
    .setTween(".thirdpage_right2", {
        x: "30%"
    })
    // .addIndicators()
    .addTo(controller);



// page 4
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "80%"
    }
});


// build scenes
new ScrollMagic.Scene({
        triggerElement: ".fourth_row"
    })
    .setTween(".taklu_man", {
        x: "100%"
    })
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: ".fourth_row"
    })
    .setTween(".fourth_row_background", {
        y: "-15%"
    })
    // .addIndicators()
    .addTo(controller);


new ScrollMagic.Scene({

        triggerElement: ".fourth_row"
    })
    .setTween(".taklu_para", {

        x: "-110%"
    })
    // .addIndicators()
    .addTo(controller);

// page 5
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "0.9",
        duration: "80%"
    }
});


new ScrollMagic.Scene({
        triggerElement: ".g_effect_r1"
    })
    .setTween(".g_effect_r1", {
        opacity: 1,
        scale: 1
    })
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: ".g_effect_r2"
    })
    .setTween(".g_effect_r2", {
        opacity: 1,
        scale: 1
    })
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: ".g_effect_r3"
    })
    .setTween(".g_effect_r3", {
        opacity: 1,
        scale: 1
    })
    // .addIndicators()
    .addTo(controller);


// page 6
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.9,
        duration: "80%"
    }
});

// build scenes
new ScrollMagic.Scene({
        triggerElement: ".sixth_row"
    })
    .setTween(".image4", {
        x: "-60%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.9,
        duration: "80%"
    }
});

// build scenes
new ScrollMagic.Scene({
        triggerElement: ".sixth_row"
    })
    .setTween(".image1", {
        x: "60%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.6,
        duration: "80%"
    }
});


// build scenes
new ScrollMagic.Scene({
        triggerElement: ".sixth_row"
    })
    .setTween(".image2", {
        x: "60%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.6,
        duration: "80%"
    }
});


// build scenes
new ScrollMagic.Scene({
        triggerElement: ".sixth_row"
    })
    .setTween(".image5", {
        x: "-30%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.3,
        duration: "80%"
    }
});


// build scenes
new ScrollMagic.Scene({
        triggerElement: ".sixth_row"
    })
    .setTween(".image3", {
        x: "60%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.3,
        duration: "80%"
    }
});


// build scenes
new ScrollMagic.Scene({
        triggerElement: ".sixth_row"
    })
    .setTween(".image6", {
        x: "-30%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.3,
        duration: "80%"
    }
});


// build scenes
new ScrollMagic.Scene({
        triggerElement: ".sixth_row"
    })
    .setTween(".image3", {
        x: "60%"
    })
    // .addIndicators()
    .addTo(controller);

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.8,
        duration: "80%"
    }
});

new ScrollMagic.Scene({
        triggerElement: ".sixpage"
    })
    .setTween(".different", {
        y: "-30%"
    })
    // .addIndicators()
    .addTo(controller);


// page 7
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "100%"
    }
});
new ScrollMagic.Scene({
        triggerElement: ".seventhpage_row"
    })
    .setTween(".seventhpage_background", {
        y: "-25%"
    })
    // .addIndicators()
    .addTo(controller);