
$(".toggleButton").hover(function(){
		$(this).addClass("highlightedButton")
		},function(){
		$(this).removeClass("highlightedButton")
		}
		);
		
		$(".toggleButton").click(function(){
		
		   $(this).toggleClass("active");
		   $(this).removeClass("highlightedButton");
		   var panelId= $(this).attr("id")+"Panel";
		   $("#"+panelId).toggleClass("hidden");
		   
		   var numberOfActivePanels=4-$(".hidden").length;
		   $(".panel").width(($(window).width()-15)/numberOfActivePanels);
		}
		
		);
		
		function updateOutput()
		{
		$("iframe").contents().find("html").html(" <html> <head> <style type='text/css'> "+$("#cssPanel").val()+"</style></head><body>"+$("#htmlPanel").val()+"</body></html>");
		document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
		
		}
		
		updateOutput();
		$("textarea").on('change keyup paste',function(){
		updateOutput();
		});
		