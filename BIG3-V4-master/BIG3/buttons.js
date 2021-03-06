app.controller('buttons', function($scope) {
	$scope.benchButton = true;


	$scope.weightButton = true;

	$scope.oneRMPieButton = true;

	$scope.myDataSource = {
	    chart: {
	    	type: "column",
	    	width: '925',
	    	height: '400',
	    	spacingTop: 20
	    },
	    title: {
	        text: "Stacks: Weight Record",
	        	style: {
	        		fontSize: '40px'
	        	}
	    },
		series: [{
  	    	name: '1 Rep Max',
	        data: [59.9, 61.5, 96.4, 129.2, 124.0, 186.0, 115.6, 148.5, 276.4, 184.1, 105.6, 54.4],
	        color: 'red'
	    }]
	};

	$scope.myDataSource2 = {
	    chart: {
	    	type: "column",
	    	width: '925',
	    	height: '400',
	    	spacingTop: 20
	    },
	    title: {
	        text: "Pumps: Rep Records",
	        	style: {
	        		fontSize: '40px'
	        	}
	    },
		series: [{
  	    	name: '1 Rep Max',
	        data: [59.9, 61.5, 96.4, 129.2, 124.0, 186.0, 115.6, 148.5, 276.4, 184.1, 105.6, 54.4],
	        color: 'red'
	    }]
	};

	$scope.myDataSource3 = {
	    chart: {
	    	type: "column",
	    	width: '925',
	    	height: '500'

	    },
	    title: {
	    	text: "Last 10 Sets",
	    		style: {
		    		fontSize: '60px'
	    		}
	    },
	    yAxis: {
	        title: {
	            text: 'Weight',
	            	style: {
	            		fontSize: '45px'
	            	}
	        },
	        labels: {
	        	style: {
	        		fontSize: '30px'
	        	}
	        }
    	},
    	xAxis: {
    		categories: [1,2,3,4,5,6,7,8,9,10,20,30],
    		labels: {
	        	style: {
	        		fontSize: '30px'
	        	}
	        }
    	},
    	legend: {
    		itemStyle: {
    			fontSize: '20px'
    		}
    	},
	    series: [{
  	    	name: '1 Rep Max',
	        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
	        color: 'red'
	    }]
	};

	$scope.myDataSource4 = {
	    chart: {
	        caption: "One Rep Max",
	        subCaption: "Total: " + stats[0].oneRM,
	    },

	    data: [
	    	{label: "Bench", value: stats[1].oneRM},
	    	{label: "Squat", value: stats[2].oneRM},
	    	{label: "Deadlift", value: stats[3].oneRM}
	    ],
	};

	$scope.changeTotals = function(){
		$scope.xrecords = stats[0].records;
		$scope.xreps = stats[0].reps;
		$scope.xsets = stats[0].sets;
		$scope.xweight = stats[0].weight;
		$scope.xgains = stats[0].gains;
		$scope.xchallenges = stats[0].challenges;
		$scope.xoneRM = stats[0].oneRM;
		$scope.xlevel = levelInfo[level].name;
		$scope.xcurrent = levelInfo[level].current;
		$scope.xtotal = levelInfo[level].gains;
		$scope.progress = progress;
	}

	$scope.refresh = function(){
		if (exercise == "Bench"){
			$scope.changeBench();
		} else if (exercise == "Squat"){
			$scope.changeSquat();
		} else if (exercise == "Deadlift"){
			$scope.changeDead();
		}
		$scope.oneRMPie();
		$scope.weightStacks();
		$scope.weightPumps();
	}

	$scope.changeBench = function(){
		$scope.benchButton = true;
		$scope.squatButton = false;
		$scope.deadButton = false;
		$scope.stack = stacksBench;
		$scope.pump = pumpsBench;
		$scope.challenge = benchChallenges;
		$scope.srecords = stats[1].records;
		$scope.sreps = stats[1].reps;
		$scope.ssets = stats[1].sets;
		$scope.sweight = stats[1].weight;
		$scope.sgains = stats[1].gains;
		$scope.schallenges = stats[1].challenges;
		$scope.soneRM = stats[1].oneRM;
		$scope.hist = benchHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		$scope.exercise = exercise;
 		$scope.history();
 		$scope.weightStacks();
 		$scope.weightPumps();	
	}
	$scope.changeSquat = function(){
		$scope.squatButton = true;
		$scope.benchButton = false;
		$scope.deadButton = false;
		$scope.stack = stacksSquat;
		$scope.pump = pumpsSquat;
		$scope.challenge = squatChallenges;
		$scope.srecords = stats[2].records;
		$scope.sreps = stats[2].reps;
		$scope.ssets = stats[2].sets;
		$scope.sweight = stats[2].weight;
		$scope.sgains = stats[2].gains;
		$scope.schallenges = stats[2].challenges;
		$scope.soneRM = stats[2].oneRM;
		$scope.hist = squatHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		$scope.exercise = exercise;
 		$scope.history(); 	
 		$scope.weightStacks();
 		$scope.weightPumps();	
	}
	$scope.changeDead = function(){
		$scope.deadButton = true;
		$scope.squatButton = false;
		$scope.benchButton = false;
		$scope.stack = stacksDead;
		$scope.pump = pumpsDead;
		$scope.challenge = deadChallenges;
		$scope.srecords = stats[3].records;
		$scope.sreps = stats[3].reps;
		$scope.ssets = stats[3].sets;
		$scope.sweight = stats[3].weight;
		$scope.sgains = stats[3].gains;
		$scope.schallenges = stats[3].challenges;
		$scope.soneRM = stats[3].oneRM;
		$scope.hist = deadHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		$scope.exercise = exercise;
 		$scope.history();
 		$scope.weightStacks();
 		$scope.weightPumps();
	}
	$scope.weightStacks = function(){
		$scope.weightButton = true;
		$scope.oneRMButton = false;
		$scope.recordsButton = false;
		/*
		if (exercise == "Bench"){
			for (i = 0, j=9; i<stacksBench.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksBench[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksBench[i].weight;
		    } 
		} else if (exercise == "Squat"){
			for (i = 0, j=9; i<stacksSquat.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksSquat[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksSquat[i].weight;
		    }
	    } else if (exercise == "Deadlift"){
	    	for (i = 0, j=9; i<stacksDead.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksDead[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksDead[i].weight;
	    	}
	    }
	    */
	}
	$scope.weightPumps = function(){
		$scope.weightButton = true;
		$scope.oneRMButton = false;
		$scope.recordsButton = false;
		/*
		if (exercise == "Bench"){
			for (i = 0, j=9; i<pumpsBench.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsBench[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsBench[i].reps;
		    }
		} else if (exercise == "Squat"){
			for (i = 0, j=9; i<pumpsSquat.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsSquat[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsSquat[i].reps;
			}
	    } else if (exercise == "Deadlift"){
			for (i = 0, j=9; i<pumpsDead.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsDead[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsDead[i].reps;
		    }
	    }
	    */
	}
	$scope.oneRMStacks = function(){
		$scope.weightButton = false;
		$scope.oneRMButton = true;
		$scope.recordsButton = false;
		/*
		if (exercise == "Bench"){
			for (i = 0, j=9; i<stacksBench.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksBench[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksBench[i].oneRM;
		    } 
		} else if (exercise == "Squat"){
			for (i = 0, j=9; i<stacksSquat.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksSquat[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksSquat[i].oneRM;
		    }
	    } else if (exercise == "Deadlift"){
	    	for (i = 0, j=9; i<stacksDead.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksDead[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksDead[i].oneRM;
	    	}
	    }
	    */
	}
	$scope.oneRMPumps = function(){
		$scope.weightButton = false;
		$scope.oneRMButton = true;
		$scope.recordsButton = false;
		/*
		if (exercise == "Bench"){
			for (i = 0, j=9; i<pumpsBench.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsBench[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsBench[i].oneRM;
		    }
		} else if (exercise == "Squat"){
			for (i = 0, j=9; i<pumpsSquat.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsSquat[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsSquat[i].oneRM;
			}
	    } else if (exercise == "Deadlift"){
			for (i = 0, j=9; i<pumpsDead.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsDead[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsDead[i].oneRM;
		    }
	    }
	    */
	}
	$scope.recordsStacks = function(){
		$scope.weightButton = false;
		$scope.oneRMButton = false;
		$scope.recordsButton = true;
		/*
		if (exercise == "Bench"){
			for (i = 0, j=9; i<stacksBench.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksBench[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksBench[i].records;
		    } 
		} else if (exercise == "Squat"){
			for (i = 0, j=9; i<stacksSquat.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksSquat[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksSquat[i].records;
		    }
	    } else if (exercise == "Deadlift"){
	    	for (i = 0, j=9; i<stacksDead.length; i++, j--){
		    	$scope.myDataSource.data[j].label = stacksDead[i].reps.toString();
		    	$scope.myDataSource.data[j].value = stacksDead[i].records;
	    	}
	    }
	    */
	}
	$scope.recordsPumps = function(){
		$scope.weightButton = false;
		$scope.oneRMButton = false;
		$scope.recordsButton = true;
		/*
		if (exercise == "Bench"){
			for (i = 0, j=9; i<pumpsBench.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsBench[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsBench[i].records;
		    }
		} else if (exercise == "Squat"){
			for (i = 0, j=9; i<pumpsSquat.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsSquat[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsSquat[i].records;
			}
	    } else if (exercise == "Deadlift"){
			for (i = 0, j=9; i<pumpsDead.length; i++, j--){
		    	$scope.myDataSource2.data[j].label = pumpsDead[i].weight.toString();
		    	$scope.myDataSource2.data[j].value = pumpsDead[i].records;
		    }
	    }
	    */
	}
	$scope.history = function(){
		var arr = [];
		var cut = 0
		/*
		if (exercise == "Bench"){
			
			if (benchHist > 9){
				for (i=0; i < 10; i++){
				$scope.myDataSource3.data[i].label = arr[i].weight.toString() + "x" + arr[i].reps.toString();
			    $scope.myDataSource3.data[i].value = arr[i].oneRM;
				}
			} else {
				cut = benchHist.length;
			}
			
		} else if (exercise == "Squat"){
			if (benchHist > 9){
				arr = benchHist.slice(-10);
			} else {
				cut = benchHist.length
				arr = benchHist.slice(-cut);
			}
			for (i=0; i < 10; i++){
				$scope.myDataSource3.data[i].label = arr[i].weight.toString() + "x" + arr[i].reps.toString();
			    $scope.myDataSource3.data[i].value = arr[i].oneRM;
			}
		} else if (exercise == "Deadlift"){
			if (benchHist > 9){
				arr = benchHist.slice(-10);
			} else {
				cut = benchHist.length
				arr = benchHist.slice(-cut);
			}
			for (i=0; i < 10; i++){
				$scope.myDataSource3.data[i].label = arr[i].weight.toString() + "x" + arr[i].reps.toString();
			    $scope.myDataSource3.data[i].value = arr[i].oneRM;
			}
		}*/
			
	}
	$scope.oneRMPie = function(){
		$scope.oneRMPieButton = true;
		$scope.gainsPieButton = false;
		$scope.myDataSource4.chart.caption = "One Rep Max";
		$scope.myDataSource4.chart.subCaption = "Total: " + stats[0].oneRM;
		$scope.myDataSource4.data[0].value = stats[1].oneRM;
		$scope.myDataSource4.data[1].value = stats[2].oneRM;
		$scope.myDataSource4.data[2].value = stats[3].oneRM;
	}
	$scope.gainsPie = function(){
		$scope.oneRMPieButton = false;
		$scope.gainsPieButton = true;
		$scope.myDataSource4.chart.caption = "Gains";
		$scope.myDataSource4.chart.subCaption = "Total: " + stats[0].gains;
		$scope.myDataSource4.data[0].value = stats[1].gains;
		$scope.myDataSource4.data[1].value = stats[2].gains;
		$scope.myDataSource4.data[2].value = stats[3].gains;
	}
	$scope.history();
	$scope.changeBench();
	$scope.changeTotals();
	$scope.weightStacks();
	$scope.weightPumps();
	Highcharts.chart('work', $scope.myDataSource3);
	Highcharts.chart('stackwork', $scope.myDataSource);
	Highcharts.chart('pumpwork', $scope.myDataSource2);
});
