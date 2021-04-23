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

function animatecurvearrow() {

    if (document.getElementById('curve_arrow').style.visibility == "hidden")
        document.getElementById('curve_arrow').style.visibility = "visible";
    else
        document.getElementById('curve_arrow').style.visibility = "hidden";

}

function animatecurve2arrow(id) {

    if (document.getElementById('curve_arrow1_' + id).style.visibility == "hidden")
        document.getElementById('curve_arrow1_' + id).style.visibility = "visible";
    else
        document.getElementById('curve_arrow1_' + id).style.visibility = "hidden";

}

function animatecurve1arrow() {

    if (document.getElementById('curve_arrow1').style.visibility == "hidden")
        document.getElementById('curve_arrow1').style.visibility = "visible";
    else
        document.getElementById('curve_arrow1').style.visibility = "hidden";

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
        document.getElementById('nextButton').style.visibility = "hidden";
        document.getElementById('frame-info').style.visibility = "hidden";
        // document.getElementById("arrow1").style = "position: absolute; top:230px;";
        // myInt = setInterval(function()	{
        // 	 animatearrow(); 
        // }, 500);
        document.getElementById('motor1').style.visibility = "hidden";
        document.getElementById('motor2').style.visibility = "hidden";
        document.getElementById('motor3').style.visibility = "hidden";
        document.getElementById('motor4').style.visibility = "hidden";

        document.getElementById('quad').style.visibility = "visible";
        document.getElementById('motors').style.visibility = "visible";
        document.getElementById('tran_rec').style.visibility = "visible";


        document.getElementById('flight_c').style.visibility = "visible";
        document.getElementById('esc').style.visibility = "visible";
        document.getElementById('lipo').style.visibility = "visible";


        // document.getElementById('a2').onclick = function() { step1(); };

    } else if (simsubscreennum == 2) {
        //hiding the previous canvas airfoil images.
        for (var i = 1; i < 8; i++) {
            document.getElementById("air0" + i).style.visibility = 'hidden';
        }
        // hiding the nomenclature list of buttons
        document.getElementById("nomen-list").style.visibility = 'hidden';

        document.getElementById("nextButton").style.visibility = "visible";
        // myInt = setInterval(function(){ animateNewarrow(); }, 300);

    } else if (simsubscreennum == 3) {
        myInt = setInterval(function() { animateNewarrow(); }, 1000);


        document.getElementById('arrow1').style = "visibility:hidden ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";

    } else if (simsubscreennum == 4) {
        //stopping the blink.
        clearInterval(myInt);
        document.getElementById("below_arrow" + arrowCount).style.visibility = "hidden";
        // hiding the 14 wind flow direction arrows.
        var x = 1;
        while (x < 14) {
            document.getElementById("new_arrow" + x).style.visibility = 'hidden';
            document.getElementById("below_arrow" + x).style.visibility = 'hidden';
            document.getElementById("below_arrow" + x).style.zIndex = -100;
            x++;
        }
        // hiding the lift direction arrows.
        var i = 1;
        while (i < 4) {
            document.querySelector(".up-arrow" + (i++)).style.visibility = "hidden";
        }
        document.getElementById("lift").style.visibility = "hidden";
        // hiding the velocity pressure info
        document.getElementById("v-p-info").style.visibility = "hidden";
        // calculation part.
        document.getElementById("calc-lift-part1").style.visibility = "hidden";
        document.getElementById("solve-equation1").style.visibility = "hidden";
        document.getElementById("calculate-lift1").style.visibility = "hidden";

        // new angle image
        document.getElementById('airfoil-zero').style.animation = "valveturn-5 1.5s forwards ";
        document.getElementById("line").style.visibility = "visible";
        document.getElementById("line").style.animation = "fadeIn 2.5s forwards";

        setTimeout(function() {
            document.getElementById("angle-curve").style.visibility = "visible";
            document.getElementById("angle-curve").style.transform = "rotate(-35deg)";
            // document.getElementById("line").style.animation = "fadeIn 2.5s forwards";
        }, 500)

        setTimeout(() => {
            document.getElementById("angle-of-attck-info").style.visibility = "visible";
            document.getElementById("angle-of-attck-info").style.animation = "fadeIn 2.5s forwards";
        }, 1000);

        setTimeout(() => {
            // document.getElementById("angle-of-attck-info").style.visibility = "hidden";
            document.getElementById("angle-of-attck-info").style.animation = "fadeOut 1.5s forwards";
            myInt = setInterval(function() { animateNewAngleOfAttackarrow(); }, 1000);
        }, 3500);

        refresh1();


        // myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:hidden ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";


    } else if (simsubscreennum == 5) {
        refresh1();

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

function place_apparatus(apparatus_id, top_px) {

    if (apparatus_id == "quad") {
        document.getElementById('top').style.visibility = "visible";
        document.getElementById('top').style.top = "50px";
        document.getElementById('top').style.transition = "top 1s ease-in-out";
        document.getElementById('base').style.visibility = "visible";
        document.getElementById('base').style.top = "50px";
        document.getElementById('base').style.transition = "top 1s ease-in-out";
        for (let i = 1; i <= 4; i++) {
            document.getElementById('arm' + i).style.visibility = "visible";
            document.getElementById('arm' + i).style.top = "140px";
            document.getElementById('arm' + i).style.transition = "top 1s ease-in-out";

        }


    }
    if (apparatus_id == "tran_rec") {
        document.getElementById('transmitter1').style.visibility = "visible";
        document.getElementById('transmitter1').style.top = "350px";
        document.getElementById('transmitter1').style.transition = "top 1s ease-in-out";

        document.getElementById('receiver1').style.visibility = "visible";
        document.getElementById('receiver1').style.top = "360px";
        document.getElementById('receiver1').style.transition = "top 1s ease-in-out";

        // document.getElementById('receiverWire').style.visibility = "visible";
        // document.getElementById('receiverWire').style.top = "380px";
        // document.getElementById('receiverWire').style.transition = "top 1s ease-in-out";

        document.getElementById('next').style.visibility = "visible";

    } else {
        var apparatus = document.getElementById(apparatus_id);
        apparatus.style.visibility = "visible";
        apparatus.style.top = top_px;
        apparatus.style.transition = "top 1s ease-in-out";

    }


}




function step1() {
    myStopFunction();

    document.getElementById("a2").classList.add("moveTopCover");
    document.getElementById("pumptext").innerText = "Let us start the assembly of a Quadcopter by first building the frame of the copter.";

    setTimeout(function() {
        document.getElementById("a2").style.visibility = "hidden";
        document.getElementById("arms").style.visibility = "hidden";
        document.getElementById("armsAndTop").style.visibility = "visible";
    }, 1800);
    setTimeout(function() {
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        document.getElementById("placeMotorInfo").innerText = "Pick screws and screw them as shown.";
        document.getElementById("singleScrew").style.visibility = "visible";
        // Positioning the arrow
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 650px; top: 110px; height: 30px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
    }, 2500);
}
var additionalTop = 7;

function placeSingleScrew() {
    myStopFunction();
    document.getElementById("singleScrew").classList.add("moveSingleScrew");
    setTimeout(() => {
        document.getElementById("singleScrew").style.visibility = "hidden";
        document.getElementById("singleScrewFinal").style.visibility = "visible";
        document.getElementById("screwHand").style.visibility = "visible";
        document.getElementById("screwHand").classList.add("rotateHand");
        document.getElementById("singleScrewFinal").style.top = "201px";
        // document.getElementById("singleScrewFinal").style.zIndex = -1;
        // document.getElementById("screwHand").classList.add("rotateHand");
        document.getElementById("screwHand").style.top = (101 + additionalTop) + "px";
        // additionalTop += 2;
        document.getElementById("screwHand").style.transition = "top 3s ease-in-out";
        document.getElementById("singleScrewFinal").style.opacity = 0;
        document.getElementById("singleScrewFinal").style.transition = "all 3s ease-in-out";
        document.getElementById("curve_arrow").style.visibility = "visible";

        myInt = setInterval(function() {
            animatecurvearrow();
        }, 500);

        setTimeout(() => {
            document.getElementById("screw_head").style.visibility = "visible";
            clearInterval(myInt);
            document.getElementById('curve_arrow').style.visibility = "hidden";

        }, 1950);
        // document.getElementById("screwHand").style.top = (101 + additionalTop) + "px";

        // document.getElementById("screwHand").style.transition = "top 5s ease-in-out";
        // // setTimeout(() => {
        //     document.getElementById("screwHand").classList.add("rotateHand");
        //     setTimeout(() => {
        //         document.getElementById("screwHand").classList.add("moveHandInside");
        //         setTimeout(() => {
        //             document.getElementById("screwHand").classList.add("rotateHand2");
        // document.getElementById("screwHand").classList.remove("moveHandInside");
        //             setTimeout(() => {
        //                 document.getElementById("screwHand").classList.add("moveHandInside2");
        //             document.getElementById("screwHand").classList.remove("rotateHand2");

        //             }, 900);
        //         }, 1500);
        //     }, 900);
        //     document.getElementById("singleScrewFinal").classList.add("moveSingleScrewInside");
        // }, 1000);
        setTimeout(() => {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById("all_screws").style.visibility = "visible";


        }, 2000);

    }, 1900);



}
var motorPlacementCount = 0;

function placeMotor(n, t) {
    myStopFunction();
    document.getElementById("motor" + n).style.visibility = "visible";
    document.getElementById("motor" + n).style.top = t;
    document.getElementById("motor" + n).style.opacity = 0;
    document.getElementById("motor" + n).style.transition = "all 1s ease-in-out";
    document.getElementById("placedMotor" + n).style.visibility = "visible";
    document.getElementById("placedMotor" + n).style.opacity = 1;
    document.getElementById("placedMotor" + n).style.transition = "opacity 1s ease-in-out";

    motorPlacementCount += 1;
    if (motorPlacementCount == 4) {
        // To hide the initial motors
        for (let i = 1; i <= 4; i++) {
            document.getElementById("motor" + i).style.visibility = "hidden";
        }
        setTimeout(function() {
            document.getElementById("placeMotorInfo").innerText = "Pick screws and screw them to the frame to attach the motor.";
            document.getElementById("placeMotorInfo").style.visibility = "visible";
        }, 500);

        setTimeout(function() {

            document.getElementById("placeMotorInfo").style.visibility = "hidden";


            document.getElementById("singleScrew1").style.visibility = "visible";
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 660px; top: 120px; height: 30px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(0deg)";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
        }, 2500);

        // document.getElementById("placeMotorInfo").innerText = "Let us place a double sided tape on the frame to place the Flight Controller.";
        // document.getElementById("placeMotorInfo").style.visibility = "visible";
        // setTimeout(function() {
        //     document.getElementById("placeMotorInfo").style.visibility = "hidden";
        //     document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 450px; top: 130px; height: 30px; z-index: 10;";

        //     document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        //     // Code for IE9
        //     document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        //     // Standard syntax
        //     document.getElementById("arrow1").style.transform = "rotate(0deg)";
        //     myInt = setInterval(function() {
        //         animatearrow();
        //     }, 500);
        //     document.getElementById("tape").style.visibility = "visible";
        // }, 1000);

    }
}

function placeSingleScrew_motor() {
    myStopFunction();
    document.getElementById("singleScrew1").classList.add("moveSingleScrew2");

    setTimeout(function() {
        document.getElementById("singleScrew1").style.visibility = "hidden";
        document.getElementById("screwHand2").style.visibility = "visible";
        document.getElementById("screwHand2").classList.add("rotateHand2");
        document.getElementById("screwHand2").style.top = "375px";
        document.getElementById("screwHand2").style.transition = "top 3s ease-in-out";
        document.getElementById("curve_arrow").style = "visibility:visible;position:absolute;top:390px;left:561px;height: 30px; width: 30px;z-index:120;";

        myInt = setInterval(function() {
            animatecurvearrow();
        }, 500);
        setTimeout(() => {
            clearInterval(myInt);
            document.getElementById('curve_arrow').style.visibility = "hidden";

        }, 2000);
        document.getElementById("singleScrewFinal1").style.visibility = "visible";
        document.getElementById("singleScrewFinal1").style.top = "360px";
        document.getElementById("singleScrewFinal1").style.opacity = 0;
        document.getElementById("singleScrewFinal1").style.transition = "all 4s ease-in-out";
        document.getElementById("screw_head1").style.visibility = "visible";
        document.getElementById("screw_head1").style.opacity = 1;
        document.getElementById("screw_head1").style.transition = "opacity 4s ease-in-out";
        document.getElementById("all_screws_motor").style.visibility = "visible";

    }, 1900)



}



function placeFC() {
    myStopFunction();
    document.getElementById("fc").classList.add("moveFc");
    setTimeout(() => {
        document.getElementById("placedFc").style.visibility = "visible";
        document.getElementById("fc_note").style.visibility = "visible";
        document.getElementById("fcZoom").style.visibility = "visible";
        document.getElementById("fc").style.visibility = "hidden";
    }, 2000);
    setTimeout(() => {
        // Show motor numbers.
        for (let i = 1; i < 5; i++) {
            document.getElementById("motorNumber" + i).style.visibility = "visible";
            document.getElementById("motorNumber" + i).classList.add("showMotorNumbers");
        }
    }, 3000);

}

function fcInfoDone() {
    document.getElementById("fc_note").style.visibility = "hidden";
    document.getElementById("fcZoom").style.visibility = "hidden";
    for (let i = 1; i < 5; i++) {
        document.getElementById("motorNumber" + i).style.visibility = "hidden";
    }
    document.getElementById("placeMotorInfo").innerText = "Let us stick double sided tape to place Receiver.";
    document.getElementById("placeMotorInfo").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 530px; top: 130px; height: 30px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById("placeMotorInfo").style.visibility = "hidden";
        document.getElementById("doubleSTRec").style.visibility = "visible";
    }, 2500);
}

