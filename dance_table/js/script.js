var table = document.body.getElementsByTagName('table')[0];
setInterval(()=>{
	 table.style.background=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`
    for (let i=0;i<table.rows.length;i++){
      var  row=table.rows[i];
      for (let j=0;j<row.cells.length;j++){
        var cell=row.children[j];
        cell.style.fontSize=`${Math.random()*12 +12}px`;
        cell.style.fontWeight=`${Math.random()*900}`;
        cell.style.height=`${Math.random()*200}px`;
        cell.style.width=`${Math.random()*200}px`;
        cell.style.color=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`
        if ((i+j-2)%3==1){
				 cell.style.background=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
        }
        else{
			    cell.style.background=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`    
        };
      };
    };
    }, 1000 );