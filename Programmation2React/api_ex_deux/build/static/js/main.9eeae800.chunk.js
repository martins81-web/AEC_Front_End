(this.webpackJsonpapi_ex_deux=this.webpackJsonpapi_ex_deux||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),o=(n(16),n(5),n(2)),u=n.n(o),i=n(3),h=n(7),l=n(8),p=n(1),f=n(10),v=n(9),m=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={data:[],parametre:"",count:0,input:"",resultat:[]},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.getCount=a.getCount.bind(Object(p.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(p.a)(a)),a.chercheApi=a.chercheApi.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://swapi.dev/api/");case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,this.setState({data:n}),this.getCount(n.people),this.setState({parametre:"people"}),t.ok){e.next=12;break}throw Error(t.statusText);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({parametre:e.target.value}),this.getCount(e.target.value)}},{key:"getCount",value:function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,this.setState({count:a.count}),n.ok){e.next=10;break}throw Error(n.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e){this.setState({input:e.target.value})}},{key:"chercheApi",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://swapi.dev/api/"+this.state.parametre+"/"+this.state.input);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,this.setState({resultat:n}),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"print",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",null,Object.keys(this.state.resultat).map((function(t){return r.a.createElement("li",{key:t},t," : ",e.state.resultat[t])}))))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("select",{onChange:this.handleChange},Object.keys(this.state.data).map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("input",{type:"number",min:"1",max:this.state.count,onChange:this.handleInputChange}),r.a.createElement("button",{type:"",className:"btn btn-primary",onClick:this.chercheApi},"Cherche Api")),this.print())}}]),n}(r.a.Component);var d=function(){return r.a.createElement(m,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.9eeae800.chunk.js.map