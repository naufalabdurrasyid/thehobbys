(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(31),c=a.n(i),r=a(10),s=a(11),o=a(13),u=a(12),m=a(14),h=a(6),d=a(107),p=a(108),E=a(109),g=a(110),b=a(111),v=a(112),f=a(113),O=a(114),k=a(135),j=a(115),x=a(116),y=a(117),w=a(20),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(a)),a.state={isOpen:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,{color:"danger",light:!0,expand:"md"},l.a.createElement(p.a,null,l.a.createElement(E.a,null,l.a.createElement(w.b,{to:"/",className:"text-white"},l.a.createElement("img",{height:"40px",src:"https://monggovest.herokuapp.com/static/img/Logo-White@2x.39103d4.png",alt:""}))),l.a.createElement(g.a,{onClick:this.toggle}),l.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(v.a,{className:"ml-auto",navbar:!0},l.a.createElement(f.a,null,l.a.createElement(O.a,null,l.a.createElement(w.b,{to:"/investasi",className:"text-white"},"Investasi"))),l.a.createElement(f.a,null,l.a.createElement(O.a,{href:"https://github.com/reactstrap/reactstrap"},"GitHub")),l.a.createElement(k.a,{nav:!0,inNavbar:!0},l.a.createElement(j.a,{nav:!0,caret:!0},"Options"),l.a.createElement(x.a,{right:!0},l.a.createElement(y.a,null,"Option 1"),l.a.createElement(y.a,null,"Option 2"),l.a.createElement(y.a,{divider:!0}),l.a.createElement(y.a,null,"Reset"))),l.a.createElement(O.a,null,l.a.createElement(w.b,{to:"/login",className:"text-white"},"Login")))))))}}]),t}(l.a.Component),C=a(19),S=a.n(C),T=a(57),N=a(118),A=a(119),D=a(120),M=a(121),J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0,items:[]},a.next=a.next.bind(Object(h.a)(a)),a.previous=a.previous.bind(Object(h.a)(a)),a.goToIndex=a.goToIndex.bind(Object(h.a)(a)),a.onExiting=a.onExiting.bind(Object(h.a)(a)),a.onExited=a.onExited.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.state.items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.state.items.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"componentDidMount",value:function(){var e=this;S.a.get("https://historic-acadia-33199.herokuapp.com/api/user/komoditas").then(function(t){console.log(t.data,"ini fetch data"),e.setState({items:t.data.result})}).catch(function(e){console.log(e.message)})}},{key:"render",value:function(){var e=this;console.log("ini data",this.state.items);var t=this.state.activeIndex,a=this.state.items.map(function(t){return l.a.createElement(T.a,{className:"custom-tag",tag:"div",key:t.data,onExiting:e.onExiting,onExited:e.onExited},l.a.createElement("img",{className:"carousel-img",src:t.foto,alt:t.altText}),l.a.createElement(N.a,{className:"text-danger",captionText:t.asal,captionHeader:t.harga}))});return l.a.createElement("div",null,l.a.createElement("style",null,".custom-tag {\n                max-width: 100%;\n                height: 500px;\n                background: black;\n              }"),l.a.createElement(A.a,{activeIndex:t,next:this.next,previous:this.previous},l.a.createElement(D.a,{items:this.state.items,activeIndex:t,onClickHandler:this.goToIndex}),a,l.a.createElement(M.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),l.a.createElement(M.a,{direction:"next",directionText:"Next",onClickHandler:this.next})))}}]),t}(n.Component),H=a(122),K=function(e){return l.a.createElement("div",null,l.a.createElement(H.a,{fluid:!0},l.a.createElement(p.a,{fluid:!0},l.a.createElement("h1",{className:"display-3"},"Fluid jumbotron"),l.a.createElement("p",{className:"lead"},"This is a modified jumbotron that occupies the entire horizontal space of its parent."))))},B=a(123),L=a(124),U=a(125),W=a(126),_=a(127),q=a(128),G=a(56),P=a(129),R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("http://reduxblog.herokuapp.com/api/posts?key=tester").then(function(t){e.setState({items:t.data})})}},{key:"render",value:function(){console.log("ini data",this.state.items);var e=this.state.items.map(function(e){return l.a.createElement("div",{class:"col-md-4"},l.a.createElement(B.a,null,l.a.createElement(L.a,{top:!0,width:"100%",height:"200px",src:e.categories,alt:"Card image cap"}),l.a.createElement(U.a,null,l.a.createElement(W.a,null,e.title),l.a.createElement(_.a,null,e.content),l.a.createElement(q.a,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement(G.a,null,"Button"))))});return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(P.a,null,e)))}}]),t}(n.Component),z=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement(J,null),l.a.createElement(K,null),l.a.createElement(R,null))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("http://reduxblog.herokuapp.com/api/posts?key=tester").then(function(t){e.setState({items:t.data})})}},{key:"render",value:function(){console.log("ini data",this.state.items);var e=this.state.items.map(function(e){return l.a.createElement("div",{class:"col-md-4"},l.a.createElement(B.a,null,l.a.createElement(L.a,{top:!0,width:"100%",height:"200px",src:e.categories,alt:"Card image cap"}),l.a.createElement(U.a,null,l.a.createElement(W.a,null,e.title),l.a.createElement(_.a,null,e.content),l.a.createElement(q.a,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement(G.a,null,l.a.createElement(w.b,{to:"/investasi/".concat(e.id)},"Button")))))});return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement("h1",null,"INVESTASI"),l.a.createElement(P.a,null,e)))}}]),t}(n.Component),V=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(F,null))}}]),t}(n.Component),Q=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement(V,null))}}]),t}(n.Component),X=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Judul"),l.a.createElement("img",{src:"",alt:"",srcSet:""}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={detail:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("http://reduxblog.herokuapp.com/api/posts/".concat(this.props.match.params.id)).then(function(t){e.setState({detail:t.data}),console.log(t)})}},{key:"render",value:function(){console.log(this.props.match.params.id);var e=this.state.detail,t=e.title,a=e.categories,n=e.content;return l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement(X,null),l.a.createElement(B.a,null,l.a.createElement(L.a,{top:!0,width:"100%",height:"500px",src:a,alt:"Card image cap"}),l.a.createElement(U.a,null,l.a.createElement(W.a,null,t),l.a.createElement(_.a,null,n),l.a.createElement(q.a,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))))}}]),t}(n.Component),Z=(a(94),a(95),a(24)),$=a(130),ee=a(131),te=a(132),ae=a(133),ne=a(134),le=a(30),ie=a.n(le),ce=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChecked=function(){a.setState({check:!a.state.check,hidden:!a.state.hidden})},a.state={username:"",password:"",check:!1,hidden:!0},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),S.a.defaults.baseUrl="https://historic-acadia-33199.herokuapp.com".post("/api/user/login",{username:this.state.username,password:this.state.password}).then(function(e){if(e.status(400)){localStorage.setItem("JWT_TOKEN",e.data.token),ie.a.set("loggedIn",!0),alert("Anda berhasil masuk. Selamat Datang di Monggovestplus");var a=localStorage.getItem("JWT_TOKEN"),n=a.split(".")[1],l=atob(n),i=JSON.parse(l);localStorage.setItem("USER_ID",i.userId),console.log("userId yang login",a),t.props.toggle(),t.props.checkAuth()}}).catch(function(e){console.log("the error",e),401===e.response.data.status?alert("Akun Anda belum teraktivasi, silahkan cek e-mail yang telah didaftarkan sebelumnya"):alert("telah terjadi error, mohon hubungi tim kami untuk mendapat bantuan",e.response.status)}),this.setState({username:"",password:""}),ie.a.set("loggedIn",!0)}},{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value,n={};n[t]=a,this.setState(n)}},{key:"render",value:function(){return ie.a.get("loggedIn")?l.a.createElement(Z.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement("h1",null,"LOGIN"),l.a.createElement("div",null,l.a.createElement($.a,{align:"stretch",onSubmit:this.submit},l.a.createElement(ee.a,null,"Email:",l.a.createElement("br",null),l.a.createElement(te.a,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Masukkan Email Anda"})),l.a.createElement(ee.a,null,l.a.createElement(ae.a,null,"Password: "),l.a.createElement(te.a,{type:this.state.hidden?"password":"text",required:"required",name:"password",value:this.state.password,placeholder:"Kata Sandi Anda",onChange:this.handleChange}),l.a.createElement(ae.a,{check:!0,sm:12},l.a.createElement(ne.a,{sm:12},l.a.createElement(te.a,{type:"checkbox",checked:this.state.check,onChange:this.handleChecked}),"lihat kata sandi"))),l.a.createElement("div",{align:"center"},l.a.createElement(G.a,{color:"submit",value:"onSubmit",className:"btn-primary"},"MASUK")," "))))}}]),t}(n.Component);var re=function(){return l.a.createElement(w.a,null,l.a.createElement("div",null,l.a.createElement(Z.b,{exact:!0,path:"/",component:z}),l.a.createElement(Z.d,null,l.a.createElement(Z.b,{exact:!0,path:"/investasi",component:Q}),l.a.createElement(Z.b,{path:"/investasi/:id",component:Y})),l.a.createElement(Z.b,{path:"/login",component:ce})))};c.a.render(l.a.createElement(re,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a(106)},95:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.0e4b4be9.chunk.js.map