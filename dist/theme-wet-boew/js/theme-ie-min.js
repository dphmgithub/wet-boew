/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-02-09 03:16 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-wet-boew",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,menu:null,init:function(){b.fullhd=pe.header.find("#wet-fullhd");b.psnb=pe.header.find("#wet-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#wet-srchbx");b.bcrumb=pe.header.find("#wet-bc");b.title=pe.header.find("#wet-title");b.sft=pe.footer.find("#wet-sft");b.fullft=pe.footer.find("#wet-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var q,y,f="",p=pe.dic.get("%menu"),m=pe.dic.get("%search"),g,v,r,w="",j='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-'+((pe.rtl)?"left":"right")+'">'+pe.dic.get("%close")+"</a>",l="",s,d,h,k,x,z,t,u,n,o;if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){x=b.menubar.find("ul.mb-menu li");q="<div "+j+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");y=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?g:b.bcrumb.children(":header")[0])).innerHTML;q+="<h1>"+p+"</h1>"+e+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){o=b.bcrumb[0];q+='<section><div id="jqm-mb-location-text">'+o.innerHTML+"</div></section>";o.parentNode.removeChild(o)}else{q+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){f+="<section><div><h2>"+g.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>";o=pe.secnav[0];o.parentNode.removeChild(o)}if(b.menubar.length!==0){f+="<section><div><h2>"+y+"</h2>"+pe.menu.buildmobile(x,3,"a",true,true,"c",true,true)+"</div></section>"}q+='<div id="jqm-mb-menu"></div></nav></div></div></div>';w+=q;b.menu=f;l+='<li><a data-rel="popup" data-theme="a" data-icon="bars" href="#jqm-wb-mb">'+p+"</a></li>"}if(b.search.length!==0){v=b.search[0].innerHTML;r="<div "+j+' id="jqm-wb-search"><div data-role="header"><h1>'+m+"</h1>"+e+'</div><div data-role="content"><div>'+v.substring(v.indexOf("<form"))+"</div></div></div>";w+=r;l+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+m+"</a></li>"}pe.bodydiv.append(w);if(l.length!==0){s=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+l+"</ul></div>");b.title.after(s)}if(b.sft.length!==0){d=b.sft.find(".wet-col-head a").get();z=document.getElementById("wet-sft-in");if(b.fullft.length!==0){o=b.fullft[0];o.parentNode.removeChild(o)}k='<ul class="ui-grid-a">';for(t=0,u=d.length;t<u;t+=1){h=d[t];k+='<li class="ui-block-'+(t%2!==0?"b":"a")+'"><a href="'+h.href+'" data-role="button" data-theme="c" data-corners="false">'+h.innerHTML+"</a></li>"}k+="</ul>";z.id="";z.className="";z.setAttribute("data-role","footer");z.innerHTML=k}c(document).on("pagecreate",function(){if(b.menubar.length!==0){o=b.psnb[0];o.parentNode.removeChild(o)}if(b.search.length!==0){o=b.search[0];o.parentNode.removeChild(o)}if(l.length!==0){s.children().removeClass("wb-hide");var A=pe.bodydiv.find("#jqm-mb-menu");if(A.length!==0){A.append(b.menu);s.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){A.trigger("create");n=A[0].getElementsByTagName("li");if(o.className.indexOf("ui-corner-bottom")===-1){o.className+=" ui-corner-bottom"}})}}function i(C,B,F,E){var D;c.mobile.showPageLoadingMsg();D=c.mobile.transitionHandlers.simultaneous("pop",B,F,E);D.done(function(){c.mobile.hidePageLoadingMsg()});return D}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));