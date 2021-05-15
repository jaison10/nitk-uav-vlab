//on click of next button
var mpointer = 0;
var repeat = 0;
var a, p, lastp, n, b, q, flag = 0,
    avg, average;

var values = [
    [125.3, 188.3, 394.7, 347.7, 63.00, 407.5, 0.79, 3.111],
    [125.3, 188.9, 395.1, 347.7, 63.6, 407.5, 0.79, 3.101],
    [125.3, 189.6, 395.6, 347.7, 64.3, 407.5, 0.79, 3.097],
    [125.3, 189.8, 396.1, 347.7, 64.5, 407.5, 0.79, 3.165],
    [125.3, 190, 396.5, 347.7, 64.7, 407.5, 0.79, 3.215]
];

p = Math.floor(Math.random() * (4));


function navNext() {
    for (temp = 0; temp <= 7; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }

    simsubscreennum += 1;
    document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "hidden";
    magic();
}


var ca;
var questions = ["Capacity of Le-Chatelier Flask used for determining</br> Specific Gravity of Cement is",
    "The amount of cement taken is calculated as ",
    "Care should be taken for the Kerosene to be free from water.",
    "If the cement is exposed to extreme moisture content due to bad weather</br> conditions, then the specific gravity of cement may go up to "
];

var options2 = [
    ["100ml", "250ml", "500ml", "1000ml"], //250ml
    ["W1+W2", "W1-W2", "W2-W1", "W2"], //W2-W1
    ["True", "False"], //True
    ["3.9", "3.11", "3.16", "3.19"]
]; //3.19

