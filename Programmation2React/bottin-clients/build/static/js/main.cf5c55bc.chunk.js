(this["webpackJsonpbottin-clients"]=this["webpackJsonpbottin-clients"]||[]).push([[0],{18:function(e,t,n){},31:function(e,t,n){e.exports=n(53)},36:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/Alexandre_Gagnon.9b9bc8de.jpeg"},41:function(e,t,n){e.exports=n.p+"static/media/Camille_Pelletier.15c39841.jpeg"},42:function(e,t,n){e.exports=n.p+"static/media/Catherine_Gagne.5472da8f.jpeg"},43:function(e,t,n){e.exports=n.p+"static/media/David_Tremblay.5b87f2bb.jpeg"},44:function(e,t,n){e.exports=n.p+"static/media/Gabrielle_Roy.d739e5df.jpeg"},45:function(e,t,n){e.exports=n.p+"static/media/Jessica_Lavoie.c48f0513.jpeg"},46:function(e,t,n){e.exports=n.p+"static/media/Jonathan_Gauthier.a051a9b7.jpeg"},47:function(e,t,n){e.exports=n.p+"static/media/Mathieu_Ouellet.e2c9c5eb.jpeg"},48:function(e,t,n){e.exports=n.p+"static/media/Stephanie_Cote.9acac577.jpeg"},49:function(e,t,n){e.exports=n.p+"static/media/Vanessa_Fortin.fdc5cac4.jpeg"},50:function(e,t,n){e.exports=n.p+"static/media/Emilie_Morin.d0f4ab63.jpeg"},51:function(e,t,n){e.exports=n.p+"static/media/Maxime_Bouchard.28c577fa.jpeg"},53:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(27),c=n.n(r),l=(n(36),n(18),n(7)),s=n(8),o=n(5),h=n(10),m=n(9),u=n(22),d=n(12),p=n(14),f=n(29),b=n(16),g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hovered:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(d.a,{xl:"2",lg:"3",md:"4",sm:"6",xs:"12",className:"mb-3",onMouseOut:function(){return e.setState({hovered:!1})},onMouseOver:function(){return e.setState({hovered:!0})}},i.a.createElement(p.a,{className:"h-100 bg-light"},i.a.createElement(p.a.Img,{variant:"top",src:this.props.src}),i.a.createElement(p.a.Body,null,i.a.createElement(p.a.Title,null,this.props.prenom+" "+this.props.nom),i.a.createElement(p.a.Text,null,this.props.metier)),i.a.createElement(f.a,{className:"list-group-flush"},i.a.createElement(b.a,null,i.a.createElement("b",null,"Email:")," ",i.a.createElement(p.a.Text,null,i.a.createElement("a",{href:"mailto:"+this.props.email},this.props.email))),i.a.createElement(b.a,null,i.a.createElement("b",null,"T\xe9l\xe9phone:")," ",i.a.createElement(p.a.Text,null,i.a.createElement("a",{href:"tel:"+this.props.telephone},this.props.telephone)," ")),i.a.createElement(b.a,null,i.a.createElement("b",null,"Adresse:")," ",i.a.createElement(p.a.Text,null,this.props.adresse)))))}}]),n}(i.a.Component),v=n(17),C=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a.handleDeconexion=a.handleDeconexion.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"handleDeconexion",value:function(){this.props.onClick()}},{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-end"},i.a.createElement("button",{onClick:this.handleDeconexion,type:"",className:"btn btn-danger "},"D\xe9connexion"))}}]),n}(i.a.Component),x=n(30),j=n(21),y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a.handleReset=a.handleReset.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("button",{type:"reset",onClick:this.handleReset,variant:"outline-success"},"Annuler Recherche")}},{key:"handleReset",value:function(){this.props.onAnnulerRecherche(!1)}}]),n}(i.a.Component),E=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={stringRecherche:"",reset:!1,rechercheActive:!1},a.handleRechercheChange=a.handleRechercheChange.bind(Object(o.a)(a)),a.handleRecherche=a.handleRecherche.bind(Object(o.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(o.a)(a)),a.ChangeStateReset=a.ChangeStateReset.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"handleRechercheChange",value:function(e){var t=e.target.value;this.setState({stringRecherche:t}),0===e.target.value.length&&!1===this.state.rechercheActive?this.setState({reset:!1}):this.setState({reset:!0})}},{key:"handleRecherche",value:function(){this.props.onBtnClick(this.state.stringRecherche),""!==this.state.stringRecherche?(this.setState({reset:!0}),this.setState({rechercheActive:!0})):(this.setState({reset:!1}),this.setState({rechercheActive:!1}))}},{key:"handleKeyPress",value:function(e){13===e.charCode&&this.handleRecherche()}},{key:"ChangeStateReset",value:function(e){this.setState({reset:e}),this.Reset()}},{key:"Reset",value:function(){document.getElementById("inputRecherche").value="",this.setState({stringRecherche:""}),this.props.onBtnClick(""),this.setState({rechercheActive:!1})}},{key:"AfficherAnnuler",value:function(){if(!0===this.state.reset)return i.a.createElement(y,{onAnnulerRecherche:this.ChangeStateReset})}},{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-start"},i.a.createElement(x.a,{id:"formRecherche",inline:!0,onSubmit:function(e){e.preventDefault()}},i.a.createElement(j.a,{id:"inputRecherche",onKeyPress:this.handleKeyPress,onChange:this.handleRechercheChange,type:"text",placeholder:"Recherche"}),i.a.createElement("button",{type:"button",id:"recherche",onClick:this.handleRecherche,variant:"outline-success",className:"mx-sm-2"},"Recherche"),this.AfficherAnnuler()))}}]),n}(i.a.Component),O=[{src:n(40),alt:"Alexandre_Gagnon",title:"Alexandre Gagnon",prenom:"Alexandre",nom:"Gagnon",metier:"Op\xe9rateur de plieuse",email:"Alexandre_Gagnon@gmail.com",telephone:"(514) 000-0001",adresse:"91970 Lila Stravenue"},{src:n(41),alt:"Camille_Pelletier",title:"Camille Pelletier",prenom:"Camille",nom:"Pelletier",metier:"Pr\xe9pos\xe9e au poste d\u2019accueil",email:"Camille_Pelletier@gmail.com",telephone:"(514) 000-0002",adresse:"80155 Minerva Crescent"},{src:n(42),alt:"Catherine_Gagn\xe9",title:"Catherine Gagn\xe9",prenom:"Catherine",nom:"Gagn\xe9",metier:"Assembleusede mat\xe9riel m\xe9canique",email:"Catherine_Gagne@gmail.com",telephone:"(514) 000-0003",adresse:"50811 Marks Gardens"},{src:n(43),alt:"David_Tremblay",title:"David Tremblay",prenom:"David",nom:"Tremblay",metier:"Pr\xe9parateur de commandes postales",email:"David_Tremblay@gmail.com",telephone:"(514) 000-0004",adresse:"33376 Hyman Unions"},{src:n(44),alt:"Gabrielle_Roy",title:"Gabrielle Roy",prenom:"Gabrielle",nom:"Roy",metier:"Pr\xe9pos\xe9e au service alimentaire",email:"Gabrielle_Roy@gmail.com",telephone:"(514) 000-0005",adresse:"74303 Hildegard Radial"},{src:n(45),alt:"Jessica_Lavoie",title:"Jessica Lavoie",prenom:"Jessica",nom:"Lavoie",metier:"Aide-\xe9ducatrice",email:"Jessica_Lavoie@gmail.com",telephone:"(514) 000-0006",adresse:"708 Schultz"},{src:n(46),alt:"Jonathan_Gauthier",title:"Jonathan Gauthier",prenom:"Jonathan",nom:"Gauthier",metier:"Patrouilleur de parcs de stationnement",email:"Jonathan_Gauthier@gmail.com",telephone:"(514) 000-0007",adresse:"0668 Breitenberg Parks"},{src:n(47),alt:"Mathieu_Ouellet",title:"Mathieu Ouellet",prenom:"Mathieu",nom:"Ouellet",metier:"Assistant-c\xe9ramiste mouleur",email:"Mathieu_Ouellet@gmail.com",telephone:"(514) 000-0008",adresse:"1363 Hamill Views "},{src:n(48),alt:"St\xe9phanie_C\xf4t\xe9",title:"St\xe9phanie C\xf4t\xe9",prenom:"St\xe9phanie",nom:"C\xf4t\xe9",metier:"Aide dans un salon de coiffure",email:"Stephanie_Cote@gmail.com",telephone:"(514) 000-0009",adresse:"0600 Muller Well"},{src:n(49),alt:"Vanessa_Fortin",title:"Vanessa Fortin",prenom:"Vanessa",nom:"Fortin",metier:"Assistante en loisirs",email:"Vanessa_Fortin@gmail.com",telephone:"(514) 000-0010",adresse:"986 Clyde Spur"},{src:n(50),alt:"\xc9milie_Morin",title:"\xc9milie Morin",prenom:"\xc9milie",nom:"Morin",metier:"Brigadi\xe8re",email:"Emilie_Morin@gmail.com",telephone:"(514) 000-0011",adresse:"46375 Lloyd Meadows"},{src:n(51),alt:"Maxime_Bouchard",title:"Maxime Bouchard",prenom:"Maxime",nom:"Bouchard",metier:"Assembleur de composants \xe9lectroniques",email:"Maxime_Bouchard@gmail.com",telephone:"(514) 000-0012",adresse:"404 Mohr Heights"}],R=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={recherche:""},a.Header=a.Header.bind(Object(o.a)(a)),a.handleDeconnexion=a.handleDeconnexion.bind(Object(o.a)(a)),a.ActiveRecherche=a.ActiveRecherche.bind(Object(o.a)(a)),a.Recherche=a.Recherche.bind(Object(o.a)(a)),a.AfficherClients=a.AfficherClients.bind(Object(o.a)(a)),a.IncludesString=a.AfficherClients.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"AfficherClients",value:function(){var e=this;return i.a.createElement(v.a,null,O.map((function(t,n){return t.title.toLowerCase().includes(e.state.recherche.toLowerCase())&&i.a.createElement(g,{key:"client"+n,src:t.src,alt:t.alt,title:t.title,prenom:t.prenom,nom:t.nom,metier:t.metier,email:t.email,telephone:t.telephone,adresse:t.adresse})})))}},{key:"Header",value:function(){return i.a.createElement(v.a,{id:"header",className:"d-flex align-items-center pt-3"},i.a.createElement(d.a,{xl:"4",lg:"4",md:"6",sm:"12",xs:"12"},i.a.createElement("h1",null,i.a.createElement("span",{className:"px-2"},"Bottin des clients"))),i.a.createElement(d.a,{xl:"4",lg:"4",md:"6",sm:"12",xs:"12"}," ",this.Recherche()),i.a.createElement(d.a,{xl:"4",lg:"4",md:"12",sm:"12",xs:"12"}," ",this.AfficheButtonDeconnexion()))}},{key:"Recherche",value:function(){return i.a.createElement(E,{onBtnClick:this.ActiveRecherche})}},{key:"AfficheButtonDeconnexion",value:function(){return i.a.createElement(C,{onClick:this.handleDeconnexion})}},{key:"ActiveRecherche",value:function(e){this.setState({recherche:e})}},{key:"handleDeconnexion",value:function(){this.props.onDeconnexion()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.Header(),i.a.createElement("hr",{className:"style"}),this.AfficherClients())}}]),n}(i.a.Component),k=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={password:""},a.handleConexion=a.handleConexion.bind(Object(o.a)(a)),a.handleChangePassword=a.handleChangePassword.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"handleConexion",value:function(){"Alibaba"===this.state.password&&this.props.onConnexion()}},{key:"handleChangePassword",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(v.a,{className:"mt-5"},i.a.createElement(d.a,{className:"filter px-5 py-4",xs:!0,lg:{span:6,offset:3}},i.a.createElement("h2",null,"Connexion au bottin de clients"),i.a.createElement("form",null,i.a.createElement("div",{className:"form-group "},i.a.createElement("input",{onChange:this.handleChangePassword,type:"password",className:"form-control",id:"pass",placeholder:"Code d'acc\xe8s",name:"password"})),i.a.createElement("div",{className:"d-flex justify-content-end"},i.a.createElement("button",{type:"",className:"btn btn-warning",onClick:this.handleConexion},"Connexion"))))))}}]),n}(i.a.Component),A=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={connected:!0},a.gestionConnexion=a.gestionConnexion.bind(Object(o.a)(a)),a.ChangeConexion=a.ChangeConexion.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"gestionConnexion",value:function(){var e=this.state.connected;return e?i.a.createElement(i.a.Fragment,null,i.a.createElement(R,{onDeconnexion:this.ChangeConexion})):e?void 0:i.a.createElement(k,{onConnexion:this.ChangeConexion})}},{key:"ChangeConexion",value:function(){this.setState({connected:!this.state.connected})}},{key:"render",value:function(){return i.a.createElement(u.a,{fluid:!0},this.gestionConnexion())}}]),n}(i.a.Component);var _=function(){return i.a.createElement(A,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(52);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.cf5c55bc.chunk.js.map