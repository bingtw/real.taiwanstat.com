!function t(i,s,n){function o(h,p){if(!s[h]){if(!i[h]){var r="function"==typeof require&&require;if(!p&&r)return r(h,!0);if(e)return e(h,!0);throw new Error("Cannot find module '"+h+"'")}var a=s[h]={exports:{}};i[h][0].call(a.exports,function(t){var s=i[h][1][t];return o(s?s:t)},a,a.exports,t,i,s,n)}return s[h].exports}for(var e="function"==typeof require&&require,h=0;h<n.length;h++)o(n[h]);return o}({1:[function(t,i,s){function n(t){100*Math.random()<t.options.frequency&&(t.springs[Math.floor(Math.random()*t.options.waveLength)].p=t.options.waveHeight),t.ctx.clearRect(0,0,t.options.realWidth,t.options.canvasHeight),t.updateSprings(.1),t.renderWaves(),requestAnimationFrame(function(){n(t)})}$.widget("water.raindrops",{options:{waveLength:340,canvasWidth:0,canvasHeight:0,color:"#00aeef",frequency:3,waveHeight:100,density:.02,rippleSpeed:.1,rightPadding:20,position:"absolute",positionBottom:0,positionLeft:0},_create:function(){var t=window.document.createElement("canvas");this.options.canvasHeight||(this.options.canvasHeight=this.element.height()/2),this.options.canvasWidth||(this.options.canvasWidth=this.element.width()),this.options.realWidth=this.options.canvasWidth+this.options.rightPadding,t.height=this.options.canvasHeight,t.width=this.options.realWidth,this.ctx=t.getContext("2d"),this.ctx.fillStyle=this.options.color,this.element.append(t),t.parentElement.style.overflow="hidden",t.parentElement.style.position="relative",t.style.position=this.options.position,t.style.bottom=this.options.positionBottom,t.style.left=this.options.positionLeft,this.springs=[];for(var i=0;i<this.options.waveLength;i++)this.springs[i]=new this.Spring;n(this)},Spring:function(){this.p=0,this.v=0,this.update=function(t,i){this.v+=-i*this.p-t*this.v,this.p+=this.v}},updateSprings:function(t){var i;for(i=0;i<this.options.waveLength;i++)this.springs[i].update(this.options.density,this.options.rippleSpeed);for(var s=[],n=[],o=0;8>o;o++){for(i=0;i<this.options.waveLength;i++)i>0&&(s[i]=t*(this.springs[i].p-this.springs[i-1].p),this.springs[i-1].v+=s[i]),i<this.options.waveLength-1&&(n[i]=t*(this.springs[i].p-this.springs[i+1].p),this.springs[i+1].v+=n[i]);for(i=0;i<this.options.waveLength;i++)i>0&&(this.springs[i-1].p+=s[i]),i<this.options.waveLength-1&&(this.springs[i+1].p+=n[i])}},renderWaves:function(){var t;for(this.ctx.beginPath(),this.ctx.moveTo(0,this.options.canvasHeight),t=0;t<this.options.waveLength;t++)this.ctx.lineTo(t*(this.options.realWidth/this.options.waveLength),this.options.canvasHeight/2+this.springs[t].p);this.ctx.lineTo(this.options.realWidth,this.options.canvasHeight),this.ctx.fill()}})},{}]},{},[1]);