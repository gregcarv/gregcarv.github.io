(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(t,e,a){t.exports=a(260)},170:function(t,e,a){},252:function(t,e,a){},260:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(46),i=a.n(r),o=(a(170),a(171),a(195),a(196),a(64)),c=a(100),l=a(101),u=a(112),d=a(102),h=a(113),m=(a(197),a(252),a(146)),p=(a(259),a(110)),g=function(t,e){if("undefined"!=typeof t){var a=new Date("".concat(e," ").concat(t," UTC"));return a=a.toISOString(),p.DateTime.fromISO(a,{zone:"America/Curacao"}).toLocaleString(p.DateTime.TIME_WITH_SECONDS)}return!1},f=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement(m.a,{selected:this.props.startDate,onChange:this.props.handleChange,dateFormat:"MMM dd, yyyy",placeholderText:"select a date"})}}]),e}(n.Component),D=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={data:{},loading:!0,error:!1,isToday:!0,startDate:new Date,settings:{requestDomain:"https://api.sunrise-sunset.org/",arubaLat:"12.5183192",arubaLng:"-70.1073755"}},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=encodeURI("".concat(this.state.settings.requestDomain,"json?lat=").concat(this.state.settings.arubaLat,"&lng=").concat(this.state.settings.arubaLng,"&date=").concat(this.state.startDate.toDateString()));fetch(e).then(function(t){if(!t.ok)throw t;return t.json()}).then(function(e){t.setState({loading:!1,data:e.results})}).catch(function(e){console.error(e),t.setState({loading:!1,error:!0,startDate:new Date})})}},{key:"handleChange",value:function(t){var e=this,a=encodeURI("".concat(this.state.settings.requestDomain,"json?lat=").concat(this.state.settings.arubaLat,"&lng=").concat(this.state.settings.arubaLng,"&date=").concat(this.state.startDate.toDateString()));fetch(a).then(function(t){if(!t.ok)throw t;return t.json()}).then(function(a){e.setState({loading:!1,data:a.results,isToday:t,startDate:t})}).catch(function(t){console.error(t),e.setState({loading:!1,error:!0,startDate:new Date})})}},{key:"render",value:function(){return s.a.createElement("div",{id:"sunrise-sunset-wrapper"},s.a.createElement("div",{id:"sunset-sunrise-app",className:"sunset-sunrise-app-field"},s.a.createElement("div",{className:"app-results active"},s.a.createElement("div",{className:"date ss-result"},s.a.createElement("h2",null,!0===this.state.isToday?"Today: ".concat(this.state.startDate.toDateString()):this.state.startDate.toDateString())),s.a.createElement("div",{className:"sunrise ss-result"},s.a.createElement("span",{className:"label"},"Sunrise"),s.a.createElement("span",{className:"value"},g(this.state.data.sunrise,this.state.startDate.toDateString()))),s.a.createElement("div",{className:"sunset ss-result"},s.a.createElement("span",{className:"label"},"Sunset"),s.a.createElement("span",{className:"value"},g(this.state.data.sunset,this.state.startDate.toDateString()))),s.a.createElement("div",{className:"dayLength ss-result"},s.a.createElement("span",{className:"label"},"Total amount of daylight"),s.a.createElement("span",{className:"value"},this.state.data.day_length)),s.a.createElement("a",{className:"small-link",href:"https://sunrise-sunset.org/"},"(Sunset & Sunrise times courtesy of sunrise-sunset.org)")),s.a.createElement("div",{className:"app-fields"},s.a.createElement("p",null,"Please ",s.a.createElement("strong",null,"pick a date")," to display the sunset and sunrise times for that day."),s.a.createElement(f,{startDate:this.state.startDate,handleChange:this.handleChange}))),s.a.createElement("script",{src:"https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes"}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[165,1,2]]]);
//# sourceMappingURL=main.4e1561dd.chunk.js.map