function placeDSTRec() {
    myStopFunction();
    document.getElementById("doubleSTRec").classList.add("moveDSTRec");
    setTimeout(() => {
        document.getElementById("doubleSTRec").style.visibility = "hidden";
        document.getElementById("placedDSTRec").style.visibility = "visible";
        document.getElementById("placeMotorInfo").innerText = "Let us place the receiver now.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 470px; top: 130px; height: 30px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(0deg)";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById("receiver").style.visibility = "visible";
        }, 2500);
    }, 2000);
}

function placeReceiver() {
    myStopFunction();
    document.getElementById("receiver").classList.add("moveRec");
    setTimeout(() => {
        document.getElementById("receiver").style.visibility = "hidden";
        document.getElementById("placedReceiver").style.visibility = "visible";
        // document.getElementById("rec_wire_uc").style.visibility = "visible";

        setTimeout(function() {
            document.getElementById("placeMotorInfo").innerText = "Let us now place the Electronic Speed Controllers (ESC) on the arms of the frame.";
            document.getElementById("placeMotorInfo").style.visibility = "visible";
            setTimeout(function() {
                for (let i = 1; i <= 4; i++) {
                    document.getElementById("esc_arm" + i).style.visibility = "visible";
                }

                document.getElementById("placeMotorInfo").style.visibility = "hidden";
                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 150px; top: 280px; height: 30px; z-index: 10;";

                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                // Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";

                myInt = setInterval(function() {
                    animatearrow();
                }, 500);
            }, 4000);
        }, 2500);
    }, 1950);

}
// ------------------------------------Use this if placing GPS. ----------------------------
// function placeGPS() {
//     document.getElementById("gps").style.cssText = "visibility: visible; cursor: pointer; position: absolute; left: 280px; top: 150px; height: 75px; width: 45px; transform: rotate(0deg); z-index: 100;";
//     document.getElementById("gpsWire").style.cssText = "visibility: visible; cursor: pointer; position: absolute; left: 280px; top: 154px; height: 75px; width: 40px; transform: rotate(0deg); z-index: 100;";
// }


// -----------------------------------Placing ESC  on arms------------------------------------
var escSelected = 0;

function placeEsc(id, top_px, left_px, height_px, width_px) {

    if (id == 1) {
        myStopFunction();
        document.getElementById("esc_arm1").classList.add("moveHoverEsc1");
        // Author: Jaison
        setTimeout(() => {
            console.log("hiding the hovering esc")

            document.getElementById("esc_arm1").style.visibility = "hidden";
            document.getElementById("esc_arm_placed1").style.visibility = "visible";
            document.getElementById("esc_arm_placed1").onclick = function() { connectEscMotor(1); };

            document.getElementById("esc_wire1").style.visibility = "visible";
            document.getElementById("esc_signal1").style.visibility = "visible";
        }, 1900);
    }
    if (id == 2) {
        myStopFunction();
        document.getElementById("esc_arm2").classList.add("moveHoverEsc2");
        // Author: Jaison
        setTimeout(() => {
            console.log("hiding the hovering esc")

            document.getElementById("esc_arm2").style.visibility = "hidden";
            document.getElementById("esc_arm_placed2").style.visibility = "visible";

            document.getElementById("esc_wire2").style.visibility = "visible";
            document.getElementById("esc_signal2").style.visibility = "visible";
        }, 1900);
    }
    if (id == 3) {
        myStopFunction();
        document.getElementById("esc_arm3").classList.add("moveHoverEsc3");
        // Author: Jaison
        setTimeout(() => {
            console.log("hiding the hovering esc")

            document.getElementById("esc_arm3").style.visibility = "hidden";
            document.getElementById("esc_arm_placed3").style.visibility = "visible";

            document.getElementById("esc_wire3").style.visibility = "visible";
            document.getElementById("esc_signal3").style.visibility = "visible";
        }, 1900);
    }
    if (id == 4) {
        myStopFunction();
        document.getElementById("esc_arm4").classList.add("moveHoverEsc4");
        // Author: Jaison
        setTimeout(() => {
            console.log("hiding the hovering esc")

            document.getElementById("esc_arm4").style.visibility = "hidden";
            document.getElementById("esc_arm_placed4").style.visibility = "visible";

            document.getElementById("esc_wire4").style.visibility = "visible";
            document.getElementById("esc_signal4").style.visibility = "visible";
        }, 1900);
    }
    escSelected++;
    console.log(escSelected);
    if (escSelected >= 4) {


        setTimeout(function() {
            document.getElementById("placeMotorInfo").innerText = "Click on the ESC wires to connect the ESCs to the Motors.";
            document.getElementById("placeMotorInfo").style.visibility = "visible";

            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left:215px; top: 330px; height: 30px;width:30px; z-index: 100;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(270deg)";

            myInt = setInterval(function() {
                animatearrow();
            }, 500);

        }, 1500);






    }
}
var connectionsDone = 0;

function connectEscMotor(n) {
    myStopFunction();
    document.getElementById("esc_arm_placed" + n).onclick = "";
    document.getElementById("esc_arm" + n).onclick = "";

    if (n == 1) {
        document.getElementById("placedMotor" + n).style.visibility = "hidden";
        document.getElementById("esc_arm_placed" + n).style.visibility = "hidden";
        connectionsDone++;
        document.getElementById("esc_motor_connected" + n).style.visibility = "visible";
        // document.getElementById("esc_motor_connected" + n).style.opacity = 1;
        // document.getElementById("esc_motor_connected" + n).style.transition = "opacity 1s ease-in-out";
        document.getElementById('esc_wire1').style.top = "267px;"
        document.getElementById('esc_wire1').style.left = "229px";
        document.getElementById('esc_signal1').style.top = "269px";
        document.getElementById('esc_signal1').style.left = "230px";

        // document.getElementById('esc_wire1').style.top= "263px;";
        // document.getElementById('esc_wire1').style.left= "237px";
        // document.getElementById('esc_signal1').style.top = "265px";
        // document.getElementById('esc_signal1').style.left = "240px";

        // Checking if all are placed
        if (connectionsDone == 1) {
            document.getElementById("placeMotorInfo").innerText = "Click on the rest of the ESCs to connect to the Motor."
        }
        if (connectionsDone >= 4) {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";

            setTimeout(function() {
                document.getElementById('arrow-fc-signal').style.visibility = "visible";
                document.getElementById('info-about-signal').style.visibility = "visible";
            }, 1000);
        }
    }
    if (n == 2) {
        document.getElementById("placedMotor" + n).style.visibility = "hidden";
        document.getElementById("esc_arm_placed" + n).style.visibility = "hidden";
        document.getElementById("esc_arm" + n).style.visibility = "hidden";
        connectionsDone++;
        document.getElementById("esc_motor_connected" + n).style.visibility = "visible";
        document.getElementById('esc_wire2').style.top = "263px;";
        document.getElementById('esc_wire2').style.left = "397px";
        document.getElementById('esc_signal2').style.top = "263px";
        document.getElementById('esc_signal2').style.left = "357px";

        if (connectionsDone == 1) {
            document.getElementById("placeMotorInfo").innerText = "Click on the rest of the ESCs to connect to the Motor."
        }
        // Checking if all are placed
        if (connectionsDone >= 4) {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";

            setTimeout(function() {
                document.getElementById('arrow-fc-signal').style.visibility = "visible";
                document.getElementById('info-about-signal').style.visibility = "visible";
            }, 1000);
        }
    }
    if (n == 3) {
        document.getElementById("placedMotor4").style.visibility = "hidden";
        document.getElementById("esc_arm_placed3").style.visibility = "hidden";
        document.getElementById("esc_arm3").style.visibility = "hidden";
        connectionsDone++;
        document.getElementById("esc_motor_connected3").style.visibility = "visible";
        // document.getElementById("esc_motor_connected3").style.opacity = 1;
        // document.getElementById("esc_motor_connected3").style.transition = "opacity 1s ease-in-out";
        document.getElementById('esc_wire3').style.left = "379px";
        document.getElementById('esc_signal3').style.left = "341px";
        document.getElementById('esc_wire3').style.top = "199px";
        document.getElementById('esc_signal3').style.top = "199px";

        if (connectionsDone == 1) {
            document.getElementById("placeMotorInfo").innerText = "Click on the rest of the ESCs to connect to the Motor."
        }

        // Checking if all are placed
        if (connectionsDone >= 4) {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";

            setTimeout(function() {
                document.getElementById('arrow-fc-signal').style.visibility = "visible";
                document.getElementById('info-about-signal').style.visibility = "visible";
            }, 1000);
        }

    }
    if (n == 4) {
        document.getElementById("placedMotor3").style.visibility = "hidden";
        document.getElementById("esc_arm_placed4").style.visibility = "hidden";
        document.getElementById("esc_arm4").style.visibility = "hidden";
        document.getElementById("esc_motor_connected4").style.visibility = "visible";
        document.getElementById('esc_wire4').style.top = "202px";
        document.getElementById('esc_wire4').style.left = "276px";
        document.getElementById('esc_signal4').style.top = "205px";
        document.getElementById('esc_signal4').style.left = "272px";

        connectionsDone++;

        // document.getElementById("esc_motor_connected4").style.opacity = 1;
        // document.getElementById("esc_motor_connected4").style.transition = "opacity 1s ease-in-out";
        // document.getElementById('esc_wire4').style.left = "360px";
        // document.getElementById('esc_signal4').style.left = "327px";
        // document.getElementById('esc_wire4').style.top = "206px";
        // document.getElementById('esc_signal4').style.top = "205px";

        if (connectionsDone == 1) {
            document.getElementById("placeMotorInfo").innerText = "Click on the rest of the ESCs to connect to the Motor."
        }

        // Checking if all are placed
        if (connectionsDone >= 4) {
            console.log("Inside the signal info function.");
            document.getElementById("placeMotorInfo").style.visibility = "hidden";

            setTimeout(function() {
                document.getElementById('arrow-fc-signal').style.visibility = "visible";
                document.getElementById('info-about-signal').style.visibility = "visible";
            }, 1000);
        }
    }

}