function validateAnswer(qn, ans, left, top) {
    $("#answer").empty();
    document.getElementById("a").innerHTML = "";
    document.getElementById("questDiv").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
    document.getElementById("q").innerHTML = questions[qn];
    el = document.createElement("option");
    el.textContent = " ";
    el.value = " ";
    answer.appendChild(el);

    for (j = 0; j < options2[qn].length; j++) {
        opt = options2[qn][j];

        el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        answer.appendChild(el);
        $("#answer").change(function() {
            ca = $(this).children("option:selected").val();
            if (options2[qn][ans] == ca) {
                document.getElementById("a").innerHTML = "Correct Answer!";
            } else {
                document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
            }
            setTimeout(function() {
                document.getElementById("questDiv").style.visibility = "hidden";
                document.getElementById("nextButton").style.visibility = "visible";
            }, 1500);
        });
    }
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
    if (document.getElementById('arrow1').style.visibility == "hidden")
        document.getElementById('arrow1').style.visibility = "visible";
    else
        document.getElementById('arrow1').style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility = "hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------
var arrowCount = 1;

function animateNewarrow() {

    console.log("Im here and count is: ", arrowCount);
    console.log("The image is: new_arrow" + arrowCount);

    new_arrow = document.getElementById("new_arrow" + arrowCount);
    below_arrow = document.getElementById("below_arrow" + arrowCount);



    // making the below arrows slower on passing by wing. 
    if (arrowCount > 4) {
        // displaying the velocity-pressure info when the air crosses the wing.
        document.getElementById("v-p-info").style.visibility = "visible";
        // displaying the lift direction arrows when the air crosses the wing.
        document.getElementById("up-arrow-div").style.visibility = "visible";
        //Blinking the lift direction part arrowson crossing the wing. 
        for (var i = 1; i < 4; i++) {
            lift_arrows = document.querySelector(".up-arrow" + i);
            if (lift_arrows.style.visibility == "hidden") {
                lift_arrows.style.visibility = "visible";
            } else {
                lift_arrows.style.visibility = "hidden";
            }
        }

        // displaying above arrow without delay.
        new_arrow.style.visibility = 'visible';
        // making the below arrow visible with some timeout.
        setTimeout(function() {
            below_arrow.style.visibility = 'visible';
        }, 500)
    } else {
        new_arrow.style.visibility = 'visible';
        below_arrow.style.visibility = 'visible';
    }

    if (arrowCount == 13) {
        // hiding v-p-info.
        document.getElementById("v-p-info").style.visibility = "hidden";
        // hiding the lift arrow section.
        document.getElementById("up-arrow-div").style.visibility = "hidden";
        // hiding the lift arrows.
        for (var i = 1; i < 4; i++) {
            lift_arrows = document.querySelector(".up-arrow" + i);
            lift_arrows.style.visibility = "hidden";
        }
        // hiding all 13 arrows flowing 
        for (i = 1; i < 14; i++) {
            document.getElementById("new_arrow" + i).style.visibility = 'hidden';
            document.getElementById("below_arrow" + i).style.visibility = 'hidden';
        }
        arrowCount = 1;
    } else {
        arrowCount = arrowCount + 1;
    }


}

var arrCountAOT = 1;

function animateNewAngleOfAttackarrow() {
    console.log("Im here and count is: ", arrCountAOT);
    console.log("The image is: new_Arrow" + arrCountAOT);

    new_arrow = document.getElementById("new_Arrow" + arrCountAOT);
    below_arrow = document.getElementById("below_Arrow" + arrCountAOT);

    // making the below arrows slower on passing by wing. 
    if (arrCountAOT > 4) {
        // displaying the velocity-pressure info when the air crosses the wing.
        document.getElementById("V-P-info").style.visibility = "visible";
        document.getElementById("V-P-info").style.animation = "fadeIn 2.5s forwards";
        // displaying the lift direction arrows when the air crosses the wing.
        document.getElementById("up-Arrow-div").style.visibility = "visible";
        document.getElementById("up-Arrow-div").style.animation = "fadeIn 2.5s forwards";
        // Blinking the lift direction part arrowson crossing the wing. 
        for (var i = 1; i < 4; i++) {
            lift_arrows = document.querySelector(".up-Arrow" + i);
            if (lift_arrows.style.visibility == "hidden") {
                lift_arrows.style.visibility = "visible";
            } else {
                lift_arrows.style.visibility = "hidden";
            }
        }

        // displaying above arrow without delay.
        new_arrow.style.visibility = 'visible';
        // new_arrow.style.zIndex  = 10;
        // making the below arrow visible with some timeout.
        setTimeout(function() {
            below_arrow.style.visibility = 'visible';
            // below_arrow.style.zIndex  = 10;
        }, 300)
    } else {
        new_arrow.style.visibility = 'visible';
        // new_arrow.style.zIndex  = 10;
        below_arrow.style.visibility = 'visible';
        // below_arrow.style.zIndex  = 10;
    }

    if (arrCountAOT == 13) {
        // hiding v-p-info.
        document.getElementById("V-P-info").style.animation = "fadeOut 1.5s forwards";
        // document.getElementById("V-P-info").style.visibility = "hidden";

        // hiding the lift arrow section.
        document.getElementById("up-Arrow-div").style.animation = "fadeOut 1.5s forwards";
        // document.getElementById("up-Arrow-div").style.visibility = "hidden";

        // hiding the lift arrows.
        for (var i = 1; i < 4; i++) {
            lift_arrows = document.querySelector(".up-Arrow" + i);
            lift_arrows.style.visibility = "hidden";
        }
        // hiding all 13 arrows flowing 
        for (i = 1; i < 14; i++) {
            document.getElementById("new_Arrow" + i).style.visibility = 'hidden';
            document.getElementById("below_Arrow" + i).style.visibility = 'hidden';
        }
        arrCountAOT = 1;
    } else {
        arrCountAOT = arrCountAOT + 1;
    }

}

function magic() {

    if (simsubscreennum == 1) {
        // this is for STEP1
        refresh1();
        document.getElementById('nextButton').style.visibility = "visible";
        // document.getElementById("arrow1").style = "position: absolute; top:230px;";
        // myInt = setInterval(function()	{
        // 	 animatearrow(); 
        // }, 500);

        // document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
        // document.getElementById('trial').innerHTML="";
        // Positioning the arrow
        // document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 180px; top: 200px; height: 40px; z-index: 10;";

        // document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
        // // Code for IE9
        // document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
        // // Standard syntax
        // document.getElementById("arrow1").style.transform = "rotate(180deg)";
        // document.getElementById('a2').onclick=function() { step1(); };

    } else if (simsubscreennum == 2) {
        document.getElementById('quad').style.visibility = "visible";
        document.getElementById('prop1').style.visibility = "visible";
        document.getElementById('prop2').style.visibility = "visible";
        document.getElementById('prop3').style.visibility = "visible";
        document.getElementById('prop4').style.visibility = "visible";
        document.getElementById('knob1').style.visibility = "visible";
        document.getElementById('knob2').style.visibility = "visible";
        document.getElementById('knob3').style.visibility = "visible";
        document.getElementById('knob4').style.visibility = "visible";
        document.getElementById('inst_note').style.visibility = "visible";
        document.getElementById('remove_skip').style.visibility = "visible";
        document.getElementById('remove_skip').onclick = function() { removeAllKnobsAndProps(); };

        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 620px; top: 320px; height: 30px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        document.getElementById('knob2').onclick = function() { removeKnobs(); };
        // myInt = setInterval(function(){ animateNewarrow(); }, 300);

    } else if (simsubscreennum == 3) {
        // myInt = setInterval(function() { animateNewarrow(); }, 1000);

        document.getElementById('quad').style.visibility = "visible";
        document.getElementById('quad').style.left = "120px";
        document.getElementById('quad').style.top = "40px";
        document.getElementById('quad').style.height = "220px";
        document.getElementById('quad').style.width = "390px";
        document.getElementById('zoomIn').style.visibility = "visible";
        document.getElementById('usb_cable').style.cursor = "pointer";

        setTimeout(function() {
            document.getElementById('usbNote').style.visibility = "visible";

            document.getElementById('usb_cable').onclick = function() { connectUSB(); };
            myInt = setInterval(function() { animatearrow(); }, 500);

            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 410px; top: 500px; height: 30px;z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(0deg)";
        }, 1000);


    } else if (simsubscreennum == 4) {
        //stopping the blink.
        clearInterval(myInt);
        document.getElementById('quad').style.visibility = "hidden";
        document.getElementById('zoomIn').style.visibility = "hidden";
        document.getElementById('fc_usb').style.visibility = "hidden";
        document.getElementById('pc_usb').style.visibility = "hidden";
        document.getElementById('usb_wire').style.visibility = "hidden";
        document.getElementById('vehicleButton').style.visibility = "visible";
        document.getElementById('monitor').style.visibility = "visible";
        document.getElementById('vehicleButton').onclick = function() { setup(); };

        // document.getElementById("below_arrow" + arrowCount).style.visibility = "hidden";
        // hiding the 14 wind flow direction arrows.
        // var x = 1;
        // while (x < 14) {
        //     document.getElementById("new_arrow" + x).style.visibility = 'hidden';
        //     document.getElementById("below_arrow" + x).style.visibility = 'hidden';
        //     document.getElementById("below_arrow" + x).style.zIndex = -100;
        //     x++;
        // }
        // hiding the lift direction arrows.
        // var i = 1;
        // while (i < 4) {
        //     document.querySelector(".up-arrow" + (i++)).style.visibility = "hidden";
        // }
        // document.getElementById("lift").style.visibility = "hidden";
        // // hiding the velocity pressure info
        // document.getElementById("v-p-info").style.visibility = "hidden";
        // // calculation part.
        // document.getElementById("calc-lift-part1").style.visibility = "hidden";
        // document.getElementById("solve-equation1").style.visibility = "hidden";
        // document.getElementById("calculate-lift1").style.visibility = "hidden";

        // new angle image
        // document.getElementById('airfoil-zero').style.animation = "valveturn-5 1.5s forwards ";
        // document.getElementById("line").style.visibility = "visible";
        // document.getElementById("line").style.animation = "fadeIn 2.5s forwards";

        // setTimeout(function() {
        //     document.getElementById("angle-curve").style.visibility = "visible";
        //     document.getElementById("angle-curve").style.transform = "rotate(-35deg)";
        //     // document.getElementById("line").style.animation = "fadeIn 2.5s forwards";
        // }, 500)

        // setTimeout(() => {
        //     document.getElementById("angle-of-attck-info").style.visibility = "visible";
        //     document.getElementById("angle-of-attck-info").style.animation = "fadeIn 2.5s forwards";
        // }, 1000);

        // setTimeout(() => {
        //     // document.getElementById("angle-of-attck-info").style.visibility = "hidden";
        //     document.getElementById("angle-of-attck-info").style.animation = "fadeOut 1.5s forwards";
        //     myInt = setInterval(function() { animateNewAngleOfAttackarrow(); }, 1000);
        // }, 3500);

        // refresh1();


        // myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:hidden ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('nextButton').style.visibility = "hidden";


    } else if (simsubscreennum == 5) {
        refresh1();
        document.getElementById('vehicleButton').style.visibility = "hidden";
        document.getElementById('flask5').style.visibility = "visible";
        document.getElementById('nob5-1').style.visibility = "visible";
        document.getElementById('a7').style.visibility = "hidden";
        document.getElementById('a8').style.visibility = "hidden";
        document.getElementById('k3').style.visibility = "hidden";
        document.getElementById('nextButton').style.visibility = "hidden";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";


        document.getElementById('nob5-1').onclick = function() { step5(); };

    } else if (simsubscreennum == 6) {
        refresh1();
    } else if (simsubscreennum == 7) {

    }
}

function setup() {

    document.getElementById('top_text').innerText = "Read the instructions and click on the Next button";
    document.getElementById('setup_wizard').style.visibility = "visible";
    document.getElementById('empty_space').style.visibility = "visible";
    document.getElementById('next_button').style.visibility = "visible";
    document.getElementById('cancel_button').style.visibility = "visible";
    document.getElementById('title_logo').style.visibility = "visible";
    document.getElementById('setupContent').style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "hidden";
    document.getElementById('next_button').style.cursor = "pointer";
    document.getElementById('cancel_button').style.cursor = "pointer";
    document.getElementById('next_button').onclick = function() { upgrade(); };
    document.getElementById('cancel_button').onclick = function() { cancel_setup(); };

}

function cancel_setup() {
    document.getElementById('setup_wizard').style.visibility = "hidden";
    document.getElementById('empty_space').style.visibility = "hidden";
    document.getElementById('next_button').style.visibility = "hidden";
    document.getElementById('cancel_button').style.visibility = "hidden";
    document.getElementById('title_logo').style.visibility = "hidden";
    document.getElementById('setupContent').style.visibility = "hidden";
}

function upgrade() {
    document.getElementById('setupContent').style.visibility = "hidden";

}

function removeAllKnobsAndProps() {
    myStopFunction();
    document.getElementById('handKnob').style.visibility = "hidden";
    document.getElementById('remove_skip').style.visibility = "hidden";
    for (let i = 1; i <= 4; i++) {
        document.getElementById('prop' + i).style.visibility = "hidden";
        document.getElementById('knob' + i).style.visibility = "hidden";
    }
    document.getElementById('nextButton').style.visibility = "visible";
    document.getElementById('inst_note').style.visibility = "hidden";

}

function connectUSB() {
    myStopFunction();
    document.getElementById('usb_cable').style.visibility = "hidden";
    document.getElementById('usbNote').style.visibility = "hidden";
    document.getElementById('usb_cable').style.cursor = "";
    document.getElementById('usb_cable').onclick = "";
    document.getElementById('fc_usb').style.visibility = "visible";
    document.getElementById('pc_usb').style.visibility = "visible";
    document.getElementById('usb_wire').style.visibility = "visible";
    document.getElementById('fc').style = "position: absolute;height: 70px;width: 120px;top: 117px;left: 88.5px;";
    document.getElementById("nextButton").style.visibility = "visible";



}

function removeKnobs() {
    myStopFunction();
    document.getElementById('remove_skip').style.visibility = "hidden";
    document.getElementById("knob2").onclick = "";
    document.getElementById("knob2").style.cursor = "";
    document.getElementById('inst_note').style.visibility = "hidden";
    document.getElementById('knob2').style.opacity = 0;
    document.getElementById('knob2').style.top = "275px";
    document.getElementById('knob2').style.transition = "opacity 2s ease-in-out";
    document.getElementById('handKnob').style.visibility = "visible";
    document.getElementById('handKnob').style.opacity = 1;
    document.getElementById('handKnob').style.top = "200px";
    document.getElementById("handKnob").classList.add('rotateHandKnob');
    document.getElementById('handKnob').style.transition = "all 2s ease-in-out";
    setTimeout(function() {
        document.getElementById('handKnob').style.top = "195px";

    }, 1200);

    setTimeout(function() {
        document.getElementById('removeKnob').style.visibility = "visible";
        document.getElementById('removeKnob').onclick = function() { removeAllKnobs(); };
        document.getElementById('handKnob').style.visibility = "hidden";

    }, 2200);



    // document.getElementById("hand_knob").style.visibility = "visible";
    // document.getElementById("hand_knob").style.top = "67px";
    // document.getElementById("hand_knob").classList.add('rotateHandKnob');
    // document.getElementById("hand_knob").style.transition = "top 3s ease-in-out";

    //     document.getElementById("curve_arrow1_3").style.visibility = "visible";
    //     myIntv1 = setInterval(function() {
    //         animatecurve2arrow(3);
    //     }, 500);


    // setTimeout(function() {
    //     clearInterval(myIntv1);
    //     document.getElementById("curve_arrow1_3").style.visibility = "hidden";

    //     document.getElementById("hand_knob").style.opacity = 0;
    //     document.getElementById("hand_knob").style.visibility = "visible";
    //     document.getElementById("hand_knob").style.transition = "all 2s ease-in-out";
    //     document.getElementById("knob3").style.opacity = 1
    //     document.getElementById("knob3").style.top = "131px";
    //     document.getElementById("knob3").style.visibility = "visible";
    //     document.getElementById("knob3").style.transition = "all 3s ease-in-out";
    // }, 3000);

}

function removeAllKnobs() {
    document.getElementById('removeKnob').style.visibility = "hidden";
    setTimeout(function() {
        document.getElementById('knob1').style.top = "250px";
        document.getElementById('knob3').style.top = "135px";
        document.getElementById('knob4').style.top = "143px";
        document.getElementById('knob1').style.transition = "top 2s ease-in-out";
        document.getElementById('knob3').style.transition = "top 2s ease-in-out";
        document.getElementById('knob4').style.transition = "top 2s ease-in-out";

    }, 1000);
    setTimeout(function() {
        document.getElementById('knob1').style.visibility = "hidden";
        document.getElementById('knob2').style.visibility = "hidden";
        document.getElementById('knob3').style.visibility = "hidden";
        document.getElementById('knob4').style.visibility = "hidden";

        document.getElementById('inst_note').style.visibility = "visible";
        document.getElementById('inst_note').innerText = "Now, remove the propellers."
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 635px; top: 330px; height: 30px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        document.getElementById('prop2').style.cursor = "pointer";
        document.getElementById('prop2').onclick = function() { removeProp(); };
    }, 3000);
}

function removeProp() {
    myStopFunction();
    document.getElementById('inst_note').style.visibility = "hidden";
    document.getElementById('prop2').style.cursor = "";
    document.getElementById('prop2').onclick = "";
    document.getElementById('prop2').style.opacity = 0;
    document.getElementById('prop2').style.transition = "opacity 1s ease-in-out";
    document.getElementById('handProp').style.visibility = "visible";
    document.getElementById('handProp').style.opacity = 1;
    document.getElementById('handProp').style.top = "175px";
    // document.getElementById("handProp").classList.add('rotateHandKnob');
    document.getElementById('handProp').style.transition = "all 1s ease-in-out";
    setTimeout(function() {
        document.getElementById('removeProp').style.visibility = "visible";
        document.getElementById('removeProp').onclick = function() { removeAllProps(); };


    }, 2200);
}

function removeAllProps() {
    document.getElementById('handProp').style.visibility = "hidden";
    document.getElementById('removeProp').style.visibility = "hidden";
    setTimeout(function() {
        document.getElementById('prop1').style.top = "235px";
        document.getElementById('prop3').style.top = "115px";
        document.getElementById('prop4').style.top = "116px";
        document.getElementById('prop1').style.transition = "top 2s ease-in-out";
        document.getElementById('prop3').style.transition = "top 2s ease-in-out";
        document.getElementById('prop4').style.transition = "top 2s ease-in-out";

    }, 1000);
    setTimeout(function() {
        document.getElementById('prop1').style.visibility = "hidden";
        document.getElementById('prop2').style.visibility = "hidden";
        document.getElementById('prop3').style.visibility = "hidden";
        document.getElementById('prop4').style.visibility = "hidden";
        document.getElementById("nextButton").style.visibility = "visible";

        // document.getElementById('inst_note').style.visibility = "visible";
        // document.getElementById('inst_note').innerText = "Now, remove the propellers."
        // myInt = setInterval(function() { animatearrow(); }, 500);
        // document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 635px; top: 330px; height: 30px; z-index: 10;";

        // document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        // // Code for IE9
        // document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // // Standard syntax
        // document.getElementById("arrow1").style.transform = "rotate(0deg)";
        // document.getElementById('prop2').style.cursor = "pointer";
        // document.getElementById('prop2').onclick = function() { removeProp(); };
    }, 3000);
}

function step1() {
    myStopFunction();
    // document.getElementById('a1').style.visibility="hidden";
    // document.getElementById('a2').style.cssText ="visibility=visible; top:0px; position: absolute; left: 170px; cursor:default; height: 200px; width: 400px;";

    document.getElementById("air-info").style.visibility = 'hidden';
    document.getElementById("arr-air").style.visibility = 'visible';
    document.getElementById("arr-air").style.animation = "fadeIn 2.5s forwards";
    document.getElementById("change-airfoilButton").textContent = "Learn more";
    // document.getElementById("change-airfoilButton").style = "width: 15%";
    document.getElementById('a3').style.cssText = "visibility=visible; position: absolute; left:80px; top: 320px; height: 170px; width: 470px;";
    document.getElementById("a3").style.animation = "fadeIn 2.5s forwards";
    var air = document.getElementById("change-airfoilButton");
    air.style.visibility = 'visible';
    // document.getElementById('a4').style.visibility="visible";

}


function refresh1() {
    // document.getElementById('hand').style.transformOrigin = "";
    // document.getElementById('hand').style.animation = "";
    document.getElementById('hand3').style.transformOrigin = "";
    document.getElementById('hand3').style.animation = "";
    document.getElementById('hand4').style.transformOrigin = "";
    document.getElementById('hand4').style.animation = "";
    document.getElementById('hand5').style.transformOrigin = "";
    document.getElementById('hand5').style.animation = "";
    document.getElementById("arrow1").style.animation = "";


    //  document.getElementById('v1').innerHTML="";
    document.getElementById('v2').innerHTML = "";
    document.getElementById('v3').innerHTML = "";
    document.getElementById('v4').innerHTML = "";
    document.getElementById('v5').innerHTML = "";


}



// ADDITIONS
var count = 0;
//this count is to show the nomenclature of airfoil.
function changeNomen() {
    //removing zooming arrow of previous airfoil
    document.getElementById("arr-air").style.visibility = 'hidden';

    document.getElementById("change-airfoilButton").style.visibility = "hidden";
    // document.getElementById("change-airfoilButton").style = "width: 10%";
    document.getElementById("a2").style.visibility = 'hidden';
    var button = document.getElementById("nextButton");
    button.style.visibility = 'visible';

    document.getElementById("a3").style.visibility = 'hidden';
    count = count + 1;
    // for(i=1;i<=7;i++){
    // 	document.getElementById("air0"+i).style.visibility = 'hidden';
    // }
    // document.getElementById("air0"+count).style.visibility = 'visible';
    document.getElementById("nomen-list").style.visibility = 'visible';
    document.getElementById("air01").style.visibility = 'visible';
}

function airfoilNomen(n) {

    for (var i = 1; i < 8; i++) {
        document.getElementById("air0" + i).style.visibility = 'hidden';
    }
    document.getElementById("air0" + n).style.visibility = 'visible';
    document.getElementById("air0" + n).style.animation = "fadeIn 1.5s forwards";

    //Displaying only names on fixed image.
    // 	var x = document.getElementById("content-"+n);
    // 	x.style.visibility = "visible";
}



//------------------------------LIFT CALCULATION PART---------------------------------------//
function calculateLift(l) {
    document.getElementById("calc-lift-part" + (l)).style.visibility = "hidden";
    document.getElementById("solve-equation" + (l)).style.visibility = "visible";
}

function showCompare(l) {
    document.getElementById("show-eqn" + (l)).style.visibility = "hidden";
    document.getElementById("calculate-lift" + (l)).style.visibility = "visible";
}

function verifyLift(l) {
    var liftval = document.getElementById("lift-input" + (l)).value;
    if (!liftval && liftval == "") {
        document.getElementById("outputLift" + (l)).textContent = "Enter some value!";
        document.getElementById("outputLift" + (l)).classList.add("setColorNoInput");
        document.getElementById("outputLift" + (l)).classList.remove("setColorCorrectInput");
        document.getElementById("outputLift" + (l)).classList.remove("setColorIncorrectInput");
    } else if (liftval == 80) {
        document.getElementById("outputLift" + (l)).textContent = "Correct answer!";
        document.getElementById("outputLift" + (l)).classList.add("setColorCorrectInput");
        document.getElementById("outputLift" + (l)).classList.remove("setColorNoInput");
        document.getElementById("outputLift" + (l)).classList.remove("setColorIncorrectInput");
        document.getElementById("nextButton").style.visibility = "visible";
    } else {
        document.getElementById("outputLift" + (l)).textContent = "Incorrect answer!";
        document.getElementById("outputLift" + (l)).classList.add("setColorIncorrectInput");
        document.getElementById("outputLift" + (l)).classList.remove("setColorNoInput");
        document.getElementById("outputLift" + (l)).classList.remove("setColorCorrectInput");
    }
}