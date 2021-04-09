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
        document.getElementById("fc").style.visibility = "hidden";
        document.getElementById("placedFc").style.visibility = "visible";
        document.getElementById("placeMotorInfo").innerText = "Let us stick double sided tape to place Receiver.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 500px; top: 130px; height: 30px; z-index: 10;";

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
    }, 2000);
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
        document.getElementById("rec_wire_uc").style.visibility = "visible";

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
    myStopFunction();
    document.getElementById("esc_arm" + id).style.visibility = "visible";
    document.getElementById("esc_arm" + id).style.top = top_px;
    document.getElementById("esc_arm" + id).style.left = left_px;
    document.getElementById("esc_arm" + id).style.height = height_px;
    document.getElementById("esc_arm" + id).style.width = width_px;
    document.getElementById("esc_arm" + id).style.transition = "all 1.5s ease-in-out";
    // Author: Jaison
    setTimeout(() => {
        console.log("hiding the hovering esc")
            // document.getElementById("esc_arm" + id).style.visibility = "hidden";
        document.getElementById("esc_arm" + id).style.opacity = 0;
        document.getElementById("esc_arm" + id).style.transition = "all 0.01s ease-in-out";
        document.getElementById("esc_arm_placed" + id).style.visibility = "visible";
        document.getElementById("esc_arm_placed" + id).style.opacity = 1;
        document.getElementById("esc_arm_placed" + id).style.transition = "opacity 0.01s ease-in-out";
        document.getElementById("esc_wire" + id).style.visibility = "visible";
        document.getElementById("esc_signal" + id).style.visibility = "visible";

    }, 2000);
    // Jaison End
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

        // setTimeout(function() {
        //     document.getElementById("placeMotorInfo").innerText = "Let us attach a Base Layer to the frame in order to place the Battery.";
        //     document.getElementById("placeMotorInfo").style.visibility = "visible";
        //     setTimeout(function() {
        //         document.getElementById("placeMotorInfo").style.visibility = "hidden";
        //         document.getElementById('base_layer').style.visibility = "visible";

        //         document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 480px; top: 150px; height: 30px; z-index: 10;";

        //         document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        //         // Code for IE9
        //         document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        //         // Standard syntax
        //         document.getElementById("arrow1").style.transform = "rotate(0deg)";

        //         myInt = setInterval(function() {
        //             animatearrow();
        //         }, 500);

        //     }, 2500);
        // }, 1500);




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
        document.getElementById("esc_arm" + n).style.visibility = "hidden";
        connectionsDone++;
        document.getElementById("esc_motor_connected" + n).style.visibility = "visible";
        // document.getElementById("esc_motor_connected" + n).style.opacity = 1;
        // document.getElementById("esc_motor_connected" + n).style.transition = "opacity 1s ease-in-out";
        document.getElementById('esc_wire1').style.left = "250px";
        document.getElementById('esc_signal1').style.left = "255px";
    }
    if (n == 2) {
        document.getElementById("placedMotor" + n).style.visibility = "hidden";
        document.getElementById("esc_arm_placed" + n).style.visibility = "hidden";
        document.getElementById("esc_arm" + n).style.visibility = "hidden";
        connectionsDone++;
        document.getElementById("esc_motor_connected" + n).style.visibility = "visible";
        // document.getElementById("esc_motor_connected" + n).style.opacity = 1;
        // document.getElementById("esc_motor_connected" + n).style.transition = "opacity 1s ease-in-out";
    }
    if (n == 3) {
        document.getElementById("placedMotor4").style.visibility = "hidden";
        document.getElementById("esc_arm_placed3").style.visibility = "hidden";
        document.getElementById("esc_arm3").style.visibility = "hidden";
        connectionsDone++;
        document.getElementById("esc_motor_connected3").style.visibility = "visible";
        // document.getElementById("esc_motor_connected3").style.opacity = 1;
        // document.getElementById("esc_motor_connected3").style.transition = "opacity 1s ease-in-out";
        document.getElementById('esc_wire3').style.left = "380px";
        document.getElementById('esc_signal3').style.left = "350px";
        document.getElementById('esc_wire3').style.top = "197px";
        document.getElementById('esc_signal3').style.top = "192px";

    }
    if (n == 4) {
        document.getElementById("placedMotor3").style.visibility = "hidden";
        document.getElementById("esc_arm_placed4").style.visibility = "hidden";
        document.getElementById("esc_arm4").style.visibility = "hidden";
        document.getElementById("esc_motor_connected4").style.visibility = "visible";
        connectionsDone++
        // document.getElementById("esc_motor_connected4").style.opacity = 1;
        // document.getElementById("esc_motor_connected4").style.transition = "opacity 1s ease-in-out";
        // document.getElementById('esc_wire4').style.left = "360px";
        // document.getElementById('esc_signal4').style.left = "327px";
        // document.getElementById('esc_wire4').style.top = "206px";
        // document.getElementById('esc_signal4').style.top = "205px";
    }
    if (connectionsDone >= 4) {

        setTimeout(function() {
            myStopFunction();
            document.getElementById("placeMotorInfo").innerText = "Click on the signal wire of the ESC to connect the ESCs to the Flight Controller.";
            document.getElementById("placeMotorInfo").style.visibility = "visible";

            // document.getElementById("placeMotorInfo").style.visibility = "hidden";
            // document.getElementById('base_layer').style.visibility = "visible";

            document.getElementById('arrow1').style = "visibility: visible; position: absolute; left: 350px; top: 340px; height: 30px; width: 30px; z-index: 150; ";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(90deg)";

            document.getElementById('esc_signal1').onclick = function() { connectEscFc(1); };
            document.getElementById('esc_signal2').onclick = function() { connectEscFc(2); };
            document.getElementById('esc_signal3').onclick = function() { connectEscFc(3); };
            document.getElementById('esc_signal4').onclick = function() { connectEscFc(4); };

            myInt = setInterval(function() {
                animatearrow();
            }, 500);




        }, 2500);
    }




    // }
}