function fcSignalInfoShown() {
    console.log("Button has been clicked");
    document.getElementById('arrow-fc-signal').style.visibility = "hidden";
    document.getElementById('info-about-signal').style.visibility = "hidden";
    document.getElementById('fc_top_connection').style.visibility = "visible";
    document.getElementById('fcZoomSignalCon').style.visibility = "visible";
    document.getElementById('signal_note').style.visibility = "visible";
    document.getElementById("placeMotorInfo").innerText = "Click on the signal wire of the ESC to connect the ESCs to the Flight Controller.";
    document.getElementById("placeMotorInfo").style.visibility = "visible";

    document.getElementById('arrow1').style = "visibility: visible; position: absolute; left: 420px; top: 300px; height: 30px; width: 30px; z-index: 150; ";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(270deg)";

    document.getElementById('esc_signal1').onclick = function() { connectEscFc(1); };
    document.getElementById('esc_signal2').onclick = function() { connectEscFc(2); };
    document.getElementById('esc_signal3').onclick = function() { connectEscFc(3); };
    document.getElementById('esc_signal4').onclick = function() { connectEscFc(4); };

    myInt = setInterval(function() {
        animatearrow();
    }, 500);
}

var fcConnected = 0;

function connectEscFc(id) {
    myStopFunction();

    if (id == 3) {
        document.getElementById('esc_fc_connected3_1').style.visibility = "visible";
        document.getElementById('esc_fc_connected3_2').style.visibility = "visible";
        // FC signal
        document.getElementById("signaltoFCwire4").style.visibility = "visible";
        document.getElementById("signaltoFCwire4").classList.add("moveFcSignal4");
        setTimeout(() => {
            document.getElementById("signaltoFCwire4").style.visibility = "hidden";
            document.getElementById("signaltoFCwirePlaced4").style.visibility = "visible";
        }, 2000);
        fcConnected++;
    } else {
        document.getElementById('esc_fc_connected' + id).style.visibility = "visible";
        fcConnected++;
        if (id == 2) {
            // Which is of first motor after correction of FC
            document.getElementById("signaltoFCwire1").style.visibility = "visible";
            document.getElementById("signaltoFCwire1").classList.add("moveFcSignal1");
            setTimeout(() => {
                document.getElementById("signaltoFCwire1").style.visibility = "hidden";
                document.getElementById("signaltoFCwirePlaced1").style.visibility = "visible";
            }, 2000);
        }
        if (id == 1) {
            // Which is of first motor after correction of FC
            document.getElementById("signaltoFCwire2").style.visibility = "visible";
            document.getElementById("signaltoFCwire2").classList.add("moveFcSignal2");
            setTimeout(() => {
                document.getElementById("signaltoFCwire2").style.visibility = "hidden";
                document.getElementById("signaltoFCwirePlaced2").style.visibility = "visible";
            }, 2000);
        }
        if (id == 4) {
            // Which is of first motor after correction of FC
            document.getElementById("signaltoFCwire3").style.visibility = "visible";
            document.getElementById("signaltoFCwire3").classList.add("moveFcSignal3");
            setTimeout(() => {
                document.getElementById("signaltoFCwire3").style.visibility = "hidden";
                document.getElementById("signaltoFCwirePlaced3").style.visibility = "visible";
            }, 2000);
        }
    }
    document.getElementById('esc_signal' + id).style.visibility = "hidden";
    if (fcConnected == 1) {
        document.getElementById("signal_note").style.top = "185px";
        document.getElementById('signalNoteInner').innerText = "Now follow the order and connect to the curresponding pins."
        for (let i = 2; i < 5; i++) {
            document.getElementById("motorNumber" + i).style.visibility = "visible";
            document.getElementById("motorNumber" + i).classList.add("showMotorNumbers");
        }
    }
    if (fcConnected >= 4) {
        for (let i = 2; i < 5; i++) {
            document.getElementById("motorNumber" + i).style.visibility = "hidden";
        }
        setTimeout(() => {
            for (let i = 1; i < 5; i++) {
                document.getElementById("signaltoFCwirePlaced" + i).style.visibility = "hidden";
            }
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById('fc_top_connection').style.visibility = "hidden";
            document.getElementById('fcZoomSignalCon').style.visibility = "hidden";
            // document.getElementById('signal_note').style.visibility = "hidden";
            document.getElementById('signalNoteInner').innerText = "Based on CC3D firmware's default configuration, motor 1 and 3 will be rotating clockwise and motor 2 and 4 will be counter clockwise."
            document.getElementById("signalNoteInner").style.top = "-1px";
            document.getElementById("signal_note").style.top = "150px";
            document.getElementById("signalCloseButton").style.visibility = "visible";
            document.getElementById('signal_note').style.height = "135px";
            for (let z = 1; z < 5; z++) {
                document.getElementById("rotationDir" + z).style.visibility = "visible";
            }
        }, 2000);
    }
}

function doneShowingRotationInfo() {
    for (let z = 1; z < 5; z++) {
        document.getElementById("rotationDir" + z).style.visibility = "hidden";
    }
    document.getElementById('signal_note').style.visibility = "hidden";
    document.getElementById("signalCloseButton").style.visibility = "hidden";

    // document.getElementById("arrow-rec-signal").style.visibility = "visible";
    document.getElementById("info-about-Rec-signal").style.visibility = "visible";
    document.getElementById("sbus_notPlaced").style.visibility = "visible";
}
// This is where
function revSignalInfoShown() {
    // document.getElementById("arrow-rec-signal").style.visibility = "hidden";
    document.getElementById("info-about-Rec-signal").style.visibility = "hidden";
    document.getElementById("sbus_notPlaced").style.visibility = "hidden";
    document.getElementById("placeMotorInfo").innerText = "Click on the SBUS connector to make connection between FC and receiver.";
    document.getElementById("placeMotorInfo").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("placeMotorInfo").style.visibility = "hidden";
        document.getElementById("sbus_notPlaced").style.visibility = "visible";
        document.getElementById("sbus_notPlaced").style.left = "350px";
        document.getElementById('arrow1').style = "visibility: visible; position: absolute; left: 350px; top: 132px; height: 30px; z-index: 10;;";
        // document.getElementById('rec_wire_uc').onclick = function() { RecToFc(); };
        // document.getElementById('rec_wire_uc').style.cursor = "pointer";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        //         // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        //         // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";

        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById("fc_topForSBUS_connection").style.visibility = "visible";
        document.getElementById("fcZoomSbusCon").style.visibility = "visible";
    }, 1500);
}

function placeSBUScable() {
    myStopFunction();

    // Connect sbus to Fc top view as well as isometric.
    document.getElementById("mainPortConnector").style.visibility = "visible";
    document.getElementById("mainPortConnector").classList.add("moveMainPortSbus");
    setTimeout(function() {
        document.getElementById("placeMotorInfo").innerText = "Let us attach a Base Layer to the frame.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        setTimeout(function() {
            document.getElementById("sbus_notPlaced").style.visibility = "hidden";
            document.getElementById("fc_topForSBUS_connection").style.visibility = "hidden";
            document.getElementById("fcZoomSbusCon").style.visibility = "hidden";
            document.getElementById("mainPortConnector").style.visibility = "hidden";



            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById('base_layer').style.visibility = "visible";

            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 480px; top: 150px; height: 30px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(0deg)";

            myInt = setInterval(function() {
                animatearrow();
            }, 500);

        }, 5000);
    }, 2000);
}

function RecToFc() {
    myStopFunction();
    // document.getElementById('rec_wire_uc').style.visibility = "hidden";
    // document.getElementById('rec_wire').style.visibility = "visible";
    setTimeout(function() {
        document.getElementById("placeMotorInfo").innerText = "Let us attach a Base Layer to the frame.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        setTimeout(function() {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById('base_layer').style.visibility = "visible";

            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 480px; top: 150px; height: 30px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(0deg)";

            myInt = setInterval(function() {
                animatearrow();
            }, 500);

        }, 5000);
    }, 2000);
}

