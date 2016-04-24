function reaction()
{

				var clickedtime; var createdtime; var reactiontime;
				
				function getRandomColor(){
					var letters='0123456789ABCDEF'.split('');
					var color='#';
					for(var i=0;i<6;i++){
						color += letters[Math.floor(Math.random() * 16)];
					} 
					return color;
				}
				
				function makebox(){
					
					var x=Math.random();
					x=x*4000;
					
					setTimeout( function(){
						
						if(Math.random()>0.5){
						
						document.getElementById("square").style.borderRadius="100%";
						
						}else{
						document.getElementById("square").style.borderRadius="0%";
						
						}
						
						var poswidth=Math.random();
						poswidth=poswidth*1350;
						
						var posheight=Math.random();
						posheight=posheight*700;
						
						document.getElementById("square").style.left=poswidth+"px";
						document.getElementById("square").style.top=posheight+"px";
						document.getElementById("square").style.backgroundColor=getRandomColor();
						document.getElementById("square").style.display="block";
						createdtime=Date.now();
					},x);
				}
				
				document.getElementById("square").onclick=function(){
				
					clickedtime=Date.now();
					document.getElementById("square").style.display="none";
					reactiontime=clickedtime-createdtime;
					document.getElementById("spa").innerHTML=(reactiontime/1000);
					makebox();
				}
				
				makebox();
}			