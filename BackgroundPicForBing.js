/** BackgroundPicForBing-v1.0 MIT License By https://www.samler.cn */
;!function(e){
	var url = 'https://cn.bing.com/ImageResolution.aspx?w='+e.innerWidth+'&h='+e.innerHeight,
		bpfb = new Image();
		bpfb.src = url;
		bpfb.style = 'display: none';
	
	bpfb.onload = function(){
		bp = document.createElement('div');
		bp.setAttribute('id', 'bingBackgroundPic');
		bp.setAttribute('style', 'width: 100vw; height: 100vh; position: fixed; top: 0px; left: 0px; background-image: url('+url+'); background-size: cover; display: none; opacity: 0; z-index: -9999; transition: opacity .3s');
		document.getElementsByTagName('body')[0].appendChild(bp);
		document.getElementById('bingBackgroundPic').style.display = 'block';
		setTimeout(function() {document.getElementById('bingBackgroundPic').style.opacity = '1';},.1);
	};
}(window);