function placeSingleScrew_base() {
    myStopFunction();
    document.getElementById("singleScrew_2").classList.add("moveSingleScrew3");
    document.getElementById('placedMotor4').style.visibility = "hidden";

    setTimeout(function() {
        document.getElementById("singleScrew_2").style.visibility = "hidden";
        document.getElementById("screwHand3").style.visibility = "visible";
        document.getElementById("screwHand3").classList.add("rotateHand2");
        document.getElementById("screwHand3").style.top = "350px";
        document.getElementById("screwHand3").style.transition = "top 3s ease-in-out";
        document.getElementById("curve_arrow").style = "visibility:visible;position:absolute;top:360px;left:360px;height: 30px; width: 30px;z-index:120;";

        myInt = setInterval(function() {
            animatecurvearrow();
        }, 500);
        setTimeout(() => {
            clearInterval(myInt);
            document.getElementById('curve_arrow').style.visibility = "hidden";

        }, 3000);
        document.getElementById("singleScrewFinal2").style.visibility = "visible";
        document.getElementById("singleScrewFinal2").style.top = "340px";
        document.getElementById("singleScrewFinal2").style.opacity = 0;
        document.getElementById("singleScrewFinal2").style.transition = "all 3s ease-in-out";
        // document.getElementById("screw_head2").style.visibility = "visible";
        // document.getElementById("screw_head2").style.opacity = 1;
        // document.getElementById("screw_head2").style.transition = "opacity 4s ease-in-out";
        document.getElementById("all_screws_base").style.visibility = "visible";

    }, 1900)
}

function all_screws2() {
    document.getElementById('all_screws_base').style.visibility = "hidden";
    document.getElementById('placedMotor4').style.visibility = "hidden";

    document.getElementById('screwHand3').style.visibility = "hidden";
    document.getElementById("singleScrew_base2").style.top = "320px";
    document.getElementById("singleScrew_base3").style.top = "300px";
    document.getElementById("singleScrew_base4").style.top = "308px";


    for (let i = 2; i <= 4; i++) {
        document.getElementById("singleScrew_base" + i).style.visibility = "visible";
        document.getElementById("singleScrew_base" + i).style.opacity = 0;
        document.getElementById("singleScrew_base" + i).style.transition = "all 3s ease-in-out";
        // document.getElementById("singleScrew" + i).style.transition = "opacity 5s ease-in-out";
        // document.getElementById("singleScrew" + i).style.zIndex = -1;

    }
    // document.getElementById("all_screws_on").style.visibility = "visible";
    // document.getElementById("all_screws_on").style.opacity = 1;
    // document.getElementById("all_screws_on").style.transition = "opacity 5.5s ease-in-out";
    setTimeout(function() {
        for (let i = 2; i <= 4; i++) {
            document.getElementById("singleScrew_base" + i).style.visibility = "hidden";

        }
        // document.getElementById("placeMotorInfo").innerText = "Let us now place the Battery on the Base Layer.";
        // document.getElementById("placeMotorInfo").style.visibility = "visible";
    }, 4000);


    // setTimeout(function() {

    //     document.getElementById("placeMotorInfo").style.visibility = "hidden";
    //     // document.getElementById("gps").style.visibility = "visible";
    //     // document.getElementById("gpsWire").style.visibility = "visible";
    //     document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 480px; top: 120px; height: 30px; z-index: 10;";

    //     document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
    //     //Code for IE9
    //     document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
    //     // Standard syntax
    //     document.getElementById("arrow1").style.transform = "rotate(0deg)";
    //     myInt = setInterval(function() {
    //         animatearrow();
    //     }, 500);
    //     document.getElementById("battery_base").style.visibility = "visible";
    // }, 5500);
    setTimeout(function() {
        document.getElementById("placeMotorInfo").innerText = "Let us now solder the ESC Power wires to the PCB Board.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        setTimeout(function() {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById('move_top').style.visibility = "visible";

            document.getElementById('arrow1').style = "visibility: visible; position: absolute; left: 370px; top: 85px; height: 30px; z-index: 10; ";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(270deg)";

            myInt = setInterval(function() {
                animatearrow();
            }, 500);

        }, 5000);
    }, 5000);
}

function placeBase() {
    myStopFunction();
    document.getElementById('base_layer').style.visibility = "visible";
    document.getElementById('base_layer').style.top = "248px";
    document.getElementById('base_layer').style.left = "210px";
    document.getElementById('base_layer').style.height = "100px";
    document.getElementById('base_layer').style.width = "260px";
    document.getElementById('base_layer').style.transition = "all 2s ease-in-out";
    setTimeout(function() {
        document.getElementById("placeMotorInfo").innerText = "Pick the screw and screw the base layer as shown to the end of the arm stand.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        setTimeout(function() {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById("singleScrew_2").style.visibility = "visible";
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 660px; top: 120px; height: 30px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(0deg)";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
        }, 3500);
        // document.getElementById("placeMotorInfo").style.visibility = "hidden";
        // document.getElementById('battery_base').style.visibility = "visible";

        // document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 480px; top: 110px; height: 30px; z-index: 10;";

        // document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        // // Code for IE9
        // document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // // Standard syntax
        // document.getElementById("arrow1").style.transform = "rotate(0deg)";

        // myInt = setInterval(function() {
        //     animatearrow();
        // }, 500);


    }, 4500);


}

function placeBattery() {
    myStopFunction();
    document.getElementById('move_isometric').style.visibility = "hidden";
    document.getElementById('battery_base').style.visibility = "visible";
    document.getElementById('battery_base').style.top = "225px";
    document.getElementById('battery_base').style.left = "210px";
    document.getElementById('battery_base').style.height = "70px";
    document.getElementById('battery_base').style.width = "200px";
    document.getElementById('battery_base').style.zIndex = 96;

    document.getElementById('battery_base').style.transition = "top 2s ease-in-out";
    setTimeout(function() {
        document.getElementById("placeMotorInfo").innerText = "Let us now fix the Propellers on the motor.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        setTimeout(function() {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById("prop_note").style.visibility = "visible";
            document.getElementById("curve_arrow").style = "visibility: visible; position: absolute;  top: 355px; left: 220px; height: 30px; width: 30px;z-index:570;";
            document.getElementById("curve_arrow1").style.visibility = "visible";
            myInt2 = setInterval(function() {
                animatecurvearrow();
            }, 500);
            myInt1 = setInterval(function() {
                animatecurve1arrow();
            }, 500);
        }, 4000);



    }, 2000);
}

function propInfo() {
    clearInterval(myInt2);
    document.getElementById('curve_arrow').style.visibility = "hidden";
    clearInterval(myInt1);
    document.getElementById("curve_arrow1").style.visibility = "hidden";

    document.getElementById("prop_note").style.visibility = "hidden";
    document.getElementById("placeMotorInfo").style.visibility = "visible";
    document.getElementById("placeMotorInfo").innerText = "Now we know the direction of the motor rotation.";


    setTimeout(function() {
        setTimeout(function() {
            document.getElementById("placeMotorInfo").innerText = "Based on what we have learnt so far, choose the appropriate Propeller for the first motor.";
            document.getElementById('prop3').style.visibility = "visible";
            document.getElementById('prop3_1').style.visibility = "visible";
        }, 1000);
        // document.getElementById("placeMotorInfo").style.visibility = "hidden";
        // document.getElementById('prop1').style.visibility = "visible";
        // document.getElementById('prop2').style.visibility = "visible";

        document.getElementById('prop3').onclick = function() {
            placeProp(3);
            document.getElementById('prop3_1').style.visibility = "hidden";

        };
        document.getElementById('prop3_1').onclick = function() { placeProp3(); };
        // document.getElementById('prop4').style.visibility = "visible";


        // document.getElementById('prop1').onclick = function() { 
        //     placeProp(1) };
        // document.getElementById('prop2').onclick = function() { placeProp(2) };
        // document.getElementById('prop3').onclick = function() { placeProp(3) };
        // document.getElementById('prop4').onclick = function() { placeProp(4) };


        // document.getElementById('arrow1').style = "visibility: visible; position: absolute; left: 500px; top: 85px; height: 30px; z-index: 10;";

        // document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
        // // Code for IE9
        // document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        // // Standard syntax
        // document.getElementById("arrow1").style.transform = "rotate(270deg)";

        // myInt = setInterval(function() {
        //     animatearrow();
        // }, 500);
        document.getElementById('move_isometric').style.visibility = "hidden";
    }, 5000);
}

function placeProp3() {
    document.getElementById('choose_info').style.visibility = "visible";
    document.getElementById('choose_info').innerText = "Wrong Choice! Click on the right Propeller."
    document.getElementById('choose_info').style.color = "red";
    document.getElementById('prop3_1').style.visibility = "hidden";


}

function placeProp(id) {
    myStopFunction();


    document.getElementById('move_isometric').style.visibility = "hidden";
    document.getElementById('prop' + id).style.visibility = "visible";
    if (id == 1) {
        document.getElementById('prop' + id).style = "position: absolute; visibility: visible; top: 267px; left: 41px; height: 80px; width: 180px; z-index: 570;transition:all 1s ease-in-out;";
        document.getElementById('rotation_note').style.visibility = "visible";
    }
    if (id == 2) {
        document.getElementById('prop' + id).style = "position: absolute; visibility: visible; top: 277px; left: 472px; height: 80px; width: 180px; z-index: 570; transition:all 1s ease-in-out;";
    }
    if (id == 3) {
        document.getElementById('choose_info').style.visibility = "visible";
        document.getElementById('choose_info').innerText = "Correct Choice!";
        document.getElementById('choose_info').style.color = "#32CD32";
        document.getElementById('prop' + id).style = "position: absolute; visibility: visible; top: 114px; left: 396px; height: 60px; width: 130px; z-index: 570;transition:all 1s ease-in-out;";
        setTimeout(function() {
            document.getElementById('choose_info').style.visibility = "hidden";
            document.getElementById("placeMotorInfo").innerText = "Click on the rest of the Propellers to place them accordingly.";
            setTimeout(function() {
                document.getElementById("placeMotorInfo").style.visibility = "hidden";
                document.getElementById('prop1').style.visibility = "visible";
                document.getElementById('prop2').style.visibility = "visible";
                document.getElementById('prop3').style.visibility = "visible";
                document.getElementById('prop4').style.visibility = "visible";
                document.getElementById('prop1').onclick = function() { placeProp(1) };
                document.getElementById('prop2').onclick = function() { placeProp(2) };
                document.getElementById('prop3').onclick = function() { placeProp(3) };
                document.getElementById('prop4').onclick = function() { placeProp(4) };
            }, 2000);

        }, 1500);


    }
    if (id == 4) {
        document.getElementById('prop' + id).style = "position: absolute; visibility: visible; top: 112px; left: 112px; height: 60px; width: 130px; z-index: 570;transition:all 1s ease-in-out; ";
        document.getElementById('rotation_note').style.visibility = "visible";

    }

}

