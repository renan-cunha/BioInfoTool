this.webpackChunk([51],{2033:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var r=t(9),n=t(0),o=t.n(n),c=t(106),l=t(171),i=t(383),u=t(99),s=t(943),m=t(945),N=t(944),b=t(185),E=t(72),d=t.n(E),g=Object(c.a)((function(e){return{root:{},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));function f(e){var a=g(),t=e.model,c=e.handleClose,E=t.minScore,f=t.maxScore,h=t.scaleType,p=Object(n.useState)("".concat(E!==Number.MIN_VALUE?E:"")),v=Object(r.a)(p,2),S=v[0],C=v[1],x=Object(n.useState)("".concat(f!==Number.MAX_VALUE?f:"")),y=Object(r.a)(x,2),M=y[0],j=y[1],k=!(""!==S&&""!==M&&!Number.isNaN(+S)&&!Number.isNaN(+M))||+M>+S,O=!("log"===h&&""!==S&&!Number.isNaN(+S))||+S>0;return o.a.createElement(s.a,{open:!0,onClose:c},o.a.createElement(N.a,null,"Set min/max score for track",o.a.createElement(b.a,{className:a.closeButton,onClick:c},o.a.createElement(d.a,null))),o.a.createElement(m.a,{style:{overflowX:"hidden"}},o.a.createElement("div",{className:a.root},o.a.createElement(u.a,null,"Enter min/max score: "),k?null:o.a.createElement(u.a,{color:"error"},"Max is greater than or equal to min"),O?null:o.a.createElement(u.a,{color:"error"},"Min score should be greater than 0 for log scale"),o.a.createElement(i.a,{value:S,onChange:function(e){C(e.target.value)},placeholder:"Enter min score"}),o.a.createElement(i.a,{value:M,onChange:function(e){j(e.target.value)},placeholder:"Enter max score"}),o.a.createElement(l.a,{variant:"contained",color:"primary",type:"submit",style:{marginLeft:20},disabled:!k,onClick:function(){t.setMinScore(""===S||Number.isNaN(+S)?void 0:+S),t.setMaxScore(""===M||Number.isNaN(+M)?void 0:+M),c()}},"Submit"))))}}});
//# sourceMappingURL=51.81539e22f8620ca5f799.worker.js.map