/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	$(document).ready(function() {
		var a = [{
			label: "AngularJS",
			url: "#",
			target: "_top"
		}, {
			label: "Bootstrap",
			url: "#",
			target: "_top"
		}, {
			label: "Ajax",
			url: "#",
			target: "_top"
		}, {
			label: "AeffterEffects",
			url: "#",
			target: "_top"
		}, {
			label: "PhotoShop",
			url: "#",
			target: "_top"
		}, {
			label: "JavaScript",
			url: "#",
			target: "_top"
		}, {
			label: "HTML5",
			url: "#",
			target: "_top"
		}, {
			label: "CSS3",
			url: "#",
			target: "_top"
		}, {
			label: "Jquery",
			url: "#",
			target: "_top"
		}, {
			label: "WebApp",
			url: "#",
			target: "_top"
		}, {
			label: "MySQL",
			url: "#",
			target: "_top"
		}, {
			label: "PHP",
			url: "http://down.admin5.com/",
			target: "_top"
		}, {
			label: "Premiere",
			url: "#",
			target: "_top"
		}, {
			label: "JAVA",
			url: "#",
			target: "_top"
		}, {
			label: "Node.js",
			url: "#",
			target: "_top"
		}, {
			label: "Hbulider",
			url: "#",
			target: "_top"
		}, {
			label: "WebStorm",
			url: "#",
			target: "_top"
		}, {
			label: "Sublim",
			url: "#",
			target: "_top"
		}, {
			label: "Svn",
			url: "#",
			target: "_top"
		}, {
			label: "XAMPP",
			url: "#",
			target: "_top"
		}, {
			label: "DreamWeaver",
			url: "#",
			target: "_top"
		}, {
			label: "Avolon",
			url: "#",
			target: "_top"
		}, {
			label: "Move.js",
			url: "#",
			target: "_top"
		}, {
			label: "Velocity.js",
			url: "#",
			target: "_top"
		}, {
			label: "Fullpage.js",
			url: "#",
			target: "_top"
		}, ];
		var b = {
			entries: a,
			width: 640,
			height: 510,
			radius: "65%",
			radiusMin: 75,
			bgDraw: true,
			bgColor: "transparent",
			opacityOver: 1,
			opacityOut: 0.05,
			opacitySpeed: 6,
			fov: 800,
			speed: 0.5,
			fontFamily: "Oswald, Arial, sans-serif",
			fontSize: "15",
			fontColor: "#fff",
			fontWeight: "normal",
			fontStyle: "normal",
			fontStretch: "normal",
			fontToUpperCase: true
		};
		$("#tag-cloud").svg3DTagCloud(b)
	});




	window.onload = function() {
		var a = document.getElementById("section_two");
		var k = a.getElementsByTagName("img");
		var f = a.getElementsByClassName("message")[0].getElementsByTagName("span");
		var j = a.getElementsByTagName("li");
		for(var d = 0; d < j.length; d++) {
			(function(l) {
				j[l].onmouseover = function() {
					h(j);
					h(f);
					h(k);
					this.className = "bc_color";
					f[l].className = "xianshi";
					k[l].className = "xianshi"
				}
			})(d)
		}

		function h(i) {
			for(var l = 0; l < i.length; l++) {
				i[l].className = ""
			}
		}
		var g = document.getElementById("contncrnt_one").getElementsByTagName("img");
	//	var c = document.getElementById("contncrnt_two").getElementsByTagName("img");
		var b = document.getElementById("contncrnt_three").getElementsByTagName("img");

		function e(i) {
			i[1].onmouseover = function() {
				this.className = null;
				i[0].className = "one"
			};
			i[0].onmouseout = function() {
				this.className = null;
				i[1].className = "one"
			}
		}
		e(g);
	//	e(c);
		e(b)
	};





	$(window).ready(function() {
		var d;
		var c = 0;

		function b() {
			$("#slide_three .warp .point span").removeClass("visible");
			$("#slide_three .warp .fig img").fadeOut("slow")
		}
		$("#slide_three .warp .point span").click(function() {
			if($("#slide_three .warp .fig img").is(":animated")) {
				return
			}
			if(c == $(this).index()) {
				return
			} else {
				clearInterval(d);
				b();
				$(this).addClass("visible");
				c = $(this).index();
				$($("#slide_three .warp .fig img")[$(this).index()]).fadeIn("slow", a())
			}
		});
		$("#slide_three .warp #left").click(function() {
			if($("#slide_three .warp .fig img").is(":animated")) {
				return
			}
			clearInterval(d);
			c--;
			if(c == -1) {
				c = 4
			}
			b();
			$($("#slide_three .warp .fig img")[c]).fadeIn("slow", a());
			$($("#slide_three .warp .point span")[c]).addClass("visible")
		});
		$("#slide_three .warp #right").click(function() {
			if($("#slide_three .warp .fig img").is(":animated")) {
				return
			}
			clearInterval(d);
			c++;
			if(c == 5) {
				c = 0
			}
			b();
			$($("#slide_three .warp .fig img")[c]).fadeIn("slow", a());
			$($("#slide_three .warp .point span")[c]).addClass("visible")
		});

		function a() {
			d = setInterval(function() {
				c++;
				if(c == 5) {
					c = 0
				}
				b();
				$($("#slide_three .warp .fig img")[c]).fadeIn();
				$($("#slide_three .warp .point span")[c]).addClass("visible")
			}, 2000)
		}
		a()
	});

/***/ }
/******/ ]);