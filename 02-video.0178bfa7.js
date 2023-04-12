!function(){document.querySelector(".gallery");const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));const n=function(e){};o.on("play",n),o.off("play",n),o.off("play"),o.on("eventName",(function(e){}))}();
//# sourceMappingURL=02-video.0178bfa7.js.map
