(this.webpackJsonpbecflix=this.webpackJsonpbecflix||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/becflix.46a32f48.png"},,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/lesinvincibles.6f54be64.jpg"},function(e,t,a){e.exports=a.p+"static/media/serienoire.07756307.jpg"},function(e,t,a){e.exports=a.p+"static/media/19-2.bab70690.jpg"},function(e,t,a){e.exports=a.p+"static/media/district31.8e4c6ea1.jpg"},function(e,t,a){e.exports=a.p+"static/media/fugueuse.91d87a25.jpg"},function(e,t,a){e.exports=a.p+"static/media/unite9.f2ca7766.jpg"},function(e,t,a){e.exports=a.p+"static/media/lanceEtCompte.cb2cdb15.jpg"},function(e,t,a){e.exports=a.p+"static/media/lapetitevie.ac41b93d.jpg"},function(e,t,a){e.exports=a.p+"static/media/lesbeauxmalaises.c89bc22a.jpg"},function(e,t,a){e.exports=a.p+"static/media/lesbougon.7e617f65.jpg"},function(e,t,a){e.exports=a.p+"static/media/lesboys.60f3ea08.jpg"},function(e,t,a){e.exports=a.p+"static/media/minuitlesoir.dac29dc9.jpg"},function(e,t,a){e.exports=a.p+"static/media/betterCallSaul.9757f68c.jpg"},function(e,t,a){e.exports=a.p+"static/media/breakingbad.89c0fe3c.jpg"},function(e,t,a){e.exports=a.p+"static/media/dexter.89ae9f0e.jpg"},function(e,t,a){e.exports=a.p+"static/media/got.bd35d73b.jpg"},function(e,t,a){e.exports=a.p+"static/media/mandalorian.1731a552.jpg"},function(e,t,a){e.exports=a.p+"static/media/vikings.303d3b0a.jpg"},,function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(12),c=a.n(r),s=(a(21),a(22),a(15)),l=a(2),o=a(10),u=a(3),p=a(4),m=a(9),f=a(8),d=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement(o.a,{xs:!0,lg:"2"}," ",n.a.createElement("div",null,n.a.createElement("img",{onMouseOver:this.handleEventOnHover,onMouseLeave:this.handleEventOnLeave,className:"img-fluid",src:this.props.src,alt:this.props.alt,title:this.props.title})))}},{key:"handleEventOnHover",value:function(e){e.target.parentNode.className="filtered"}},{key:"handleEventOnLeave",value:function(e){e.target.parentNode.className=""}}]),a}(n.a.Component),g=[{src:a(23),alt:"Les invincibles",title:"Les Invincibles"},{src:a(24),alt:"S\xe9rie noire",title:"S\xe9rie noire"},{src:a(25),alt:"19-2",title:"19-2"},{src:a(26),alt:"district31",title:"district31"},{src:a(27),alt:"Fugueuse",title:"Fugueuse"},{src:a(28),alt:"Unite 9",title:"Unite 9"}],h=[{src:a(29),alt:"Lance et Compte",title:"Lance et Compte"},{src:a(30),alt:"La Petite Vie",title:"La Petite Vie"},{src:a(31),alt:"Les Beaux Malaises",title:"Les Beaux Malaises"},{src:a(32),alt:"Les Bougon",title:"Les Bougon"},{src:a(33),alt:"Les Boys",title:"Les Boys"},{src:a(34),alt:"Minuit le Soir",title:"Minuit le Soir"}],b=[{src:a(35),alt:"Better Call Saul",title:"Better Call Saul"},{src:a(36),alt:"Breaking Bad",title:"Breaking Bad"},{src:a(37),alt:"Dexter",title:"Dexter"},{src:a(38),alt:"Got",title:"Got"},{src:a(39),alt:"Mandalorian",title:"Mandalorian"},{src:a(40),alt:"Vikings",title:"Vikings"}],v=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.AfficherTitreCategorie(),this.AfficherSeriesCategorie())}},{key:"AfficherTitreCategorie",value:function(){return n.a.createElement(l.a,null,n.a.createElement("h1",null,this.props.categorie))}},{key:"AfficherSeriesCategorie",value:function(){return"Suspense"===this.props.categorie?n.a.createElement(l.a,null,g.map((function(e,t){return n.a.createElement(d,{key:"suspense"+t,src:e.src,alt:e.alt,title:e.title})}))):"Humour"===this.props.categorie?n.a.createElement(l.a,null,h.map((function(e,t){return n.a.createElement(d,{key:"humour"+t,src:e.src,alt:e.alt,title:e.title})}))):"S\xe9ries am\xe9ricaines"===this.props.categorie?n.a.createElement(l.a,null,b.map((function(e,t){return n.a.createElement(d,{key:"seriesAmericaines"+t,src:e.src,alt:e.alt,title:e.title})}))):void 0}}]),a}(n.a.Component);v.defaultProps={categorie:"Suspense"};var E=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{categorie:"Suspense"}),n.a.createElement(v,{categorie:"Humour"}),n.a.createElement(v,{categorie:"S\xe9ries am\xe9ricaines"}),n.a.createElement(v,null),n.a.createElement(v,null),n.a.createElement(v,null))}}]),a}(n.a.Component),x=a(14),j=a.n(x);var k=function(){return n.a.createElement("div",{className:""},n.a.createElement(s.a,{fluid:!0},n.a.createElement(l.a,{className:""},n.a.createElement(o.a,{xs:!0,lg:"12"},n.a.createElement("img",{src:j.a,alt:"logoBecFlix",height:"64"}))),n.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.4343c271.chunk.js.map