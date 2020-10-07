!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);console.log("loading app.js");var i=n(2);document.getElementById("addbutton").addEventListener("click",(function(){new i("New").setTimer(0,0,0,0)})),new i("Task").setTimer(0,5,0,0),new i("Duty").setTimer(0,10,0,0),new i("Work").setTimer(0,30,0,0),new i("Foo").setTimer(1,0,0,0)},function(t,e,n){},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}console.log("loading time.js");var i=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.startTime=null,this.duration=null,this.interval=null,this.running=!1,this.timeElapsedStored=0;var i=document.getElementsByClassName("hidden-stopwatch")[0],r=document.getElementById("wrapper");this.theStopwatch=i.cloneNode(!0),this.theStopwatch.className="regular-stopwatch",r.appendChild(this.theStopwatch),this.startButton=this.theStopwatch.getElementsByClassName("start")[0],this.stopButton=this.theStopwatch.getElementsByClassName("stop")[0],this.resetButton=this.theStopwatch.getElementsByClassName("reset")[0],this.displayTime=this.theStopwatch.getElementsByClassName("displayTime")[0],this.title=this.theStopwatch.getElementsByClassName("title")[0],this.title.innerHTML=e,this.startButton.addEventListener("click",(function(){n.start()})),this.stopButton.addEventListener("click",(function(){n.stop()})),this.resetButton.addEventListener("click",(function(){n.reset()}))}var e,i,r;return e=t,(i=[{key:"setTimer",value:function(t,e,n,i){this.duration=i+1e3*n+60*e*1e3+60*t*60*1e3,this.setDisplayTime(this.convertTimeToString(this.duration))}},{key:"setTitle",value:function(t){this.title.innerHTML=t}},{key:"start",value:function(){var t=this;this.startTime=new Date,0==this.running&&(this.running=!0,this.interval=setInterval((function(){t.updateTimer()}),100))}},{key:"stop",value:function(){0!=this.running&&(this.timeElapsedStored+=this.getTimeElapsedSinceLastStart(),clearInterval(this.interval),this.running=!1,this.startTime=null)}},{key:"reset",value:function(){this.stop(),this.timeElapsedStored=0,this.setDisplayTime(this.convertTimeToString(this.duration))}},{key:"convertTimeToString",value:function(t){var e=Math.floor(t/36e5);t-=60*e*60*1e3;var n=Math.floor(t/6e4);t-=60*n*1e3;var i=Math.floor(t/1e3);return"".concat(e,":").concat(n,":").concat(i)}},{key:"setDisplayTime",value:function(t){this.displayTime.innerHTML=t}},{key:"getTimeElapsedSinceLastStart",value:function(){return new Date-this.startTime}},{key:"updateTimer",value:function(){var t=this.getTimeElapsedSinceLastStart()+this.timeElapsedStored,e=this.duration-t;this.setDisplayTime(this.convertTimeToString(e))}}])&&n(e.prototype,i),r&&n(e,r),t}();t.exports=i}]);