function rotationInfoDone() {
    document.getElementById('rotation_note').style.visibility = "hidden";
    document.getElementById("placeMotorInfo").style.visibility = "visible";
    document.getElementById("placeMotorInfo").innerText = "Place the knobs on the Propellers.";
    document.getElementById("knob1").style.visibility = "visible";
    document.getElementById("knob2").style.visibility = "visible";
    document.getElementById("knob3").style.visibility = "visible";
    document.getElementById("knob4").style.visibility = "visible";
    setTimeout(function() {
        document.getElementById("placeMotorInfo").style.visibility = "hidden";
        document.getElementById("knob1").style.top = "286px";
        document.getElementById("knob2").style.top = "298.5px";
        document.getElementById("knob3").style.top = "131px";
        document.getElementById("knob4").style.top = "128px";
        document.getElementById("knob1").style.transition = "top 2s ease-in-out";
        document.getElementById("knob2").style.transition = "top 2s ease-in-out";
        document.getElementById("knob3").style.transition = "top 2s ease-in-out";
        document.getElementById("knob4").style.transition = "top 2s ease-in-out";

        document.getElementById("curve_arrow1_1").style.visibility = "visible";
        document.getElementById("curve_arrow1_2").style.visibility = "visible";
        document.getElementById("curve_arrow1_3").style.visibility = "visible";
        document.getElementById("curve_arrow1_4").style.visibility = "visible";
        myIntv1 = setInterval(function() {
            animatecurve2arrow(1);
        }, 500);
        myIntv2 = setInterval(function() {
            animatecurve2arrow(2);
        }, 500);
        myIntv3 = setInterval(function() {
            animatecurve2arrow(3);
        }, 500);
        myIntv4 = setInterval(function() {
            animatecurve2arrow(4);
        }, 500);

    }, 2000);

    setTimeout(function() {
        clearInterval(myIntv1);
        clearInterval(myIntv2);
        clearInterval(myIntv3);
        clearInterval(myIntv4);

        document.getElementById("curve_arrow1_1").style.visibility = "hidden";
        document.getElementById("curve_arrow1_2").style.visibility = "hidden";
        document.getElementById("curve_arrow1_3").style.visibility = "hidden";
        document.getElementById("curve_arrow1_4").style.visibility = "hidden";
    }, 5000);

    setTimeout(function() {
        document.getElementById("pumptext").innerHTML = "The Assembly of the Quadcoptor is thus complete. Proceed to the next experiment to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;understand the Calibration of the Quadcopter. ";


    }, 6000);
}

function moveTopView() {
    myStopFunction();
    document.getElementById('base_layer').style.top = "240px";
    document.getElementById('base_layer').style.left = "143px";
    document.getElementById('base_layer').src = "./Images/base_layera_v4.png";
    document.getElementById('base_layer').style.height = "130px";
    document.getElementById('base_layer').style.width = "380px";
    document.getElementById('base_layer').onclick = "";

    document.getElementById('base_layer').style.transform = "rotate(5deg)";
    document.getElementById('base_layer').style.zIndex = "550";
    document.getElementById('base_layer').style.transition = "all 2s ease-in-out";

    // document.getElementById('all_screws_on').style.top = "200px";
    document.getElementById('all_screws_on').style.opacity = 0;
    document.getElementById('all_screws_on').style.transition = "all 1s ease-in-out";
    setTimeout(() => {
        document.getElementById('all_screws_on').style.visibility = "hidden";
        document.getElementById('armsAndTop').style.visibility = "hidden";
        for (let i = 1; i <= 4; i++) {
            document.getElementById('esc_motor_connected' + i).style.visibility = "hidden";
            if (i == 3) {
                document.getElementById('esc_fc_connected3_1').style.visibility = "hidden";
                document.getElementById('esc_fc_connected3_2').style.visibility = "hidden";

            } else {
                document.getElementById('esc_fc_connected' + i).style.visibility = "hidden";

            }
            document.getElementById('esc_wire' + i).style.visibility = "hidden";
            document.getElementById('half_esc' + i).style.visibility = "visible";
            document.getElementById('half_esc' + i).style.opacity = 1;
            document.getElementById('half_esc' + i).style.transition = "all 5s ease-in-out";
            document.getElementById('half_esc_signal' + i).style.visibility = "visible";
            document.getElementById('half_esc_signal' + i).style.opacity = 1;
            document.getElementById('half_esc_signal' + i).style.transition = "all 5s ease-in-out";

            document.getElementById('half_escWire' + i).style.visibility = "visible";
            document.getElementById('half_escWire' + i).style.opacity = 1;
            document.getElementById('half_escWire' + i).style.transition = "all 5s ease-in-out";

            // document.getElementById('half_esc_wire' + i).style.visibility = "visible";

        }
        document.getElementById('battery_base').style.visibility = "hidden";
        document.getElementById('placedFc').style.visibility = "hidden";
        document.getElementById('rec_wire').style.visibility = "hidden";
        document.getElementById('placedReceiver').style.visibility = "hidden";
        document.getElementById('placedDST').style.visibility = "hidden";
        document.getElementById('placedDSTRec').style.visibility = "hidden";
        document.getElementById('screw_head').style.visibility = "hidden";
        document.getElementById('screw_head1').style.visibility = "hidden";
        document.getElementById('move_top').style.visibility = "hidden";
        document.getElementById('border_box').style.visibility = "visible";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        document.getElementById("placeMotorInfo").innerText = "Place the ESC Power Wires on the PCB Board and solder them."
        setTimeout(function() {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            // document.getElementById("solder").style.visibility = "visible";
            document.getElementById('half_escWire1').onclick = function() { placeWireSolder(1); };







            // document.getElementById('half_escWire1').style.zIndex = 560;
            // document.getElementById('half_escWire2').style.zIndex = 560;
            // document.getElementById('half_escWire3').style.zIndex = 560;
            // document.getElementById('half_escWire4').style.zIndex = 560;

            document.getElementById('arrow1').style = "visibility: visible; position: absolute; left: 250px; top: 345px; height: 30px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(270deg)";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);

        }, 3000);

    }, 0);


}
var powerConnected = 0;

function placeWireSolder(id) {
    myStopFunction();
    document.getElementById('half_escWire' + id).style.visibility = "visible";
    document.getElementById('half_escWire' + id).style.opacity = 0;
    document.getElementById('half_escWire' + id).style.transition = "all 0.1s ease-in-out";
    // document.getElementById("solder_lead2").style.visibility = "visible";
    document.getElementById("half_escWireConnected" + id).style.visibility = "visible";
    document.getElementById('half_escWireConnected' + id).style.opacity = 1;
    document.getElementById('half_escWireConnected' + id).style.transition = "all 0.1s ease-in-out";

    document.getElementById("placeMotorInfo").style.visibility = "visible";
    document.getElementById("placeMotorInfo").innerText = "Solder the ESC Power Wire as shown."
    setTimeout(function() {
        document.getElementById("placeMotorInfo").style.visibility = "hidden";
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 480px; top: 150px; height: 30px; z-index: 10;";
        document.getElementById("solder").style.visibility = "visible";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);

    }, 3000);
    powerConnected++;
    if (powerConnected >= 4) {
        console.log("All esc wires are placed to solder");
    }
}



function solder() {
    myStopFunction();
    document.getElementById("solder").style.visibility = "hidden";
    document.getElementById("solder_hand").style.visibility = "visible";
    document.getElementById("solder_hand").style.top = "238px";
    document.getElementById("solder_hand").style.left = "145px";
    document.getElementById("solder_hand").style.height = "80px";
    document.getElementById("solder_hand").style.width = "120px";
    document.getElementById("solder_hand").style.zIndex = "750";
    document.getElementById("solder_hand").style.transition = "all 2s ease-in-out";

    document.getElementById("solder_lead").style.visibility = "visible";
    document.getElementById("solder_lead").style.top = "239px";
    document.getElementById("solder_lead").style.left = "262px";
    document.getElementById("solder_lead").style.height = "90px";
    document.getElementById("solder_lead").style.width = "104px";
    document.getElementById("solder_lead").style.zIndex = "650";
    document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";


    setTimeout(() => {
        //         document.getElementById("solder_lead").style.visibility = "hidden";
        //         document.getElementById("solder_lead2").style.visibility = "visible";
        //         document.getElementById("solder_lead2").style.top = "250px";
        //         document.getElementById("solder_lead2").style.left = "266px";
        //         // document.getElementById("solder_lead2").style.opacity = 1;
        //         document.getElementById("solder_lead2").style.transition = "all 2s ease-in-out";
        //     }, 2000);
        //     setTimeout(function() {
        //         document.getElementById("solder_hand").style.visibility = "hidden";
        //         document.getElementById("solder_lead").style.visibility = "hidden";
        //         document.getElementById("solder_lead2").style.visibility = "hidden";
        //         document.getElementById("placeMotorInfo").style.visibility = "visible";
        //         document.getElementById("placeMotorInfo").innerText = "Similarly, Solder all other Esc wires to the PCB Board."
        //         setTimeout(function() {
        //             document.getElementById('arrow1').style = "visibility: hidden; position: absolute; left: 710px; top: 105px; height: 30px; z-index: 10; ";
        //             document.getElementById("solder_wires").style.visibility = "visible";

        //             document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        //             // Code for IE9
        //             document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        //             // Standard syntax
        //             document.getElementById("arrow1").style.transform = "rotate(0deg)";
        //             myInt = setInterval(function() {
        //                 animatearrow();
        //             }, 500);
        //         }, 2000);
        //     }, 4000);
        // }



        // soldering the first wire
        document.getElementById("solder_lead").style.top = "244px";
        document.getElementById("solder_lead").style.left = "258px";
        document.getElementById("leadAfter3").style.visibility = "visible";
        document.getElementById("leadAfter3").classList.add("solderAfterShow");
        document.getElementById("solder_lead2").style.transition = "all 2s ease-in-out";
        document.getElementById('lead_smoke1').style.visibility = "visible";
        document.getElementById('lead_smoke1').style.opacity = "1";
        document.getElementById('lead_smoke1').style.transition = "all 2s ease-in-out";
        setTimeout(function() {
            document.getElementById('lead_smoke1').style.visibility = "hidden";

        }, 1000);
    }, 2000);
    setTimeout(() => {
        // Moves from first wire to the second

        document.getElementById("solder_lead").style.top = "252px";
        document.getElementById("solder_lead").style.left = "288px";
        document.getElementById("solder_hand").style.left = "170px";
        document.getElementById("solder_hand").style.top = "252px";
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
    }, 4000);
    setTimeout(() => {
        // soldering the second wire
        document.getElementById("leadAfter4").style.visibility = "visible";
        document.getElementById("leadAfter4").classList.add("solderAfterShow");
        document.getElementById("solder_lead").style.top = "258px";
        document.getElementById("solder_lead").style.left = "282px";
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
        document.getElementById('lead_smoke2').style.visibility = "visible";
        document.getElementById('lead_smoke2').style.opacity = "1";
        document.getElementById('lead_smoke2').style.transition = "all 2s ease-in-out";
        setTimeout(function() {
            document.getElementById('lead_smoke2').style.visibility = "hidden";

        }, 1000);
    }, 6000);
    setTimeout(function() {
        // document.getElementById("solder_hand").style.visibility = "hidden";
        // document.getElementById("solder_lead").style.visibility = "hidden";
        // document.getElementById("solder_lead2").style.visibility = "hidden";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        document.getElementById("placeMotorInfo").innerText = "Similarly, Solder all other Esc wires to the PCB Board."
        setTimeout(function() {
            document.getElementById('arrow1').style = "visibility: hidden; position: absolute; left: 710px; top: 105px; height: 30px; z-index: 10; ";
            document.getElementById("solder_wires").style.visibility = "visible";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(0deg)";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
        }, 2000);
    }, 8000);
}

