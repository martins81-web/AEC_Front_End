(this.webpackJsonpbecflix=this.webpackJsonpbecflix||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/play.141d163b.png"},,function(e,t,a){e.exports=a.p+"static/media/becflix.46a32f48.png"},function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/lesinvincibles.6f54be64.jpg"},function(e,t,a){e.exports=a.p+"static/media/serienoire.07756307.jpg"},function(e,t,a){e.exports=a.p+"static/media/19-2.bab70690.jpg"},function(e,t,a){e.exports=a.p+"static/media/district31.8e4c6ea1.jpg"},function(e,t,a){e.exports=a.p+"static/media/fugueuse.70284935.jpg"},function(e,t,a){e.exports=a.p+"static/media/unite9.f2ca7766.jpg"},function(e,t,a){e.exports=a.p+"static/media/lanceEtCompte.cb2cdb15.jpg"},function(e,t,a){e.exports=a.p+"static/media/lapetitevie.ac41b93d.jpg"},function(e,t,a){e.exports=a.p+"static/media/lesbeauxmalaises.c89bc22a.jpg"},function(e,t,a){e.exports=a.p+"static/media/lesbougon.7e617f65.jpg"},function(e,t,a){e.exports=a.p+"static/media/lesboys.60f3ea08.jpg"},function(e,t,a){e.exports=a.p+"static/media/minuitlesoir.dac29dc9.jpg"},function(e,t,a){e.exports=a.p+"static/media/betterCallSaul.9757f68c.jpg"},function(e,t,a){e.exports=a.p+"static/media/breakingbad.89c0fe3c.jpg"},function(e,t,a){e.exports=a.p+"static/media/dexter.89ae9f0e.jpg"},function(e,t,a){e.exports=a.p+"static/media/got.bd35d73b.jpg"},function(e,t,a){e.exports=a.p+"static/media/mandalorian.1731a552.jpg"},function(e,t,a){e.exports=a.p+"static/media/vikings.303d3b0a.jpg"},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),o=a.n(r),c=(a(24),a(25),a(1)),s=a(2),l=a(6),u=a(4),m=a(3),p=a(13),h=a(8),d=a(9),f=a(12),g=a(16),b=a.n(g),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={hover:!1,hoverplay:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(d.a,{xs:!0,lg:"2"},i.a.createElement("div",{className:"container-tvShow "+(this.state.hover?"filtered":null)},i.a.createElement(f.a,{id:"imgShow",fluid:!0,onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})},src:this.props.src,alt:this.props.alt}),i.a.createElement("div",{className:this.state.hover?"title":"hide",onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}},this.props.title),i.a.createElement(f.a,{fluid:!0,className:this.state.hover?this.state.hoverplay?"play hover-play":"play":"hide",onMouseOver:function(){e.setState({hover:!0}),e.setState({hoverplay:!0})},onMouseOut:function(){e.setState({hover:!1}),e.setState({hoverplay:!1})},src:b.a,alt:"play",width:"35px",height:"35px"})))}}]),a}(i.a.Component),x=[{src:a(26),alt:"Les invincibles",title:"Les Invincibles"},{src:a(27),alt:"S\xe9rie noire",title:"S\xe9rie noire"},{src:a(28),alt:"19-2",title:"19-2"},{src:a(29),alt:"district31",title:"District 31"},{src:a(30),alt:"Fugueuse",title:"Fugueuse"},{src:a(31),alt:"Unite 9",title:"Unite 9"}],E=[{src:a(32),alt:"Lance et Compte",title:"Lance et Compte"},{src:a(33),alt:"La Petite Vie",title:"La Petite Vie"},{src:a(34),alt:"Les Beaux Malaises",title:"Les Beaux Malaises"},{src:a(35),alt:"Les Bougon",title:"Les Bougon"},{src:a(36),alt:"Les Boys",title:"Les Boys"},{src:a(37),alt:"Minuit le Soir",title:"Minuit le Soir"}],C=[{src:a(38),alt:"Better Call Saul",title:"Better Call Saul"},{src:a(39),alt:"Breaking Bad",title:"Breaking Bad"},{src:a(40),alt:"Dexter",title:"Dexter"},{src:a(41),alt:"Got",title:"Got"},{src:a(42),alt:"Mandalorian",title:"The Mandalorian"},{src:a(43),alt:"Vikings",title:"Vikings"}],j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.AfficherTitreCategorie(),this.AfficherSeriesCategorie())}},{key:"AfficherTitreCategorie",value:function(){return i.a.createElement(h.a,{className:"mt-4"},i.a.createElement("h1",{className:"text-white ml-3"},this.props.categorie))}},{key:"AfficherSeriesCategorie",value:function(){return"Suspense"===this.props.categorie?i.a.createElement(h.a,null,x.map((function(e,t){return i.a.createElement(v,{key:"suspense"+t,src:e.src,alt:e.alt,title:e.title})}))):"Humour"===this.props.categorie?i.a.createElement(h.a,null,E.map((function(e,t){return i.a.createElement(v,{key:"humour"+t,src:e.src,alt:e.alt,title:e.title})}))):"S\xe9ries am\xe9ricaines"===this.props.categorie?i.a.createElement(h.a,null,C.map((function(e,t){return i.a.createElement(v,{key:"seriesAmericaines"+t,src:e.src,alt:e.alt,title:e.title})}))):void 0}}]),a}(i.a.Component);j.defaultProps={categorie:"Suspense"};var y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{categorie:"Suspense"}),i.a.createElement(j,{categorie:"Humour"}),i.a.createElement(j,{categorie:"S\xe9ries am\xe9ricaines"}),i.a.createElement(j,null),i.a.createElement(j,null),i.a.createElement(j,null))}}]),a}(i.a.Component),O=a(18),k=a.n(O),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handleConexion=n.handleConexion.bind(Object(l.a)(n)),n.handleChangeEmail=n.handleChangeEmail.bind(Object(l.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"handleConexion",value:function(){var e=this.state.email,t=this.state.password;if("shany.carle@gmail.com"===e&&"patate"===t){this.props.onClick(!0)}}},{key:"handleChangeEmail",value:function(e){var t=e.target.value;this.setState({email:t})}},{key:"handleChangePassword",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,{className:"mt-3"},i.a.createElement(d.a,{xs:!0,lg:"6"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"text-white",htmlFor:"email"},"Email address"),i.a.createElement("input",{onChange:this.handleChangeEmail,type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"text-white",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.handleChangePassword,type:"password",className:"form-control",id:"pass",placeholder:"Password",name:"password"})),i.a.createElement("button",{type:"",className:"btn btn-primary",onClick:this.handleConexion},"Connexion")))))}}]),a}(i.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n.handleDeconexion=n.handleDeconexion.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"handleDeconexion",value:function(){this.props.onClick(!1)}},{key:"render",value:function(){return i.a.createElement(d.a,{xs:!0,lg:"6"},i.a.createElement("div",{className:"d-flex justify-content-end"},i.a.createElement("button",{onClick:this.handleDeconexion,type:"",className:"btn btn-danger mt-3"},"D\xe9connexion")))}}]),a}(i.a.Component),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={connected:!1},n.gestionConnexion=n.gestionConnexion.bind(Object(l.a)(n)),n.ChangeConexion=n.ChangeConexion.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"gestionConnexion",value:function(){var e=this.state.connected;return e?i.a.createElement(y,null):e?void 0:i.a.createElement(S,{onClick:this.ChangeConexion})}},{key:"ChangeConexion",value:function(e){this.setState({connected:e})}},{key:"AfficheLogo",value:function(){return i.a.createElement(d.a,{xs:!0,lg:"6"},i.a.createElement(f.a,{className:"mt-2",src:k.a,alt:"logoBecFlix",height:"64"}))}},{key:"AfficheButtonDeconnexion",value:function(){return this.state.connected?i.a.createElement(w,{onClick:this.ChangeConexion}):null}},{key:"render",value:function(){return i.a.createElement(p.a,{fluid:!0},i.a.createElement(h.a,null,this.AfficheLogo(),this.AfficheButtonDeconnexion()),this.gestionConnexion())}}]),a}(i.a.Component);var N=function(){return i.a.createElement(B,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.43608298.chunk.js.map