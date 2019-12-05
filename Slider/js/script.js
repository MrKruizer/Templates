for (let i=0; i<11; i++){
	let img =$('<img src="img/img'+i+'.jpg">');
	let imgCont=$('<div class="imgContain"></div>')
	imgCont.append(img)
	$('#blockMain').append(imgCont);
	let changers=$('<div name="'+i+'" style="background-image: url(img/img'+i+'.jpg);background-size: cover;"></div>');
	$(changer).append(changers);
}
function slideOn(){
	img=this;
	$('#slider').css('display','flex');
	$('#slideContainer').append(img);
	sizeImg();
	selectChanger();
	interv= setInterval(nextImg, 4000);
}
function slideOf(){
	img=$('#slideContainer img');
	$('main div.imgContain:empty').append(img)
	$('#slider').hide('slow');
	$('.active').removeClass('active');
	clearInterval(interv);
}
function nextImg(){
	if ($('main div:empty')['0']==$('main div:eq('+($('.imgContain').length-1)+')')['0']) {next=$('main div:eq(0)')}
	else{
	next=$('main div:empty').next();}
	$('main div.imgContain:empty').append(img);
	img = $(next).children()['0'];
	$('#slideContainer').append(img);
	sizeImg();
	$('.active').removeClass('active');
	selectChanger();
}
function prevImg(){
		if ($('main div:empty')['0']==$('.imgContain')['0']) {next=$('.imgContain')['10']}
	else{
	next=$('main div:empty').prev();}
	$('main div.imgContain:empty').append(img);
	img = $(next).children()['0'];
	$('#slideContainer').append(img);
	sizeImg();
	$('.active').removeClass('active');
	selectChanger();
}
function sizeImg(){
	if ($(img).width()>$(slideContainer).width()) img.style.width='100%';	
	}
function selectChanger(){
	for (let i=0;i<$('#changer div').length;i++){
		var div=$('#changer div')[''+i];
		if (div.style.backgroundImage=='url(\"'+img.getAttribute('src')+'\")') {
			$($('#changer div')[i]).addClass('active');
			}		
		}
	}
function changeImg(){
	let ind = this.getAttribute('name');
	$('main div.imgContain:empty').append(img);
	img = $('.imgContain:eq('+ind+') img')['0'];
	$('#slideContainer').append(img);
	$('.active').removeClass('active');
	selectChanger();
	};
$('.imgContain img').click(slideOn);
$('#closeSlide').click(slideOf);
$($('.arrow')['0']).click(prevImg);
$($('.arrow')['1']).click(nextImg);
$('#changer div').click(changeImg);
document.onkeydown=(e)=>{
	switch (+e.keyCode){
		case 37:
			prevImg();
			break;
		case 39:
			nextImg();
			break;

		}	
	}