(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[51],{2414:function(e,t,a){"use strict";a.r(t);var n=a(82),r=a(1),c=a.n(r),i=a(84),o=a(51),l=a(2370),s=a(2373),u=a(2342),m=a(2374),g=a(2338),h=a(2347),b=a(2353),p=a(2445),f=a(2337),d=a(134),E=a.n(d),v=Object(o.a)((function(e){return{root:{margin:e.spacing(4)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));t.default=Object(i.observer)((function(e){var t=v(),a=e.model,i=e.handleClose,o=a.featureHeightSetting,d=a.noSpacing,j=Object(r.useState)("".concat(o)),w=Object(n.a)(j,2),N=w[0],y=w[1],S=Object(r.useState)(d),k=Object(n.a)(S,2),C=k[0],O=k[1],B=""!==N&&!Number.isNaN(+N);return c.a.createElement(l.a,{open:!0,onClose:i},c.a.createElement(s.a,null,"Set feature height",c.a.createElement(u.a,{className:t.closeButton,onClick:i},c.a.createElement(E.a,null))),c.a.createElement(m.a,null,c.a.createElement(g.a,null,"Adjust the feature height and whether there is any spacing between features. Setting feature height to 1 and removing spacing makes the display very compact"),c.a.createElement("div",{className:t.root},c.a.createElement(g.a,null,"Enter feature height: "),c.a.createElement(h.a,{value:N,onChange:function(e){y(e.target.value)}}),c.a.createElement(b.a,{control:c.a.createElement(p.a,{checked:!!C,onChange:function(){return O((function(e){return!e}))}}),label:"Remove spacing between features in y-direction?"}),c.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",style:{marginLeft:20},disabled:!B,onClick:function(){a.setFeatureHeight(""===N||Number.isNaN(+N)?void 0:+N),a.setNoSpacing(C),i()}},"Submit"))))}))}}]);
//# sourceMappingURL=51.6228f45b.chunk.js.map