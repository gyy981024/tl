window.onload=function () {
 //获取 li 也就是选项卡选项tab
 var nav=document.getElementById('nav');
 var oNav=nav.getElementsByTagName('li');
 var container=document.getElementById('container');
 var oDiv=container.getElementsByClassName('tab');
 //使用 循环依次得到li 
 for(var i=0;i<oNav.length;i++){
  oNav[i].index=i;
 //每一次得到li后执行鼠标点击操作则触发函数function  
  oNav[i].onclick=function () { //此处除了可以使用onclick，还可以使用onmouseover
 //在li的个数内依次展示内容  
  for(var i=0;i<oNav.length;i++){
   oNav[i].className='';
   oDiv[i].style.display="none";
   oNav[i].style.color="";
   oNav[i].style.fontWeight="";
   oNav[i].style.borderBottomColor="";
   oNav[i].style.borderBottomStyle="";
   oNav[i].style.borderBottomWidth="";
  }
  this.className='act';
  oDiv[this.index].style.display="block";
  oNav[this.index].style.color="blue";
  oNav[this.index].style.fontWeight="bold";
  oNav[this.index].style.borderBottomColor="blue";
  oNav[this.index].style.borderBottomStyle="solid";
  oNav[this.index].style.borderBottomWidth="2px";
  }
  
  for(var m=1;m<oNav.length;m++){
   oNav[m].className='';
   oDiv[m].style.display="none";

  }
 }
};