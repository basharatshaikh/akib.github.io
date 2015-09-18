$(document).ready(function(){
    mainObj=initEvent();
});
var mainObj ={};

function initEvent(){
    $("#home").click(function(){
        $("#contentLoader").load("Pages/html/html5.html");
    });
    $("#htmlHome").click(function(){
        $("#htContent").load("Pages/html/home.html");
    });
    $("#htIntro").click(function(){
        $("#htContent").load("Pages/html/htmlintro.html");
    });
    $("#htEdit").click(function(){
        $("#htContent").load("Pages/html/htmledit.html");
    });
    $("#htBasics").click(function(){
        $("#htContent").load("Pages/html/htmlbasics.html");
    });
    $("#htElements").click(function(){
        $("#htContent").load("Pages/html/htmlelements.html");
    });
    $("#htCss").click(function(){
        $("#htContent").load("Pages/html/htmlcss.html");
    });
    $("#htAtri").click(function(){
        $("#htContent").load("Pages/html/htmlatri.html");
    });
    $("#htHeading").click(function(){
        $("#htContent").load("Pages/html/htmlheading.html");
    });
    $("#htPara").click(function(){
        $("#htContent").load("Pages/html/htmlPara.html");
    });
    $("#htStyles").click(function(){
        $("#htContent").load("Pages/html/htmlstyles.html");
    });
    $("#htFormat").click(function(){
        $("#htContent").load("Pages/html/htmlformat.html");
    });
    $("#htQuot").click(function(){
        $("#htContent").load("Pages/html/htmlquot.html");
    });
     $("#htComp").click(function(){
        $("#htContent").load("Pages/html/htmlcomp.html");
    });
     $("#htComnt").click(function(){
        $("#htContent").load("Pages/html/htmlcomnt.html");
    });
     
     
     
    $("#css").click(function(){
        $("#contentLoader").load("Pages/css/csshome.html");
    });
    $("#cssHome").click(function(){
        $("#htContent").load("Pages/css/csshome1.html");
    });
    $("#cssIntro").click(function(){
        $("#htContent").load("Pages/css/cssintro.html");
    });
    $("#cssSyntax").click(function(){
        $("#htContent").load("Pages/css/csssyntax.html");
    });
    $("#cssSelect").click(function(){
        $("#htContent").load("Pages/css/cssselect.html");
    });
    $("#cssHow").click(function(){
        $("#htContent").load("Pages/css/csshow.html");
    });
    $("#cssBg").click(function(){
        $("#htContent").load("Pages/css/cssbg.html");
    });
    $("#cssText").click(function(){
        $("#htContent").load("Pages/css/csstext.html");
    });
    $("#cssFont").click(function(){
        $("#htContent").load("Pages/css/cssfont.html");
    });
    $("#cssLink").click(function(){
        $("#htContent").load("Pages/css/csslinks.html");
    });
    $("#cssList").click(function(){
        $("#htContent").load("Pages/css/csslists.html");
    });
    $("#cssTable").click(function(){
        $("#htContent").load("Pages/css/csstables.html");
    });
    $("#cssBox").click(function(){
        $("#htContent").load("Pages/css/cssbox.html");
    });
    
    
    
    
    $("#boot").click(function(){
        $("#contentLoader").load("Pages/boot/boothome.html");
    });
    $("#bsHome").click(function(){
        $("#htContent").load("Pages/boot/boothome1.html");
    });
    $("#bsGet").click(function(){
        $("#htContent").load("Pages/boot/bsget.html");
    });
    $("#bsGrid").click(function(){
        $("#htContent").load("Pages/boot/bsgrid.html");
    });
    $("#bsTypo").click(function(){
        $("#htContent").load("Pages/boot/bstypo.html");
    });
    $("#bsTables").click(function(){
        $("#htContent").load("Pages/boot/bstables.html");
    });
    $("#bsImage").click(function(){
        $("#htContent").load("Pages/boot/bsimages.html");
    });
    $("#bsJumb").click(function(){
        $("#htContent").load("Pages/boot/bsjumb.html");
    });
    $("#bsWell").click(function(){
        $("#htContent").load("Pages/boot/bswell.html");
    });
    $("#bsAlert").click(function(){
        $("#htContent").load("Pages/boot/bsalert.html");
    });
    $("#bsButton").click(function(){
        $("#htContent").load("Pages/boot/bsbutton.html");
    });
    $("#bsGroup").click(function(){
        $("#htContent").load("Pages/boot/bsgroup.html");
    });
    $("#bsGlyp").click(function(){
        $("#htContent").load("Pages/boot/bsglyp.html");
    });
    
    
    
    
    
    $("#contact").click(function(){
        $("#contentLoader").load("Pages/contact/contact.html");
    });
};