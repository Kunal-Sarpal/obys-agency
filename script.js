
var tl = gsap.timeline();
tl.from(".line h1",{
    y:100,
    stagger:0.2,
    opacity:0,
    duration:0.6,
    delay:0.3
    
})
tl.from(".line-part1 h5",{
    opacity:0 ,
    onStart:function(){
        
        var h5 = document.querySelector(".line .h5");
        var grow = 0;
        setInterval(() => {
            if(grow < 100){
                grow++
                h5.innerHTML = grow;
            }
            else{
                h5.innerHTML = grow;
            }
        },33);

    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to(".loader",{
    opacity:0,
    delay:3.7
})
tl.from(".page1",{
  
    y:1600,
    ease:Power4
})
tl.to(".loader",{
    display: "none"
})
