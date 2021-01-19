function calC() {	
		let score1 = document.getElementById('score1').value;
		let score2 = document.getElementById('score2').value;
		let score3 = document.getElementById('score3').value;
		let score4 = document.getElementById('score4').value;
		let score5 = document.getElementById('score5').value;
		let score6 = document.getElementById('score6').value;

		let percent1 = parseInt(score1/50*100);
		document.getElementById('progBar1').value=percent1;
		let percent2 = parseInt(score2/50*100);
		document.getElementById('progBar2').value=percent2;
		let percent3 = parseInt(score3/50*100);
		document.getElementById('progBar3').value=percent3;
		let percent4 = parseInt(score4/50*100);
		document.getElementById('progBar4').value=percent4;
		let percent5 = parseInt(score5/50*100);
		document.getElementById('progBar5').value=percent5;
		let percent6 = parseInt(score6/50*100);
		document.getElementById('progBar6').value=percent6;

		let averagePercent = (percent1+percent2+percent3+percent4+percent5+percent6)/6;
		
		document.getElementById('percent1').innerHTML=percent1;
		document.getElementById('percent2').innerHTML=percent2;
		document.getElementById('percent3').innerHTML=percent3;
		document.getElementById('percent4').innerHTML=percent4;
		document.getElementById('percent5').innerHTML=percent5;
		document.getElementById('percent6').innerHTML=percent6;		

		// Grading	
		if(percent1<40){
			document.getElementById('grade1').innerHTML=9;
		} else if(percent1<45){
			document.getElementById('grade1').innerHTML=8;
		} else if(percent1<50){
			document.getElementById('grade1').innerHTML=7;
		} else if(percent1<55){
			document.getElementById('grade1').innerHTML=6;
		} else if(percent1<60){
			document.getElementById('grade1').innerHTML=5;
		} else if(percent1<65){
			document.getElementById('grade1').innerHTML=4;
		} else if(percent1<70){
			document.getElementById('grade1').innerHTML=3;
		}  else if(percent1<75){
			document.getElementById('grade1').innerHTML=2;
		} else {
			document.getElementById('grade1').innerHTML=1;	
		}

		if(percent2<40){
			document.getElementById('grade2').innerHTML=9;
		} else if(percent2<45){
			document.getElementById('grade2').innerHTML=8;
		} else if(percent2<50){
			document.getElementById('grade2').innerHTML=7;
		} else if(percent2<55){
			document.getElementById('grade2').innerHTML=6;
		} else if(percent2<60){
			document.getElementById('grade2').innerHTML=5;
		} else if(percent2<65){
			document.getElementById('grade2').innerHTML=4;
		} else if(percent2<70){
			document.getElementById('grade2').innerHTML=3;
		}  else if(percent2<75){
			document.getElementById('grade2').innerHTML=2;
		} else {
			document.getElementById('grade2').innerHTML=1;	
		}

		if(percent3<40){
			document.getElementById('grade3').innerHTML=9;
		} else if(percent3<45){
			document.getElementById('grade3').innerHTML=8;
		} else if(percent3<50){
			document.getElementById('grade3').innerHTML=7;
		} else if(percent3<55){
			document.getElementById('grade3').innerHTML=6;
		} else if(percent3<60){
			document.getElementById('grade3').innerHTML=5;
		} else if(percent3<65){
			document.getElementById('grade3').innerHTML=4;
		} else if(percent3<70){
			document.getElementById('grade3').innerHTML=3;
		}  else if(percent3<75){
			document.getElementById('grade3').innerHTML=2;
		} else {
			document.getElementById('grade3').innerHTML=1;	
		}

		if(percent4<40){
			document.getElementById('grade4').innerHTML=9;
		} else if(percent4<45){
			document.getElementById('grade4').innerHTML=8;
		} else if(percent4<50){
			document.getElementById('grade4').innerHTML=7;
		} else if(percent4<55){
			document.getElementById('grade4').innerHTML=6;
		} else if(percent4<60){
			document.getElementById('grade4').innerHTML=5;
		} else if(percent4<65){
			document.getElementById('grade4').innerHTML=4;
		} else if(percent4<70){
			document.getElementById('grade4').innerHTML=3;
		}  else if(percent4<75){
			document.getElementById('grade4').innerHTML=2;
		} else {
			document.getElementById('grade4').innerHTML=1;	
		}

		if(percent5<40){
			document.getElementById('grade5').innerHTML=9;
		} else if(percent5<45){
			document.getElementById('grade5').innerHTML=8;
		} else if(percent5<50){
			document.getElementById('grade5').innerHTML=7;
		} else if(percent5<55){
			document.getElementById('grade5').innerHTML=6;
		} else if(percent5<60){
			document.getElementById('grade5').innerHTML=5;
		} else if(percent5<65){
			document.getElementById('grade5').innerHTML=4;
		} else if(percent5<70){
			document.getElementById('grade5').innerHTML=3;
		}  else if(percent5<75){
			document.getElementById('grade5').innerHTML=2;
		} else {
			document.getElementById('grade5').innerHTML=1;	
		}
	
		if(percent6<40){
			document.getElementById('grade6').innerHTML=9;
		} else if(percent6<45){
			document.getElementById('grade6').innerHTML=8;
		} else if(percent6<50){
			document.getElementById('grade6').innerHTML=7;
		} else if(percent6<55){
			document.getElementById('grade6').innerHTML=6;
		} else if(percent6<60){
			document.getElementById('grade6').innerHTML=5;
		} else if(percent6<65){
			document.getElementById('grade6').innerHTML=4;
		} else if(percent6<70){
			document.getElementById('grade6').innerHTML=3;
		}  else if(percent6<75){
			document.getElementById('grade6').innerHTML=2;
		} else {
			document.getElementById('grade6').innerHTML=1;	
		}

////////////////// STANDARDS
		if(percent1<40){
			document.getElementById('standard1').innerHTML="Fail";
		} else if(percent1<45){
			document.getElementById('standard1').innerHTML="Pass";
		} else if(percent1<50){
			document.getElementById('standard1').innerHTML="Pass";
		} else if(percent1<55){
			document.getElementById('standard1').innerHTML="Credit";
		} else if(percent1<60){
			document.getElementById('standard1').innerHTML="Credit";
		} else if(percent1<65){
			document.getElementById('standard1').innerHTML="Merit";
		} else if(percent1<70){
			document.getElementById('standard1').innerHTML="Merit";
		}  else if(percent1<75){
			document.getElementById('standard1').innerHTML="Distinction";
		} else {
			document.getElementById('standard1').innerHTML="Distinction";	
		}

		if(percent2<40){
			document.getElementById('standard2').innerHTML="Fail";
		} else if(percent2<45){
			document.getElementById('standard2').innerHTML="Pass";
		} else if(percent2<50){
			document.getElementById('standard2').innerHTML="Pass";
		} else if(percent2<55){
			document.getElementById('standard2').innerHTML="Credit";
		} else if(percent2<60){
			document.getElementById('standard2').innerHTML="Credit";
		} else if(percent2<65){
			document.getElementById('standard2').innerHTML="Merit";
		} else if(percent2<70){
			document.getElementById('standard2').innerHTML="Merit";
		}  else if(percent2<75){
			document.getElementById('standard2').innerHTML="Distinction";
		} else {
			document.getElementById('standard2').innerHTML="Distinction";	
		}

		if(percent3<40){
			document.getElementById('standard3').innerHTML="Fail";
		} else if(percent3<45){
			document.getElementById('standard3').innerHTML="Pass";
		} else if(percent3<50){
			document.getElementById('standard3').innerHTML="Pass";
		} else if(percent3<55){
			document.getElementById('standard3').innerHTML="Credit";
		} else if(percent3<60){
			document.getElementById('standard3').innerHTML="Credit";
		} else if(percent3<65){
			document.getElementById('standard3').innerHTML="Merit";
		} else if(percent3<70){
			document.getElementById('standard3').innerHTML="Merit";
		}  else if(percent3<75){
			document.getElementById('standard3').innerHTML="Distinction";
		} else {
			document.getElementById('standard3').innerHTML="Distinction";	
		}

		if(percent4<40){
			document.getElementById('standard4').innerHTML="Fail";
		} else if(percent4<45){
			document.getElementById('standard4').innerHTML="Pass";
		} else if(percent4<50){
			document.getElementById('standard4').innerHTML="Pass";
		} else if(percent4<55){
			document.getElementById('standard4').innerHTML="Credit";
		} else if(percent4<60){
			document.getElementById('standard4').innerHTML="Credit";
		} else if(percent4<65){
			document.getElementById('standard4').innerHTML="Merit";
		} else if(percent4<70){
			document.getElementById('standard4').innerHTML="Merit";
		}  else if(percent4<75){
			document.getElementById('standard4').innerHTML="Distinction";
		} else {
			document.getElementById('standard4').innerHTML="Distinction";	
		}

		if(percent5<40){
			document.getElementById('standard5').innerHTML="Fail";
		} else if(percent5<45){
			document.getElementById('standard5').innerHTML="Pass";
		} else if(percent5<50){
			document.getElementById('standard5').innerHTML="Pass";
		} else if(percent5<55){
			document.getElementById('standard5').innerHTML="Credit";
		} else if(percent5<60){
			document.getElementById('standard5').innerHTML="Credit";
		} else if(percent5<65){
			document.getElementById('standard5').innerHTML="Merit";
		} else if(percent5<70){
			document.getElementById('standard5').innerHTML="Merit";
		}  else if(percent5<75){
			document.getElementById('standard5').innerHTML="Distinction";
		} else {
			document.getElementById('standard5').innerHTML="Distinction";	
		}

		if(percent6<40){
			document.getElementById('standard6').innerHTML="Fail";
		} else if(percent6<45){
			document.getElementById('standard6').innerHTML="Pass";
		} else if(percent6<50){
			document.getElementById('standard6').innerHTML="Pass";
		} else if(percent6<55){
			document.getElementById('standard6').innerHTML="Credit";
		} else if(percent6<60){
			document.getElementById('standard6').innerHTML="Credit";
		} else if(percent6<65){
			document.getElementById('standard6').innerHTML="Merit";
		} else if(percent6<70){
			document.getElementById('standard6').innerHTML="Merit";
		}  else if(percent6<75){
			document.getElementById('standard6').innerHTML="Distinction";
		} else {
			document.getElementById('standard6').innerHTML="Distinction";	
		}

		document.getElementById('percent').value=parseInt(averagePercent);
		document.getElementById('progBar').value=averagePercent;
	}
