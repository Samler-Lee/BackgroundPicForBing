/** BackgroundPicForBing-v1.1 MIT License By https://www.samler.cn */
;!function(w, h){
    var url = 'https://cn.bing.com/ImageResolution.aspx?w='+w+'&h='+h,
        bpfb = new Image(),
		checkIE = function(){
			return (new RegExp("MSIE ([0-9]\\.\\d+);")).test(navigator.userAgent);
		};
		
	bpfb.onload = function(){
        var bp = document.createElement('div');
        bp.setAttribute('id', 'bingBackgroundPic');
        bp.setAttribute('style', 'width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; background-image: url('+url+'); background-size: cover; display: none; opacity: 0; z-index: -9999; transition: opacity .3s;' + (checkIE() ? 'filter:  progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+url+'", sizingMethod="scale");' : ''));
		if(checkIE()){
			var body = document.getElementsByTagName('body')[0], bgpb = document.createElement('div');
			bp.setAttribute('style', 'width: 100%; height: 100%; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+url+'", sizingMethod="scale");');
			bgpb.setAttribute('id', 'bingBackgroundPicBorder');
			bgpb.setAttribute('style', 'width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: -9999; padding: 0 0; filter: Alpha(opacity=0)');
			bgpb.appendChild(bp);
			body.appendChild(bgpb);
			var bgpb_obj = document.getElementById('bingBackgroundPicBorder'), transition = function(a){
				a+=1;
				bgpb_obj.style.filter = 'Alpha(opacity='+(a)+')';
				a < 100 && setTimeout(function(){transition(a)}, 3);
			}
			transition(0);
		}
		else{
			document.getElementsByTagName('body')[0].appendChild(bp);
			document.getElementById('bingBackgroundPic').style.display = 'block';
			setTimeout(function() {
				var bgp = document.getElementById('bingBackgroundPic').style.opacity = '1';
			},.1);
		}
    };
	
	bpfb.style.display = 'none';
    bpfb.src = url;
}(window.innerWidth||document.documentElement.clientWidth, window.innerHeight||document.documentElement.clientHeight);
