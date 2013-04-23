var Animation = window.Animation || {};

Animation = {
	init : function(){
		var self = this,
		now = new Date().getTime();
		this.startTime = now;
		this.timeRunning = 0;
		this.interval = 0;
		this.frame = 0;
		this.fps = 24;
		
		this.output = document.getElementsByClassName('output')[0];
		
		this.scene = document.getElementsByClassName('scene')[0];
		this.view = this.scene.getElementsByTagName('img')[0];
		
	
		
		//animate
		this.playing = true;
		this.interval = 0;
		this.animate();
	},
	animate : function( lastTime ){
		var self = this,
			now = new Date().getTime(),
			deltaTime = now - ( lastTime || now),
			frameRateMilliseconds = ( 1000 / this.fps );
		
		//time in seconds
		this.timeRunning = (now - this.startTime) / 1000;
		
		
		
		this.interval++;
		//30 fps by skipping odd
		if(this.interval % 2 === 0){
			//draw or something
			this.draw();
			this.frame ++;
		}
		
		//TODO: create drawing array length by amount of total frames in the amount of time
		//then set drawing frames by drawing[x] = ...
		
		if( (now - this.startTime) === frameRateMilliseconds ){
			//this.interval ++;
		}
		
		
		//this.output.innerHTML = Math.floor(this.timeRunning) + ' secs  :   '+ ((now - this.startTime)) +' millisecs || int '+this.interval+ ' : '+ this.fps+' fps' + ' deltaTime :' +deltaTime ;
		
		this.output.innerHTML = (now - this.startTime) + ' secs  :   '+ Math.floor(frameRateMilliseconds) + '  '+ (Math.floor(frameRateMilliseconds)*this.interval);
		
		
		
		//request new frame
		requestAnimFrame(function(){
			if(self.playing && self.timeRunning < (10)){
				self.animate( now );
			}else{
				self.playing = false;
				self.output.innerHTML += ' : ' + 'stopped';
			}
		});
		
	},
	draw : function(){
		//console.log( this.frame );
		if(DRAWINGS[this.frame] == undefined){
			
			console.log('unde')
		}
		if( DRAWINGS[this.frame] !== '' && DRAWINGS[this.frame] !== undefined ){
			
			console.log(this.frame,DRAWINGS.length,DRAWINGS[this.frame])
			//this.frame < DRAWINGS.length && DRAWINGS[this.frame] !== undefined || DRAWINGS[this.frame] !== '' 
			this.view.src = 'assets/images/'+DRAWINGS[this.frame] +'.png';
		}
		
	}
}

window.onload = function(){
	
	Animation.init();
	
};

//requestAnimFrame
window.requestAnimFrame = (function(callback){
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback){
		window.setTimeout(callback, 1000 / 60);
	};
})();