function connectEscFc(id) {
    myStopFunction();
    document.getElementById('esc_fc_connected' + id).style.visibility = "visible";
    document.getElementById('esc_signal' + id).style.visibility = "hidden";

}

function placeSingleScrew_base() {
    myStopFunction();
    document.getElementById("singleScrew_2").classList.add("moveSingleScrew3");

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
    document.getElementById('screwHand3').style.visibility = "hidden";
    document.getElementById("singleScrew_base2").style.top = "320px";
    document.getElementById("singleScrew_base3").style.top = "300px";
    document.getElementById("singleScrew_base4").style.top = "308px";


    for (let i = 2; i <= 4; i++) {
        document.getElementById("singleScrew_base" + i).style.visibility = "visible";
        // document.getElementById("singleScrew_base" + i).style.opacity = 0;
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
        document.getElementById("placeMotorInfo").innerText = "Let us now place the Battery on the Base Layer.";
        document.getElementById("placeMotorInfo").style.visibility = "visible";
    }, 4000);


    setTimeout(function() {

        document.getElementById("placeMotorInfo").style.visibility = "hidden";
        // document.getElementById("gps").style.visibility = "visible";
        // document.getElementById("gpsWire").style.visibility = "visible";
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 480px; top: 120px; height: 30px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        //Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById("battery_base").style.visibility = "visible";
    }, 7000);

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
        document.getElementById("placeMotorInfo").innerText = "Select the screw and screw the base layer as shown to the end of the arm stand.";
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
    document.getElementById('battery_base').style.visibility = "visible";
    document.getElementById('battery_base').style.top = "250px";
    document.getElementById('battery_base').style.left = "200px";
    document.getElementById('battery_base').style.height = "70px";
    document.getElementById('battery_base').style.width = "200px";
    document.getElementById('battery_base').style.transition = "top 3s ease-in-out";

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