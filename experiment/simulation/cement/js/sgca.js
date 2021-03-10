
//on click of next button
var mpointer=0;
var repeat =0;
var a,p,lastp,n,b,q,flag=0,avg,average;

var values=[[125.3,188.3,394.7,347.7,63.00,407.5,0.79,3.111],
			[125.3,188.9,395.1,347.7,63.6,407.5,0.79,3.101],
			[125.3,189.6,395.6,347.7,64.3,407.5,0.79,3.097],
			[125.3,189.8,396.1,347.7,64.5,407.5,0.79,3.165],
			[125.3,190,396.5,347.7,64.7,407.5,0.79,3.215]];
			
p=Math.floor(Math.random()*(4)); 		
 

function navNext()
{
  for (temp = 0; temp <= 7 ; temp++) 
  { 
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }

 simsubscreennum+=1;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 magic();
}


var ca;
var questions=["Capacity of Le-Chatelier Flask used for determining</br> Specific Gravity of Cement is",
				"The amount of cement taken is calculated as ",
				"Care should be taken for the Kerosene to be free from water.",
				"If the cement is exposed to extreme moisture content due to bad weather</br> conditions, then the specific gravity of cement may go up to "];
				
var options2=[["100ml","250ml","500ml","1000ml"],//250ml
			  ["W1+W2","W1-W2","W2-W1","W2"],//W2-W1
			  ["True","False"],//True
			  ["3.9","3.11","3.16","3.19"]];//3.19
			  