// ----------------------------------Function to solder all the other esc wires together---------------------------
function solderAllWires() {
    myStopFunction();

    document.getElementById("placeMotorInfo").style.visibility = "hidden";
    document.getElementById("solder_wires").style.visibility = "hidden";

    //placing the second esc wire
    setTimeout(function() {
        document.getElementById("half_escWireConnected2").style.visibility = "visible";
        // document.getElementById("solder_lead2").style.visibility = "visible";
        document.getElementById('half_escWireConnected2').style.opacity = 1;
        document.getElementById('half_escWireConnected2').style.transition = "all 0.1s ease-in-out";
        document.getElementById("half_escWire2").style.visibility = "visible";
        document.getElementById('half_escWire2').style.opacity = 0;
        document.getElementById('half_escWire2').style.transition = "all 0.1s ease-in-out";
    }, 500);

    //moving to third esc wire
    setTimeout(function() {
        document.getElementById("solder_hand").style.visibility = "visible";
        document.getElementById("solder_hand").style.top = "256px";
        document.getElementById("solder_hand").style.left = "248px";
        document.getElementById("solder_hand").style.height = "80px";
        document.getElementById("solder_hand").style.width = "120px";
        document.getElementById("solder_hand").style.zIndex = "660";
        document.getElementById("solder_hand").style.transition = "all 2s ease-in-out";

        document.getElementById("solder_lead").style.visibility = "visible";
        document.getElementById("solder_lead").style.top = "255px";
        document.getElementById("solder_lead").style.left = "365px";
        document.getElementById("solder_lead").style.height = "90px";
        document.getElementById("solder_lead").style.width = "104px";
        document.getElementById("solder_lead").style.zIndex = "650";
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";

    }, 1000);

    setTimeout(() => {

        document.getElementById("solder_lead").style.top = "261px";
        document.getElementById("solder_lead").style.left = "360px";
        document.getElementById("leadAfter5").style.visibility = "visible";
        document.getElementById("leadAfter5").classList.add("solderAfterShow");
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
        document.getElementById('lead_smoke3').style.visibility = "visible";
        document.getElementById('lead_smoke3').style.opacity = "1";
        document.getElementById('lead_smoke3').style.transition = "all 2s ease-in-out";
        setTimeout(function() {
            document.getElementById('lead_smoke3').style.visibility = "hidden";

        }, 1000);
    }, 3000);

    //moving to fourth esc wire
    setTimeout(function() {
        document.getElementById("solder_hand").style.visibility = "visible";
        document.getElementById("solder_hand").style.top = "244px";
        document.getElementById("solder_hand").style.left = "270px";
        document.getElementById("solder_hand").style.height = "80px";
        document.getElementById("solder_hand").style.width = "120px";
        document.getElementById("solder_hand").style.zIndex = "660";
        document.getElementById("solder_hand").style.transition = "all 2s ease-in-out";


        document.getElementById("solder_lead").style.visibility = "visible";
        document.getElementById("solder_lead").style.top = "243px";
        document.getElementById("solder_lead").style.left = "387px";
        document.getElementById("solder_lead").style.height = "90px";
        document.getElementById("solder_lead").style.width = "104px";
        document.getElementById("solder_lead").style.zIndex = "650";
        document.getElementById("solder_lead").style.transition = "all 1s ease-in-out";
    }, 5000);

    setTimeout(() => {

        document.getElementById("solder_lead").style.top = "248px";
        document.getElementById("solder_lead").style.left = "383px";
        document.getElementById("leadAfter6").style.visibility = "visible";
        document.getElementById("leadAfter6").classList.add("solderAfterShow");
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
        document.getElementById('lead_smoke4').style.visibility = "visible";
        document.getElementById('lead_smoke4').style.opacity = "1";
        document.getElementById('lead_smoke4').style.transition = "all 2s ease-in-out";
        setTimeout(function() {
            document.getElementById('lead_smoke4').style.visibility = "hidden";

        }, 1000);
    }, 7000);


    //placing the third esc wire
    setTimeout(function() {
        document.getElementById("half_escWireConnected3").style.visibility = "visible";
        document.getElementById("half_escWire3").style.visibility = "visible";
        document.getElementById('half_escWireConnected3').style.opacity = 1;
        document.getElementById('half_escWireConnected3').style.transition = "all 0.1s ease-in-out";
        document.getElementById('half_escWire3').style.opacity = 0;
        document.getElementById('half_escWire3').style.transition = "all 0.1s ease-in-out";

    }, 9000);
    //moving to fifth esc wire
    setTimeout(function() {
        document.getElementById("solder_hand").style.visibility = "visible";
        document.getElementById("solder_hand").style.top = "198px";
        document.getElementById("solder_hand").style.left = "263px";
        document.getElementById("solder_hand").style.height = "80px";
        document.getElementById("solder_hand").style.width = "120px";
        document.getElementById("solder_hand").style.zIndex = "660";
        document.getElementById("solder_hand").style.transition = "all 2s ease-in-out";

        document.getElementById("solder_lead").style.visibility = "visible";
        document.getElementById("solder_lead").style.top = "204px";
        document.getElementById("solder_lead").style.left = "380px";
        document.getElementById("solder_lead").style.transform = "rotate(0deg)";
        document.getElementById("solder_lead").style.height = "90px";
        document.getElementById("solder_lead").style.width = "104px";
        document.getElementById("solder_lead").style.zIndex = "640";
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
    }, 11000);

    setTimeout(() => {

        document.getElementById("solder_lead").style.top = "207px";
        document.getElementById("solder_lead").style.left = "375px";
        document.getElementById("leadAfter7").style.visibility = "visible";
        document.getElementById("leadAfter7").classList.add("solderAfterShow");
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
        document.getElementById('lead_smoke5').style.visibility = "visible";
        document.getElementById('lead_smoke5').style.opacity = "1";
        document.getElementById('lead_smoke5').style.transition = "all 2s ease-in-out";
        setTimeout(function() {
            document.getElementById('lead_smoke5').style.visibility = "hidden";

        }, 1000);
    }, 13000);

    //moving to sixth esc wire
    setTimeout(function() {
        document.getElementById("solder_hand").style.visibility = "visible";
        document.getElementById("solder_hand").style.top = "188px";
        document.getElementById("solder_hand").style.left = "240px";
        document.getElementById("solder_hand").style.height = "80px";
        document.getElementById("solder_hand").style.width = "120px";
        document.getElementById("solder_hand").style.zIndex = "660";
        document.getElementById("solder_hand").style.transition = "all 2s ease-in-out";


        document.getElementById("solder_lead").style.visibility = "visible";
        document.getElementById("solder_lead").style.top = "188px";
        document.getElementById("solder_lead").style.left = "353px";
        document.getElementById("solder_lead").style.height = "90px";
        document.getElementById("solder_lead").style.transform = "rotate(-6deg)";

        document.getElementById("solder_lead").style.width = "104px";
        document.getElementById("solder_lead").style.zIndex = "650";
        document.getElementById("solder_lead").style.transition = "all 1s ease-in-out";
    }, 15000);

    setTimeout(() => {

        document.getElementById("solder_lead").style.top = "193px";
        document.getElementById("solder_lead").style.left = "352px";
        document.getElementById("leadAfter8").style.visibility = "visible";
        document.getElementById("leadAfter8").classList.add("solderAfterShow");
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
        document.getElementById('lead_smoke6').style.visibility = "visible";
        document.getElementById('lead_smoke6').style.opacity = "1";
        document.getElementById('lead_smoke6').style.transition = "all 2s ease-in-out";
        setTimeout(function() {
            document.getElementById('lead_smoke6').style.visibility = "hidden";

        }, 1000);
    }, 17000);

    //placing the fourth esc wire
    setTimeout(function() {
        document.getElementById("half_escWireConnected4").style.visibility = "visible";
        document.getElementById('half_escWireConnected4').style.opacity = 1;
        document.getElementById('half_escWireConnected4').style.transition = "all 0.1s ease-in-out";
        document.getElementById("half_escWire4").style.visibility = "visible";
        document.getElementById('half_escWire4').style.opacity = 0;
        document.getElementById('half_escWire4').style.transition = "all 0.1s ease-in-out";

    }, 19000);
    //moving to seventh esc wire
    setTimeout(function() {
        document.getElementById("solder_hand").style.visibility = "visible";
        document.getElementById("solder_hand").style.top = "196px";
        document.getElementById("solder_hand").style.left = "153px";
        document.getElementById("solder_hand").style.height = "80px";
        document.getElementById("solder_hand").style.width = "120px";
        document.getElementById("solder_hand").style.zIndex = "660";
        document.getElementById("solder_hand").style.transition = "all 2s ease-in-out";

        document.getElementById("solder_lead").style.visibility = "visible";
        document.getElementById("solder_lead").style.top = "195px";
        document.getElementById("solder_lead").style.left = "270px";
        document.getElementById("solder_lead").style.height = "90px";
        document.getElementById("solder_lead").style.width = "104px";
        document.getElementById("solder_lead").style.zIndex = "650";
        document.getElementById("leadAfter7").style.zIndex = "630";
        document.getElementById("leadAfter8").style.zIndex = "630";

        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
    }, 21000);

    setTimeout(() => {

        document.getElementById("solder_lead").style.top = "199.5px";
        document.getElementById("solder_lead").style.left = "266px";
        document.getElementById("leadAfter10").style.visibility = "visible";
        document.getElementById("leadAfter10").classList.add("solderAfterShow");
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
        document.getElementById('lead_smoke8').style.visibility = "visible";
        document.getElementById('lead_smoke8').style.opacity = "1";
        document.getElementById('lead_smoke8').style.transition = "all 2s ease-in-out";
        setTimeout(function() {
            document.getElementById('lead_smoke8').style.visibility = "hidden";

        }, 1000);
    }, 23000);

    //moving to eighth esc wire
    setTimeout(function() {
        document.getElementById("solder_hand").style.visibility = "visible";
        document.getElementById("solder_hand").style.top = "187px";
        document.getElementById("solder_hand").style.left = "173px";
        document.getElementById("solder_hand").style.height = "80px";
        document.getElementById("solder_hand").style.width = "120px";
        document.getElementById("solder_hand").style.zIndex = "660";
        document.getElementById("solder_hand").style.transition = "all 2s ease-in-out";

        document.getElementById("solder_lead").style.visibility = "visible";
        document.getElementById("solder_lead").style.top = "190px";
        document.getElementById("solder_lead").style.left = "290px";
        document.getElementById("solder_lead").style.height = "90px";
        document.getElementById("solder_lead").style.width = "104px";
        document.getElementById("solder_lead").style.zIndex = "650";
        document.getElementById("solder_lead").style.transition = "all 1s ease-in-out";
    }, 25000);

    setTimeout(() => {

        document.getElementById("solder_lead").style.top = "193.5px";
        document.getElementById("solder_lead").style.left = "288px";
        document.getElementById("leadAfter9").style.visibility = "visible";
        document.getElementById("leadAfter9").classList.add("solderAfterShow");
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
        document.getElementById('lead_smoke7').style.visibility = "visible";
        document.getElementById('lead_smoke7').style.opacity = "1";
        document.getElementById('lead_smoke7').style.transition = "all 2s ease-in-out";
        setTimeout(function() {
            document.getElementById('lead_smoke7').style.visibility = "hidden";
            document.getElementById("batteryToPcb").style.visibility = "visible";
            document.getElementById("placeMotorInfo").style.visibility = "visible";
            document.getElementById("placeMotorInfo").innerText = "Click on the Battery to PCB connector to place it.";
        }, 1000);
    }, 27000);

}


