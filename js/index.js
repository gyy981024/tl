
		window.onload = function(){
		var oBox=document.getElementById('box');
		var oList=document.getElementById('list');
		var oDian=document.getElementById('dian');
		var oPrev=document.getElementById('prev');
		var oNext=document.getElementById('next');
		var oLi=oList.getElementsByTagName('li');
		var oEm=oDian.getElementsByTagName('em');
		var num=0;
		var timer=null;

         function tab(){
         		for(var i=0;i<oEm.length;i++){
					oEm[i].className='';
				}
				 oEm[num].className='active';
				 oList.style.left=-num*oLi[0].offsetWidth+'px';
			}


		for(var i=0;i<oEm.length;i++){
		     oEm[i].index=i;
			oEm[i].onclick=function(){
				num=this.index;
				tab();
			}


			oPrev.onclick=function(){
				num--;
				if(num==-1){
					num=oEm.length-1;
				}
				tab();
			}


			oNext.onclick=function(){
				num++;
				if(num==oEm.length){
					num=0;
				}
				tab();
		}
	}

	timer=setInterval(function(){
		num++;
				if(num==oEm.length){
					num=0;
				}
				tab();
		},2000)
	oBox.onmouseover=function(){
		clearInterval(timer);
	}
	oBox.onmouseout=function(){
		clearInterval(timer);
		timer=setInterval(function(){
		num++;
				if(num==oEm.length){
					num=0;
				}
				tab();
		},2000)
	}
	}