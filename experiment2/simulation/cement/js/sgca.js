//on click of next button
var mpointer = 0;
var repeat = 0;
var a, p, lastp, n, b, q, flag = 0,
    avg, average;
var new_select = 0;
var values = [
    [125.3, 188.3, 394.7, 347.7, 63.00, 407.5, 0.79, 3.111],
    [125.3, 188.9, 395.1, 347.7, 63.6, 407.5, 0.79, 3.101],
    [125.3, 189.6, 395.6, 347.7, 64.3, 407.5, 0.79, 3.097],
    [125.3, 189.8, 396.1, 347.7, 64.5, 407.5, 0.79, 3.165],
    [125.3, 190, 396.5, 347.7, 64.7, 407.5, 0.79, 3.215]
];

p = Math.floor(Math.random() * (4));
var m_id;
var p_id;


function navNext() {

    for (temp = 0; temp <= 3; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    if (simsubscreennum == 3) {
        simsubscreennum = 0;
        new_select = 1;
        console.log("new motor select value:" + new_select);
    }
    simsubscreennum += 1;
    console.log("simsubcreen number:" + simsubscreennum);
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
        document.getElementById('select_motor').style.visibility = "hidden";
        refresh1();
        document.getElementById('nextButton').style.visibility = "hidden";
        document.getElementById("select_mp").style.visibility = "hidden";
        document.getElementById("all_comp").style.visibility = "hidden";
        document.getElementById("prop_fan").style.visibility = "hidden";
        document.getElementById("dialog_box").style.visibility = "hidden";
        document.getElementById("thrust_value").style.visibility = "hidden";
        document.getElementById("arrow1").style.visibility = "hidden";
        document.getElementById('rpm_indicator').style.visibility = "hidden";



        for (let i = 0; i <= 4; i++) {
            document.getElementById("throttle" + i).style.visibility = "hidden";
        }
        document.getElementById('0%').style.visibility = "hidden";
        document.getElementById('40%').style.visibility = "hidden";
        document.getElementById('60%').style.visibility = "hidden";
        document.getElementById('80%').style.visibility = "hidden";
        document.getElementById('100%').style.visibility = "hidden";

        document.getElementById('generate_table').style.visibility = "hidden";
        document.getElementById("choose_motor").style.visibility = "hidden";
        document.getElementById("throttle_message").style.visibility = "hidden";
        document.getElementById("thrust_table").style.visibility = "hidden";


        if (new_select == 1) {

            select();
            document.getElementById('select_mp').style.visibility = "hidden";
            document.getElementById('table_iso').style.visibility = "hidden";
            document.getElementById('thrust').style.visibility = "hidden";
            document.getElementById('esc').style.visibility = "hidden";
            document.getElementById('dc').style.visibility = "hidden";
            document.getElementById('knob').style.visibility = "hidden";
            document.getElementById('motor').style.visibility = "hidden";
            document.getElementById('desc_button').style.visibility = "hidden";
            document.getElementById('desc_message').style.visibility = "hidden";


        }
        document.getElementById('table_iso').style.visibility = "visible";
        document.getElementById('thrust').style.visibility = "visible";
        document.getElementById('esc').style.visibility = "visible";
        document.getElementById('dc').style.visibility = "visible";
        document.getElementById('knob').style.visibility = "visible";
        document.getElementById('motor').style.visibility = "visible";



    } else if (simsubscreennum == 2) {
        document.getElementById("placement_info").innerText = "";
        document.getElementById("connection_explanation").innerText = "Click on first ESC wire to start the connection.";

        if (new_select == 1) {
            arr = [];
            totalCount = 0;
            countOfEscAndMotor = 0;
            clickOnEscWire1 = 0;
            clickOnEscWire2 = 0;
            clickOnEscWire3 = 0;
            clickOnMotorWire1 = 0;
            clickOnMotorWire2 = 0;
            clickOnMotorWire3 = 0;
            document.getElementById("motorWire1").style.visibility = "visible";
            document.getElementById("motorWire2").style.visibility = "visible";
            document.getElementById("motorWire3").style.visibility = "visible";
            document.getElementById("motorWire1").style.cursor = "default";
            document.getElementById("motorWire2").style.cursor = "default";
            document.getElementById("motorWire3").style.cursor = "default";
            document.getElementById("escWire1").style.cursor = "default";
            document.getElementById("escWire2").style.cursor = "default";
            document.getElementById("escWire3").style.cursor = "default";
            document.getElementById("esc_dc_connector").style.visibility = "visible";
            document.getElementById("esc_thr_connector").style.visibility = "visible";
            document.getElementById("updateClockAnti").innerText = "";
            document.getElementById("updateClockAnti").classList.remove("dangerClockAnti", "successClockAnti");
        }

        myIntForEscWires = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 260px; height: 25px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";


        document.getElementById('equip').style.visibility = "hidden";

        document.getElementById('select_motor').style.visibility = "hidden";
        for (let i = 1; i <= 8; i++) {
            document.getElementById('select_prop' + i).style.visibility = "hidden";
        }
        document.getElementById('motor_with_prop').style.visibility = "hidden";
        document.getElementById('new_motor').style.visibility = "hidden";

        document.getElementById('rpm_indicator').style.visibility = "hidden";


        // document.getElementById("nextButton").style.visibility = "visible";
        // myInt = setInterval(function(){ animateNewarrow(); }, 300);

    } else if (simsubscreennum == 3) {
        myStopFunction();
        // ===========================================================  HIDING THE PREVIOUS CANVAS 
        for (let hide = 1; hide < 4; hide++) {
            document.getElementById("motorWire" + hide).style.visibility = "hidden";
        }
        // hiding the connecting wires.
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                document.getElementById(i + "to" + j).style.visibility = "hidden";
            }
        }

        document.getElementById("esc_dc_connected").style.visibility = "hidden";
        document.getElementById("esc_thr_knob").style.visibility = "hidden";
        document.getElementById("esc_thr_connected").style.visibility = "hidden";
        document.getElementById("esc_dc_connector").style.visibility = "hidden";
        document.getElementById("esc_thr_connector").style.visibility = "hidden";


        myIntForBattery = setInterval(function() {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 320px; top: 150px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(270deg)";
        document.getElementById('prop_fan').style.visibility = "visible";
        document.getElementById('all_comp').style.visibility = "visible";
        document.getElementById('switch_battery').style.visibility = "visible";
        console.log(m_id);
        console.log(p_id);



        // document.getElementById('nob3-1').onclick=function() { step3(); };	
    } else if (simsubscreennum == 4) {
        //stopping the blink.
        myStopFunction();
        clearInterval(myIntForBattery);
        document.getElementById('arrow1').style.visibility = "hidden";

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


        document.getElementById('nob4-1').onclick = function() { step4(); };
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
        document.getElementById('k5').style.visibility = "hidden";
        document.getElementById('a9').style.visibility = "hidden";
        document.getElementById('a10').style.visibility = "hidden";

        document.getElementById('can6-1').innerHTML = "Empty weight of flask with stopper (W<sub>1</sub>)=" + values[p][0] + " g";
        document.getElementById('can6-2').innerHTML = "Weight of flask + cement (W<sub>2</sub>) = " + values[p][1] + " g";
        document.getElementById('can6-3').innerHTML = "Weight of flask + cement + kerosene (W<sub>3</sub>) =" + values[p][2] + " g";
        document.getElementById('can6-4').innerHTML = "Weight of flask + kerosene (W<sub>4</sub>) = " + values[p][3] + " g";
        document.getElementById('can6-5').innerHTML = "Weight of flask+water (W<sub>5</sub>) =" + values[p][4] + " g";
        document.getElementById('can6-6').innerHTML = "Specific gravity of kerosene =" + values[p][6];
        calculateSpecificGravity();

        if (repeat > 1) {
            calculateSpecificGravity2();
        }
        if (repeat < 2 && repeat > 0) {

            flag = 1;
            simsubscreennum = 1;

            document.getElementById('k5').style.visibility = "hidden";
            document.getElementById('a9').style.visibility = "hidden";
            document.getElementById('a10').style.visibility = "hidden";
            document.getElementById('k5').style.visibility = "hidden";
            document.getElementById('a9').style.visibility = "hidden";
            document.getElementById('a10').style.visibility = "hidden";
            document.getElementById('k5').style.visibility = "hidden";
            document.getElementById('a9').style.visibility = "hidden";
            document.getElementById('a10').style.visibility = "hidden";
            document.getElementById('k5').style.visibility = "hidden";
            document.getElementById('a9').style.visibility = "hidden";
            document.getElementById('a10').style.visibility = "hidden";

        }
    } else if (simsubscreennum == 7) {
        document.getElementById("trial").style.visibility = "hidden";
        document.getElementById("p6-2").style.visibility = "hidden";
        document.getElementById("l6-2").style.visibility = "hidden";
        document.getElementById("r1").style.visibility = "hidden";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("output2").style.visibility = "hidden";
        document.getElementById("7-1").innerHTML = values[lastp][7];
        document.getElementById("7-3").innerHTML = values[p][7];
        document.getElementById("check3").onclick = function() {
            if (!document.getElementById("avg").value || !document.getElementById("avg").value != " ") {
                alert("Enter the value to proceed ");
            } else {
                avg = document.getElementById("avg").value;
                average = (values[p][7] + values[lastp][7]) / 2;
                if (Math.round(avg) == Math.round(average)) {
                    document.getElementById("check3").style.visibility = "hidden";
                    document.getElementById("rw").style = "color:#32CD32; font-size:22px; position:absolute; left:510px; top:118px;";
                    document.getElementById("rw").innerHTML = "&#10004;";
                    document.getElementById("rw").style.visibility = "visible";
                    document.getElementById("inferenceDiv").style.visibility = "visible";
                } else {
                    document.getElementById("rw").style = "color:red; font-size:22px; position:absolute; left:510px; top:118px;";
                    document.getElementById("rw").innerHTML = "&#10008;";
                    document.getElementById("rw").style.visibility = "visible";
                }
            }

        }
    }
}

function step1() {
    myStopFunction();
    // document.getElementById('a1').style.visibility="hidden";
    // document.getElementById('a2').style.cssText ="visibility=visible; top:0px; position: absolute; left: 170px; cursor:default; height: 200px; width: 400px;";
    var element = document.getElementById('all_top');
    element.style.visibility = 'visible';
    element.style.opacity = 1;
    element.style.transition = "opacity 5s ease-in";
    element.style.WebkitTransition = "opacity 5s ease-in-out";
    element.style.msTransition = "opacity 5s ease-in-out";


    var table1 = document.getElementById('equip');
    table1.style.opacity = 0;
    table1.style.transition = "opacity 5s ease-out";
    // document.getElementById('new_motor').style.visibility = "hidden";

    // document.getElementById("esc_iso").style.visibility = 'hidden';
    // document.getElementById("power_iso").style.visibility = 'hidden';
    // document.getElementById("knob_iso").style.visibility = 'hidden';
    // document.getElementById("table_iso").style.visibility = 'visible';
    // document.getElementById("thrust_iso").style.visibility = 'hidden';




    // document.getElementById("air-info").style.visibility = 'hidden';
    // document.getElementById("arr-air").style.visibility = 'visible';
    // document.getElementById("arr-air").style.animation = "fadeIn 2.5s forwards";
    // document.getElementById("change-airfoilButton").textContent = "Learn more";
    // document.getElementById("change-airfoilButton").style = "width: 15%";
    // document.getElementById('a3').style.cssText = "visibility=visible; position: absolute; left:80px; top: 320px; height: 170px; width: 470px;";
    // document.getElementById("a3").style.animation = "fadeIn 2.5s forwards";
    // var air = document.getElementById("change-airfoilButton");
    // air.style.visibility = 'visible';
    // document.getElementById('a4').style.visibility="visible";

}


function step2() {
    myStopFunction();
    document.getElementById('nob').style.visibility = "hidden";
    document.getElementById('nob1').style.visibility = "visible";
    document.getElementById("nob1").onclick = "";
    setTimeout(function() {
        document.getElementById('hand').style.visibility = "visible";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
        document.getElementById('hand').onclick = function() { step21(); };
    }, 1200);
}


function step21() {
    myStopFunction();

    document.getElementById('hand').style.transformOrigin = "100% 80%";
    document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
    setTimeout(function() {
        document.getElementById('cem2-4').style.visibility = "visible";
        document.getElementById('cem2-1').style.visibility = "visible";
        document.getElementById('cem2-1').style.animation = "water-5 1.5s 1 reverse";
        document.getElementById('cem2-2').style.visibility = "visible";
        document.getElementById('cem2-2').style.animation = "water-5 1.8s 1 forwards";
    }, 500);

    setTimeout(function() {
        document.getElementById('cem2-4').style.visibility = "hidden";
        document.getElementById('cem2-1').style.visibility = "hidden";
        document.getElementById('hand').style.visibility = "hidden";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";

        document.getElementById('nob1').onclick = function() { step22(); };

    }, 1800);
}


function step22() {
    myStopFunction();
    document.getElementById('nob1').style.visibility = "hidden";
    document.getElementById('nob2').style.visibility = "visible";
    document.getElementById('cflask').style.visibility = "visible";
    setTimeout(function() {
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('cflask').onclick = function() { step23(); };

    }, 1300);
}

function step23() {
    myStopFunction();
    document.getElementById('flask').style.visibility = "hidden";
    document.getElementById('cflask').style.visibility = "hidden";

    document.getElementById('nob2').style.visibility = "hidden";
    document.getElementById('cem2-2').style.visibility = "hidden";
    setTimeout(function() {
        document.getElementById('a5').style.visibility = "visible";
        document.getElementById('a6').style.visibility = "visible";
        document.getElementById('cem2-3').style.visibility = "visible";
    }, 500);
    setTimeout(function() {

        document.getElementById('can2').innerHTML = "Weight of flask + cement (W<sub>2</sub>) = " + values[p][1] + " g";
        if (repeat == 5) {
            document.getElementById('v2').innerHTML = +values[p][1] + ".00g";
        } else {
            document.getElementById('v2').innerHTML = +values[p][1] + "g";
        }
        document.getElementById("nextButton").style.visibility = "visible";
    }, 1200);
}



