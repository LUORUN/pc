/**
 * Created by hxsd on 2016/12/8.
 * js
 */

$(function(){
    //首页主导航样式切换
   $(".listItem").hover(function(){
       var text2=$(this).find("span").eq(0).text();
       var text1=$(this).find("span").eq(2).text();
       $(this).find(".icon").text("云")
       $(this)[0].className="cloudBox";
       $(this).find("span")[0].className="cloud";
       $(this).find("span").eq(1)[0].className="cloudEnglish";
       $(this).find("span").eq(0).html(text2+text1);
       $(this).find("span").eq(2).hide();
   },function(){
       $(this)[0].className="listItem";
       $(this).find(".icon").text("")
       $(this).find("span")[0].className="item";
       $(this).find("span").eq(1)[0].className="english";
       var text=$(this).find("span").eq(0).text();
       text=text.slice(0,2);
       $(this).find("span").eq(0).text(text);
       $(this).find("span").eq(2).show();
   });

    //$(".listItem").eq(4).on("click",function(){
    //    console.log(1111);
    //});
    $(".listItem").eq(4).trigger("mouseenter");


    //企业文化content切换
    $(".subNav").find("li").on("click",function(){
        var index=$(this).index();
        $(".tabItem").hide().eq(index).fadeIn();
        $(".subNav").find("li").removeClass("subAC");
        $(this).addClass("subAC");
        $(".backgroundImg").removeClass("detailBg");
        $(".header").css("background-image","url(../images/home_logo3.jpg)")
    })
    //起承转合切换
    $(".rise").mouseenter(function(){
        var index=$(this).index();
        $(".rise").removeClass("riseAC").eq(index).addClass("riseAC");
        $(".explain").hide().eq(index).fadeIn();
    });
    //footer导航样式切换
    $(".footerNav").find("li").hover(function(){
        $(this).addClass("footerAC");
    },function(){
        $(this).removeClass("footerAC");
    });
    //点击到新闻详情
    $(".newsItem>.text").on("click",function(){
        $(".tabItem").hide();
        $(".newsDetailTab").fadeIn();
        $(".backgroundImg").addClass("detailBg");
        $(".header").css("background-image","url(../images/detailRightLogo.png)")
    });

    //新闻详情切换图片
    var index=0;
    $(".next").on("click",function(){
        var aLi=$(".detailPicList").find("li");
        index++;
        if(index>aLi.length-1){
            index=0;
        }
        aLi.hide().eq(index).fadeIn();
    });
    $(".pre").on("click",function(){
        var aLi=$(".detailPicList").find("li");
        index--;
        if(index<0){
            index=aLi.length-1;
        }
        aLi.hide().eq(index).fadeIn();
    });
    //云端作品
    $("#works .cot").find("li").click(function(){
        var index=$(this).index();
        $("#works .cot").find("li").removeClass("bankground_color");
        $(this).addClass("bankground_color");
        $("#minr").find(".list").hide();
        $("#minr").find(".list").eq(index).show();
    });
    $("#minr .list_box li").find("a").click(function(){
        $("#minr .list_box li").find("a").removeClass("ac");
        $(this).addClass("ac");
    });

    /*云端作品详情页*/
    (function(){
        var index=1;
        $("#next").click(function(e){
            e.preventDefault();
            $("#upper").removeClass("bankground_color");
            $(this).addClass("bankground_color");
            index++;
            if(index>3){
                index=3;
            }
            $("#bottom_box").css({"background-image":"url(../images/cloudworks_detail_pre0"+index+".jpg)"});
        });
        $("#upper").click(function(){
            $("#next").removeClass("bankground_color");
            $(this).addClass("bankground_color");
            index--;
            if(index<1){
                index=1;
            }
            $("#bottom_box").css({"background-image":"url(../images/cloudworks_detail_pre0"+index+".jpg)"});
        });
        $("#works").find(".abc").click(function(){
            var i=$(this).index();
            $(".min").find(".min_left").eq(i).show().siblings().hide();
            $("#works").find(".abc").eq(i).addClass("ccc").siblings().removeClass("ccc");
        });
    })();
    /*明星经纪*/
    (function(){
        var data=[
            {name:"张沐莀",imgsrc:"../images/actor1.png"},
            {name:"陆钧彦",imgsrc:"../images/actor2.png"},
            {name:"赵子熙",imgsrc:"../images/actor3.png"},
            {name:"张沐莀",imgsrc:"../images/actor4.png"},
            {name:"张沐莀",imgsrc:"../images/actor5.png"},
            {name:"张沐莀",imgsrc:"../images/actor6.png"}
        ]
        var actor=$("#actor");//明星经纪页面
        var innerhtml="";
        for(var i=0;i<data.length;i++){
            var item="<li class='item'><img src='"+data[i].imgsrc+"'></li>";
            innerhtml+=item;
        }
        actor.find(".picList").append(innerhtml);
        //轮播
        $(".slideBox").hover(function(){
            $(".arraw").fadeIn();
        },function(){
            $(".arraw").fadeOut();
        });
        var item=actor.find(".item");
        var itemW=item.width();
        var dx=itemW+75;

        actor.find(".picList").width(item.length*dx);
        var index=0;
        actor.find(".pre").on("click",function(){
            clearInterval(timer);
            index--;
            if(index<0){
                index=0;
            }
            actor.find(".picList").animate({"left":-dx*index});
            setTimeout(function(){
                change();
            },2000)

        })
        actor.find(".next").on("click",function(){
            clearInterval(timer);
            index++;
            if(index>item.length-3){
                index=item.length-3;
            }
            actor.find(".picList").animate({"left":-dx*index});
            setTimeout(function(){
                change();
            },2000)

        })
        var timer=null;
        function change(){
            timer=setInterval(function(){
                index++;
                if(index>item.length-3){
                    index=0;
                }
                actor.find(".picList").animate({"left":-dx*index});
            },2000)
        };
        change();
        actor.find(".item").on("click",function(){
            self.location="actor_detailed.html";
        })
    })();


})
