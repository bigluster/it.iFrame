/*globals define, console*/
/*
	ToDo:
		labels in dimension centered
		minsize display handling (scrollbar?)
		Show multiple diemensions
		change display type base on custom setting
		set max barsize

		Branch into single object version
*/
 
define(["jquery","./com-itelligence-iframe-properties"], function($,properties) {
	var runCount = 0;

	return {
		type : "Iframe",
		//Refer to the properties file
		definition : properties,

		initialProperties : {
			version: 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 0,
					qHeight : 0
				}]
			},
			fontSize : {
				min : 8,
				max : 24
			}
		},
		snapshot : {
			canTakeSnapshot : false
		},
		paint : function($element, layout) { 
			runCount = runCount+1;
			//log('paint count: '+runCount);
			//log(layout);

//			d3.select($element[0]).append("p").text("loading");
			//check that we have data to render
			//if(layout.qHyperCube.qDataPages[0].qMatrix.length>=1 ) { 
			//var dimensions = layout.qHyperCube.qDataPages[0].qMatrix.length;	
			// || layout.qHyperCube.qDataPages[0].qMatrix.length) {	
				$element.html('<iframe width="100%" height="100%" frameborder="0" src="'+ layout.qDef['url']+'" />') ; // <iframe src="'++'" />');
				
			//}
		}	
	};
});
