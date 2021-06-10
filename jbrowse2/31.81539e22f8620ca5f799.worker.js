this.webpackChunk([31],{2031:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(99),c=a(957),l=a(159),i=a(16),o=a(7),s=a(0),u=a.n(s),m=a(223),d=a.n(m),f=a(470),p=a(86),g=["clipPos","flags"];function v(e){var t=Object(f.useStyles)(),a=e.feature.flags;return u.a.createElement(f.BaseCard,Object.assign({},e,{title:"Flags"}),u.a.createElement("div",{style:{display:"flex"}},u.a.createElement("div",{className:t.fieldName},"Flag"),u.a.createElement("div",{className:t.fieldValue},a)),["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"].map((function(e,t){var n=a&1<<t,r="".concat(e,"_").concat(n);return u.a.createElement("div",{key:r},u.a.createElement("input",{type:"checkbox",checked:Boolean(n),id:r,readOnly:!0}),u.a.createElement("label",{htmlFor:r},e))})))}function E(e){var t=e.value,a=Object(s.useState)(!1),r=Object(n.a)(a,2),c=r[0],l=r[1],i=String(t);return i.length>100?u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"button",onClick:function(){return d()(i)}},"Copy"),u.a.createElement("button",{type:"button",onClick:function(){return l((function(e){return!e}))}},c?"Show less":"Show more"),u.a.createElement("div",null,c?i:"".concat(i.slice(0,100),"..."))):u.a.createElement("div",null,i)}function b(e){var t=e.tag,a=e.model,l=Object(o.getSession)(a);return u.a.createElement(f.BaseCard,Object.assign({},e,{title:"Supplementary alignments"}),u.a.createElement(r.a,null,"List of supplementary alignment locations"),u.a.createElement("ul",null,t.split(";").filter((function(e){return!!e})).map((function(e,t){var r=e.split(","),i=Object(n.a)(r,4),o=i[0],s=i[1],m=i[2],d=function(e){for(var t=Object(p.parseCigar)(e),a=0,n=0;n<t.length;n+=2){var r=+t[n],c=t[n+1];"H"!==c&&"S"!==c&&"I"!==c&&(a+=r)}return a}(i[3]),f=Math.floor(d/5),g=+s,v=+s+d,E="".concat(o,":").concat(Math.max(1,g-f),"-").concat(v+f),b="".concat(o,":").concat(g,"-").concat(v," (").concat(m,")");return u.a.createElement("li",{key:"".concat(E,"-").concat(t)},u.a.createElement(c.a,{onClick:function(){var e=a.view;e?e.navToLocString(E):l.notify("No view associated with this feature detail panel anymore","warning")},href:"#"},b))}))))}function y(e){var t=e.locString,a=e.model,n=Object(o.getSession)(a);return u.a.createElement(c.a,{onClick:function(){var e=a.view;e?e.navToLocString(t):n.notify("No view associated with this feature detail panel anymore","warning")},href:"#"},t)}t.default=Object(i.observer)((function(e){var t=e.model,a=JSON.parse(JSON.stringify(t.featureData)),n=a.tags&&a.tags.SA||a.SA;return u.a.createElement(l.a,{"data-testid":"alignment-side-drawer"},u.a.createElement(f.FeatureDetails,Object.assign({},e,{omit:g,feature:a,formatter:function(e,a){return"next_segment_position"===a?u.a.createElement(y,{model:t,locString:e}):u.a.createElement(E,{value:e})}})),n?u.a.createElement(b,{model:t,tag:n}):null,u.a.createElement(v,Object.assign({feature:a},e)))}))}});
//# sourceMappingURL=31.81539e22f8620ca5f799.worker.js.map