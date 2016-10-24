var colors=[
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
    ];
 var currentQuote='',currentAuthor='';
	
	$(document).ready(function ($) {
		getQuote();
		$("#quote_btn").bind("click",getQuote);
	});
	
	function getQuote(){
		$.ajax({
			headers:{
				'apikey':'cbf2ba0982012ccd27b9f52f077ebf61'
			},
			url:'http://apis.baidu.com/txapi/dictum/dictum',
			success:function(response){
				console.log(response);
				
				currentQuote=response.newslist[0].content;
				currentAuthor=response.newslist[0].mrname;
				//console.log(currentQuote);
				//console.log(currentAuthor);
				
				$('.quote_content').animate({opacity:0},300,function(){
					$(this).animate({opacity:1},300);
					$('#content').html("“"+currentQuote);	
				});
				$('.quote_author').animate({opacity:0},300,function(){
					$(this).animate({opacity:1},300);
					$('#author').html("-"+currentAuthor);
				});
				var color = Math.floor(Math.random() * colors.length);
				$('body ').animate({
				   backgroundColor:colors[color],
				   color:colors[color]
				},300);
				$('.btn').animate({backgroundColor:colors[color]},300);
				$('#quote_btn').animate({backgroundColor:colors[color]},300);

			}
		});
		}