function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
   if (document.getElementById('arrow1').style.visibility=="hidden")
       document.getElementById('arrow1').style.visibility="visible";
   else
       document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{
		refresh1();
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function()	{
			 animatearrow(); 
		}, 500);
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="";
		// Positioning the arrow
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('a2').onclick=function() { step1(); };
		
	}
	
	else if (simsubscreennum==2)
	{
		//hiding the previous canvas airfoil image.
		document.getElementById("air07").style.visibility = 'hidden';
		
		//Prevent repetitive random numbers
		while (p == lastp) 
		{
			p = Math.floor(Math.random() * 4);
		}
		if(repeat==0)
		{
			lastp = p;
		}
		refresh2();
		refresh1();
		repeat+=1;
		if(flag==1)
		{
		 document.getElementById('r1').style.visibility="hidden";
		 document.getElementById('w1').style.visibility="hidden";
		 document.getElementById('p6-1').style.visibility="hidden";
		 document.getElementById('canvas6').style.visibility="hidden";
         document.getElementById('flask').style.visibility="visible";
		 document.getElementById('nob').style.visibility="visible";
		           
		 document.getElementById('trial').style="visibility:visible;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;

		 document.getElementById('nextButton').style.visibility="hidden";

		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob').onclick=function() { step2(); };
	}
	else
				{
		document.getElementById('a3').style.visibility="hidden";
	document.getElementById('a4').style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="hidden";

		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob').onclick=function() { step2(); };
	}
		
		
	}
	else if (simsubscreennum==3)
	{
				refresh1();

		 document.getElementById('flask3').style.visibility="visible";
		 document.getElementById('nob3-1').style.visibility="visible";
	     document.getElementById('cem3-1').style.visibility="visible";
	     document.getElementById('a5').style.visibility="hidden";
	     document.getElementById('a6').style.visibility="hidden";
	     document.getElementById('cem2-3').style.visibility="hidden";
	     document.getElementById('nextButton').style.visibility="hidden";
     	 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob3-1').onclick=function() { step3(); };	
	}
	else if (simsubscreennum==4)
	{
				refresh1();

		document.getElementById('flask4').style.visibility="visible";
		document.getElementById('nob4-1').style.visibility="visible";
        document.getElementById('a11').style.visibility="hidden";
	    document.getElementById('a12').style.visibility="hidden";
        document.getElementById('k1').style.visibility="hidden";
	    document.getElementById('k2').style.visibility="hidden";	
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob4-1').onclick=function() { step4(); };
	}
	else if (simsubscreennum==5)
	{
				refresh1();

		document.getElementById('flask5').style.visibility="visible";
	    document.getElementById('nob5-1').style.visibility="visible";
        document.getElementById('a7').style.visibility="hidden";
	    document.getElementById('a8').style.visibility="hidden";
        document.getElementById('k3').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob5-1').onclick=function() { step5(); };
				
	}
	else if (simsubscreennum==6)
	{
		refresh1();
		document.getElementById('k5').style.visibility="hidden";
	    document.getElementById('a9').style.visibility="hidden";
	    document.getElementById('a10').style.visibility="hidden";
	
		document.getElementById('can6-1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)="+values[p][0] +" g";
		document.getElementById('can6-2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = "+values[p][1] +" g" ;
		document.getElementById('can6-3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =" +values[p][2]  +" g";
		document.getElementById('can6-4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = "+values[p][3]  +" g" ;
		document.getElementById('can6-5').innerHTML="Weight of flask+water (W<sub>5</sub>) =" +values[p][4]  +" g";
		document.getElementById('can6-6').innerHTML="Specific gravity of kerosene =" +values[p][6];		
		calculateSpecificGravity();

        if(repeat>1)
		{
			calculateSpecificGravity2();
		}
		if(repeat < 2 && repeat>0)
		 {
			
			 flag=1;
			 simsubscreennum=1;

            document.getElementById('k5').style.visibility="hidden";
	        document.getElementById('a9').style.visibility="hidden";
	        document.getElementById('a10').style.visibility="hidden";
            document.getElementById('k5').style.visibility="hidden";
	        document.getElementById('a9').style.visibility="hidden";
	        document.getElementById('a10').style.visibility="hidden";
	        document.getElementById('k5').style.visibility="hidden";
	        document.getElementById('a9').style.visibility="hidden";
	        document.getElementById('a10').style.visibility="hidden";
            document.getElementById('k5').style.visibility="hidden";
	        document.getElementById('a9').style.visibility="hidden";
	        document.getElementById('a10').style.visibility="hidden";
	
		 }
	}
	else if (simsubscreennum==7)
	{
		document.getElementById("trial").style.visibility="hidden";
		document.getElementById("p6-2").style.visibility="hidden";
		document.getElementById("l6-2").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("output2").style.visibility="hidden";
		document.getElementById("7-1").innerHTML=values[lastp][7];
		document.getElementById("7-3").innerHTML=values[p][7];
		document.getElementById("check3").onclick=function()
		{
			if(!document.getElementById("avg").value  || !document.getElementById("avg").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				avg = document.getElementById("avg").value;
				average=(values[p][7]+values[lastp][7])/2;
				if(Math.round(avg) == Math.round(average))
				{
					document.getElementById("check3").style.visibility="hidden";
					document.getElementById("rw").style="color:#32CD32; font-size:22px; position:absolute; left:510px; top:118px;";
					document.getElementById("rw").innerHTML="&#10004;";
					document.getElementById("rw").style.visibility="visible";
					document.getElementById("inferenceDiv").style.visibility="visible";
				}
				else
				{
					document.getElementById("rw").style="color:red; font-size:22px; position:absolute; left:510px; top:118px;";
					document.getElementById("rw").innerHTML="&#10008;";
					document.getElementById("rw").style.visibility="visible";
				}
			}	
			
		}
	}
}

	function step1()
{
	myStopFunction();
	// document.getElementById('a1').style.visibility="hidden";
	document.getElementById('a2').style.visibility="hidden";
	
	document.getElementById('a3').style.visibility="visible";
	var air =  document.getElementById("change-airfoil");
	air.style.visibility = 'visible';
	
	// document.getElementById('a4').style.visibility="visible";
	
}


	function step2()
{
	myStopFunction();
	document.getElementById('nob').style.visibility="hidden";
	document.getElementById('nob1').style.visibility="visible";
	document.getElementById("nob1").onclick="";
	setTimeout(function(){
   document.getElementById('hand').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
     document.getElementById('hand').onclick=function() { step21(); };
	}, 1200);
}


function step21()
{
	myStopFunction();
	
	document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		 document.getElementById('cem2-4').style.visibility="visible";
		document.getElementById('cem2-1').style.visibility="visible";
	document.getElementById('cem2-1').style.animation = "water-5 1.5s 1 reverse";
	document.getElementById('cem2-2').style.visibility="visible";
	document.getElementById('cem2-2').style.animation = "water-5 1.8s 1 forwards";
	},500);
   
	setTimeout(function()
	{
		document.getElementById('cem2-4').style.visibility="hidden";
		document.getElementById('cem2-1').style.visibility="hidden";
        document.getElementById('hand').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
   					
    document.getElementById('nob1').onclick=function() { step22(); };

    }, 1800);
}

	
function step22()
{
    myStopFunction();
	document.getElementById('nob1').style.visibility="hidden";
	document.getElementById('nob2').style.visibility="visible";
	document.getElementById('cflask').style.visibility="visible";
	setTimeout(function()
	{
    myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('cflask').onclick=function() { step23(); };

 }, 1300);
}
 
function step23()
{
	myStopFunction();
	document.getElementById('flask').style.visibility="hidden";
		document.getElementById('cflask').style.visibility="hidden";

	document.getElementById('nob2').style.visibility="hidden";
	document.getElementById('cem2-2').style.visibility="hidden";
	setTimeout(function(){
	document.getElementById('a5').style.visibility="visible";
	document.getElementById('a6').style.visibility="visible";
	document.getElementById('cem2-3').style.visibility="visible";
	}, 500);
	setTimeout(function()
	{

      document.getElementById('can2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = "+values[p][1]+" g";
	  if(repeat==5)
	  {
		  document.getElementById('v2').innerHTML=+values[p][1]+".00g";
	  }
	  else 
	  {
		document.getElementById('v2').innerHTML=+values[p][1]+"g";
      }
	  document.getElementById("nextButton").style.visibility="visible";
	}, 1200);
}



function step3()
{
	myStopFunction();
	document.getElementById('nob3-1').style.visibility="hidden";
	document.getElementById('nob3-2').style.visibility="visible";
	document.getElementById("nob3-2").onclick=""; 
	setTimeout(function(){
   document.getElementById('hand3').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('hand3').onclick=function() { step31(); };
	}, 1200);
}


function step31()
{
	myStopFunction();
	
	document.getElementById('hand3').style.transformOrigin = "100% 80%";
	document.getElementById('hand3').style.animation = "valveturn-4 1.5s forwards ";
			
			setTimeout(function()
			{
							document.getElementById('kero3-4').style.visibility="visible";

		document.getElementById('ker3-1').style.visibility="visible";
	    document.getElementById('ker3-1').style.animation = "water-5 1.5s 1 reverse";
	    document.getElementById('ker3-2').style.visibility="visible";
	    document.getElementById('ker3-2').style.animation = "water-5 4.5s 1 forwards";
	},250);
	setTimeout(function()
	{
		document.getElementById('kero3-4').style.visibility="hidden";
        document.getElementById('ker3-1').style.visibility="hidden";
		document.getElementById('ker3-2').style.visibility="visible";
		document.getElementById('hand3').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";
			
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('nob3-2').onclick=function() { step32(); };
       }, 1600);
}

	
function step32()
{
     myStopFunction();
	 document.getElementById('nob3-2').style.visibility="hidden";
	 document.getElementById('nob3-3').style.visibility="visible";
	 document.getElementById('cflask3').style.visibility="visible";
     setTimeout(function()
	{
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('cflask3').onclick=function() { step33(); };

    }, 1300);
}
 
function step33()
{
	myStopFunction();
	document.getElementById('cflask3').style.visibility="hidden";

	document.getElementById('flask3').style.visibility="hidden";
	document.getElementById('nob3-3').style.visibility="hidden";
	document.getElementById('ker3-2').style.visibility="hidden";
	document.getElementById('cem3-1').style.visibility="hidden";

	setTimeout(function(){
		document.getElementById('k1').style.visibility="visible";
	document.getElementById('k2').style.visibility="visible";
	document.getElementById('a11').style.visibility="visible";
	document.getElementById('a12').style.visibility="visible";
		}, 500);
	setTimeout(function()
	{
	
		//document.getElementById('nextButton').style.visibility="visible";


		document.getElementById('can3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) = "+values[p][2]  +"g";
        document.getElementById('v3').innerHTML=+values[p][2]+"g";
		if(repeat==1)
		{
			validateAnswer(1,2,"50px","100px");
		}
		else
		{
			validateAnswer(2,0,"50px","100px");
		}

	}, 1200);
}

function step4()
{
	myStopFunction();
	document.getElementById('nob4-1').style.visibility="hidden";
	document.getElementById('nob4-2').style.visibility="visible";
	document.getElementById("nob4-2").onclick=""; 
	setTimeout(function(){
   document.getElementById('hand4').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('hand4').onclick=function() { step41(); };
	}, 1200);
}


function step41()
{
	myStopFunction();
	document.getElementById('hand4').style.transformOrigin = "100% 80%";
	document.getElementById('hand4').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		 document.getElementById('kero4-3').style.visibility="visible";
		 document.getElementById('kero4-1').style.visibility="visible";
	     document.getElementById('kero4-1').style.animation = "water-5 1.5s 1 reverse";
	     document.getElementById('kero4-2').style.visibility="visible";
	     document.getElementById('kero4-2').style.animation = "water-5 1.8s 1 forwards";
	},500);
   
	setTimeout(function()
	{
		document.getElementById('kero4-3').style.visibility="hidden";
		document.getElementById('kero4-1').style.visibility="hidden";
        document.getElementById('hand4').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
       document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";
			
       document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
       document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
       document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('nob4-2').onclick=function() { step42(); };

       }, 1800);
}
	
function step42()
{
        myStopFunction();
		document.getElementById('nob4-2').style.visibility="hidden";
		document.getElementById('nob4-3').style.visibility="visible";
		document.getElementById('cflask4').style.visibility="visible";
       setTimeout(function()
		{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('cflask4').onclick=function() { step43(); };

        }, 1300);
}
 
function step43()
{
	myStopFunction();
	document.getElementById('flask4').style.visibility="hidden";
		document.getElementById('cflask4').style.visibility="hidden";

	document.getElementById('nob4-3').style.visibility="hidden";
	document.getElementById('kero4-2').style.visibility="hidden";
	setTimeout(function(){
		document.getElementById('k3').style.visibility="visible";
	document.getElementById('a7').style.visibility="visible";
	document.getElementById('a8').style.visibility="visible";
	
	}, 500);
	setTimeout(function()
	{
		
		document.getElementById('nextButton').style.visibility="visible";

		document.getElementById('can4').innerHTML="Weight of flask + kerosene(W<sub>4</sub>) = "+values[p][3] +"g";
		document.getElementById('v4').innerHTML=+values[p][3]+"g";

	}, 1200);
}

function step5()
{
	myStopFunction();
	document.getElementById('nob5-1').style.visibility="hidden";
	document.getElementById('nob5-2').style.visibility="visible";
	document.getElementById("nob1").onclick=""; 
	setTimeout(function(){
   document.getElementById('hand5').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('hand5').onclick=function() { step51(); };
	}, 1200);
}


function step51()
{
	myStopFunction();
	
	document.getElementById('hand5').style.transformOrigin = "100% 80%";
	document.getElementById('hand5').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('wtr2').style.visibility="visible";
		document.getElementById('wtr').style.visibility="visible";
	    document.getElementById('wtr').style.animation = "water-5 1.8s 1 forwards";
	},500);
   
	setTimeout(function()
	{
		document.getElementById('wtr2').style.visibility="hidden";
		document.getElementById('wtr3').style.visibility="hidden";
        document.getElementById('hand5').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";
			
         document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
         document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
         document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('nob5-2').onclick=function() { step52(); };

       }, 1800);
}
	