function moveIsometricView() {
    document.getElementById('move_isometric').style.visibility = "hidden";
    document.getElementById('batteryToPcb').onclick = "";

    myStopFunction();
    // document.getElementById('base_layer').style.top = "80px";
    // document.getElementById('base_layer').style.left = "240px";
    // document.getElementById('base_layer').src = "./Images/base_layera_v4.png";
    // document.getElementById('base_layer').style.height = "80px";
    // document.getElementById('base_layer').style.width = "180px";
    setTimeout(function() {
        for (let i = 1; i <= 4; i++) {
            document.getElementById('half_esc' + i).style.visibility = "visible";
            document.getElementById('half_esc' + i).style.opacity = 0;
            document.getElementById('half_esc' + i).style.transition = "all 0.11s ease-in-out";

            document.getElementById('esc_wire' + i).style.visibility = "visible";
            document.getElementById('esc_wire' + i).style.opacity = 0;
            document.getElementById('esc_wire' + i).style.transition = "all 0.1s ease-in-out";

            document.getElementById('half_esc_signal' + i).style.visibility = "visible";
            document.getElementById('half_esc_signal' + i).style.opacity = 0;
            document.getElementById('half_esc_signal' + i).style.transition = "all 0.1s ease-in-out";

            document.getElementById('half_escWire' + i).style.visibility = "visible";
            document.getElementById('half_escWire' + i).style.opacity = 0;
            document.getElementById('half_escWire' + i).style.transition = "all 0.1s ease-in-out";

            document.getElementById('half_escWireConnected' + i).style.visibility = "visible";
            document.getElementById('half_escWireConnected' + i).style.opacity = 0;
            document.getElementById('half_escWireConnected' + i).style.transition = "all 0.1s ease-in-out";

            document.getElementById('esc_power' + i).style.visibility = "visible";
            document.getElementById('esc_power' + i).style.opacity = 1;
            document.getElementById('esc_power' + i).style.transition = "all 0.1s ease-in-out";
            document.getElementById('esc_motor_connected1').style.zIndex = 120;

        }
        document.getElementById('border_box').style.visibility = "visible";
        document.getElementById('border_box').style.opacity = 0;
        document.getElementById('border_box').style.transition = "all 0.1s ease-in-out";

        document.getElementById('solder_hand').style.visibility = "visible";
        document.getElementById('solder_hand').style.opacity = 0;
        document.getElementById('solder_hand').style.transition = "all 0.1s ease-in-out";

        document.getElementById('solder_lead').style.visibility = "visible";
        document.getElementById('solder_lead').style.opacity = 0;
        document.getElementById('solder_lead').style.transition = "all 0.1s ease-in-out";
        document.getElementById('move_isometric').style.visibility = "hidden";


        document.getElementById('leadAfter').style.visibility = "visible";
        document.getElementById('leadAfter').style.opacity = 0;
        document.getElementById('leadAfter').style.transition = "all 0.1s ease-in-out";


        for (let i = 2; i <= 10; i++) {
            document.getElementById('leadAfter' + i).style.visibility = "visible";
            document.getElementById('leadAfter' + i).style.opacity = 0;
            document.getElementById('leadAfter' + i).style.transition = "all 0.1 ease-in-out";


        }
        // document.getElementById('batteryToPcb').style.visibility = "visible";
        // document.getElementById('batteryToPcb').style.opacity = 0;
        // document.getElementById('batteryToPcb').style.transition = "all 0.1s ease-in-out";

        document.getElementById('leadAfter11').style.visibility = "visible";
        document.getElementById('leadAfter11').style.opacity = 1;
        document.getElementById('leadAfter11').style.transition = "all 0.1s ease-in-out";

        document.getElementById('leadAfter12').style.visibility = "visible";
        document.getElementById('leadAfter12').style.opacity = 1;
        document.getElementById('leadAfter12').style.transition = "all 0.1s ease-in-out";

        document.getElementById('leadAfter13').style.visibility = "visible";
        document.getElementById('leadAfter13').style.opacity = 1;
        document.getElementById('leadAfter13').style.transition = "all 0.1s ease-in-out";

        document.getElementById('leadAfter14').style.visibility = "visible";
        document.getElementById('leadAfter14').style.opacity = 1;
        document.getElementById('leadAfter14').style.zIndex = 45;
        document.getElementById('leadAfter14').style.transition = "all 0.1s ease-in-out";

        document.getElementById('leadAfter15').style.visibility = "visible";
        document.getElementById('leadAfter15').style.opacity = 1;
        document.getElementById('leadAfter15').style.transition = "all 0.1s ease-in-out";

        document.getElementById('batteryToPcb').style = "visibility: visible; cursor: pointer; position: absolute; top: 237px; left: 171px; height: 80px; width: 180px; z-index: 90;  opacity: 1;";
        document.getElementById('batteryToPcb').style.transition = "all 0.1s ease-in-out";

        document.getElementById('connected_esc_wire1').style.visibility = "visible";
        document.getElementById('connected_esc_wire1').style.opacity = 1;
        document.getElementById('connected_esc_wire1').style.transition = "all 0.1s ease-in-out";

        document.getElementById('connected_esc_wire2').style.visibility = "visible";
        document.getElementById('connected_esc_wire2').style.opacity = 1;
        document.getElementById('connected_esc_wire2').style.transition = "all 0.1s ease-in-out";


    }, 500);
    setTimeout(function() {
        document.getElementById('base_layer').onclick = "";
        document.getElementById('base_layer').style.top = "248px";
        document.getElementById('base_layer').style.left = "210px";
        document.getElementById('base_layer').style.height = "100px";
        document.getElementById('base_layer').style.width = "260px";
        document.getElementById('base_layer').style.transform = "rotate(4deg)";
        document.getElementById('base_layer').style.zIndex = "90";
        document.getElementById('base_layer').style.opacity = 1;
        document.getElementById('base_layer').style.transition = "all 3s ease-in-out";

        // document.getElementById('all_screws_on').style.top = "200px";
        document.getElementById('all_screws_on').style.visibility = "visible";
        document.getElementById('all_screws_on').style.opacity = 1;
        document.getElementById('all_screws_on').style.transition = "all 8s ease-in-out";

        document.getElementById('armsAndTop').style.visibility = "visible";
        document.getElementById('armsAndTop').style.opacity = 1;
        document.getElementById('armsAndTop').style.transition = "all 8s ease-in-out";


        for (let i = 1; i <= 4; i++) {
            document.getElementById('esc_motor_connected' + i).style.visibility = "visible";
            document.getElementById('esc_motor_connected' + i).style.opacity = 1;
            document.getElementById('esc_motor_connected' + i).style.transition = "all 8s ease-in-out";
            if (i == 3) {
                document.getElementById('esc_fc_connected3_1').style.visibility = "visible";
                document.getElementById('esc_fc_connected3_1').style.opacity = 1;
                document.getElementById('esc_fc_connected3_1').style.transition = "all 8s ease-in-out";
                document.getElementById('esc_fc_connected3_2').style.visibility = "visible";
                document.getElementById('esc_fc_connected3_2').style.opacity = 1;
                document.getElementById('esc_fc_connected3_2').style.transition = "all 8s ease-in-out";

            } else {
                document.getElementById('esc_fc_connected' + i).style.visibility = "visible";
                document.getElementById('esc_fc_connected' + i).style.opacity = 1;
                document.getElementById('esc_fc_connected' + i).style.transition = "all 8s ease-in-out";

            }
            document.getElementById('esc_wire' + i).style.visibility = "visible";
            document.getElementById('esc_wire' + i).style.opacity = 0;
            document.getElementById('esc_wire' + i).style.transition = "all 8s ease-in-out";






            // document.getElementById('half_esc_wire' + i).style.visibility = "visible";

        }
        // document.getElementById('battery_base').style.visibility = "visible";
        // document.getElementById('battery_base').style.opacity = 1;
        // document.getElementById('battery_base').style.zIndex = 95;
        // document.getElementById('battery_base').style.transition = "all 8s ease-in-out";

        document.getElementById('placedFc').style.visibility = "visible";
        document.getElementById('placedFc').style.opacity = 1;
        document.getElementById('placedFc').style.transition = "all 8s ease-in-out";

        document.getElementById('rec_wire').style.visibility = "visible";
        document.getElementById('rec_wire').style.opacity = 1;
        document.getElementById('rec_wire').style.transition = "all 8s ease-in-out";

        document.getElementById('placedReceiver').style.visibility = "visible";
        document.getElementById('placedReceiver').style.opacity = 1;
        document.getElementById('placedReceiver').style.transition = "all 8s ease-in-out";

        document.getElementById('placedDST').style.visibility = "visible";
        document.getElementById('placedDST').style.opacity = 1;
        document.getElementById('placedDST').style.transition = "all 8s ease-in-out";

        document.getElementById('placedDSTRec').style.visibility = "visible";
        document.getElementById('placedDSTRec').style.opacity = 1;
        document.getElementById('placedDSTRec').style.transition = "all 8s ease-in-out";

        document.getElementById('screw_head').style.visibility = "visible";
        document.getElementById('screw_head').style.opacity = 1;
        document.getElementById('screw_head').style.transition = "all 8s ease-in-out";

        document.getElementById('screw_head1').style.visibility = "visible";
        document.getElementById('screw_head1').style.opacity = 1;
        document.getElementById('screw_head1').style.transition = "all 8s ease-in-out";




    }, 700);
    setTimeout(function() {
        document.getElementById("placeMotorInfo").innerText = "Let us now place the Battery on the Base Layer.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
    }, 3000);
    setTimeout(function() {

        document.getElementById("placeMotorInfo").style.visibility = "hidden";
        // document.getElementById("gps").style.visibility = "visible";
        // document.getElementById("gpsWire").style.visibility = "visible";
        document.getElementById("battery_base").style.visibility = "visible";
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 480px; top: 120px; height: 30px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        //Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);

    }, 7000);








}

