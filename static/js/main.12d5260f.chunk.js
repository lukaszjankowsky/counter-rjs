(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(8),c=n.n(u),o=(n(15),n(1)),i=n(2),l=n(4),s=n(3),m=n(5),b=(n(7),function(e){return r.a.createElement("div",{className:"buttonsPanel"},r.a.createElement("button",{onClick:e.changeCounterValue},"Dodaj warto\u015b\u0107"),r.a.createElement("button",{onClick:function(){e.resetCounterValue(!0)}},"Resetuj warto\u015b\u0107"),r.a.createElement("button",{onClick:function(){e.resetCounterValue(!1)}},"Warto\u015b\u0107 pocz\u0105tkowa"))}),h=function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"number",min:"1",defaultValue:"1",onChange:e.setNumber}))},p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).changeNumber=function(){var e=n.state.numberValue;n.setState(function(t){return{initValue:t.initValue+e}})},n.reset=function(e){e?n.setState({initValue:0}):n.setState({initValue:n.props.initValue})},n.setNumberTo=function(e){var t=e.target.value,a=Number(t);console.log(t),t>=1?n.setState({numberValue:a}):n.setState({numberValue:1})},n.state={initValue:n.props.initValue,numberValue:1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"counter"},r.a.createElement("p",null),"Licznik: ",this.state.initValue,";",r.a.createElement("p",null),r.a.createElement(b,{changeCounterValue:this.changeNumber,resetCounterValue:this.reset}),r.a.createElement("p",null),r.a.createElement(h,{setNumber:this.setNumberTo}))}}]),t}(a.Component),f=function(e){return console.log(e),r.a.createElement("h1",{className:e.class},e.title,"  ")},d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(f,{title:"Aplikacja licznika w ReactJS",class:"mainHeading"})),r.a.createElement(p,{initValue:1e3}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.12d5260f.chunk.js.map