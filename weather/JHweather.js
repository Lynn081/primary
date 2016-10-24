
var cityName="";
var ttmp="",tWeather="",hum="", wear="",wash="",tral="",exe="",uvs="";
var fweather=[];
var ftmp=[];
var data=[];
function getdata(){
	var url='http://v.juhe.cn/weather/index?callback=?';
	$.getJSON(url,{
		"cityname":cityName,
		'dtype':'json',
		'key':'71cf521f9fa5d3a3c17ab414f159245e'
	},function(response){
		ttmp=response.result.today.temperature;
		//console.log(response);
		tWeather=response.result.today.weather;
		hum=response.result.sk.humidity;
		wear=response.result.today.dressing_index;
		//console.log(wear);
		wash=response.result.today.wash_index;
		tral=response.result.today.travel_index;
		exe=response.result.today.exercise_index;
		uvs=response.result.today.uv_index;
		$("#city_name").html(cityName);
		$("#today_weather").html(ttmp+" "+tWeather);
		$("#humidity").html(hum);
		$("#dress").html(wear);
		$("#wash_car").html(wash);
		$("#travel").html(tral);
		$("#exercise").html(exe);
		$("#uv").html(uvs);
		var futur=response.result.future;
		for(var i in futur){
			data.push(futur[i].week);
			fweather.push(futur[i].weather);
			ftmp.push(futur[i].temperature);
			
		}	
		for(var i = 0;i < 6;i++){
	 		document.getElementById("day"+i).innerHTML = "<p>"+data[i] + "</p></br><p>"
	 								+ ftmp[i] + "</p></br><p>"+fweather[i] + "</p><div></div>";
		}
	});
	}

$(document).ready(function(){
		 cityName="北京";
		 getdata();
	$("#search").click(function(){
		cityName = $("#city_text").val();
         getdata();
	});
   
});
    
	