function placeBatteryToPcb() {
    document.getElementById("move_isometric").style.visibility = "hidden";
    document.getElementById('batteryToPcb').onclick = "";
    document.getElementById("batteryToPcb").style.top = "250px";
    document.getElementById("batteryToPcb").style.left = "165px";
    document.getElementById("batteryToPcb").style.transition = "all 2s ease-in-out";
    setTimeout(() => {
        document.getElementById("solder_hand").style.visibility = "visible";
        document.getElementById("solder_hand").style.top = "255px";
        document.getElementById("solder_hand").style.left = "205px";
        document.getElementById("solder_hand").style.height = "80px";
        document.getElementById("solder_hand").style.width = "120px";
        document.getElementById("solder_hand").style.zIndex = "750";
        document.getElementById("solder_hand").style.transition = "all 2s ease-in-out";

        document.getElementById("solder_lead").style.visibility = "visible";
        document.getElementById("solder_lead").style.top = "257px";
        document.getElementById("solder_lead").style.left = "322px";
        document.getElementById("solder_lead").style.height = "90px";
        document.getElementById("solder_lead").style.width = "104px";
        document.getElementById("solder_lead").style.zIndex = "640";
        document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";

        setTimeout(() => {
            // soldering the first wire
            document.getElementById("leadAfter").style.visibility = "visible";
            document.getElementById("leadAfter").classList.add("solderAfterShow");
            document.getElementById("solder_lead").style.visibility = "visible";
            document.getElementById("solder_lead").style.top = "260px";
            document.getElementById("solder_lead").style.left = "319px";
            document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
            document.getElementById("lead_smoke9").style.visibility = "visible";



        }, 2000);
        setTimeout(() => {
            // Moves from first wire to the second

            document.getElementById("leadAfter").style.visibility = "visible";
            document.getElementById("leadAfter").classList.add("solderAfterShow");
            document.getElementById("solder_lead").style.top = "257px";
            document.getElementById("solder_lead").style.left = "340px";
            document.getElementById("solder_hand").style.left = "225px";
            document.getElementById("solder_hand").style.zIndex = 780;
            document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
            document.getElementById("lead_smoke9").style.visibility = "hidden";

            // visibility: visible; position: absolute; top: 260px; left: 345px; height: 90px; width: 104px; z-index: 750; transition: all 2s ease-in-out 0s;
        }, 4000);
        setTimeout(() => {
            // soldering the second wire

            document.getElementById("leadAfter2").style.visibility = "visible";
            document.getElementById("leadAfter2").classList.add("solderAfterShow");
            document.getElementById("solder_lead").style.top = "260px";
            document.getElementById("solder_lead").style.left = "338px";
            document.getElementById("solder_lead").style.transition = "all 2s ease-in-out";
            document.getElementById("lead_smoke10").style.visibility = "visible";
            setTimeout(() => {
                document.getElementById("lead_smoke10").style.visibility = "hidden";

            }, 1000);
            // visibility: visible; position: absolute; top: 266px; left: 342px; height: 90px; width: 104px; z-index: 750; transition: all 2s ease-in-out 0s;
            document.getElementById("solder_lead").style.visibility = "hidden";
            document.getElementById("solder_hand").style.visibility = "hidden";
        }, 6000);
    }, 2000);
    setTimeout(function() {

        document.getElementById("placeMotorInfo").style.visibility = "visible";
        document.getElementById("placeMotorInfo").innerText = "The connections are complete. Move back to isometric view.";
        setTimeout(function() {
            document.getElementById("placeMotorInfo").style.visibility = "hidden";

            document.getElementById('arrow1').style = "visibility: visible; position: absolute; left: 370px; top: 85px; height: 30px; z-index: 10; ";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(270deg)";
            document.getElementById("move_isometric").style.visibility = "visible";

        }, 6000);
    }, 9000);
}

function all_screws() {

    document.getElementById("singleScrew2").style.top = "208px";
    document.getElementById("singleScrew3").style.top = "209px";
    document.getElementById("singleScrew4").style.top = "215px";
    document.getElementById("singleScrew5").style.top = "199px";
    document.getElementById("singleScrew6").style.top = "206px";
    document.getElementById("singleScrew7").style.top = "207px";
    document.getElementById("singleScrew8").style.top = "213px";
    document.getElementById("singleScrew9").style.top = "260px";
    document.getElementById("singleScrew10").style.top = "270px";
    document.getElementById("singleScrew11").style.top = "256px";
    document.getElementById("singleScrew12").style.top = "263px";
    document.getElementById("singleScrew13").style.top = "271px";
    document.getElementById("singleScrew14").style.top = "262px";
    document.getElementById("singleScrew15").style.top = "262px";
    document.getElementById("singleScrew16").style.top = "256px";
    // document.getElementById("singleScrewFinal").style.visibility = "visible";



    for (let i = 2; i <= 16; i++) {
        document.getElementById("singleScrew" + i).style.visibility = "visible";
        document.getElementById("singleScrew" + i).style.transition = "all 3s ease-in-out";
        document.getElementById("singleScrew" + i).style.opacity = 0;
        // document.getElementById("singleScrew" + i).style.transition = "opacity 5s ease-in-out";
        // document.getElementById("singleScrew" + i).style.zIndex = -1;

    }
    document.getElementById("all_screws_on").style.visibility = "visible";
    document.getElementById("all_screws_on").style.opacity = 1;
    document.getElementById("all_screws_on").style.transition = "opacity 5.5s ease-in-out";

    // Author: Jaison
    document.getElementById("screwHand").style.visibility = "hidden";
    document.getElementById("all_screws").style.visibility = "hidden";

    setTimeout(function() {
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        document.getElementById("placeMotorInfo").innerText = "Select and screw the motors to the arm of the frame."
    }, 3000);


    setTimeout(function() {
        document.getElementById("placeMotorInfo").style.visibility = "hidden";
        for (let i = 1; i < 5; i++) {
            document.getElementById("motor" + i).style.visibility = "visible";
        }
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 100px; top: 320px; height: 30px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
    }, 5000);
    //  Jaison end
}

function all_screws1() {
    document.getElementById('all_screws_motor').style.visibility = "hidden";
    document.getElementById('screwHand2').style.visibility = "hidden";
    document.getElementById("singleScrew_motor2").style.top = "370px";
    document.getElementById("singleScrew_motor3").style.top = "368px";
    document.getElementById("singleScrew_motor4").style.top = "363px";
    document.getElementById("singleScrew_motor5").style.top = "170px";
    document.getElementById("singleScrew_motor6").style.top = "175px";
    document.getElementById("singleScrew_motor7").style.top = "165px";
    document.getElementById("singleScrew_motor8").style.top = "170px";

    for (let i = 2; i <= 8; i++) {
        document.getElementById("singleScrew_motor" + i).style.visibility = "visible";
        document.getElementById("singleScrew_motor" + i).style.opacity = 0;
        document.getElementById("singleScrew_motor" + i).style.transition = "all 3s ease-in-out";
        // document.getElementById("singleScrew" + i).style.transition = "opacity 5s ease-in-out";
        // document.getElementById("singleScrew" + i).style.zIndex = -1;

    }
    // document.getElementById("all_screws_on").style.visibility = "visible";
    // document.getElementById("all_screws_on").style.opacity = 1;
    // document.getElementById("all_screws_on").style.transition = "opacity 5.5s ease-in-out";
    setTimeout(function() {
        document.getElementById("placeMotorInfo").innerText = "Let us stick double sided tape to place FC.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
    }, 4000);


    setTimeout(function() {

        document.getElementById("placeMotorInfo").style.visibility = "hidden";
        // document.getElementById("gps").style.visibility = "visible";
        // document.getElementById("gpsWire").style.visibility = "visible";
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 500px; top: 120px; height: 30px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        //Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById("doubleST").style.visibility = "visible";
    }, 7000);


}

function placeDST() {
    myStopFunction();
    document.getElementById("doubleST").classList.add("moveDST");
    setTimeout(() => {
        document.getElementById("doubleST").style.visibility = "hidden";
        document.getElementById("placedDST").style.visibility = "visible";
        document.getElementById("placeMotorInfo").innerText = "Let us place the FC (Flight Controller) now.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 450px; top: 130px; height: 30px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(0deg)";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            document.getElementById("placeMotorInfo").style.visibility = "hidden";
            document.getElementById("fc").style.visibility = "visible";
        }, 2500);
    }, 2000);
}





function refresh1() {
    document.getElementById('hand').style.transformOrigin = "";
    document.getElementById('hand').style.animation = "";
    document.getElementById('hand3').style.transformOrigin = "";
    document.getElementById('hand3').style.animation = "";
    document.getElementById('hand4').style.transformOrigin = "";
    document.getElementById('hand4').style.animation = "";
    document.getElementById('hand5').style.transformOrigin = "";
    document.getElementById('hand5').style.animation = "";
    document.getElementById("arrow1").style.animation = "";


    document.getElementById('v1').innerHTML = "";
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

function mount_frame() {
    //remove apparatus images
    document.getElementById('top').style.visibility = "hidden";
    document.getElementById('base').style.visibility = "hidden";
    document.getElementById('arm1').style.visibility = "hidden";
    document.getElementById('arm2').style.visibility = "hidden";
    document.getElementById('arm3').style.visibility = "hidden";
    document.getElementById('arm4').style.visibility = "hidden";
    document.getElementById('motor').style.visibility = "hidden";
    document.getElementById('flight_controller').style.visibility = "hidden";
    document.getElementById('electronic_sc').style.visibility = "hidden";
    document.getElementById('lipo_battery').style.visibility = "hidden";
    document.getElementById('receiver1').style.visibility = "hidden";
    // document.getElementById('receiverWire').style.visibility = "hidden";
    document.getElementById('transmitter1').style.visibility = "hidden";

    //remove apparatus buttons
    document.getElementById('quad').style.visibility = "hidden";
    document.getElementById('motors').style.visibility = "hidden";
    document.getElementById('flight_c').style.visibility = "hidden";
    document.getElementById('esc').style.visibility = "hidden";
    document.getElementById('lipo').style.visibility = "hidden";
    document.getElementById('tran_rec').style.visibility = "hidden";


    // document.getElementById('trial').style = "visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
    document.getElementById('trial').innerHTML = "";
    // Positioning the arrow
    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 280px; top: 110px; height: 30px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    myInt = setInterval(function() {
        animatearrow();
    }, 500);
    document.getElementById('a2').style.visibility = "visible";
    document.getElementById('arms').style.visibility = "visible";
    document.getElementById('next').style.visibility = "hidden";
    document.getElementById('a2').onclick = function() { step1(); };
}