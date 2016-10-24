window.onload=function(){
	pinterestFall('main','box');
	//创建一个模拟后台传过来的数据
	var imgdata={"data":[{"src":'L24.png'},{"src":'L25.jpg'},{"src":'L26.jpg'},
	{"src":'L27.jpg'},{"src":'L28.jpg'},{"src":'L29.jpg'},{"src":'L30.jpg'},
	{"src":'L31.jpg'},{"src":'L32.jpg'},{"src":'L34.jpg'},{"src":'L35.jpg'},
	{"src":'L36.jpg'},{"src":'L37.jpg'},{"src":'L38.jpg'},
	{"src":'L39.jpg'},{"src":'L40.jpg'},{"src":'L41.jpg'},{"src":'L42.jpg'},
	{"src":'L43.jpg'},{"src":'L44.jpg'},{"src":'L45.jpg'},{"src":'L46.jpg'},]}
	window.onscroll=function(){
      if(checkScrollSlide){
      	//把图片加载到尾部
      	var oParent=document.getElementById('main');
      	for(var i = 0;i < imgdata.data.length;i++){
      		var nBox=document.createElement('div');
      		nBox.className='box';
      		oParent.appendChild(nBox);
      		var nPic=document.createElement('div');
      		nPic.className='pic';
      		nBox.appendChild(nPic);
      		var nImg=document.createElement('img');
      		nImg.src="images/"+imgdata.data[i].src;
      		nPic.appendChild(nImg);
      	}
      	pinterestFall('main','box');//再一次调用加载图片到尾部
      }
	}
}

function pinterestFall(parentNode,childNode){
	//取main下的所有结点
	var parent=document.getElementById(parentNode),
		boxWidth,cols;
	var boxs=getByClass(parent,childNode);
	boxWidth=boxs[0].offsetWidth;
	cols=Math.floor(document.documentElement.clientWidth/boxWidth);
    parent.style.width=boxWidth*cols+"px";
    parent.style.margin="0 auto";

    //创建一个存每一列图片的数组，前面是存第一排的数组
    var hArr=new Array();

    for(var i = 0; i < boxs.length;i++){
    	if(i < cols){  //这里是小于！！！
    		hArr.push(boxs[i].offsetHeight);
    	}else{
    		var picMinH=Math.min.apply(null,hArr);
    		
    		var minIndex=hArr.indexOf(picMinH);

    		boxs[i].style.position="absolute";
    		boxs[i].style.top=picMinH+'px';
    		boxs[i].style.left=minIndex*boxs[minIndex].offsetWidth+'px';
    		hArr[minIndex]+=boxs[i].offsetHeight;
	
   		 }
   	}

}

//得到目标className的元素
function getByClass(parent,claName){
	var nodeArr=new Array(),
		elements=parent.getElementsByTagName('*');
	for(var i = 0;i < elements.length;i++){
		if(elements[i].className == claName){
			nodeArr.push(elements[i]);
		}
	}

	return nodeArr;
}


//检查是否加载图片
function checkScrollSlide(){
	var parentNode=document.getElementById('main');
	var boxs=getByClass(parentNode,'box');
	var lastBoxH=Math.floor(boxs[boxs.length-1].offsetHeight/2)+boxs[boxs.length-1].offsetTop+'px';
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var clientHeight=document.body.clientHeight||document.documentElement.clientHeight;
	//console.log(clientHeight);

	return (lastBoxH < scrollTop+clientHeight)?true:false;
}