function step52()
{
     myStopFunction();
	 document.getElementById('nob5-2').style.visibility="hidden";
	 document.getElementById('nob5-3').style.visibility="visible";
	 document.getElementById('cflask5').style.visibility="visible";
     setTimeout(function()
	 {
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('cflask5').onclick=function() { step53(); };

     }, 1300);
}
 
function step53()
{
	myStopFunction();
	document.getElementById('flask5').style.visibility="hidden";
	document.getElementById('cflask5').style.visibility="hidden";

	document.getElementById('nob5-3').style.visibility="hidden";
	document.getElementById('wtr').style.visibility="hidden";
	setTimeout(function(){
	document.getElementById('k5').style.visibility="visible";
	document.getElementById('a9').style.visibility="visible";
	document.getElementById('a10').style.visibility="visible";
    }, 500);
	setTimeout(function()
	{
		setTimeout(function()
		{
			if(repeat==1)
			{
				document.getElementById('nextButton').style.visibility="visible";
			}
			if(repeat==2)
			{
				validateAnswer(3,3,"50px","100px");
			}
         },500);
		document.getElementById('can5').innerHTML="Weight of flask+water (W<sub>5</sub>)= "+values[p][4]  +"g";
		if(repeat>1)
		{
		document.getElementById('v5').innerHTML=+values[p][4]+"g";
        }
		else
		{
		 document.getElementById('v5').innerHTML=+values[p][4]+" g";
        }
	}, 1200);
}
function refresh1()
{
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
	document.getElementById('can3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";
	
	document.getElementById('can4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
	document.getElementById('can5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";
	document.getElementById('can6-1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)=";
	
	document.getElementById('can6-2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
		document.getElementById('can6-3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";
	document.getElementById('can6-4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
	document.getElementById('can6-5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";
	 
	 document.getElementById('v1').innerHTML="";
	 document.getElementById('v2').innerHTML="";
	 document.getElementById('v3').innerHTML="";
	 document.getElementById('v4').innerHTML="";
	 document.getElementById('v5').innerHTML="";
	 		 
	
}

function refresh2()
{
	document.getElementById('output').value="";
}

function calculateSpecificGravity()
{
	document.getElementById("form").onclick=function()
	{
		document.getElementById("formula").style.visibility="visible";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
	}
	
	document.getElementById("check").onclick=function()
	{
		document.getElementById("formula").style.visibility="hidden";
		if(!document.getElementById("output").value  || !document.getElementById("output").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n = document.getElementById("output").value;
			console.log(values[p][7]);
			if(Math.round(n) == Math.round(values[p][7]))
			{
				document.getElementById("check").style.visibility="hidden";
				document.getElementById("form").style.visibility="hidden";
				document.getElementById("r1").style.visibility="visible";
				document.getElementById("result").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				// document.getElementById("p6-1").innerHTML="Specific gravity of cement = "+values[p][7];
				// document.getElementById("p6-1").style.visibility="visible";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("result").style.visibility="visible";
				document.getElementById("w1").style.visibility="visible";
			}
		}	
		document.getElementById("result").onclick=function()
		{
			document.getElementById("check").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			document.getElementById("r1").style.visibility="hidden";
			document.getElementById("w1").style.visibility="hidden";
			document.getElementById("form").style.visibility="hidden";
			document.getElementById("formula").style.visibility="hidden";
			document.getElementById("6-1").style.visibility="hidden";
			document.getElementById("p6-1").innerHTML="Specific gravity of cement = "+values[p][7];
			document.getElementById("p6-1").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}	

function calculateSpecificGravity2()
{
	document.getElementById("l6-1").style.visibility="hidden";
	document.getElementById("6-2").style.visibility="visible";
	document.getElementById("l6-2").style.visibility="visible";
	document.getElementById("form2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="visible";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
	}
	
	document.getElementById("check2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="hidden";
		if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n2 = document.getElementById("output2").value;
			console.log(values[p][7]);
			if(Math.round(n2) == Math.round(values[p][7]))
			{
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("form2").style.visibility="hidden";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("result2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("result2").style.visibility="visible";
				document.getElementById("w2").style.visibility="visible";
			}
		}	
		document.getElementById("result2").onclick=function()
		{
			document.getElementById("l6-2").style.visibility="hidden";
			document.getElementById("check2").style.visibility="hidden";
			document.getElementById("result2").style.visibility="hidden";
			document.getElementById("w2").style.visibility="hidden";
			document.getElementById("form2").style.visibility="hidden";
			document.getElementById("formula2").style.visibility="hidden";
			document.getElementById("6-2").style.visibility="hidden";
			document.getElementById("p6-2").innerHTML="Specific gravity of cement = "+values[p][7];
			document.getElementById("p6-2").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}

function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==2)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 2.8 - 3.15";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(average>=2.8 && average<=3.15)
		{
			document.getElementById("infAns").innerHTML="According to IS 10262, suggested range of specific gravity of cement for marine application is 2.8 - 3.15. The Specific gravity obtained for given cement sample is "+average+". So the test result is in range.";
		}
		else 
		{
			document.getElementById("infAns").innerHTML="According to IS 10262, suggested range of specific gravity of cement for marine application is 2.8 - 3.15. The Specific gravity obtained for given cement sample is "+average+". So the test result is not in range.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}					






// ADD
var count = 0;
//this count is to show the nomenclature of airfoil.
function changeNomen(){
	if(count == 6){
		var nomen = document.getElementById("change-airfoil");
		nomen.style.visibility = "hidden";
		var button = document.getElementById("nextButton");
		button.style.visibility = 'visible';
	}
	count = count + 1;
	document.getElementById("a3").style.visibility = 'hidden';
	for(i=1;i<=7;i++){
		document.getElementById("air0"+i).style.visibility = 'hidden';
	}
	document.getElementById("air0"+count).style.visibility = 'visible';
}
