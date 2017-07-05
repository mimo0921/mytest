$(function(){
    $("body").animate({width:"100%"},1000);
    $(window).on('scroll', function () {
        var scrollTop = $('body').scrollTop();
        if (scrollTop > 200) {
            $('#up').css({'display':"block"});
        }else {
            $('#up').css({'display':"none"});
        }
    });

    $('#up').on('click', function(){
        $('body').animate({scrollTop:0},500);
    });



    $(".skill span").hover(function(){
        $(this).css({"transform":"scale(1.3)"},1000)
    },function(){
        $(this).css({"transform":"scale(1)"},1000)
    })



$('#introduce').css({height:0}).animate({height:300},2000);



function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        
 var slide11=$(".slide11");    
    for(var i=0;i<4;i++){
         var deg=i*90;
         $("<div class='item11'></div>")
         .css({
              "background-image":"url(images/"+i+".jpg)",
              "transform":"rotateX("+deg+"deg) translateZ(72px)" 
          })
         .appendTo(slide11);
    }
    
  
    
    var num=0; 
    var int=self.setInterval(function(){clock()},2000);
    function clock(){
        num++;      
        $(".item11").each(function(index, element) {            
            var deg=index*90-num*90;           
            $(this).css({
                "transform":"rotateX("+deg+"deg) translateZ(72px)" 
            })
    })
        
   }



  var slide2=$(".slide2");    
  for(var i=0;i<4;i++){
     var deg2=i*90;
     $("<div class='item2'></div>")
     .appendTo(slide2);
  }
  
  var cou=5;
  var w2=slide2.width()/cou;
  $(".item2").each(function(index, element) { 
    var deg2=index*90;
    for(var i=0;i<cou;i++){  
      var x2=i*w2;
      $("<div class='pic2'></div>")
      .width(w2)
      .css({
          "left":x2+"px",
        "background-image":"url(images/"+index+".jpg)",
        "background-position":-x2+"px 0px",
        "transform":"rotateX("+deg2+"deg) translateZ(72px)" 
      })
        .appendTo(this)
    }
        
    });
  
  
  var n=0;
  var int2=self.setInterval(function(){clock2()},2000);
  function clock2(){
    n++;  
    $(".item2").each(function(index, element) {
        
        var deg2=index*90-n*90;
        
        $(this).find(".pic2").each(function(i, element) {
          
          var delay=i*0.15;
          
          $(this).css({
               "transition":"transform .5s "+delay+"s",
              "transform":"rotateX("+deg2+"deg) translateZ(72px)"
          });
        });
      });  
  }




        var oPic=$("#pic");
        for(var i=0;i<25;i++) {
            var x = i % 5;
            var y = parseInt(i / 5);
            $("<i class='item3'></i>").css({
                "left": x * 60 + "px",
                "top": y * 30.6 + "px",
                "background-position": x * (-60) + "px " + y * (-30.6) + "px"
            }).appendTo(oPic);
        }
    var b=false;
       

    oPic.click(function(){
        if(b==false){
        $("i").each(function(){  
          var  range=3000  
          var  rx=Math.random()*range*2-range;
          var  ry=Math.random()*range*2-range;
          $(this).css({
            "transform":"translate("+rx+"px,"+ry+"px)",
            "opacity":0
        });
                b=true;
            })
        }else{
           
            $("i").each(function (index,element) {
            $(this).css({
            "transform":"translate(0,0)",
          "opacity":1  
       })
                b=false;
            })
        }
        })

    }
}
browserRedirect();




  $("#navb").click(function(){
     $('html,body').animate({scrollTop:$("#b").offset().top},1000)
  })
  $("#navc").click(function(){
     $('html,body').animate({scrollTop:$("#c").offset().top},1000)
  })
  $("#navd").click(function(){
    $('html,body').animate({scrollTop:$("#d").offset().top},1500)
  })
  $("#nave").click(function(){
    $('html,body').animate({scrollTop:$("#e").offset().top},1500)
  })
  $("#top").click(function(){
     $('html,body').animate({scrollTop:$("#navtop").offset().top},1500)
  })



//pc端动效修改
var slide11=$(".slide11");    
    for(var i=0;i<4;i++){
         var deg=i*90;
         $("<div class='item11'></div>")
         .css({
              "background-image":"url(images/"+i+".jpg)",
              "transform":"rotateX("+deg+"deg) translateZ(60px)" 
          })
         .appendTo(slide11);
     }
    
    
  var num=0; 
  var int=self.setInterval(function(){clock()},2000);
  function clock(){
      num++;      
      $(".item11").each(function(index, element) {            
          var deg=index*90-num*90;           
          $(this).css({
              "transform":"rotateX("+deg+"deg) translateZ(60px)" 
          })
     })
      
  }



    var slide2=$(".slide2");    
  
  for(var i=0;i<4;i++){
     var deg2=i*90;
     $("<div class='item2'></div>")
     .appendTo(slide2);
  }
  
  var cou=5;
  var w2=slide2.width()/cou;
  $(".item2").each(function(index, element) { 
    var deg2=index*90;
    for(var i=0;i<cou;i++){  
      var x2=i*w2;
      $("<div class='pic2'></div>")
      .width(w2)
      .css({
          "left":x2+"px",
        "background-image":"url(images/"+index+".jpg)",
        "background-position":-x2+"px 0px",
        "transform":"rotateX("+deg2+"deg) translateZ(60px)" 
      })
        .appendTo(this)
    }
        
    });
  
  
  var n=0;
  var int2=self.setInterval(function(){clock2()},2000);
  function clock2(){
    n++;  
    $(".item2").each(function(index, element) {
        
        var deg2=index*90-n*90;
        
        $(this).find(".pic2").each(function(i, element) {
          
          var delay=i*0.15;
          
          $(this).css({
               "transition":"transform .5s "+delay+"s",
              "transform":"rotateX("+deg2+"deg) translateZ(60px)"
          });
        });
      });  
  }




        var oPic=$("#pic");
        for(var i=0;i<25;i++) {
            var x = i % 5;
            var y = parseInt(i / 5);
            $("<i class='item3'></i>").css({
                "left": x * 47.8 + "px",
                "top": y * 23.8 + "px",
                "background-position": x * (-47.8) + "px " + y * (-23.8) + "px"
            }).appendTo(oPic);
        }
    var b=false;
       

    oPic.click(function(){
        if(b==false){
        $("i").each(function(){  
          var  range=3000  
          var  rx=Math.random()*range*2-range;
          var  ry=Math.random()*range*2-range;
          $(this).css({
            "transform":"translate("+rx+"px,"+ry+"px)",
            "opacity":0
        });
                b=true;
            })
        }else{
           
            $("i").each(function (index,element) {
            $(this).css({
            "transform":"translate(0,0)",
          "opacity":1  
       })
                b=false;
            })
        }
        })





   var index=0;
    var word1=$("#w0").html();
    var word2=$("#w1").html();
    var word3=$("#w2").html();
    function type(){
       if(index>200){
          index=0
         }
         document.getElementById("aa").innerText = word1.substring(0,index++);
         document.getElementById("bb").innerText = word2.substring(0,index++);
         document.getElementById("cc").innerText = word3.substring(0,index++);
         
    }
    setInterval(type, 300);

});

 
   












