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
        document.getElementById('nextButton').style.visibility = "hidden";
        // document.getElementById("arrow1").style = "position: absolute; top:230px;";
        // myInt = setInterval(function() {
        //     animatearrow();
        // }, 500);
        document.getElementById('table_iso').style.visibility = "visible";
        document.getElementById('thrust').style.visibility = "visible";
        document.getElementById('esc').style.visibility = "visible";
        document.getElementById('dc').style.visibility = "visible";
        document.getElementById('knob').style.visibility = "visible";
        document.getElementById('motor').style.visibility = "visible";

        document.getElementById('arrow1').style = "visibility:hidden ;position:absolute; left: 500px; top: 150px; height: 40px; z-index: 10;";

        document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(270deg)";
        document.getElementById('table_top').style.opacity = 0;


        // $(document).ready(function() {
        //     $("#table_iso").on('click', 'span', function() {
        //         $(".image img").removeClass("opaque");

        //         var newImage = $(this).index();

        //         $(".image img").eq(newImage).addClass("opaque");
        //         document.getElementById('table_top').style.visibility = 'visible';
        //         // document.getElementById("esc_iso").style.visibility = 'hidden';
        //         // document.getElementById("power_iso").style.visibility = 'hidden';
        //         // document.getElementById("knob_iso").style.visibility = 'hidden';
        //         // document.getElementById("table_iso").style.visibility = 'hidden';
        //         document.getElementById("thrust_iso").style.visibility = 'hidden';

        //     });
        // });
        // document.getElementById('table_iso').onclick = function() { step1(); };

    } else if (simsubscreennum == 2) {
        //hiding the previous canvas airfoil images.
        document.getElementById('equip').style.visibility = "hidden";
        document.getElementById('select_motor').style.visibility = "hidden";
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

        // document.getElementById('can3').innerHTML="Something here for step3";

        // document.getElementById('nob3-1').onclick=function() { step3(); };	
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
    // myStopFunction();
    // document.getElementById('a1').style.visibility="hidden";
    // document.getElementById('a2').style.cssText ="visibility=visible; top:0px; position: absolute; left: 170px; cursor:default; height: 200px; width: 400px;";
    var element = document.getElementById('table_top');
    element.style.visibility = 'visible';
    element.style.opacity = 1;
    element.style.transition = "opacity 5s ease-in";
    element.style.WebkitTransition = "opacity 5s ease-in-out";
    element.style.msTransition = "opacity 5s ease-in-out";


    var table1 = document.getElementById('table_iso');
    table1.style.opacity = 0;
    table1.style.transition = "opacity 5s ease-out";


    document.getElementById("esc_iso").style.visibility = 'hidden';
    document.getElementById("power_iso").style.visibility = 'hidden';
    document.getElementById("knob_iso").style.visibility = 'hidden';
    document.getElementById("table_iso").style.visibility = 'visible';
    document.getElementById("thrust_iso").style.visibility = 'hidden';




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

    document.getElementById('v1').innerHTML = "";
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
var totalCount = 0;
var clickOnEscWire1 = 0;
//    -----------------------  FIRST WIRE CHOSEN  ---------------------------------------------
function makeConnection1() {
    totalCount += 1;
    clickOnEscWire1 += 1;
    if (clickOnEscWire1 == 1) {
        console.log("Initial click");
        for (var i = 1; i < 4; i++) {
            document.getElementById("motorWire" + i).style.cursor = "pointer";
        }
        document.getElementById("escWire1").style.cursor = "none";
        document.getElementById("escWire1").setAttribute('disabled', 'true');
        blinkWires = setInterval(() => {
            for (var i = 1; i < 4; i++) {
                if (document.getElementById("motorWire" + i).style.visibility == "hidden")
                    document.getElementById("motorWire" + i).style.visibility = "visible";
                else
                    document.getElementById("motorWire" + i).style.visibility = "hidden";
            }
        }, 1000);
    } else {
        alert("You have already chosen this, move forward!");
    }
}

//  --------------------------- SECOND WIRE CHOSEN -----------------------------------
function makeConnection2() {
    totalCount += 1;
    clickOnEscWire1 += 1;
    if (clickOnEscWire1 == 1) {
        console.log("Second wire click");
        for (var i = 1; i < 4; i++) {
            document.getElementById("motorWire" + i).style.cursor = "pointer";
        }
        document.getElementById("escWire1").style.cursor = "none";
        document.getElementById("escWire1").setAttribute('disabled', 'true');
        blinkWires = setInterval(() => {
            for (var i = 1; i < 4; i++) {
                if (document.getElementById("motorWire" + i).style.visibility == "hidden")
                    document.getElementById("motorWire" + i).style.visibility = "visible";
                else
                    document.getElementById("motorWire" + i).style.visibility = "hidden";
            }
        }, 1000);
    } else {
        alert("You have already chosen this, move forward!");
    }
}

// -------------------------------- MOTOR WIRES


var clickOnMotorWire1 = 0;

function motorConnection1() {
    if (totalCount == 1) {
        clickOnMotorWire1 += 1;
        if (clickOnMotorWire1 == 1) {
            clearInterval(blinkWires);
            document.getElementById("motorWire1").style.cursor = "none"; // disable this forever. 
            // document.getElementById("motorWire2").style.cursor = "none";
            // document.getElementById("motorWire3").style.cursor = "none";
            console.log("The first wire has been chosen");
            document.getElementById("escWire2").style.cursor = "pointer";
        } else {
            alert("You have already chosen this!");
        }
    }
}
var clickOnMotorWire2 = 0;

function motorConnection2() {
    if (totalCount == 1) {
        clickOnMotorWire1 += 1;
        if (clickOnMotorWire1 == 1) {
            clearInterval(blinkWires);
            // document.getElementById("motorWire1").style.cursor = "none";
            document.getElementById("motorWire2").style.cursor = "none"; //disable this forever
            // document.getElementById("motorWire3").style.cursor = "none";
            console.log("The second wire has been chosen");
            document.getElementById("escWire2").style.cursor = "pointer";
        } else {
            alert("You have already chosen this!");
        }
    }
}
var clickOnMotorWire3 = 0;

function motorConnection3() {
    if (totalCount == 1) {
        clickOnMotorWire1 += 1;
        if (clickOnMotorWire1 == 1) {
            clearInterval(blinkWires);
            // document.getElementById("motorWire1").style.cursor = "none";
            // document.getElementById("motorWire2").style.cursor = "none";
            document.getElementById("motorWire3").style.cursor = "none"; // disable this forever
            console.log("The third wire has been chosen");
            document.getElementById("escWire2").style.cursor = "pointer";
        } else {
            alert("You have already chosen this!");
        }
    }
}

function appear(id_name, top_px) {
    var part = document.getElementById(id_name);
    // if (id_name === 'motor_iso') {
    //     document.getElementById('view_text').style = "visibility:visible;position:absolute;top:400px;left:440px;";


    // }
    part.style.visibility = "visible";
    // part.style.opacity = 1;
    part.style.top = top_px;
    part.style.transition = "all 1s ease-in-out";

}

function view_more() {
    document.getElementById('equip').style = "visibility:visible;position:absolute;top:100px;left:100px;height:300px;width:400px;";
    document.getElementById('thrust').style.visibility = "hidden";
    document.getElementById('dc').style.visibility = "hidden";
    document.getElementById('esc').style.visibility = "hidden";
    document.getElementById('knob').style.visibility = "hidden";
    document.getElementById('motor').style.visibility = "hidden";
    document.getElementById("table_iso").style.visibility = "hidden";


    document.getElementById("thrust_iso").style.visibility = "hidden";
    document.getElementById("esc_iso").style.visibility = "hidden";
    document.getElementById("power_iso").style.visibility = "hidden";
    document.getElementById("knob_iso").style.visibility = "hidden";
    document.getElementById("motor_iso").style.visibility = "hidden";
    // console.log("hello");


}

function select() {

    document.getElementById('thrust').style = "opacity:0;";
    document.getElementById('dc').style = "opacity:0;";
    document.getElementById('esc').style = "opacity:0;";
    document.getElementById('knob').style = "opacity:0;";
    document.getElementById('motor').style = "opacity:0;";
    document.getElementById('table_iso').style = "opacity:0;";
    document.getElementById('power_iso').style = "opacity:0;";
    document.getElementById('knob_iso').style = "opacity:0;";
    document.getElementById('thrust_iso').style = "opacity:0;";
    document.getElementById('esc_iso').style = "opacity:0;";
    document.getElementById("motor_iso").style = "opacity:0;";
    document.getElementById('equip').style.visibility = "visible";
    document.getElementById('select_motor').style.visibility = "visible";
    document.getElementById('select_mp').style.visibility = "hidden";
    document.getElementById("nextButton").style.visibility = "visible";


    //     console.log("hello");
}

function motor(prop_name, m_img) {

    var m_name = document.getElementById('select_prop' + prop_name);
    m_name.style.visibility = "visible";
    var p_name = document.getElementById('p_' + prop_name)
    p_name.style.visibility = "visible";
    p_name.style.opacity = 1;


    console.log('hello');
    // document.getElementById('select_prop').style.visibility = "visible";
    var img_m = document.getElementById(m_img);
    img_m.style.visibility = "visible";
    img_m.style.top = "220px";
    img_m.style.transition = "all 3s ease-in-out;";


}

function prop(name) {

}