function step3() {
    myStopFunction();
    document.getElementById('nob3-1').style.visibility = "hidden";
    document.getElementById('nob3-2').style.visibility = "visible";
    document.getElementById("nob3-2").onclick = "";
    setTimeout(function() {
        document.getElementById('hand3').style.visibility = "visible";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
        document.getElementById('hand3').onclick = function() { step31(); };
    }, 1200);
}


function step31() {
    myStopFunction();

    document.getElementById('hand3').style.transformOrigin = "100% 80%";
    document.getElementById('hand3').style.animation = "valveturn-4 1.5s forwards ";

    setTimeout(function() {
        document.getElementById('kero3-4').style.visibility = "visible";

        document.getElementById('ker3-1').style.visibility = "visible";
        document.getElementById('ker3-1').style.animation = "water-5 1.5s 1 reverse";
        document.getElementById('ker3-2').style.visibility = "visible";
        document.getElementById('ker3-2').style.animation = "water-5 4.5s 1 forwards";
    }, 250);
    setTimeout(function() {
        document.getElementById('kero3-4').style.visibility = "hidden";
        document.getElementById('ker3-1').style.visibility = "hidden";
        document.getElementById('ker3-2').style.visibility = "visible";
        document.getElementById('hand3').style.visibility = "hidden";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('nob3-2').onclick = function() { step32(); };
    }, 1600);
}


function step32() {
    myStopFunction();
    document.getElementById('nob3-2').style.visibility = "hidden";
    document.getElementById('nob3-3').style.visibility = "visible";
    document.getElementById('cflask3').style.visibility = "visible";
    setTimeout(function() {
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('cflask3').onclick = function() { step33(); };

    }, 1300);
}

function step33() {
    myStopFunction();
    document.getElementById('cflask3').style.visibility = "hidden";

    document.getElementById('flask3').style.visibility = "hidden";
    document.getElementById('nob3-3').style.visibility = "hidden";
    document.getElementById('ker3-2').style.visibility = "hidden";
    document.getElementById('cem3-1').style.visibility = "hidden";

    setTimeout(function() {
        document.getElementById('k1').style.visibility = "visible";
        document.getElementById('k2').style.visibility = "visible";
        document.getElementById('a11').style.visibility = "visible";
        document.getElementById('a12').style.visibility = "visible";
    }, 500);
    setTimeout(function() {

        //document.getElementById('nextButton').style.visibility="visible";


        // document.getElementById('can3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) = "+values[p][2]  +"g";
        document.getElementById('v3').innerHTML = +values[p][2] + "g";
        if (repeat == 1) {
            validateAnswer(1, 2, "50px", "100px");
        } else {
            validateAnswer(2, 0, "50px", "100px");
        }

    }, 1200);
}

function step4() {
    myStopFunction();
    document.getElementById('nob4-1').style.visibility = "hidden";
    document.getElementById('nob4-2').style.visibility = "visible";
    document.getElementById("nob4-2").onclick = "";
    setTimeout(function() {
        document.getElementById('hand4').style.visibility = "visible";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
        document.getElementById('hand4').onclick = function() { step41(); };
    }, 1200);
}


function step41() {
    myStopFunction();
    document.getElementById('hand4').style.transformOrigin = "100% 80%";
    // document.getElementById('hand4').style.transform= rotate(90deg);
    document.getElementById('hand4').style.animation = "valveturn-4 1.5s forwards ";
    setTimeout(function() {
        document.getElementById('kero4-3').style.visibility = "visible";
        document.getElementById('kero4-1').style.visibility = "visible";
        document.getElementById('kero4-1').style.animation = "water-5 1.5s 1 reverse";
        document.getElementById('kero4-2').style.visibility = "visible";
        document.getElementById('kero4-2').style.animation = "water-5 1.8s 1 forwards";
    }, 500);

    setTimeout(function() {
        document.getElementById('kero4-3').style.visibility = "hidden";
        document.getElementById('kero4-1').style.visibility = "hidden";
        document.getElementById('hand4').style.visibility = "hidden";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('nob4-2').onclick = function() { step42(); };

    }, 1800);
}

function step42() {
    myStopFunction();
    document.getElementById('nob4-2').style.visibility = "hidden";
    document.getElementById('nob4-3').style.visibility = "visible";
    document.getElementById('cflask4').style.visibility = "visible";
    setTimeout(function() {
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('cflask4').onclick = function() { step43(); };

    }, 1300);
}

function step43() {
    myStopFunction();
    document.getElementById('flask4').style.visibility = "hidden";
    document.getElementById('cflask4').style.visibility = "hidden";

    document.getElementById('nob4-3').style.visibility = "hidden";
    document.getElementById('kero4-2').style.visibility = "hidden";
    setTimeout(function() {
        document.getElementById('k3').style.visibility = "visible";
        document.getElementById('a7').style.visibility = "visible";
        document.getElementById('a8').style.visibility = "visible";

    }, 500);
    setTimeout(function() {

        document.getElementById('nextButton').style.visibility = "visible";

        document.getElementById('can4').innerHTML = "Weight of flask + kerosene(W<sub>4</sub>) = " + values[p][3] + "g";
        document.getElementById('v4').innerHTML = +values[p][3] + "g";

    }, 1200);
}

function step5() {
    myStopFunction();
    document.getElementById('nob5-1').style.visibility = "hidden";
    document.getElementById('nob5-2').style.visibility = "visible";
    document.getElementById("nob1").onclick = "";
    setTimeout(function() {
        document.getElementById('hand5').style.visibility = "visible";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
        document.getElementById('hand5').onclick = function() { step51(); };
    }, 1200);
}


function step51() {
    myStopFunction();

    document.getElementById('hand5').style.transformOrigin = "100% 80%";
    document.getElementById('hand5').style.animation = "valveturn-4 1.5s forwards ";
    setTimeout(function() {
        document.getElementById('wtr2').style.visibility = "visible";
        document.getElementById('wtr').style.visibility = "visible";
        document.getElementById('wtr').style.animation = "water-5 1.8s 1 forwards";
    }, 500);

    setTimeout(function() {
        document.getElementById('wtr2').style.visibility = "hidden";
        document.getElementById('wtr3').style.visibility = "hidden";
        document.getElementById('hand5').style.visibility = "hidden";
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('nob5-2').onclick = function() { step52(); };

    }, 1800);
}

