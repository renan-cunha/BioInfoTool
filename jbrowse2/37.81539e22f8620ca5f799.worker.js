this.webpackChunk([37],{2038:function(e,t,a){"use strict";a.r(t);var n=a(9),o=a(0),l=a.n(o),r=a(16),c=a(106),i=a(943),u=a(944),s=a(185),m=a(945),g=a(99),p=a(383),d=a(171),h=a(72),E=a.n(h),b=Object(c.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));t.default=Object(r.observer)((function(e){var t=b(),a=e.model,r=e.handleClose,c=Object(o.useState)(""),h=Object(n.a)(c,2),f=h[0],v=h[1],y=f.match(/^[A-Za-z][A-Za-z0-9]$/);return l.a.createElement(i.a,{open:!0,onClose:r},l.a.createElement(u.a,null,"Sort by tag",l.a.createElement(s.a,{"aria-label":"close",className:t.closeButton,onClick:r},l.a.createElement(E.a,null))),l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(g.a,null,"Set the tag to sort by"),l.a.createElement(g.a,{color:"textSecondary"},"Examples: HP for haplotype, RG for read group, etc."),l.a.createElement(p.a,{value:f,onChange:function(e){v(e.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2,"data-testid":"sort-tag-name-input"},error:2===f.length&&!y,helperText:2!==f.length||y?"":"Not a valid tag",autoComplete:"off","data-testid":"sort-tag-name"}),l.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){a.setSortedBy("tag",f),r()}},"Submit"))))}))}});
//# sourceMappingURL=37.81539e22f8620ca5f799.worker.js.map