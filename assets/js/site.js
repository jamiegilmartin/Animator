var Animation = window.Animation || {};

Animation = {
    init : function(){
        var self = this,
            now = Date.now(); //new Date().getTime();
            
        this.startTime = now;
        this.then = now;
        
        this.secondsRunning = 0;
        this.duration = 10;
        this.fps = 24;
        this.fpsInterval = 1000 / this.fps;
        this.delta;
        this.frame = 0;
        
        
        
        //dom vars
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
            now = Date.now(), //new Date().getTime();
            deltaTime = now - ( lastTime || now);
        
        
        this.delta = now - this.then;
        
        //http://codetheory.in/controlling-the-frame-rate-with-requestanimationframe/
        //http://creativejs.com/resources/requestanimationframe/
        if( this.delta > this.fpsInterval){
            this.then = now - (this.delta % this.fpsInterval);
            
            this.draw();
            this.frame ++;
            
            this.output.innerHTML = this.frame + ' /' + Math.floor((this.then - this.startTime)/1000)+'s === ' + parseInt(this.frame/((this.then - this.startTime)/1000))+'fps';
        }
        
        
        
        //time in seconds
        this.secondsRunning = (now - this.startTime) / 1000;
        
        this.interval++;
        
        
        /*
        //30 fps by skipping odd
        //if(this.interval % 2 === 0){
            //draw or something
            this.draw();
            this.frame ++;
        //}
        
        //TODO: create drawing array length by amount of total frames in the amount of time
        //then set drawing frames by drawing[x] = ...
        
        if( (now - this.startTime) === ( 1000 / this.fps ) ){
            //this.interval ++;
        }
        console.log(now - this.startTime, deltaTime);
        
        //this.output.innerHTML = Math.floor(this.timeRunning) + ' secs  :   '+ ((now - this.startTime)) +' millisecs || int '+this.interval+ ' : '+ this.fps+' fps' + ' deltaTime :' +deltaTime ;
        
        //this.output.innerHTML = (now - this.startTime) + ' ms  :   '+ Math.floor(( 1000 / this.fps )) + '  '+ this.interval +' '+ (Math.floor(( 1000 / this.fps )*this.interval));
        */
        
        
        //request new frame
        requestAnimFrame(function(){
            if(self.playing && self.secondsRunning < (self.duration)){
                self.animate( now );
            }else{
                self.playing = false;
                self.output.innerHTML += ' : ' + 'stopped';
            }
        });
        
    },
    draw : function(){
        if(DRAWINGS[this.frame] == undefined){
            
            console.log('unde')
        }
        if( DRAWINGS[this.frame] !== '' && DRAWINGS[this.frame] !== undefined ){
            
            //console.log(this.frame,DRAWINGS.length,DRAWINGS[this.frame])
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