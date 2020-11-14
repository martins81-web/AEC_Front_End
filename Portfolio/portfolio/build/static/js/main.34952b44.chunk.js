(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{149:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var i=a(3),r=(a(149),a(150),a(0)),n=a.n(r),s=a(28),o=a.n(s),c=a(52),l=a(17),d=a(27),p=a.n(d),h=a(74),u=a(75),b=a(44),j=a(82),m=a(81),g=a(414),x=a(32),A=a(424),y=a(422),O=a(76),f=a.n(O),v=a(423),k="en-us",S="fr-ca",B=a(61),E=a(34),C=Object(E.a)({},k,{HELLO:"hello",EDIT:"Edit {path} and save to reload.",DEV:"Front-End Web Developper",SEE_PORTFOLIO:"See Portfolio",MODE:"Mode",PARTICLES:"Particles",SNOW:"Snow",CHRISTMAS:"Christmas",CONNECTIONS:"Connections",PROJECTS:"Projects",PRESENTATION:"About",CONTACT:"Contact"}),w=Object(E.a)({},S,{HELLO:"Salut",EDIT:"Editez {path} et sauvegardez pour recharger.",DEV:"D\xe9veloppeur Front-End",SEE_PORTFOLIO:"Voir le Portfolio",MODE:"Mode",PARTICLES:"Particles",SNOW:"Neige",CHRISTMAS:"No\xebl",CONNECTIONS:"Connexions",PROJECTS:"Projets",PRESENTATION:"Pr\xe9sentation",CONTACT:"Contact"}),L=Object(B.a)(Object(B.a)({},C),w),R=function(e){var t=e.children,a=e.locale,n=void 0===a?k:a;return Object(i.jsx)(v.a,{locale:n,textComponent:r.Fragment,messages:L[n],children:t})},M=a(413),Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.jsx)(M.a,{id:e,values:Object(B.a)({},t)})},U=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).mouseOver=function(){e.setState({buttonBackgroundcolor:"white",buttonColor:"black"})},e.mouseOut=function(){e.setState({buttonBackgroundcolor:"transparent",buttonColor:"white"})},e.handleModeSelection=function(t){var a;switch(t.target.value){case"1":a="Particles";break;case"2":a="Connexions";break;case"3":a="Neige";break;case"4":a="Noel";break;default:a="Particles"}switch(a){case"Particles":e.setState({parametres:F,overlayBackgroundColor:"SteelBlue",backgroundColor:"LightSeaGreen"});break;case"Connexions":e.setState({parametres:N,overlayBackgroundColor:"#ed9121",backgroundColor:"black"});break;case"Neige":e.setState({parametres:G,overlayBackgroundColor:"Salmon",backgroundColor:"DarkSlateBlue"});break;case"Noel":e.setState({parametres:D,overlayBackgroundColor:"#aaa9ad",backgroundColor:"#b61924"});break;default:e.setState({parametres:F,overlayBackgroundColor:"DarkSeaGreen",backgroundColor:"black"})}},e.handleLanguageChange=function(){e.state.checked?e.setState({language:S}):e.setState({language:k})},e.state={buttonBackgroundcolor:"transparent",buttonColor:"white",parametres:F,overlayBackgroundColor:"SteelBlue",backgroundColor:"LightSeaGreen",language:S,checked:!1},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.setState({language2:this.props.location.pathname.substring(this.props.location.pathname.length-5,this.props.location.pathname.length)});case 3:return e.next=5,console.log(this.state.language2);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:"en-us"===this.state.language2&&this.setState({language:k,checked:!0});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object(x.a)({switchBase:{color:this.state.overlayBackgroundColor,"&$checked":{color:this.state.overlayBackgroundColor},"&$checked + $track":{backgroundColor:this.state.backgroundColor},"&+$track":{backgroundColor:this.state.backgroundColor}},checked:{},track:{}})(A.a),a={color:this.state.buttonColor,border:"1px solid white",backgroundColor:this.state.buttonBackgroundcolor},r={backgroundColor:this.state.backgroundColor,position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:0},n={position:"relative",display:"flex",flexDirection:"column",alignItems:"center",color:"white",border:"2px solid white",padding:"20px",borderRadius:"14px",backgroundColor:this.state.overlayBackgroundColor,WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"};return Object(i.jsx)(R,{locale:this.state.language,children:Object(i.jsxs)("div",{style:I,children:[Object(i.jsx)("div",{style:P,children:Object(i.jsx)("div",{style:{padding:"10px",border:"2px solid black"},children:Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(i.jsx)(g.a,{children:"Fran\xe7ais"}),Object(i.jsx)(t,{onClick:this.handleLanguageChange,checked:this.state.checked,onChange:function(){return e.setState({checked:!e.state.checked})},disableRipple:!0}),Object(i.jsx)(g.a,{children:"English"})]})})}),Object(i.jsx)(f.a,{style:r,params:this.state.parametres}),Object(i.jsxs)("div",{style:n,children:[Object(i.jsxs)("div",{className:"text-center mb-3",children:[Object(i.jsx)(g.a,{variant:"h3",children:"Eric Martins"}),Object(i.jsx)(g.a,{variant:"h6",style:{color:"#48fb47"},children:Q("DEV")})]}),Object(i.jsx)("div",{style:a,children:Object(i.jsx)(y.a,{component:c.b,to:"/Portfolio/"+this.state.language,onMouseOver:this.mouseOver,onMouseOut:this.mouseOut,color:"inherit",children:Object(i.jsx)(g.a,{variant:"h6",children:Q("SEE_PORTFOLIO")})})})]})]})})}}]),a}(n.a.Component),P={position:"absolute",top:0,left:0,border:"1px solid white",zIndex:"100",margin:"20px",padding:"1px",backgroundColor:"white"},I={position:"relative",height:"100vh",display:"flex",alignContent:"center",justifyContent:"center",alignItems:"center"},D={particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"star",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:4,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},G={particles:{number:{value:110,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:4,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},N={particles:{number:{value:40,density:{enable:!0,value_area:500}},color:{value:"#ff9800"},shape:{type:"polygon",stroke:{width:2,color:"#ff9800"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0},size:{value:10,random:!0},line_linked:{enable:!1,distance:200,color:"#ff5722",opacity:.3,width:2},move:{enable:!0,speed:4,direction:"bottom",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:["grab","bubble"]},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.7}},bubble:{distance:600,size:12,duration:1,opacity:.8,speed:2},repulse:{distance:400,duration:.4},push:{particles_nb:20},remove:{particles_nb:10}}},retina_detect:!0},F={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},z=a(99),J=a(85),T=a(58),Y=a(415),Z=a(420),W=a(421),V=a(416),H=a(417),q=a(418),K=a(419),X=a(98),_=a.p+"static/media/alteredCarbon.daa1cf7a.JPG",$=a.p+"static/media/bottin.2fe01781.JPG",ee=a.p+"static/media/destination.1751f6d2.JPG",te=a.p+"static/media/etudiants.a25dcc51.JPG",ae=a.p+"static/media/formulaire.4a353d98.JPG",ie=a.p+"static/media/hanSolo.dd2f4159.JPG",re=a.p+"static/media/netflix.dce08a6f.JPG",ne=a.p+"static/media/norris.3734db38.JPG",se=a.p+"static/media/photociti.aef5e134.JPG",oe=a.p+"static/media/portugal.1aa20591.JPG",ce=a.p+"static/media/rebrandly.afe85e42.JPG",le=a.p+"static/media/spotify.f1320f12.JPG",de=a.p+"static/media/witcher.e3c59577.jpg",pe=a.p+"static/media/wolf.958ca488.JPG",he=a.p+"static/media/zelda.2325c105.JPG",ue=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).calculate_age=function(){var e=new Date(1981,3,31,0,24,0,0),t=Date.now()-e.getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)},r.renderNavBar=function(){return Object(i.jsx)(Y.a,{style:{padding:"0"},children:Object(i.jsxs)(Z.a,{expand:"lg",variant:"dark",style:{backgroundColor:"SteelBlue",border:"2px solid white",borderRadius:"25px"},children:[Object(i.jsx)(Z.a.Brand,{href:"#Main/"+r.state.language,children:Object(i.jsx)("h4",{style:{color:"#48fb47",marginLeft:"50px"},children:" <EricMartins "})}),Object(i.jsx)(Z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsx)(Z.a.Collapse,{id:"basic-navbar-nav",children:Object(i.jsxs)(W.a,{className:"ml-auto",children:[Object(i.jsx)(W.a.Link,{onClick:function(){return r.setState({navigation:"presentation"})},style:"presentation"===r.state.navigation?{fontWeight:"bold",color:"white"}:null,children:Object(i.jsx)("h5",{children:Q("PRESENTATION")})}),Object(i.jsx)(W.a.Link,{onClick:function(){return r.setState({navigation:"projects"})},style:"projects"===r.state.navigation?{fontWeight:"bold",color:"white"}:null,children:Object(i.jsx)("h5",{children:Q("PROJECTS")})}),Object(i.jsx)(W.a.Link,{onClick:function(){return r.setState({navigation:"contact"})},style:"contact"===r.state.navigation?{fontWeight:"bold",color:"white"}:null,children:Object(i.jsx)("h5",{children:Q("CONTACT")})}),Object(i.jsx)(Z.a.Brand,{children:Object(i.jsx)("h4",{style:{color:"#48fb47",marginRight:"50px"},children:" />"})})]})})]})})},r.renderPresentation=function(){return Object(i.jsxs)(Y.a,{style:{backgroundColor:"SteelBlue",color:"white",padding:"50px",borderRadius:"25px",marginTop:"50px",border:"2px solid white"},children:[Object(i.jsx)(V.a,{className:"mb-2",children:Object(i.jsxs)(H.a,{xs:"12",children:[Object(i.jsx)("h4",{children:"\xc0 propos de moi"}),Object(i.jsx)("hr",{style:{backgroundColor:"white"}})]})}),Object(i.jsxs)(V.a,{children:[Object(i.jsx)(H.a,{xl:"3",lg:"4",md:"5",sm:"12",xs:"12",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(i.jsx)(q.a,{src:"data:image/jpeg;base64,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",alt:"profilePic",style:{borderRadius:"25px"}})}),Object(i.jsxs)(H.a,{xl:"8",lg:"7",md:"7",sm:"12",xs:"12",style:{display:"flex",flexDirection:"column",justifyContent:"space-around",flexWrap:"wrap"},className:"mt-4",children:[Object(i.jsxs)("p",{children:["Bonjour, je m'appelle Eric Martins, j'ai ",r.calculate_age()," ans, si vous vous trouvez sur ma page ce n'est s\xfbrement pas par hasard."]}),Object(i.jsx)("p",{children:"Je suis un D\xe9veloppeur Front-End junior en formation au C\xe9gep Trois Rivi\xe8res, mais \xe7a n'a pas \xe9t\xe9 toujours le cas, j'ai travaill\xe9 longtemps comme r\xe9dacteur web, je n'\xe9tait pas pr\xe9destin\xe9 \xe0 faire cela."})]}),Object(i.jsx)(H.a,{xl:"11",lg:"11",md:"12",sm:"12",xs:"12",style:{display:"flex",flexDirection:"column",justifyContent:"space-around",flexWrap:"wrap"},className:"mt-md-4",children:Object(i.jsx)("p",{children:"J'ai donc d\xe9cid\xe9 de me reconvertir au milieu de l'informatique et r\xe9orienter ma carri\xe8re vers le d\xe9veloppement web, cela m'am\xe8ne maintenant \xe0 l'\xe9tape de recherche d'opportunit\xe9s en d\xe9veloppement de sites et d'applications web. Je suis fortement int\xe9ress\xe9 par le d\xe9veloppement en langage JavaScript et ses frameworks."})})]}),Object(i.jsx)(V.a,{className:"mt-4",children:Object(i.jsxs)(H.a,{xs:"12",children:[Object(i.jsx)("h4",{children:"Mes comp\xe9tences"}),Object(i.jsx)("hr",{style:{backgroundColor:"white"}})]})}),Object(i.jsx)(V.a,{children:Object(i.jsx)(H.a,{xs:12,style:{display:"flex",flexWrap:"wrap"},children:be.map((function(e){return Object(i.jsx)("div",{style:{backgroundColor:"LightSeaGreen",margin:"10px",padding:"5px 10px 5px 10px",borderRadius:"15px"},children:Object(i.jsx)("span",{children:e})},"competences_"+e)}))})})]})},r.renderProjects=function(){return Object(i.jsxs)(Y.a,{style:{backgroundColor:"SteelBlue",color:"white",padding:"50px",borderRadius:"25px",marginTop:"50px",border:"2px solid white",minHeight:"600px"},children:[Object(i.jsx)(V.a,{className:"mb-2",children:Object(i.jsxs)(H.a,{xs:"12",children:[Object(i.jsx)("h4",{children:"Projets"}),Object(i.jsx)("hr",{style:{backgroundColor:"white"}})]})}),Object(i.jsx)(V.a,{className:"mb-5",children:Object(i.jsx)(H.a,{xs:12,style:{display:"flex",flexWrap:"wrap"},children:je.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(K.a,{onClick:function(){return r.setState({categorie:e})},style:{backgroundColor:"LightSeaGreen",borderRadius:"15px",margin:"5px",border:"none",fontWeight:r.state.categorie===e?"bold":"normal"},children:e})},"categories_"+e)}))})}),Object(i.jsx)(V.a,{className:"no-gutters",children:Object(i.jsx)(X.a,{style:{display:"flex",flexWrap:"wrap"},children:ge.map((function(e){return e.motcles.includes(r.state.categorie.toLowerCase())&&Object(i.jsx)(H.a,{xl:"3",lg:"4",md:"6",sm:"6",xs:"12",children:Object(i.jsxs)("div",{style:{backgroundColor:"LightSeaGreen",borderRadius:"15px",padding:"5px 0px 5px 0px",height:"250px",margin:"10px"},children:[Object(i.jsxs)("span",{children:[e.nom," "]}),Object(i.jsx)(q.a,{src:e.src,style:{width:"100%",height:"60%"}}),Object(i.jsxs)("span",{children:[" ",e.description," "]})]})},"projet"+e.nom)}))})})]})},r.renderContact=function(){return Object(i.jsxs)(Y.a,{style:{backgroundColor:"SteelBlue",color:"white",padding:"50px",borderRadius:"25px",marginTop:"50px",border:"2px solid white"},children:[Object(i.jsx)(V.a,{className:"mb-2",children:Object(i.jsxs)(H.a,{xs:"12",children:[Object(i.jsx)("h4",{children:"Contact"}),Object(i.jsx)("hr",{style:{backgroundColor:"white"}})]})}),Object(i.jsx)(V.a,{className:"mb-4",children:Object(i.jsxs)(H.a,{xs:12,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)(T.a,{icon:J.a,size:"3x",color:"LightSeaGreen",style:{marginRight:"15px"}}),Object(i.jsxs)("a",{style:{color:"white",alignSelf:"center"},href:"mailto: ericmartins81@gmail.com",children:[" ",Object(i.jsx)("h5",{children:"ericmartins81@gmail.com"})]})]})}),Object(i.jsx)(V.a,{className:"mb-4",children:Object(i.jsxs)(H.a,{xs:12,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)(T.a,{icon:J.c,size:"3x",color:"LightSeaGreen",style:{marginRight:"15px"}}),Object(i.jsxs)("a",{style:{color:"white"},href:"tel:5144248691",children:[" ",Object(i.jsx)("h5",{children:"514-424-8691"})]})]})}),Object(i.jsx)(V.a,{className:"mb-4",children:Object(i.jsxs)(H.a,{xs:12,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)(T.a,{icon:z.b,size:"3x",color:"LightSeaGreen",style:{marginRight:"15px"}}),Object(i.jsxs)("a",{style:{color:"white"},href:"https://www.linkedin.com/in/ericmartins81/",target:"_blank",rel:"noreferrer",children:[" ",Object(i.jsx)("h5",{children:"linkedin.com/in/ericmartins81/"})]})]})}),Object(i.jsx)(V.a,{className:"mb-4",children:Object(i.jsxs)(H.a,{xs:12,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)(T.a,{icon:z.a,size:"3x",color:"LightSeaGreen",style:{marginRight:"15px"}}),Object(i.jsxs)("a",{style:{color:"white"},href:"https://github.com/martins81-web",target:"_blank",rel:"noreferrer",children:[" ",Object(i.jsx)("h5",{children:"github.com/martins81-web"})]})]})}),Object(i.jsx)(V.a,{className:"mb-4",children:Object(i.jsxs)(H.a,{xs:12,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)(T.a,{icon:J.b,size:"3x",color:"LightSeaGreen",style:{marginRight:"15px"}}),Object(i.jsxs)("a",{style:{color:"white"},href:"https://drive.google.com/file/d/1p_bwFoFqyIzo00vZRiRollL9lic3YtDL/view?usp=sharing",target:"_blank",rel:"noreferrer",children:[" ",Object(i.jsx)("h5",{children:"Voir mon CV"})]})]})})]})},r.renderFooter=function(){return Object(i.jsx)(Y.a,{style:{backgroundColor:"SteelBlue",color:"white",padding:"20px",borderRadius:"25px",marginTop:"50px",border:"2px solid white"},children:Object(i.jsx)(V.a,{children:Object(i.jsx)(H.a,{xs:12,style:{display:"flex",justifyContent:"center",alignContent:"center"},children:Object(i.jsx)("div",{children:"Copyright \xa9 Eric Martins 2020"})})})})},r.state={language:S,navigation:"presentation",categorie:"HTML"},r}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.setState({language2:this.props.location.pathname.substring(this.props.location.pathname.length-5,this.props.location.pathname.length)});case 3:return e.next=5,console.log(this.state.language2);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:"en-us"===this.state.language2?this.setState({language:k}):this.setState({language:S});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(i.jsxs)(R,{locale:this.state.language,children:[Object(i.jsx)(f.a,{style:me,params:xe}),Object(i.jsx)("div",{style:{minHeight:"100vh",position:"relative",padding:"30px"},children:Object(i.jsxs)(X.a,{children:[this.renderNavBar(),"presentation"===this.state.navigation?this.renderPresentation():null,"projects"===this.state.navigation?this.renderProjects():null,"contact"===this.state.navigation?this.renderContact():null,this.renderFooter()]})})]})}}]),a}(n.a.Component),be=["HTML5","CSS3/SASS ","BootStrap","javaScript","jQuery","typeScript","React-js","Angular","Vue","..."],je=["HTML","BootStrap","CSS","SASS","React","jQuery","javaScript","SQL","PWA","API","CRUD"],me={backgroundColor:"LightSeaGreen",position:"fixed",top:0,right:0,bottom:0,left:0},ge=[{src:ie,nom:"Han Solo",description:Object(i.jsx)("p",{children:"Projet realis\xe9 avec HTML et CSS"}),motcles:["html","css"]},{src:de,nom:"The Witcher 3",description:Object(i.jsx)("p",{children:"Pour ce projet Bootstrap, HTML et CSS on \xe9t\xe9 utilis\xe9s. "}),motcles:["html","css","bootstrap"]},{src:_,nom:"Altered Carbon",description:Object(i.jsx)("p",{children:"Projet utilisant Media Queries et Parallax"}),motcles:["html","css","media queries","parallax","bootstrap"]},{src:re,nom:"S\xe9ries Netflix",description:Object(i.jsx)("p",{children:"Projet utilisant NavBar et carousel"}),motcles:["html","css","navbar","carousel"]},{src:oe,nom:"Visitez le Portugal",description:Object(i.jsx)("p",{children:"Projet sur le Portugal"}),motcles:["html","css","NavBar","carousel","modal","parallax","bootstrap","pwa"]},{src:ae,nom:"L'avenir de la race humaine",description:Object(i.jsx)("p",{children:"Ce projet englobe la cr\xe9ation et v\xe9rifications d'un formulaire"}),motcles:["html","css","forms","paypal","bootstrap"]},{src:he,nom:"La l\xe9gende de zelda",description:Object(i.jsx)("p",{children:"Google charts, tri et recherche de tableaux"}),motcles:["html","css","bootstrap","sorting","search"]},{src:pe,nom:"The Wolf of Wall Street",description:Object(i.jsx)("p",{children:"Animations javaScript"}),motcles:["html","css","javascript","animations"]},{src:se,nom:"Photociti",description:Object(i.jsx)("p",{children:"Cr\xe9ez votre mot Photociti en 3 \xe9tapes rapides"}),motcles:["html","css","javascript","jquery","programmation"]},{src:$,nom:"Bottin des clients",description:Object(i.jsx)("p",{children:"Application React pour un bottin des clients, en utilisant des donn\xe9s mock"}),motcles:["bootstrap","javascript","react","programmation"]},{src:le,nom:"Spotify Qu\xe9b\xe9cois",description:Object(i.jsx)("p",{children:"Application React - clone spotify"}),motcles:["bootstrap","javascript","react","programmation"]},{src:ne,nom:"Chuck Norris Jokes",description:Object(i.jsx)("p",{children:"Application React qui fait des raqu\xeates \xe0 un API en utilisant deux param\xe8tres"}),motcles:["bootstrap","javascript","react","programmation","api"]},{src:ce,nom:"Rebrandly URL shortener",description:Object(i.jsx)("p",{children:"Application React qui fait des raccourcis d'URL"}),motcles:["bootstrap","javascript","react","programmation","api"]},{src:ee,nom:"Destination Vacances",description:Object(i.jsx)("p",{children:"Application React sur la p\xe9ninsulte Bruce en Ontario"}),motcles:["bootstrap","javascript","react","programmation","router"]},{src:te,nom:"R\xe9pertoire des \xc9tudiants",description:Object(i.jsx)("p",{children:"Application React d'un r\xe9pertoire d'etudiants"}),motcles:["bootstrap","javascript","react","programmation","router","crud","api","sass","pwa"]}],xe={particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.5,width:1},move:{enable:!1,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1};var Ae=function(){return Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.a,{exact:!0,from:"/",to:"/Main/"}),Object(i.jsx)(l.b,{path:"/",exact:!0,component:U}),Object(i.jsx)(l.b,{path:"/Main/",component:U}),Object(i.jsx)(l.b,{path:"/Main/:language",component:U}),Object(i.jsx)(l.b,{path:"/Portfolio/:language",component:ue})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(c.a,{children:Object(i.jsx)(Ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[395,1,2]]]);
//# sourceMappingURL=main.34952b44.chunk.js.map