function step52() {
    myStopFunction();
    document.getElementById('nob5-2').style.visibility = "hidden";
    document.getElementById('nob5-3').style.visibility = "visible";
    document.getElementById('cflask5').style.visibility = "visible";
    setTimeout(function() {
        myInt = setInterval(function() { animatearrow(); }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('cflask5').onclick = function() { step53(); };

    }, 1300);
}

function step53() {
    myStopFunction();
    document.getElementById('flask5').style.visibility = "hidden";
    document.getElementById('cflask5').style.visibility = "hidden";

    document.getElementById('nob5-3').style.visibility = "hidden";
    document.getElementById('wtr').style.visibility = "hidden";
    setTimeout(function() {
        document.getElementById('k5').style.visibility = "visible";
        document.getElementById('a9').style.visibility = "visible";
        document.getElementById('a10').style.visibility = "visible";
    }, 500);
    setTimeout(function() {
        setTimeout(function() {
            if (repeat == 1) {
                document.getElementById('nextButton').style.visibility = "visible";
            }
            if (repeat == 2) {
                validateAnswer(3, 3, "50px", "100px");
            }
        }, 500);
        document.getElementById('can5').innerHTML = "Weight of flask+water (W<sub>5</sub>)= " + values[p][4] + "g";
        if (repeat > 1) {
            document.getElementById('v5').innerHTML = +values[p][4] + "g";
        } else {
            document.getElementById('v5').innerHTML = +values[p][4] + " g";
        }
    }, 1200);
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

    // document.getElementById('can1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)	=";
    // document.getElementById('can2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
    // document.getElementById('can3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";

    // document.getElementById('can4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
    // document.getElementById('can5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";
    // document.getElementById('can6-1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)=";

    // document.getElementById('can6-2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
    // document.getElementById('can6-3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";
    // document.getElementById('can6-4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
    // document.getElementById('can6-5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";

    // document.getElementById('v1').innerHTML = "";
    document.getElementById('v2').innerHTML = "";
    document.getElementById('v3').innerHTML = "";
    document.getElementById('v4').innerHTML = "";
    document.getElementById('v5').innerHTML = "";


}

function refresh2() {
    document.getElementById('output').value = "";
}

function calculateSpecificGravity() {
    document.getElementById("form").onclick = function() {
        document.getElementById("formula").style.visibility = "visible";
        document.getElementById("r1").style.visibility = "hidden";
        document.getElementById("w1").style.visibility = "hidden";
    }

    document.getElementById("check").onclick = function() {
        document.getElementById("formula").style.visibility = "hidden";
        if (!document.getElementById("output").value || !document.getElementById("output").value != " ") {
            alert("Enter the value to proceed ");
        } else {
            n = document.getElementById("output").value;
            console.log(values[p][7]);
            if (Math.round(n) == Math.round(values[p][7])) {
                document.getElementById("check").style.visibility = "hidden";
                document.getElementById("form").style.visibility = "hidden";
                document.getElementById("r1").style.visibility = "visible";
                document.getElementById("result").style.visibility = "hidden";
                document.getElementById("w1").style.visibility = "hidden";
                // document.getElementById("p6-1").innerHTML="Specific gravity of cement = "+values[p][7];
                // document.getElementById("p6-1").style.visibility="visible";
                document.getElementById("nextButton").style.visibility = "visible";
            } else {
                document.getElementById("result").style.visibility = "visible";
                document.getElementById("w1").style.visibility = "visible";
            }
        }
        document.getElementById("result").onclick = function() {
            document.getElementById("check").style.visibility = "hidden";
            document.getElementById("result").style.visibility = "hidden";
            document.getElementById("r1").style.visibility = "hidden";
            document.getElementById("w1").style.visibility = "hidden";
            document.getElementById("form").style.visibility = "hidden";
            document.getElementById("formula").style.visibility = "hidden";
            document.getElementById("6-1").style.visibility = "hidden";
            document.getElementById("p6-1").innerHTML = "Specific gravity of cement = " + values[p][7];
            document.getElementById("p6-1").style.visibility = "visible";
            document.getElementById("nextButton").style.visibility = "visible";
        }
    }
}

function calculateSpecificGravity2() {
    document.getElementById("l6-1").style.visibility = "hidden";
    document.getElementById("6-2").style.visibility = "visible";
    document.getElementById("l6-2").style.visibility = "visible";
    document.getElementById("form2").onclick = function() {
        document.getElementById("formula2").style.visibility = "visible";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("w2").style.visibility = "hidden";
    }

    document.getElementById("check2").onclick = function() {
        document.getElementById("formula2").style.visibility = "hidden";
        if (!document.getElementById("output2").value || !document.getElementById("output2").value != " ") {
            alert("Enter the value to proceed ");
        } else {
            n2 = document.getElementById("output2").value;
            console.log(values[p][7]);
            if (Math.round(n2) == Math.round(values[p][7])) {
                document.getElementById("check2").style.visibility = "hidden";
                document.getElementById("form2").style.visibility = "hidden";
                document.getElementById("r2").style.visibility = "visible";
                document.getElementById("result2").style.visibility = "hidden";
                document.getElementById("w2").style.visibility = "hidden";
                document.getElementById("nextButton").style.visibility = "visible";
            } else {
                document.getElementById("result2").style.visibility = "visible";
                document.getElementById("w2").style.visibility = "visible";
            }
        }
        document.getElementById("result2").onclick = function() {
            document.getElementById("l6-2").style.visibility = "hidden";
            document.getElementById("check2").style.visibility = "hidden";
            document.getElementById("result2").style.visibility = "hidden";
            document.getElementById("w2").style.visibility = "hidden";
            document.getElementById("form2").style.visibility = "hidden";
            document.getElementById("formula2").style.visibility = "hidden";
            document.getElementById("6-2").style.visibility = "hidden";
            document.getElementById("p6-2").innerHTML = "Specific gravity of cement = " + values[p][7];
            document.getElementById("p6-2").style.visibility = "visible";
            document.getElementById("nextButton").style.visibility = "visible";
        }
    }
}

function checkInference() {
    document.getElementById("ans").style.visibility = "visible";
    if ($("input[name='inf']:checked").val() == 2) {
        document.getElementById("ans").innerHTML = "Correct answer!";
    } else {
        document.getElementById("ans").innerHTML = "Wrong! Answer is 2.8 - 3.15";
    }

    setTimeout(function() {
        document.getElementById("inference").style.visibility = "hidden";
        if (average >= 2.8 && average <= 3.15) {
            document.getElementById("infAns").innerHTML = "According to IS 10262, suggested range of specific gravity of cement for marine application is 2.8 - 3.15. The Specific gravity obtained for given cement sample is " + average + ". So the test result is in range.";
        } else {
            document.getElementById("infAns").innerHTML = "According to IS 10262, suggested range of specific gravity of cement for marine application is 2.8 - 3.15. The Specific gravity obtained for given cement sample is " + average + ". So the test result is not in range.";
        }
        $("#infAns").fadeIn(750);
    }, 1000);
}






// ADD
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


// EXPERIMENT 2
function animatearrowForEscDcConnection() {
    if (document.getElementById('arrow1').style.visibility == "hidden")
        document.getElementById('arrow1').style.visibility = "visible";
    else
        document.getElementById('arrow1').style.visibility = "hidden";
}

function exchangeTheWires() {
    document.getElementById("empty_image").style.visibility = "hidden";
    clearInterval(myIntForWireEx);
    setTimeout(() => {
        // hide the anti clock wise ones.
        document.getElementById(2 + "to" + firstVal).style.visibility = "hidden";
        document.getElementById(3 + "to" + secondVal).style.visibility = "hidden";
        // show the updated images.
        document.getElementById(2 + "to" + secondVal).style.visibility = "visible";
        document.getElementById(3 + "to" + firstVal).style.visibility = "visible";
        // randomValue = 1;
        document.getElementById("updateClockAnti").textContent = "It is now rotating in clock-wise direction.(Updated) ";
        document.getElementById("updateClockAnti").classList.add("successClockAnti");
        startEscThrotConnection();
    }, 1000);
}

function startEscThrotConnection() {
    document.getElementById("esc_thr_connector").style.cursor = "pointer";
    //  Starting animation of arrow for Esc-Throttle connection.
    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 415px; top: 410px; height: 20px; z-index: 10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
    myIntForEscThrot = setInterval(function() {
        animatearrowForEscDcConnection();
    }, 500);
}

function doEscThrotConnection() {
    clearInterval(myIntForEscThrot);
    document.getElementById("esc_thr_connector").style.visibility = "hidden";
    document.getElementById("esc_thr_connected").style.visibility = "visible";
    document.getElementById("esc_thr_knob").style.visibility = "visible";
    startEscDcConnection();
}

function startEscDcConnection() {
    document.getElementById("esc_dc_connector").style.cursor = "pointer";
    //  Starting animation of arrow for Esc-DC connection.
    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 400px; top: 200px; height: 20px; z-index: 10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
    myIntForEscDc = setInterval(function() {
        animatearrowForEscDcConnection();
    }, 500);
}

function doEscDcConnection() {
    clearInterval(myIntForEscDc);
    document.getElementById('arrow1').style = "visibility:hidden";
    document.getElementById("esc_dc_connector").style.visibility = "hidden";
    document.getElementById("esc_dc_connected").style.visibility = "visible";
    document.getElementById("nextButton").style.visibility = "visible";
}
var arr = [];
var totalCount = 0;
var countOfEscAndMotor = 0;
var clickOnEscWire1 = 0;

var firstVal;
var secondVal;

//    -----------------------  FIRST WIRE CHOSEN  ---------------------------------------------
function makeConnection1() {
    // ============================           THIS ARROW WAS FOR TESTING OF ARROW POSITIONING
    // document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 400px; top: 200px; height: 30px; z-index: 10;";
    // document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
    document.getElementById("connection_explanation").innerText = "Choose any of the motor wire to make connection.";
    clearInterval(myIntForEscWires);
    document.getElementById("arrow1").style.visibility = "hidden";
    clickOnEscWire1 += 1;
    if (clickOnEscWire1 == 1) {
        totalCount += 1;
        countOfEscAndMotor += 1;
        console.log("Initial click");
        console.log("Count of Esc and motor together in esc wire 1 is: (afterupdate) " + countOfEscAndMotor);
        for (var i = 1; i < 4; i++) {
            document.getElementById("motorWire" + i).style.cursor = "pointer";
        }
        document.getElementById("escWire1").style.cursor = "none";
        document.getElementById("escWire1").setAttribute('disabled', 'true');

        // Arrow blinking showing where to click
        myIntForMotorWires = setInterval(function() {
            animatearrowForEscDcConnection();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 300px; height: 25px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";

        // Blinking the wires
        blinkWires = setInterval(() => {
            for (var i = 1; i < 4; i++) {
                if (document.getElementById("motorWire" + i).style.opacity == 100)
                    document.getElementById("motorWire" + i).style.opacity = 0;
                else
                    document.getElementById("motorWire" + i).style.opacity = 100;
            }
        }, 500);
    } else {
        alert("You have already chosen this, move forward!");
    }
}

//  --------------------------- SECOND WIRE CHOSEN -----------------------------------
clickOnEscWire2 = 0;

function makeConnection2() {
    clearInterval(myIntForEscWires);
    document.getElementById("arrow1").style.visibility = "hidden";
    console.log("Count of Esc and motor together in esc wire 2 is: (beforeupdate) " + countOfEscAndMotor);
    if (countOfEscAndMotor == 1 || countOfEscAndMotor == 3) {
        alert("You need to choose motor wire now!");
    } else if (countOfEscAndMotor == 0) {
        alert("You need to choose the first wire initially!")
    } else if (countOfEscAndMotor == 4) {
        alert("You need to choose next esc wire!")
    } else {
        document.getElementById("connection_explanation").innerText = "Click on any one of the available motor wire to do the second connection.";
        countOfEscAndMotor += 1;
        totalCount += 1;
        clickOnEscWire2 += 1;
        if (clickOnEscWire2 == 1) {
            console.log("Second wire click");
            arr.forEach(elem => {
                for (var i = 1; i < 4; i++) {
                    if (i !== elem) {
                        document.getElementById("motorWire" + i).style.cursor = "pointer";
                    }
                }
            })
            document.getElementById("escWire2").style.cursor = "none";
            document.getElementById("escWire2").setAttribute('disabled', 'true');
            // Arrow blinking showing where to click
            myIntForMotorWires = setInterval(function() {
                animatearrowForEscDcConnection();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 300px; height: 25px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            // Blink wires
            blinkWires = setInterval(() => {
                arr.forEach(element => {
                    for (let i = 1; i < 4; i++) {
                        if (i !== element) {
                            if (document.getElementById("motorWire" + i).style.opacity == 100)
                                document.getElementById("motorWire" + i).style.opacity = 0;
                            else
                                document.getElementById("motorWire" + i).style.opacity = 100;
                        }

                    }
                });

            }, 500);
        } else {
            alert("You have already chosen this, move forward!");
        }
    }
}


clickOnEscWire3 = 0;

function makeConnection3() {
    clearInterval(myIntForEscWires);
    document.getElementById("arrow1").style.visibility = "hidden";
    var flagForEsc3 = 0;
    if (countOfEscAndMotor == 1 || countOfEscAndMotor == 3 || countOfEscAndMotor == 5) {
        alert("You need to choose motor wire now!");
    } else if (countOfEscAndMotor == 0) {
        alert("You need to choose the first wire initially!")
    } else if (countOfEscAndMotor == 2) {
        alert("You need to select the second wire now!")
    } else {
        document.getElementById("connection_explanation").innerText = "Click on the last available motor wire to complete the connection.";
        totalCount += 1;
        countOfEscAndMotor += 1;
        console.log("Count of Esc and motor together is: " + countOfEscAndMotor);
        clickOnEscWire3 += 1;
        if (clickOnEscWire3 == 1) {
            console.log("Third wire clicked");
            var newArr = [1, 2, 3];

            var absent = newArr.filter(e => !arr.includes(e));
            console.log("The missing element is: " + absent);

            document.getElementById("motorWire" + absent).style.cursor = "pointer";

            document.getElementById("escWire3").style.cursor = "none";
            console.log("Array on click of third: ", arr);
            // Arrow blinking showing where to click
            myIntForMotorWires = setInterval(function() {
                animatearrowForEscDcConnection();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 300px; height: 25px; z-index: 10;";

            document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
            // Code for IE9
            document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
            // Standard syntax
            document.getElementById("arrow1").style.transform = "rotate(180deg)";
            //  Blink wires
            blinkWires = setInterval(() => {
                arr.forEach(eeee => {
                    for (let i = 1; i < 4; i++) {
                        if (i !== eeee) {
                            if (document.getElementById("motorWire" + i).style.opacity == 100)
                                document.getElementById("motorWire" + i).style.opacity = 0;
                            else
                                document.getElementById("motorWire" + i).style.opacity = 100;
                        }
                    }
                });

            }, 500);
        } else {
            alert("You have already chosen this, move forward!(STEP 3)");
        }
    }
}

// -------------------------------- MOTOR WIRES


var clickOnMotorWire1 = 0;

function motorConnection1() {
    console.log("Total count is: " + totalCount);
    if (totalCount == 1) {
        if (countOfEscAndMotor == 2) {
            console.log("Value of Esc and motor tog is: " + countOfEscAndMotor);
            alert("You need to choose the esc wire first!")
        } else {
            countOfEscAndMotor += 1;
            clickOnMotorWire1 += 1;
            if (clickOnMotorWire1 == 1) {
                document.getElementById("connection_explanation").innerText = "Choose the second ESC wire to start with next connection.";
                clearInterval(blinkWires);
                document.getElementById("motorWire1").style.cursor = "not-allowed"; // disable this forever. 
                document.getElementById("motorWire2").style.cursor = "not-allowed";
                document.getElementById("motorWire3").style.cursor = "not-allowed";
                console.log("The first wire has been chosen");
                // using total count for this sake. Need to make the second wire enable to click if this wire has been chosen in first step.
                document.getElementById("escWire2").style.cursor = "pointer";
                arr.push(1);
                console.log(arr);
                clearInterval(myIntForMotorWires);
                document.getElementById("arrow1").style.visibility = "hidden";
                // VISIBLE THE IMAGE OF 1to1
                // Starting blinking for ESC wires when the motor wire has been chosen!
                myIntForEscWires = setInterval(function() {
                    animatearrow();
                }, 500);
                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 260px; height: 25px; z-index: 10;";

                document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                // Code for IE9
                document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                // Standard syntax
                document.getElementById("arrow1").style.transform = "rotate(180deg)";

                document.getElementById("1to1").style.visibility = "visible";
                console.log("The 1to1 image made visible!");
                for (var i = 1; i < 4; i++) {
                    document.getElementById("motorWire" + i).style.opacity = 100;
                }

            } else {
                alert("You have already chosen this!");
            }
        }
    }
    var flag1 = 0;
    if (totalCount == 2) {
        // checking if this wire was chosen in step 1 connection. 
        arr.forEach(elem => {
            if (elem == 1) {
                alert("This wire has been connected already, please choose other!");
                flag1 = 1;
            }
        });
        if (flag1 == 0) {
            if (countOfEscAndMotor == 4) {
                alert("You need to choose ESC first. (From 1st wire of motor after 2 selections of esc)")
            } else {
                console.log("Count of Esc and motor together in motor wire 1 is: (beforeupdate) " + countOfEscAndMotor);
                countOfEscAndMotor += 1;
                clickOnMotorWire1 += 1;
                console.log("Count of Esc and motor together in motor wire 1 is: (afterupdate) " + countOfEscAndMotor);
                console.log("ESC and motor tog is: " + countOfEscAndMotor);
                if (clickOnMotorWire1 == 1) {
                    document.getElementById("connection_explanation").innerText = "Click on the third ESC wire to do the last connection.";
                    clearInterval(blinkWires);
                    document.getElementById("motorWire1").style.cursor = "not-allowed"; // disable this forever. 
                    document.getElementById("motorWire2").style.cursor = "not-allowed";
                    document.getElementById("motorWire3").style.cursor = "not-allowed";
                    console.log("The first wire has been chosen in second step");
                    document.getElementById("escWire3").style.cursor = "pointer";
                    arr.push(1);
                    console.log(arr);
                    // Stopping motor blink
                    clearInterval(myIntForMotorWires);
                    document.getElementById("arrow1").style.visibility = "hidden";
                    // VISIBLE THE IMAGE OF 2to1
                    document.getElementById("2to1").style.visibility = "visible";
                    // Starting blinking for ESC wires when the motor wire has been chosen!
                    myIntForEscWires = setInterval(function() {
                        animatearrow();
                    }, 500);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 260px; height: 25px; z-index: 10;";

                    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                    // Code for IE9
                    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                    // Standard syntax
                    document.getElementById("arrow1").style.transform = "rotate(180deg)";

                    console.log("The 2to1 image made visible!");
                    for (var i = 1; i < 4; i++) {
                        document.getElementById("motorWire" + i).style.opacity = 100;
                    }
                } else {
                    alert("You have already chosen(step 2)-wire 1");
                }
            }

        }
    }
    if (totalCount == 3) {
        // checking if this wire was chosen in step 1 or step 2 connection. 
        arr.forEach(elem => {
            if (elem == 1) {
                alert("This wire has been connected already, please choose other!");
                flag1 = 1;
            }
            if (flag1 == 0) {
                //  console.log("This is from 1st wire but at step3. Value of clickOnMotorWire1 before an update is: "+ clickOnMotorWire1);
                clickOnMotorWire1 += 1;

                // console.log("This is from 1st wire but at step3. Value of clickOnMotorWire1 is: "+ clickOnMotorWire1);
                if (clickOnMotorWire1 == 1) {
                    countOfEscAndMotor += 1;
                    document.getElementById("connection_explanation").innerText = "Well, you have completed the circuit.";
                    clearInterval(blinkWires);
                    document.getElementById("motorWire1").style.cursor = "not-allowed"; // disable this forever. 
                    document.getElementById("motorWire2").style.cursor = "not-allowed";
                    document.getElementById("motorWire3").style.cursor = "not-allowed";
                    console.log("The first wire has been chosen in third step");
                    // document.getElementById("escWire2").style.cursor = "pointer";
                    arr.push(1);
                    console.log(arr);
                    clearInterval(myIntForMotorWires);
                    document.getElementById("arrow1").style.visibility = "hidden";
                    for (var i = 1; i < 4; i++) {
                        document.getElementById("motorWire" + i).style.opacity = 100;
                    }

                    console.log("The final value of ALL Together at step3 of 1st wire is: " + countOfEscAndMotor);
                    // VISIBLE THE IMAGE OF 3to1
                    document.getElementById("3to1").style.visibility = "visible";
                    console.log("The 3to1 image made visible!");
                    if (countOfEscAndMotor == 6) {
                        console.log("Im inside a condition for 6, inside third of 1st motor wire!");
                        randomValue = Math.floor(Math.random() * 2);
                        console.log("RANDOM VALUE FROM 1st wire is: " + randomValue);
                        if (randomValue == 0) {
                            document.getElementById("updateClockAnti").textContent = "It is rotating anti-clock wise. Need to change the direction of the connection.";
                            document.getElementById("updateClockAnti").classList.add("dangerClockAnti");
                            firstVal = arr[1];
                            secondVal = arr[2];
                            document.getElementById("empty_image").style.visibility = "visible";
                            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 220px; top: 280px; height: 30px; z-index: 10;";
                            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
                            myIntForWireEx = setInterval(function() {
                                animatearrowForEscDcConnection();
                            }, 500);

                        } else {
                            // randomValue =1 means it is success
                            document.getElementById("updateClockAnti").textContent = "It is rotating clock wise. Success! ";
                            document.getElementById("updateClockAnti").classList.add("successClockAnti");
                            startEscThrotConnection();
                        }
                    }
                } else {
                    alert("You have already chosen(step 3)-wire 1");
                }

            }
        });

    }
}
var clickOnMotorWire2 = 0;

function motorConnection2() {
    console.log("Total count is: " + totalCount);

    if (countOfEscAndMotor == 2 || countOfEscAndMotor == 4 || countOfEscAndMotor == 0) {
        alert("You need to choose esc wire initially!")
    } else {
        if (totalCount == 1) {
            if (countOfEscAndMotor == 2) {
                alert("You need to choose the esc wire first!")
            } else {
                console.log("Count of Esc and motor together in motor wire 2 is: (beforeupdate) " + countOfEscAndMotor);

                clickOnMotorWire2 += 1;
                console.log("Count of Esc and motor together in motor wire 2 is: (afterUpdate) " + countOfEscAndMotor);
                if (clickOnMotorWire2 == 1) {
                    countOfEscAndMotor += 1;
                    document.getElementById("connection_explanation").innerText = "Click on the second ESC wire to do the next connection.";
                    clearInterval(blinkWires);
                    document.getElementById("motorWire1").style.cursor = "not-allowed";
                    document.getElementById("motorWire2").style.cursor = "not-allowed"; //disable this forever
                    document.getElementById("motorWire3").style.cursor = "not-allowed";
                    console.log("The second wire has been chosen");
                    document.getElementById("escWire2").style.cursor = "pointer";
                    arr.push(2);
                    console.log(arr);
                    clearInterval(myIntForMotorWires);
                    document.getElementById("arrow1").style.visibility = "hidden";
                    // Starting blinking for ESC wires when the motor wire has been chosen!
                    myIntForEscWires = setInterval(function() {
                        animatearrow();
                    }, 500);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 260px; height: 25px; z-index: 10;";

                    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                    // Code for IE9
                    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                    // Standard syntax
                    document.getElementById("arrow1").style.transform = "rotate(180deg)";

                    // VISIBLE THE IMAGE OF 1to2
                    document.getElementById("1to2").style.visibility = "visible";
                    console.log("The 1to2 image made visible!");


                    for (var i = 1; i < 4; i++) {
                        document.getElementById("motorWire" + i).style.opacity = 100;
                    }
                } else {
                    alert("You have already chosen this!");
                }
            }
        }
        var flag2 = 0;
        if (totalCount == 2) {
            arr.forEach(elem => {
                if (elem == 2) {
                    alert("This wire has been connected already, please choose other!")
                    flag2 = 1;
                }
            });
            if (flag2 == 0) {

                clickOnMotorWire2 += 1;
                if (clickOnMotorWire2 == 1) {
                    countOfEscAndMotor += 1;
                    document.getElementById("connection_explanation").innerText = "Click on the third ESC wire to do the last connection.";
                    clearInterval(blinkWires);
                    document.getElementById("motorWire1").style.cursor = "not-allowed"; // disable this forever. 
                    document.getElementById("motorWire2").style.cursor = "not-allowed";
                    document.getElementById("motorWire3").style.cursor = "not-allowed";
                    console.log("The first wire has been chosen in second step");
                    document.getElementById("escWire3").style.cursor = "pointer";
                    arr.push(2);
                    console.log(arr);
                    clearInterval(myIntForMotorWires);
                    document.getElementById("arrow1").style.visibility = "hidden";
                    // VISIBLE THE IMAGE OF 2to2
                    document.getElementById("2to2").style.visibility = "visible";
                    console.log("The 2to2 image made visible!");

                    // Starting blinking for ESC wires when the motor wire has been chosen!
                    myIntForEscWires = setInterval(function() {
                        animatearrow();
                    }, 500);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 260px; height: 25px; z-index: 10;";

                    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                    // Code for IE9
                    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                    // Standard syntax
                    document.getElementById("arrow1").style.transform = "rotate(180deg)";

                    for (var i = 1; i < 4; i++) {
                        document.getElementById("motorWire" + i).style.opacity = 100;
                    }
                } else {
                    alert("You have already chosen(step 2)-wire 2");
                }

            }
        }
        if (totalCount == 3) {
            arr.forEach(elem => {
                if (elem == 2) {
                    alert("This wire has been connected already, please choose other!");
                    flag2 = 1;
                }

            });
            if (flag2 == 0) {

                clickOnMotorWire2 += 1;
                if (clickOnMotorWire2 == 1) {
                    countOfEscAndMotor += 1;
                    document.getElementById("connection_explanation").innerText = "Well, you have completed the circuit.";
                    clearInterval(blinkWires);
                    document.getElementById("motorWire1").style.cursor = "not-allowed"; // disable this forever. 
                    document.getElementById("motorWire2").style.cursor = "not-allowed";
                    document.getElementById("motorWire3").style.cursor = "not-allowed";
                    console.log("The second wire has been chosen in second step");
                    // document.getElementById("escWire3").style.cursor = "pointer";
                    arr.push(2);
                    clearInterval(myIntForMotorWires);
                    document.getElementById("arrow1").style.visibility = "hidden";
                    for (var i = 1; i < 4; i++) {
                        document.getElementById("motorWire" + i).style.opacity = 100;
                    }
                    console.log(arr);
                    console.log("The final value of ALL Together at step3 of 2nd wire is: " + countOfEscAndMotor);
                    // VISIBLE THE IMAGE OF 3to2
                    document.getElementById("3to2").style.visibility = "visible";
                    console.log("The 3to2 image made visible!");
                    if (countOfEscAndMotor == 6) {
                        console.log("Im inside a condition for 6, inside third of 2nd motor wire!");
                        // randomValue = Math.floor(Math.random() * 2);
                        randomValue = 0;
                        console.log("RANDOM VALUE FROM 2nd wire is: " + randomValue);
                        if (randomValue == 0) {
                            document.getElementById("updateClockAnti").textContent = "It is rotating anti-clock wise. Need to change the direction of the connection.";
                            document.getElementById("updateClockAnti").classList.add("dangerClockAnti");
                            firstVal = arr[1];
                            secondVal = arr[2];
                            document.getElementById("empty_image").style.visibility = "visible";
                            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 220px; top: 280px; height: 30px; z-index: 10;";
                            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
                            myIntForWireEx = setInterval(function() {
                                animatearrowForEscDcConnection();
                            }, 500);

                        } else {
                            // randomValue =1 means it is success
                            document.getElementById("updateClockAnti").textContent = "It is rotating clock wise. Success! ";
                            document.getElementById("updateClockAnti").classList.add("successClockAnti");
                            startEscThrotConnection();
                        }
                    }
                } else {
                    alert("You have already chosen(step 2)-wire 2");
                }

            }

        }
    }
}
var clickOnMotorWire3 = 0;

function motorConnection3() {
    console.log("Total count is: " + totalCount);
    if (countOfEscAndMotor == 2 || countOfEscAndMotor == 4) {
        alert("You need to choose ESC wire initially!")
    } else {
        if (totalCount == 1) {
            if (countOfEscAndMotor == 2) {
                alert("You need to choose the esc wire first!")
            } else {
                clickOnMotorWire3 += 1;
                if (clickOnMotorWire3 == 1) {
                    countOfEscAndMotor += 1;
                    document.getElementById("connection_explanation").innerText = "Click on the second ESC wire to do the next connection.";
                    clearInterval(blinkWires);
                    document.getElementById("motorWire1").style.cursor = "not-allowed";
                    document.getElementById("motorWire2").style.cursor = "not-allowed";
                    document.getElementById("motorWire3").style.cursor = "not-allowed"; // disable this forever
                    console.log("The third wire has been chosen");
                    document.getElementById("escWire2").style.cursor = "pointer";
                    arr.push(3);
                    console.log(arr);
                    clearInterval(myIntForMotorWires);
                    document.getElementById("arrow1").style.visibility = "hidden";
                    for (var i = 1; i < 4; i++) {
                        document.getElementById("motorWire" + i).style.opacity = 100;
                    }
                    // VISIBLE THE IMAGE OF 1to3
                    document.getElementById("1to3").style.visibility = "visible";

                    // Starting blinking for ESC wires when the motor wire has been chosen!
                    myIntForEscWires = setInterval(function() {
                        animatearrow();
                    }, 500);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 260px; height: 25px; z-index: 10;";

                    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                    // Code for IE9
                    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                    // Standard syntax
                    document.getElementById("arrow1").style.transform = "rotate(180deg)";

                    console.log("The 1to3 image made visible!");
                } else {
                    alert("You have already chosen this!");
                }
            }
        }
        var flag3 = 0;
        if (totalCount == 2) {
            arr.forEach(elem => {
                if (elem == 3) {
                    alert("This wire has been connected already, please choose other!");
                    flag3 = 1;
                }
            });
            if (flag3 == 0) {
                console.log("The value of motor and esc together is: " + countOfEscAndMotor);
                clickOnMotorWire3 += 1;
                if (clickOnMotorWire3 == 1) {
                    countOfEscAndMotor += 1;
                    document.getElementById("connection_explanation").innerText = "Click on the third ESC wire to do the last connection.";
                    clearInterval(blinkWires);
                    document.getElementById("motorWire1").style.cursor = "not-allowed";
                    document.getElementById("motorWire2").style.cursor = "not-allowed";
                    document.getElementById("motorWire3").style.cursor = "not-allowed";
                    console.log("The first wire has been chosen in second step");
                    document.getElementById("escWire3").style.cursor = "pointer";
                    arr.push(3);
                    console.log(arr);
                    clearInterval(myIntForMotorWires);
                    document.getElementById("arrow1").style.visibility = "hidden";
                    for (var i = 1; i < 4; i++) {
                        document.getElementById("motorWire" + i).style.opacity = 100;
                    }
                    // VISIBLE THE IMAGE OF 2to3
                    document.getElementById("2to3").style.visibility = "visible";
                    console.log("The 2to3 image made visible!");

                    // Starting blinking for ESC wires when the motor wire has been chosen!
                    myIntForEscWires = setInterval(function() {
                        animatearrow();
                    }, 500);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 115px; top: 260px; height: 25px; z-index: 10;";

                    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                    // Code for IE9
                    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                    // Standard syntax
                    document.getElementById("arrow1").style.transform = "rotate(180deg)";


                } else {
                    alert("You have already chosen(step 2)-wire 3");
                }

            }
        }
        if (totalCount == 3) {
            arr.forEach(elem => {
                if (elem == 3) {
                    alert("This wire has been connected already, please choose other!");
                    flag3 = 1;
                }
            });
            if (flag3 == 0) {
                clickOnMotorWire3 += 1;
                if (clickOnMotorWire3 == 1) {
                    countOfEscAndMotor += 1;
                    document.getElementById("connection_explanation").innerText = "Well, you have completed the circuit.";
                    clearInterval(blinkWires);
                    document.getElementById("motorWire1").style.cursor = "not-allowed";
                    document.getElementById("motorWire2").style.cursor = "not-allowed";
                    document.getElementById("motorWire3").style.cursor = "not-allowed";
                    console.log("The first wire has been chosen in second step");
                    // document.getElementById("escWire3").style.cursor = "pointer";
                    arr.push(3);
                    console.log(arr);
                    clearInterval(myIntForMotorWires);
                    document.getElementById("arrow1").style.visibility = "hidden";
                    for (var i = 1; i < 4; i++) {
                        document.getElementById("motorWire" + i).style.opacity = 100;
                    }
                    console.log("The final value of ALL Together at step3 of 3rd wire is: " + countOfEscAndMotor);
                    // VISIBLE THE IMAGE OF 3to3
                    document.getElementById("3to3").style.visibility = "visible";
                    console.log("The 3to3 image made visible!");
                    if (countOfEscAndMotor == 6) {
                        console.log("Im inside a condition for 6, inside third of 3rd motor wire!");
                        randomValue = Math.floor(Math.random() * 2);
                        console.log("RANDOM VALUE FROM 3rd wire is: " + randomValue);
                        if (randomValue == 0) {
                            document.getElementById("updateClockAnti").textContent = "It is rotating anti-clock wise. Need to change the direction of the connection.";
                            document.getElementById("updateClockAnti").classList.add("dangerClockAnti");
                            firstVal = arr[1];
                            secondVal = arr[2];

                            document.getElementById("empty_image").style.visibility = "visible";
                            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 220px; top: 280px; height: 30px; z-index: 10;";
                            document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
                            myIntForWireEx = setInterval(function() {
                                animatearrowForEscDcConnection();
                            }, 500);


                        } else {
                            // randomValue =1 means it is success
                            document.getElementById("updateClockAnti").textContent = "It is rotating clock wise. Success! ";
                            document.getElementById("updateClockAnti").classList.add("successClockAnti");
                            startEscThrotConnection();
                        }
                    }
                } else {
                    alert("You have already chosen(step 3)-wire 2");
                }
            }
        }
    }
}
//-------------- SHOW THE APPARATUS----------
function appear(id_name, top_px) {
    var part = document.getElementById(id_name);
    part.style.visibility = "visible";
    part.style.top = top_px;
    part.style.transition = "top 1s ease-in-out";
    if (id_name == 'motor_iso') {
        document.getElementById("select_mp").style.visibility = "visible";
    }


}


//---------SELECT MOTOR AND PROPELLER function--------
function select() {
    document.getElementById('all_comp').style.visibility = "hidden";
    document.getElementById('prop_fan').style.visibility = "hidden";
    document.getElementById('throttle_message').style.visibility = "hidden";
    for (let i = 0; i <= 4; i++) {
        document.getElementById('throttle' + i).style.visibility = "hidden";

    }
    document.getElementById('thrust_value').style.visibility = "hidden";
    document.getElementById('generate_table').style.visibility = "hidden";
    document.getElementById('choose_motor').style.visibility = "hidden";
    document.getElementById('dialog_box').style.visibility = "hidden";
    document.getElementById('0%').style.visibility = "hidden";
    document.getElementById('40%').style.visibility = "hidden";
    document.getElementById('60%').style.visibility = "hidden";
    document.getElementById('80%').style.visibility = "hidden";
    document.getElementById('100%').style.visibility = "hidden";
    document.getElementById('motor_prop_desc').style.visibility = "hidden";

    document.getElementById('thrust').style.visibility = "hidden";
    document.getElementById('dc').style.visibility = "hidden";
    document.getElementById('esc').style.visibility = "hidden";
    document.getElementById('knob').style.visibility = "hidden";
    document.getElementById('motor').style.visibility = "hidden";
    document.getElementById('table_iso').style.visibility = "hidden";
    document.getElementById('power_iso').style.visibility = "hidden";
    document.getElementById('knob_iso').style.visibility = "hidden";
    document.getElementById('thrust_iso').style.visibility = "hidden";
    document.getElementById('esc_iso').style.visibility = "hidden";
    document.getElementById('desc_button').style.visibility = "hidden";
    document.getElementById('motor_iso').style.visibility = "hidden";
    document.getElementById('select_mp').style.visibility = "hidden";
    if (new_select == 1) {
        document.getElementById('thrust').style.visibility = "hidden";
        document.getElementById('dc').style.visibility = "hidden";
        document.getElementById('esc').style.visibility = "hidden";
        document.getElementById('knob').style.visibility = "hidden";
        document.getElementById('motor').style.visibility = "hidden";
        document.getElementById('thrust').style.pointerEvents = "none";
        document.getElementById('dc').style.pointerEvents = "none";
        document.getElementById('desc_button').style.pointerEvents = "none";
        document.getElementById('esc').style.pointerEvents = "none";
        document.getElementById('knob').style.pointerEvents = "none";
        document.getElementById('motor').style.pointerEvents = "none";
        document.getElementById('table_iso').style.visibility = "hidden";
        document.getElementById('power_iso').style.visibility = "hidden";
        document.getElementById('knob_iso').style.visibility = "hidden";
        document.getElementById('thrust_iso').style.visibility = "hidden";
        document.getElementById('esc_iso').style.visibility = "hidden";
        document.getElementById('desc_button').style.visibility = "hidden";
        document.getElementById('motor_iso').style.visibility = "hidden";

        document.getElementById('thrust').style.opacity = 0;
        document.getElementById('dc').style.opacity = 0;
        document.getElementById('esc').style.opacity = 0;
        document.getElementById('knob').style.opacity = 0;
        document.getElementById('motor').style.opacity = 0;

        document.getElementById('thrust').onclick = "";
        document.getElementById('dc').onclick = "";
        document.getElementById('esc').onclick = "";
        document.getElementById('knob').onclick = "";
        document.getElementById('motor').onclick = "";

        document.getElementById('thrust').style.cursor = "none";
        document.getElementById('dc').style.cursor = "none";
        document.getElementById('esc').style.cursor = "none";
        document.getElementById('knob').style.cursor = "none";
        document.getElementById('motor').style.cursor = "none";
        document.getElementById('table_iso').style.cursor = "none";
        document.getElementById('table_iso').style.opacity = 0;
        document.getElementById('table_iso').style.visibility = "hidden";
        document.getElementById('desc_message').style.visibility = "hidden";
        document.getElementById('select_mp').style.visibility = "hidden";



    }

    document.getElementById('equip').style.visibility = "visible";
    document.getElementById('equip').style.top = "220px";
    document.getElementById('select_motor').style.visibility = "visible";
    document.getElementById('rpm_indicator').style.visibility = "hidden";

    document.getElementById('pumptext').innerHTML = "Select a motor and then a propeller to place on the thrustmeter.";
    document.getElementById("nextButton").style.visibility = "hidden";
}

// -------------------------------SELECT THE MOTOR BUTTON-------------
function motor(prop_name) {
    for (let i = 1; i <= 8; i++) {
        document.getElementById('select_prop' + i).style.visibility = "hidden";
    }
    var m_name = document.getElementById('select_prop' + prop_name);
    m_name.style.visibility = "visible";
    var p_name = document.getElementById('p_' + prop_name)
    p_name.style.visibility = "visible";
    p_name.style.opacity = 1;
    document.getElementById('select_motor').style.visibility = "visible";
    document.getElementById('thrust').style.visibility = "hidden";
    document.getElementById('dc').style.visibility = "hidden";
    document.getElementById('esc').style.visibility = "hidden";
    document.getElementById('knob').style.visibility = "hidden";
    document.getElementById('motor').style.visibility = "hidden";
    document.getElementById('table_iso').style.visibility = "hidden";
    document.getElementById('power_iso').style.visibility = "hidden";
    document.getElementById('knob_iso').style.visibility = "hidden";
    document.getElementById('thrust_iso').style.visibility = "hidden";
    document.getElementById('esc_iso').style.visibility = "hidden";
    document.getElementById("motor_iso").style.visibility = "hidden";
    document.getElementById('motor_with_prop').style.visibility = "hidden";
    document.getElementById('motor_prop_desc').style.visibility = "visible";
    document.getElementById('motor_prop_desc').style.top = "80px";
    //FOR THE CHOOSE MOTOR AGAIN PART
    if (new_select == 1) {
        document.getElementById('select_mp').style.visibility = "hidden";
        document.getElementById('desc_button').style.opacity = 0;
        document.getElementById('thrust').style.visibility = "hidden";
        document.getElementById('dc').style.visibility = "hidden";
        document.getElementById('esc').style.visibility = "hidden";
        document.getElementById('knob').style.visibility = "hidden";
        document.getElementById('motor').style.visibility = "hidden";
        document.getElementById('table_iso').style.visibility = "hidden";
        document.getElementById('power_iso').style.visibility = "hidden";
        document.getElementById('knob_iso').style.visibility = "hidden";
        document.getElementById('thrust_iso').style.visibility = "hidden";
        document.getElementById('esc_iso').style.visibility = "hidden";
        document.getElementById("motor_iso").style.visibility = "hidden";
        document.getElementById('motor_with_prop').style.visibility = "hidden";
        document.getElementById('desc_message').style.visibility = "hidden";
        document.getElementById('desc_button').style.visibility = "hidden";

    }
    document.getElementById('desc_button').style.opacity = 0;
    document.getElementById('desc_message').style.visibility = "hidden";

    document.getElementById('desc_button').onclick = "";
    document.getElementById('desc_button').onmouseover = "";

    document.getElementById('desc_button').style.visibility = "hidden";

    console.log('hello');

    var img_m = document.getElementById('m_1');
    img_m.style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "hidden";
    document.getElementById('rpm_indicator').style.visibility = "hidden";

    //MOTOR DESCRIPTION FOR DIFFERENT MOTORS
    if (prop_name == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN1005_KV90</strong><br>MN indicates the motor's Model number and 1005 is the series number. 90 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.";
    if (prop_name == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV380</strong><br>MN indicates the motor's Model number and 3508 is the series number. 380 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.";
    if (prop_name == '3')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV580</strong><br>MN indicates the motor's Model number and 3508 is the series number. 580 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.";
    if (prop_name == '4')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV700</strong><br>MN indicates the motor's Model number and 3508 is the series number. 700 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.";
    if (prop_name == '5')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U11 II KV120</strong><br>T-MOTOR is the Company name, U11 II indicates the motor's Model number. 120 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.";
    if (prop_name == '6')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV85</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 85 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.";
    if (prop_name == '7')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV150</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 150 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.";
    if (prop_name == '8')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV190</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 190 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.";


}

// -------------------ON SELECT PROPELLER BUTTON-----------
function prop(motor_id, prop_id) {
    document.getElementById('motor_prop_desc').style.visibility = "visible";
    document.getElementById('motor_with_prop').style.visibility = "visible";
    document.getElementById('m_1').style.visibility = "hidden";
    document.getElementById('pumptext').innerHTML = "Click on the motor with the chosen propeller to place it on the thrustmeter.";
    document.getElementById('select_motor').style.visibility = "hidden";
    document.getElementById('rpm_indicator').style.visibility = "hidden";
    document.getElementById('nextButton').style.visibility = "hidden";
    document.getElementById('thrust').style.visibility = "hidden";
    document.getElementById('dc').style.visibility = "hidden";
    document.getElementById('esc').style.visibility = "hidden";
    document.getElementById('knob').style.visibility = "hidden";
    document.getElementById('motor').style.visibility = "hidden";
    document.getElementById('table_iso').style.visibility = "hidden";
    document.getElementById('power_iso').style.visibility = "hidden";
    document.getElementById('knob_iso').style.visibility = "hidden";
    document.getElementById('thrust_iso').style.visibility = "hidden";
    document.getElementById('esc_iso').style.visibility = "hidden";
    document.getElementById('motor_iso').style.visibility = "hidden";
    document.getElementById('desc_button').style.visibility = "hidden";
    document.getElementById('desc_button').onclick = "";
    document.getElementById('desc_message').style.visibility = "hidden";
    //While choosing next motors, show the description a bit upper to prevent overlap
    if (new_select == 1) {
        document.getElementById('motor_prop_desc').style.top = "50px";

    }
    document.getElementById('motor_prop_desc').style.top = "50px";
    myInt = setInterval(function() { animatearrow(); }, 500);
    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 105px; top: 380px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(270deg)";
    for (let i = 1; i <= 8; i++) {
        document.getElementById('select_prop' + i).style.visibility = "hidden";

    }
    m_id = motor_id;
    p_id = prop_id;

    console.log(m_id);
    console.log(p_id);

    //MOTOR DESCRIPTION FOR DIFFERENT MOTORS AND RESPECTIVE PROPELLERS
    if (motor_id == '1' && prop_id == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN1005_KV90</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR G30*10.5</strong><br>MN indicates the motor's Model number and 1005 is the series number. 90 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 30 inches and pitch 10.5 . T-MOTOR is the Company name and G refers to the series. ";
    if (motor_id == '1' && prop_id == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN1005_KV90</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR G32*11</strong><br>MN indicates the motor's Model number and 1005 is the series number. 90 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 32 inches and pitch 11 . T-MOTOR is the Company name and G refers to the series.";
    if (motor_id == '2' && prop_id == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV380</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 12*4CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 380 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 12 inches and pitch 4 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '2' && prop_id == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV380</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 13*4.4CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 380 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 13 inches and pitch 4.4 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '2' && prop_id == '3')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV380</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 14*4.8CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 380 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 14 inches and pitch 4.8 . CF means that the material used is Carbon fibre.";
    if (motor_id == '2' && prop_id == '4')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV380</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 15*5CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 380 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 15 and pitch 5 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '3' && prop_id == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV580</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 12*4CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 580 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 12 and pitch 4 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '3' && prop_id == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV580</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 13*4.4CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 580 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 13 and pitch 4.4 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '3' && prop_id == '3')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV580</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 14*4.8CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 580 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 14 and pitch 4.8 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '4' && prop_id == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV700</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 12*4CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 700 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 12 and pitch 4 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '4' && prop_id == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV700</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 13*4.4CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 700 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 13 and pitch 4.4 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '4' && prop_id == '3')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: MN3508_KV700</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 11*3.7CF</strong><br>MN indicates the motor's Model number and 3508 is the series number. 700 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 11 and pitch 3.7 . T-MOTOR is the Company name and CF means that the material used is Carbon fibre.";
    if (motor_id == '5' && prop_id == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U11 II KV120</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 26*8.5CF</strong><br>T-MOTOR is the Company name, U11 II indicates the motor's Model number. 120 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 26 and pitch 8.5 . CF means that the material used is Carbon fibre.";
    if (motor_id == '5' && prop_id == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U11 II KV120</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 27*8.8CF</strong><br>T-MOTOR is the Company name, U11 II indicates the motor's Model number. 120 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 27 and pitch 8.8 . CF means that the material used is Carbon fibre.";
    if (motor_id == '5' && prop_id == '3')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U11 II KV120</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR 28*9.2CF</strong><br>T-MOTOR is the Company name, U11 II indicates the motor's Model number. 120 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 28 and pitch 9.2 . CF means that the material used is Carbon fibre.";
    if (motor_id == '6' && prop_id == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV85</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR G28*9.2CF</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 85 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 28 and pitch 9.2 . G is the series and CF means that the material used is Carbon fibre.";
    if (motor_id == '6' && prop_id == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV85</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR G29*9.5CF</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 85 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 29 and pitch 9.5 . G is the series and CF means that the material used is Carbon fibre.";
    if (motor_id == '7' && prop_id == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV150</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR G30*10.5CF</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 150 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 30 and pitch 10.5 . G is the series and CF means that the material used is Carbon fibre.";
    if (motor_id == '7' && prop_id == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV150</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR G22*7.2CF</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 150 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 22 and pitch 7.2 . G is the series and CF means that the material used is Carbon fibre.";
    if (motor_id == '8' && prop_id == '1')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV190</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR G28*9.2CF</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 190 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 28 and pitch 9.2 . G is the series and CF means that the material used is Carbon fibre.";
    if (motor_id == '8' && prop_id == '2')
        document.getElementById('motor_prop_desc').innerHTML = "<strong>Motor: T-MOTOR U8 Lite KV190</strong>&nbsp;&nbsp;<strong>Propeller: T-MOTOR G29*9.5CF</strong><br>T-MOTOR is the Company name, U8 Lite indicates the motor's Model number. 190 refers to the number of revolutions per minute (rpm) that a motor turns when 1V (one volt) is applied with no load attached to that motor.<br>The Propeller has a diameter of 29 and pitch 9.5 . G is the series and CF means that the material used is Carbon fibre.";


}



console.log(m_id);
console.log(p_id);

function place_motor() {
    clearInterval(myInt);

    //REMOVE THE PREVIOUSLY CHOSEN PROPELLER 
    if (new_select = 1) {

        document.getElementById(m_id + '_' + p_id).remove();

    }
    document.getElementById("placement_info").innerText = "The motor is attached to the thrustmeter by clamping.";
    document.getElementById('arrow1').style.visibility = "hidden";
    document.getElementById('equip').style.visibility = "visible";
    document.getElementById('motor_with_prop').style.visibility = "hidden";
    document.getElementById('new_motor').style.visibility = "visible";
    document.getElementById('new_motor').style.opacity = 1;
    document.getElementById('new_motor').style.transition = "opacity 1s ease-in-out";
    document.getElementById('select_motor').style.visibility = "hidden";
    document.getElementById('nextButton').style.visibility = "visible";
    document.getElementById('rpm_indicator').style.visibility = "hidden";
    document.getElementById('motor_prop_desc').style.visibility = "hidden";

    document.getElementById('thrust').style.visibility = "hidden";
    document.getElementById('dc').style.visibility = "hidden";
    document.getElementById('esc').style.visibility = "hidden";
    document.getElementById('knob').style.visibility = "hidden";
    document.getElementById('motor').style.visibility = "hidden";
    document.getElementById('table_iso').style.visibility = "hidden";
    document.getElementById('power_iso').style.visibility = "hidden";
    document.getElementById('knob_iso').style.visibility = "hidden";
    document.getElementById('thrust_iso').style.visibility = "hidden";
    document.getElementById('esc_iso').style.visibility = "hidden";
    document.getElementById('motor_iso').style.visibility = "hidden";
    document.getElementById('desc_button').style.visibility = "hidden";
    document.getElementById('equip').style.top = "150px";

    for (let i = 1; i <= 8; i++) {
        document.getElementById('select_prop' + i).style.visibility = "hidden";
    }

    document.getElementById('pumptext').innerHTML = "The apparatus is thus ready for the connection.";

}

function switch_battery() {
    clearInterval(myIntForBattery);
    document.getElementById('arrow1').style.visibility = "hidden";
    document.getElementById('on_off_switch').style.visibility = "visible";
    document.getElementById('on_off_switch').innerHTML = "OFF";
    document.getElementById('socket_plug').style.visibility = "visible";
    document.getElementById('close_button').style.visibility = "hidden";
    document.getElementById('rpm_indicator').style.visibility = "hidden";

    document.getElementById('socket_plug').onclick = function() {
        clearInterval(myIntForBattery);
        document.getElementById('arrow1').style.visibility = "hidden";
        document.getElementById('socket_plug').style.visibility = "hidden";
        document.getElementById('socket_plugged_on').style.visibility = "visible";
        document.getElementById('on_off_switch').innerHTML = "ON";
        document.getElementById('close_button').style.visibility = "visible";

        document.getElementById('socket_plugged_on').onclick = function() {
            clearInterval(myIntForBattery);
            document.getElementById('arrow1').style.visibility = "hidden";
            document.getElementById('socket_plug').style.visibility = "visible";
            document.getElementById('socket_plugged_on').style.visibility = "hidden";
            document.getElementById('on_off_switch').innerHTML = "OFF";
            document.getElementById('close_button').style.visibility = "hidden";

        }
    }
}

function close_plug() {
    myStopFunction();
    clearInterval(myIntForBattery);

    document.getElementById('close_button').style.visibility = "hidden";
    document.getElementById('socket_plug').style.visibility = "hidden";
    document.getElementById('on_off_switch').style.visibility = "hidden";
    document.getElementById('socket_plugged_on').style.visibility = "hidden";
    document.getElementById('switch_battery').style.visibility = "hidden";
    document.getElementById('rpm_indicator').style.visibility = "hidden";

    myInt = setInterval(function() {
        animatearrow();
    }, 500);
    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 410px; top: 270px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(270deg)";

    document.getElementById('all_comp').onclick = function() { set_throttle(); };
}

function set_throttle() {
    myStopFunction();

    var throttle = document.getElementById('throttle0');
    throttle.style.visibility = "visible";
    throttle.style.transform = "scale(2)";
    throttle.style.transition = "all 1s ease-in-out";
    document.getElementById('pumptext-3').innerHTML = "Click on the throttle percentage to observe the changes in the thrust of the motor."
    myInt = setInterval(function() {
        animatearrow();
    }, 500);
    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 570px; top: 450px; height: 40px; z-index: 150;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(90deg)";

    var zero = document.getElementById('0%');
    zero.style.visibility = "visible";
    zero.style.opacity = 1;
    zero.style.transition = "opacity 5s ease-in-out";
    var forty = document.getElementById('40%')
    forty.style.visibility = "visible";
    forty.style.opacity = 1;
    forty.style.transition = "opacity 5s ease-in-out";
    var sixty = document.getElementById('60%')
    sixty.style.visibility = "visible";
    sixty.style.opacity = 1;
    sixty.style.transition = "opacity 5s ease-in-out";
    var eighty = document.getElementById('80%');
    eighty.style.visibility = "visible";
    eighty.style.opacity = 1;
    eighty.style.transition = "opacity 5s ease-in-out";
    var hundred = document.getElementById('100%');
    hundred.style.visibility = "visible";
    hundred.style.opacity = 1;
    hundred.style.transition = "opacity 5s ease-in-out";



}

function mouseover() {
    document.getElementById('dialog_box2').style.visibility = "visible";
    document.getElementById('dialog_box2').style.opacity = 1;
    document.getElementById('dialog_box2').style.transition = "opacity 1s ease-in-out";
    document.getElementById('rpm_value').style.visibility = "visible";
    document.getElementById('rpm_value').style.opacity = 1;
    document.getElementById('rpm_value').style.transition = "opacity 1s ease-in-out";
}

function throttle_click(name) {
    myStopFunction();
    // document.getElementById('arrow1').style.visibility = "hidden";

    for (let i = 0; i <= 4; i++) {
        document.getElementById('throttle' + i).style.visibility = "hidden";
    }
    document.getElementById('throttle' + name).style.visibility = "visible";
    document.getElementById('throttle_message').style.visibility = "visible";
    document.getElementById('all_comp').onclick = "";
    document.getElementById('dialog_box').style.visibility = "visible";
    document.getElementById('dialog_box').style.opacity = 1;
    document.getElementById('dialog_box').style.transition = "opacity 1s ease-in-out";
    document.getElementById('thrust_value').style.visibility = "visible";
    document.getElementById('thrust_value').style.opacity = 1;
    document.getElementById('thrust_value').style.transition = "opacity 1s ease-in-out";
    document.getElementById('instruct_info').style.visibility = "visible";
    document.getElementById('instruct_info').innerHTML = "Move over the RPM Indicator to check the RPM of the motor for the respective Throttle Percentage."
    document.getElementById('thrust_mini_value').style.visibility = "visible";


    var p = document.getElementById('prop_fan');
    p.style.visibility = "visible";
    document.getElementById('rpm_indicator').style.visibility = "visible";

    document.getElementById('rpm_indicator').onmouseout = function() {
        document.getElementById('dialog_box2').style.visibility = "hidden";
        document.getElementById('rpm_value').style.visibility = "hidden";
    };

    document.getElementById('rpm_mini_value').style.visibility = "visible";



    var sum = m_id + p_id;
    //FOR 0%,SHOW THE THRUST AND RPM
    if (name == '0') {

        if (m_id == '1' && p_id == '1') {

            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '1' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '2' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '2' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '2' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '2' && p_id == '4') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }

        if (m_id == '3' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '3' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '3' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '4' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '4' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '4' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '5' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '5' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '5' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '6' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '6' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '7' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '7' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '8' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        if (m_id == '8' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "0g";
            document.getElementById('rpm_value').innerHTML = "RPM:0";

        }
        document.getElementById('rpm_mini_value').innerText = "0";
        document.getElementById('thrust_mini_value').innerText = "0";

        myStopFunction();
        document.getElementById('pumptext-3').innerHTML = "Set the Throttle value to 100% inorder to generate the table."
        document.getElementById('arrow1').style.visibility = "hidden";
        p.style.animation = "rotate 0s linear 1s infinite";
        document.getElementById('throttle_message').innerHTML = "When throttle is set to 0%,the propeller does not move. Hence there is 0 thrust generated. "


    }

    //FOR 40%,SHOW THE THRUST AND RPM
    if (name == '1') {
        if (m_id == '1' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "2096g";
            document.getElementById('rpm_value').innerHTML = "RPM:1599";
            document.getElementById('rpm_mini_value').innerText = "1599";
            document.getElementById('thrust_mini_value').innerText = "2096";

        }
        if (m_id == '1' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "2607g";
            document.getElementById('rpm_value').innerHTML = "RPM:1559";
            document.getElementById('rpm_mini_value').innerText = "1559";
            document.getElementById('thrust_mini_value').innerText = "2607";

        }
        if (m_id == '2' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "284g";
            document.getElementById('rpm_value').innerHTML = "RPM:3820";
            document.getElementById('rpm_mini_value').innerText = "3820";
            document.getElementById('thrust_mini_value').innerText = "284";

        }
        if (m_id == '2' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "384g";
            document.getElementById('rpm_value').innerHTML = "RPM:3752";
            document.getElementById('rpm_mini_value').innerText = "3752";
            document.getElementById('thrust_mini_value').innerText = "384";

        }
        if (m_id == '2' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "506g";
            document.getElementById('rpm_value').innerHTML = "RPM:3860";
            document.getElementById('rpm_mini_value').innerText = "3860";
            document.getElementById('thrust_mini_value').innerText = "506";

        }
        if (m_id == '2' && p_id == '4') {
            document.getElementById('thrust_value').innerHTML = "644g";
            document.getElementById('rpm_value').innerHTML = "RPM:3540";
            document.getElementById('rpm_mini_value').innerText = "3540";
            document.getElementById('thrust_mini_value').innerText = "644";

        }
        if (m_id == '3' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "222g";
            document.getElementById('rpm_value').innerHTML = "RPM:3400";
            document.getElementById('rpm_mini_value').innerText = "3400";
            document.getElementById('thrust_mini_value').innerText = "222";

        }
        if (m_id == '3' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "294g";
            document.getElementById('rpm_value').innerHTML = "RPM:3480";
            document.getElementById('rpm_mini_value').innerText = "3480";
            document.getElementById('thrust_mini_value').innerText = "294";

        }
        if (m_id == '3' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "414g";
            document.getElementById('rpm_value').innerHTML = "RPM:3340";
            document.getElementById('rpm_mini_value').innerText = "3340";
            document.getElementById('thrust_mini_value').innerText = "414";

        }
        if (m_id == '4' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "164g";
            document.getElementById('rpm_value').innerHTML = "RPM:3280";
            document.getElementById('rpm_mini_value').innerText = "3280";
            document.getElementById('thrust_mini_value').innerText = "164";

        }
        if (m_id == '4' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "192g";
            document.getElementById('rpm_value').innerHTML = "RPM:3080";
            document.getElementById('rpm_mini_value').innerText = "3080";
            document.getElementById('thrust_mini_value').innerText = "192";

        }
        if (m_id == '4' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "234g";
            document.getElementById('rpm_value').innerHTML = "RPM:4660";
            document.getElementById('rpm_mini_value').innerText = "4660";
            document.getElementById('thrust_mini_value').innerText = "234";

        }
        if (m_id == '5' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "2357g";
            document.getElementById('rpm_value').innerHTML = "RPM:1978";
            document.getElementById('rpm_mini_value').innerText = "1978";
            document.getElementById('thrust_mini_value').innerText = "2357";

        }
        if (m_id == '5' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "2561g";
            document.getElementById('rpm_value').innerHTML = "RPM:1963";
            document.getElementById('rpm_mini_value').innerText = "1963";
            document.getElementById('thrust_mini_value').innerText = "2561";


        }
        if (m_id == '5' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "2950g";
            document.getElementById('rpm_value').innerHTML = "RPM:1934";
            document.getElementById('rpm_mini_value').innerText = "1934";
            document.getElementById('thrust_mini_value').innerText = "2950";

        }
        if (m_id == '6' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "1154g";
            document.getElementById('rpm_value').innerHTML = "RPM:743";
            document.getElementById('rpm_mini_value').innerText = "743";
            document.getElementById('thrust_mini_value').innerText = "1154";

        }
        if (m_id == '6' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "1411g";
            document.getElementById('rpm_value').innerHTML = "RPM:733";
            document.getElementById('rpm_mini_value').innerText = "733";
            document.getElementById('thrust_mini_value').innerText = "1411";

        }
        if (m_id == '7' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "1494g";
            document.getElementById('rpm_value').innerHTML = "RPM:696";
            document.getElementById('rpm_mini_value').innerText = "696";
            document.getElementById('thrust_mini_value').innerText = "1494";

        }
        if (m_id == '7' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "1666g";
            document.getElementById('rpm_value').innerHTML = "RPM:2589";
            document.getElementById('rpm_mini_value').innerText = "2589";
            document.getElementById('thrust_mini_value').innerText = "1666";

        }
        if (m_id == '8' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "1712g";
            document.getElementById('rpm_value').innerHTML = "RPM:1095";
            document.getElementById('rpm_mini_value').innerText = "1095";
            document.getElementById('thrust_mini_value').innerText = "1712";

        }
        if (m_id == '8' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "1979g";
            document.getElementById('rpm_value').innerHTML = "RPM:1051";
            document.getElementById('rpm_mini_value').innerText = "1051";
            document.getElementById('thrust_mini_value').innerText = "1979";

        }
        document.getElementById('arrow1').style.visibility = "hidden";

        p.style.animation = "rotate 0.5s linear 1s infinite";
        document.getElementById('throttle_message').innerHTML = "The throttle is now set to 40%";

    }

    //FOR 60%,SHOW THE THRUST AND RPM
    if (name == '2') {
        if (m_id == '1' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "4061g";
            document.getElementById('rpm_value').innerHTML = "RPM:2187";
            document.getElementById('rpm_mini_value').innerText = "2187";
            document.getElementById('thrust_mini_value').innerText = "4061";

        }
        if (m_id == '1' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "4962g";
            document.getElementById('rpm_value').innerHTML = "RPM:2105";
            document.getElementById('rpm_mini_value').innerText = "2105";
            document.getElementById('thrust_mini_value').innerText = "4962";

        }
        if (m_id == '2' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "576g";
            document.getElementById('rpm_value').innerHTML = "RPM:4980";
            document.getElementById('rpm_mini_value').innerText = "4980";
            document.getElementById('thrust_mini_value').innerText = "576";

        }
        if (m_id == '2' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "716g";
            document.getElementById('rpm_value').innerHTML = "RPM:4848";
            document.getElementById('rpm_mini_value').innerText = "4848";
            document.getElementById('thrust_mini_value').innerText = "716";

        }
        if (m_id == '2' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "914g";
            document.getElementById('rpm_value').innerHTML = "RPM:4740";
            document.getElementById('rpm_mini_value').innerText = "4740";
            document.getElementById('thrust_mini_value').innerText = "914";

        }
        if (m_id == '2' && p_id == '4') {
            document.getElementById('thrust_value').innerHTML = "996g";
            document.getElementById('rpm_value').innerHTML = "RPM:4260";
            document.getElementById('rpm_mini_value').innerText = "4260";
            document.getElementById('thrust_mini_value').innerText = "996";

        }

        if (m_id == '3' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "498g";
            document.getElementById('rpm_value').innerHTML = "RPM:4600";
            document.getElementById('rpm_mini_value').innerText = "4600";
            document.getElementById('thrust_mini_value').innerText = "498";

        }
        if (m_id == '3' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "606g";
            document.getElementById('rpm_value').innerHTML = "RPM:4520";
            document.getElementById('rpm_mini_value').innerText = "4520";
            document.getElementById('thrust_mini_value').innerText = "606";

        }
        if (m_id == '3' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "786g";
            document.getElementById('rpm_value').innerHTML = "RPM:4260";
            document.getElementById('rpm_mini_value').innerText = "4260";
            document.getElementById('thrust_mini_value').innerText = "786";

        }
        if (m_id == '4' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "396g";
            document.getElementById('rpm_value').innerHTML = "RPM:4320";
            document.getElementById('rpm_mini_value').innerText = "4320";
            document.getElementById('thrust_mini_value').innerText = "396";

        }
        if (m_id == '4' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "468g";
            document.getElementById('rpm_value').innerHTML = "RPM:4120";
            document.getElementById('rpm_mini_value').innerText = "4120";
            document.getElementById('thrust_mini_value').innerText = "468";

        }
        if (m_id == '4' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "526g";
            document.getElementById('rpm_value').innerHTML = "RPM:5940";
            document.getElementById('rpm_mini_value').innerText = "5940";
            document.getElementById('thrust_mini_value').innerText = "526";

        }
        if (m_id == '5' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "4931g";
            document.getElementById('rpm_value').innerHTML = "RPM:3023";
            document.getElementById('rpm_mini_value').innerText = "3023";
            document.getElementById('thrust_mini_value').innerText = "4931";

        }
        if (m_id == '5' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "5240g";
            document.getElementById('rpm_value').innerHTML = "RPM:2974";
            document.getElementById('rpm_mini_value').innerText = "2974";
            document.getElementById('thrust_mini_value').innerText = "5240";

        }
        if (m_id == '5' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "6195g";
            document.getElementById('rpm_value').innerHTML = "RPM:2910";
            document.getElementById('rpm_mini_value').innerText = "2910";
            document.getElementById('thrust_mini_value').innerText = "6195";

        }
        if (m_id == '6' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "2743g";
            document.getElementById('rpm_value').innerHTML = "RPM:1536";
            document.getElementById('rpm_mini_value').innerText = "1536";
            document.getElementById('thrust_mini_value').innerText = "2743";

        }
        if (m_id == '6' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "3044g";
            document.getElementById('rpm_value').innerHTML = "RPM:1488";
            document.getElementById('rpm_mini_value').innerText = "1488";
            document.getElementById('thrust_mini_value').innerText = "3044";

        }
        if (m_id == '7' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "2671g";
            document.getElementById('rpm_value').innerHTML = "RPM:1207";
            document.getElementById('rpm_mini_value').innerText = "1207";
            document.getElementById('thrust_mini_value').innerText = "2671";

        }
        if (m_id == '7' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "3040g";
            document.getElementById('rpm_value').innerHTML = "RPM:3784";
            document.getElementById('rpm_mini_value').innerText = "3784";
            document.getElementById('thrust_mini_value').innerText = "3040";

        }
        if (m_id == '8' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "3142g";
            document.getElementById('rpm_value').innerHTML = "RPM:1736";
            document.getElementById('rpm_mini_value').innerText = "1736";
            document.getElementById('thrust_mini_value').innerText = "3142";

        }
        if (m_id == '8' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "3540g";
            document.getElementById('rpm_value').innerHTML = "RPM:1663";
            document.getElementById('rpm_mini_value').innerText = "1663";
            document.getElementById('thrust_mini_value').innerText = "3540";

        }
        document.getElementById('arrow1').style.visibility = "hidden";

        p.style.animation = "rotate 0.1s linear 1s infinite";
        document.getElementById('throttle_message').innerHTML = "The throttle is now set to 60%";

    }

    //FOR 80%,SHOW THE THRUST AND RPM
    if (name == '3') {
        if (m_id == '1' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "6143g";
            document.getElementById('rpm_value').innerHTML = "RPM:2658";
            document.getElementById('rpm_mini_value').innerText = "2658";
            document.getElementById('thrust_mini_value').innerText = "6143";

        }
        if (m_id == '1' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "7091g";
            document.getElementById('rpm_value').innerHTML = "RPM:2514";
            document.getElementById('rpm_mini_value').innerText = "2514";
            document.getElementById('thrust_mini_value').innerText = "7091";

        }
        if (m_id == '2' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "868g";
            document.getElementById('rpm_value').innerHTML = "RPM:6140";
            document.getElementById('rpm_mini_value').innerText = "6140";
            document.getElementById('thrust_mini_value').innerText = "868";

        }
        if (m_id == '2' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "1048g";
            document.getElementById('rpm_value').innerHTML = "RPM:5944";
            document.getElementById('rpm_mini_value').innerText = "5944";
            document.getElementById('thrust_mini_value').innerText = "1048";

        }
        if (m_id == '2' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "1322g";
            document.getElementById('rpm_value').innerHTML = "RPM:5620";
            document.getElementById('rpm_mini_value').innerText = "5620";
            document.getElementById('thrust_mini_value').innerText = "1322";

        }
        if (m_id == '2' && p_id == '4') {
            document.getElementById('thrust_value').innerHTML = "1348g";
            document.getElementById('rpm_value').innerHTML = "RPM:4980";
            document.getElementById('rpm_mini_value').innerText = "4980";
            document.getElementById('thrust_mini_value').innerText = "1348";

        }

        if (m_id == '3' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "774g";
            document.getElementById('rpm_value').innerHTML = "RPM:5800";
            document.getElementById('rpm_mini_value').innerText = "5800";
            document.getElementById('thrust_mini_value').innerText = "774";

        }
        if (m_id == '3' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "918g";
            document.getElementById('rpm_value').innerHTML = "RPM:5560";
            document.getElementById('rpm_mini_value').innerText = "5560";
            document.getElementById('thrust_mini_value').innerText = "918";


        }
        if (m_id == '3' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "1158g";
            document.getElementById('rpm_value').innerHTML = "RPM:5180";
            document.getElementById('rpm_mini_value').innerText = "5180";
            document.getElementById('thrust_mini_value').innerText = "1158";

        }
        if (m_id == '4' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "628g";
            document.getElementById('rpm_value').innerHTML = "RPM:5360";
            document.getElementById('rpm_mini_value').innerText = "5360";
            document.getElementById('thrust_mini_value').innerText = "628";

        }
        if (m_id == '4' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "744g";
            document.getElementById('rpm_value').innerHTML = "RPM:5160";
            document.getElementById('rpm_mini_value').innerText = "5160";
            document.getElementById('thrust_mini_value').innerText = "744";

        }
        if (m_id == '4' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "818g";
            document.getElementById('rpm_value').innerHTML = "RPM:7220";
            document.getElementById('rpm_mini_value').innerText = "7220";
            document.getElementById('thrust_mini_value').innerText = "818";

        }
        if (m_id == '5' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "8475g";
            document.getElementById('rpm_value').innerHTML = "RPM:3988";
            document.getElementById('rpm_mini_value').innerText = "3988";
            document.getElementById('thrust_mini_value').innerText = "8475";

        }
        if (m_id == '5' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "8948g";
            document.getElementById('rpm_value').innerHTML = "RPM:3927";
            document.getElementById('rpm_mini_value').innerText = "3927";
            document.getElementById('thrust_mini_value').innerText = "8948";

        }
        if (m_id == '5' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "10137g";
            document.getElementById('rpm_value').innerHTML = "RPM:3819";
            document.getElementById('rpm_mini_value').innerText = "3819";
            document.getElementById('thrust_mini_value').innerText = "10137";

        }
        if (m_id == '6' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "4699g";
            document.getElementById('rpm_value').innerHTML = "RPM:2284";
            document.getElementById('rpm_mini_value').innerText = "2284";
            document.getElementById('thrust_mini_value').innerText = "4699";

        }
        if (m_id == '6' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "5216g";
            document.getElementById('rpm_value').innerHTML = "RPM:2187";
            document.getElementById('rpm_mini_value').innerText = "2187";
            document.getElementById('thrust_mini_value').innerText = "5216";

        }
        if (m_id == '7' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "4001g";
            document.getElementById('rpm_value').innerHTML = "RPM:1654";
            document.getElementById('rpm_mini_value').innerText = "1654";
            document.getElementById('thrust_mini_value').innerText = "4001";

        }
        if (m_id == '7' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "4710g";
            document.getElementById('rpm_value').innerHTML = "RPM:4868";
            document.getElementById('rpm_mini_value').innerText = "4868";
            document.getElementById('thrust_mini_value').innerText = "4710";

        }
        if (m_id == '8' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "4605g";
            document.getElementById('rpm_value').innerHTML = "RPM:2251";
            document.getElementById('rpm_mini_value').innerText = "2251";
            document.getElementById('thrust_mini_value').innerText = "4605";

        }
        if (m_id == '8' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "5067g";
            document.getElementById('rpm_value').innerHTML = "RPM:2147";
            document.getElementById('rpm_mini_value').innerText = "2147";
            document.getElementById('thrust_mini_value').innerText = "5067";

        }
        document.getElementById('arrow1').style.visibility = "hidden";

        p.style.animation = "rotate 0.01s linear 1s infinite";
        document.getElementById('throttle_message').innerHTML = "The throttle is now set to 80%";

    }

    //FOR 100%,SHOW THE THRUST AND RPM
    if (name == '4') {
        if (m_id == '1' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "8459g";
            document.getElementById('rpm_value').innerHTML = "RPM:3116";
            document.getElementById('rpm_mini_value').innerText = "3116";
            document.getElementById('thrust_mini_value').innerText = "8459";

        }
        if (m_id == '1' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "9323g";
            document.getElementById('rpm_value').innerHTML = "RPM:2882";
            document.getElementById('rpm_mini_value').innerText = "2882";
            document.getElementById('thrust_mini_value').innerText = "9323";

        }
        if (m_id == '2' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "1160g";
            document.getElementById('rpm_value').innerHTML = "RPM:7300";
            document.getElementById('rpm_mini_value').innerText = "7300";
            document.getElementById('thrust_mini_value').innerText = "1160";

        }
        if (m_id == '2' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "1380g";
            document.getElementById('rpm_value').innerHTML = "RPM:7040";
            document.getElementById('rpm_mini_value').innerText = "7040";
            document.getElementById('thrust_mini_value').innerText = "1380";

        }
        if (m_id == '2' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "1730g";
            document.getElementById('rpm_value').innerHTML = "RPM:6500";
            document.getElementById('rpm_mini_value').innerText = "6500";
            document.getElementById('thrust_mini_value').innerText = "1730";

        }
        if (m_id == '2' && p_id == '4') {
            document.getElementById('thrust_value').innerHTML = "1700g";
            document.getElementById('rpm_value').innerHTML = "RPM:5700";
            document.getElementById('rpm_mini_value').innerText = "5700";
            document.getElementById('thrust_mini_value').innerText = "1700";

        }

        if (m_id == '3' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "1050g";
            document.getElementById('rpm_value').innerHTML = "RPM:7000";
            document.getElementById('rpm_mini_value').innerText = "7000";
            document.getElementById('thrust_mini_value').innerText = "1050";

        }
        if (m_id == '3' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "1230g";
            document.getElementById('rpm_value').innerHTML = "RPM:6600";
            document.getElementById('rpm_mini_value').innerText = "6600";
            document.getElementById('thrust_mini_value').innerText = "1230";

        }
        if (m_id == '3' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "1530g";
            document.getElementById('rpm_value').innerHTML = "RPM:6100";
            document.getElementById('rpm_mini_value').innerText = "6100";
            document.getElementById('thrust_mini_value').innerText = "1530";

        }
        if (m_id == '4' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "860g";
            document.getElementById('rpm_value').innerHTML = "RPM:6400";
            document.getElementById('rpm_mini_value').innerText = "6400";
            document.getElementById('thrust_mini_value').innerText = "860";

        }
        if (m_id == '4' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "1020g";
            document.getElementById('rpm_value').innerHTML = "RPM:6200";
            document.getElementById('rpm_mini_value').innerText = "6200";
            document.getElementById('thrust_mini_value').innerText = "1020";


        }
        if (m_id == '4' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "1110g";
            document.getElementById('rpm_value').innerHTML = "RPM:8500";
            document.getElementById('rpm_mini_value').innerText = "8500";
            document.getElementById('thrust_mini_value').innerText = "1110";

        }
        if (m_id == '5' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "12114g";
            document.getElementById('rpm_value').innerHTML = "RPM:4818";
            document.getElementById('rpm_mini_value').innerText = "4818";
            document.getElementById('thrust_mini_value').innerText = "12114";

        }
        if (m_id == '5' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "12617g";
            document.getElementById('rpm_value').innerHTML = "RPM:4723";
            document.getElementById('rpm_mini_value').innerText = "4723";
            document.getElementById('thrust_mini_value').innerText = "12617";

        }
        if (m_id == '5' && p_id == '3') {
            document.getElementById('thrust_value').innerHTML = "14159g";
            document.getElementById('rpm_value').innerHTML = "RPM:4583";
            document.getElementById('rpm_mini_value').innerText = "4583";
            document.getElementById('thrust_mini_value').innerText = "14159";

        }
        if (m_id == '6' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "6529g";
            document.getElementById('rpm_value').innerHTML = "RPM:2835";
            document.getElementById('rpm_mini_value').innerText = "2835";
            document.getElementById('thrust_mini_value').innerText = "6529";

        }
        if (m_id == '6' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "7030g";
            document.getElementById('rpm_value').innerHTML = "RPM:2698";
            document.getElementById('rpm_mini_value').innerText = "2698";
            document.getElementById('thrust_mini_value').innerText = "7030";

        }
        if (m_id == '7' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "5274g";
            document.getElementById('rpm_value').innerHTML = "RPM:1998";
            document.getElementById('rpm_mini_value').innerText = "1998";
            document.getElementById('thrust_mini_value').innerText = "5274";

        }
        if (m_id == '7' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "6657g";
            document.getElementById('rpm_value').innerHTML = "RPM:5908";
            document.getElementById('rpm_mini_value').innerText = "5908";
            document.getElementById('thrust_mini_value').innerText = "6657";

        }
        if (m_id == '8' && p_id == '1') {
            document.getElementById('thrust_value').innerHTML = "6078g";
            document.getElementById('rpm_value').innerHTML = "RPM:2712";
            document.getElementById('rpm_mini_value').innerText = "2712";
            document.getElementById('thrust_mini_value').innerText = "6078";

        }
        if (m_id == '8' && p_id == '2') {
            document.getElementById('thrust_value').innerHTML = "6536g";
            document.getElementById('rpm_value').innerHTML = "RPM:2569";
            document.getElementById('rpm_mini_value').innerText = "2569";
            document.getElementById('thrust_mini_value').innerText = "6536";

        }
        p.style.animation = "rotate 0.001s linear 1s infinite";
        document.getElementById('generate_table').style.visibility = "visible";
        document.getElementById('choose_motor').style.visibility = "hidden";
        document.getElementById('arrow1').style.visibility = "hidden";


        document.getElementById('throttle_message').innerHTML = "The throttle is now set to 100%";

    }



}
var new_motor_selected_thrust = 1;

function generate_table() {
    myStopFunction();
    if (new_select == 1) {
        clearInterval(myInt);
        document.getElementById('arrow1').style.visibility = "hidden";
    }
    document.getElementById('instruct_info').style.visibility = "hidden";

    document.getElementById('pumptext-3').innerHTML = "The table shows the value of the thrust of the motor for each throttle value. ";
    var table = document.getElementById("thrust_table");
    document.getElementById('all_comp').style.visibility = "hidden";
    document.getElementById('prop_fan').style.visibility = "hidden";
    document.getElementById('throttle_message').style.visibility = "hidden";
    document.getElementById('thrust_value').style.visibility = "hidden";
    document.getElementById('dialog_box').style.visibility = "hidden";
    document.getElementById('prop_fan').style.visibility = "hidden";
    document.getElementById('rpm_indicator').style.visibility = "hidden";
    document.getElementById('dialog_box2').style.visibility = "hidden";
    document.getElementById('rpm_value').style.visibility = "hidden";
    document.getElementById('rpm_mini_value').style.visibility = "hidden";
    document.getElementById('thrust_mini_value').style.visibility = "hidden";

    document.getElementById('prop_fan').style.animation = "rotate 0s linear 0s infinite";
    document.getElementById('choose_motor').style.visibility = "visible";
    for (let i = 0; i <= 4; i++) {
        document.getElementById('throttle' + i).style.visibility = "hidden";

    }
    document.getElementById('0%').style.visibility = "hidden";
    document.getElementById('40%').style.visibility = "hidden";
    document.getElementById('60%').style.visibility = "hidden";
    document.getElementById('80%').style.visibility = "hidden";
    document.getElementById('100%').style.visibility = "hidden";

    document.getElementById('generate_table').style.visibility = "hidden";


    document.getElementById('thrust_table').style.visibility = "visible";
    // to add new rows for new motors and propellers chosen
    new_motor_selected_thrust++;
    //creating row for the table
    var row = table.insertRow(new_motor_selected_thrust);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    //values for each column
    if (m_id == '1' && p_id == '1') {
        cell1.innerHTML = "MN1005_ KV90";
        cell2.innerHTML = "T-MOTOR G30*10.5";
        cell3.innerHTML = "0";
        cell4.innerHTML = "2096";
        cell5.innerHTML = "4061";
        cell6.innerHTML = "6143";
        cell7.innerHTML = "8459";

    }
    if (m_id == '1' && p_id == '2') {
        cell1.innerHTML = "MN1005_ KV90";
        cell2.innerHTML = "T-MOTOR G32*11 ";
        cell3.innerHTML = "0";
        cell4.innerHTML = "2607";
        cell5.innerHTML = "4962";
        cell6.innerHTML = "7091";
        cell7.innerHTML = "9323";
    }
    if (m_id == '2' && p_id == '1') {
        cell1.innerHTML = "MN3508_ KV380";
        cell2.innerHTML = "T-MOTOR 12*4CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "284";
        cell5.innerHTML = "596";
        cell6.innerHTML = "868";
        cell7.innerHTML = "1160";
    }
    if (m_id == '2' && p_id == '2') {
        cell1.innerHTML = "MN3508_ KV380";
        cell2.innerHTML = "T-MOTOR 13*4.4CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "384";
        cell5.innerHTML = "716";
        cell6.innerHTML = "1048";
        cell7.innerHTML = "1380";
    }
    if (m_id == '2' && p_id == '3') {
        cell1.innerHTML = "MN3508_ KV380";
        cell2.innerHTML = "T-MOTOR 14*4.8CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "506";
        cell5.innerHTML = "914";
        cell6.innerHTML = "1322";
        cell7.innerHTML = "1730";
    }
    if (m_id == '2' && p_id == '4') {
        cell1.innerHTML = "MN3508_ KV380";
        cell2.innerHTML = "T-MOTOR 15*5CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "608";
        cell5.innerHTML = "1032";
        cell6.innerHTML = "1456";
        cell7.innerHTML = "1880";
    }

    if (m_id == '3' && p_id == '1') {
        cell1.innerHTML = "MN3508_ KV580";
        cell2.innerHTML = "T-MOTOR 12*4CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "222";
        cell5.innerHTML = "498";
        cell6.innerHTML = "774";
        cell7.innerHTML = "1050";
    }
    if (m_id == '3' && p_id == '2') {
        cell1.innerHTML = "MN3508_ KV580";
        cell2.innerHTML = "T-MOTOR 13*4.4CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "294";
        cell5.innerHTML = "606";
        cell6.innerHTML = "918";
        cell7.innerHTML = "1230";
    }
    if (m_id == '3' && p_id == '3') {
        cell1.innerHTML = "MN3508_ KV580";
        cell2.innerHTML = "T-MOTOR 14*4.8CF ";
        cell3.innerHTML = "0";
        cell4.innerHTML = "416";
        cell5.innerHTML = "784";
        cell6.innerHTML = "1152";
        cell7.innerHTML = "1520";
    }
    if (m_id == '4' && p_id == '1') {
        cell1.innerHTML = "MN3508_ KV700";
        cell2.innerHTML = "T-MOTOR 12*4CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "164";
        cell5.innerHTML = "396";
        cell6.innerHTML = "628";
        cell7.innerHTML = "860";
    }
    if (m_id == '4' && p_id == '2') {
        cell1.innerHTML = "MN3508_ KV700";
        cell2.innerHTML = "T-MOTOR 13*4.4CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "192";
        cell5.innerHTML = "468";
        cell6.innerHTML = "744";
        cell7.innerHTML = "1020";
    }
    if (m_id == '4' && p_id == '3') {
        cell1.innerHTML = "MN3508_ KV700";
        cell2.innerHTML = "T-MOTOR 11*3.7CF ";
        cell3.innerHTML = "0";
        cell4.innerHTML = "234";
        cell5.innerHTML = "526";
        cell6.innerHTML = "818";
        cell7.innerHTML = "1110";
    }
    if (m_id == '5' && p_id == '1') {
        cell1.innerHTML = "T-MOTOR U11 II KV120";
        cell2.innerHTML = 'T-MOTOR 26*8.5"CF';
        cell3.innerHTML = "0";
        cell4.innerHTML = "2357";
        cell5.innerHTML = "4931";
        cell6.innerHTML = "8475";
        cell7.innerHTML = "12114";
    }
    if (m_id == '5' && p_id == '2') {
        cell1.innerHTML = "T-MOTOR U11 II KV120";
        cell2.innerHTML = 'T-MOTOR 27*8.8"CF';
        cell3.innerHTML = "0";
        cell4.innerHTML = "2561";
        cell5.innerHTML = "5240";
        cell6.innerHTML = "8948";
        cell7.innerHTML = "12617";
    }
    if (m_id == '5' && p_id == '3') {
        cell1.innerHTML = "T-MOTOR U11 II KV120";
        cell2.innerHTML = 'T-MOTOR 28*9.2"CF';
        cell3.innerHTML = "0";
        cell4.innerHTML = "2950";
        cell5.innerHTML = "6195";
        cell6.innerHTML = "10137";
        cell7.innerHTML = "14159";
    }
    if (m_id == '6' && p_id == '1') {
        cell1.innerHTML = "T-MOTOR U8 Lite KV85";
        cell2.innerHTML = "T-MOTOR G28*9.2CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "1154";
        cell5.innerHTML = "2743";
        cell6.innerHTML = "4699";
        cell7.innerHTML = "6529";
    }
    if (m_id == '6' && p_id == '2') {
        cell1.innerHTML = "T-MOTOR U8 Lite KV85";
        cell2.innerHTML = "T-MOTOR G29*9.5CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "1411";
        cell5.innerHTML = "3044";
        cell6.innerHTML = "5216";
        cell7.innerHTML = "7030";
    }
    if (m_id == '7' && p_id == '1') {
        cell1.innerHTML = "T-MOTOR U8 Lite KV150";
        cell2.innerHTML = "T-MOTOR G30*10.5CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "1494";
        cell5.innerHTML = "2671";
        cell6.innerHTML = "4001";
        cell7.innerHTML = "5274";
    }
    if (m_id == '7' && p_id == '2') {
        cell1.innerHTML = "T-MOTOR U8 Lite KV150";
        cell2.innerHTML = "T-MOTOR G22*7.2CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "1666";
        cell5.innerHTML = "3040";
        cell6.innerHTML = "4710";
        cell7.innerHTML = "6657";
    }
    if (m_id == '8' && p_id == '1') {
        cell1.innerHTML = "T-MOTOR U8 Lite KV190";
        cell2.innerHTML = "T-MOTOR G28*9.2CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "1712";
        cell5.innerHTML = "3142";
        cell6.innerHTML = "4605";
        cell7.innerHTML = "6078";
    }
    if (m_id == '8' && p_id == '2') {
        cell1.innerHTML = "T-MOTOR U8 Lite KV190";
        cell2.innerHTML = "T-MOTOR G29*9.5CF";
        cell3.innerHTML = "0";
        cell4.innerHTML = "1979";
        cell5.innerHTML = "3540";
        cell6.innerHTML = "5067";
        cell7.innerHTML = "6536";
    }




}