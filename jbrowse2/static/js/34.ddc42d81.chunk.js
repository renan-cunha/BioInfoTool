(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[34],{2440:function(e,a,t){"use strict";t.r(a);var n=t(82),r=t(81),o=t(83),l=t(2385),i=t(2349),c=t(51),s=t(84),u=t(87),m=t(467),d=t(1),p=t.n(d),b=t(123),h=t(345),f=t(2347),v=t(2326),g=t(2348),E=t(2334),y=t(2336),$=t(2387),j=t(2342),C=t(2350),O=t(2378),w=t(2381),x=t(2380),k=t(1008),S=t(2353),N=t(2445),T=t(2335),L=t(2332),P=t(356),A=t.n(P),I=t(288),M=t.n(I),F=t(1017),R=t.n(F),z=t(517),W=t(2344),U=t(1087),q=t.n(U),V=t(1079),B=t.n(V),H=Object(c.a)((function(e){return{callbackEditor:{marginTop:"16px",borderBottom:"1px solid ".concat(e.palette.divider),fontFamily:'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',fontSize:"12px"}}}));var J=Object(s.observer)((function(e){var a=e.slot,t=H(),r=Object(d.useState)(a.value),l=Object(n.a)(r,2),i=l[0],c=l[1],s=Object(d.useState)(),m=Object(n.a)(s,2),b=m[0],h=m[1],f=Object(o.useDebounce)(i,400);return Object(d.useEffect)((function(){try{var e,t=f.startsWith("jexl:")?f:"jexl:".concat(f);Object(z.a)(t,null===(e=Object(u.getEnv)(a).pluginManager)||void 0===e?void 0:e.jexl),a.set(t),h(null)}catch(n){h(n)}}),[f,a]),p.a.createElement(p.a.Fragment,null,p.a.createElement(k.a,null,p.a.createElement(g.a,{shrink:!0,htmlFor:"callback-editor"},a.name),p.a.createElement(B.a,{className:t.callbackEditor,value:i.startsWith("jexl:")?i.split("jexl:")[1]:i,onValueChange:function(e){c(e)},highlight:function(e){return e},padding:10,style:{background:b?"#fdd":void 0}}),p.a.createElement(C.a,null,a.description)),p.a.createElement(W.a,{title:p.a.createElement("div",null,"Callbacks are written in Jexl format. Click to learn more.",p.a.createElement("br",null)," Names of available context items: ",a.contextVariable),arrow:!0},p.a.createElement(j.a,{color:"primary",onClick:function(){var e=window.open("https://github.com/TomFrost/Jexl","_blank","noopener,noreferrer");e&&(e.opener=null)}},p.a.createElement(q.a,null))))})),K=t(1264);var D=Object(c.a)({popover:{position:"absolute",zIndex:2},cover:{position:"fixed",top:0,right:0,bottom:0,left:0}});function G(e){var a=e.color,t=e.onChange,r=D(),o=Object(d.useState)(!0),l=Object(n.a)(o,2),i=l[0],c=l[1];return p.a.createElement("div",null,i?p.a.createElement("div",{className:r.popover},p.a.createElement("div",{role:"presentation",className:r.cover,onClick:function(){c(!1)}}),p.a.createElement(K.a,{color:a,onChange:t})):null)}var X=function(e){var a=e.value,t=e.label,r=e.TextFieldProps,o=e.onChange,l=Object(d.useState)(!1),i=Object(n.a)(l,2),c=i[0],s=i[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement(f.a,Object.assign({value:a,label:t,InputProps:{style:{color:a,borderRightWidth:"25px",borderRightStyle:"solid",borderRightColor:a}},onClick:function(){return s(!c)},onChange:function(e){o(e.target.value)}},r)),c?p.a.createElement(G,{color:a,onChange:function(e){o(function(e){if(e instanceof Object){var a=e,t=a.r,n=a.g,r=a.b,o=a.a;return"rgb(".concat(t,",").concat(n,",").concat(r,",").concat(o,")")}return e}(e.rgb))}}):null)};X.defaultProps={label:"",value:"#000",TextFieldProps:{}};var Z=Object(s.observer)((function(e){var a=e.slot;return p.a.createElement(X,{label:a.name,value:a.value,onChange:function(e){a.set(e)},TextFieldProps:{helperText:a.description,fullWidth:!0}})})),_=t(728),Q=Object(s.observer)((function(e){var a=e.slot;return p.a.createElement(f.a,{label:a.name,helperText:a.description,fullWidth:!0,value:a.value,onChange:function(e){return a.set(e.target.value)}})})),Y=Object(s.observer)((function(e){var a=e.slot;return p.a.createElement(f.a,{label:a.name,helperText:a.description,fullWidth:!0,multiline:!0,value:a.value,onChange:function(e){return a.set(e.target.value)}})})),ee=function(){return p.a.createElement(v.a,null,p.a.createElement("path",{d:"M20.41,3C21.8,5.71 22.35,8.84 22,12C21.8,15.16 20.7,18.29 18.83,21L17.3,20C18.91,17.57 19.85,14.8 20,12C20.34,9.2 19.89,6.43 18.7,4L20.41,3M5.17,3L6.7,4C5.09,6.43 4.15,9.2 4,12C3.66,14.8 4.12,17.57 5.3,20L3.61,21C2.21,18.29 1.65,15.17 2,12C2.2,8.84 3.3,5.71 5.17,3M12.08,10.68L14.4,7.45H16.93L13.15,12.45L15.35,17.37H13.09L11.71,14L9.28,17.33H6.76L10.66,12.21L8.53,7.45H10.8L12.08,10.68Z"}))},ae=Object(s.observer)((function(e){var a=e.slot,t=Object(d.useState)(""),r=Object(n.a)(t,2),o=r[0],l=r[1];return p.a.createElement(p.a.Fragment,null,a.name?p.a.createElement(g.a,null,a.name):null,p.a.createElement(E.a,{disablePadding:!0},a.value.map((function(e,t){return p.a.createElement(y.a,{key:t,disableGutters:!0},p.a.createElement(f.a,{value:e,onChange:function(e){return a.setAtIndex(t,e.target.value)},InputProps:{endAdornment:p.a.createElement($.a,null,p.a.createElement(j.a,{color:"secondary",onClick:function(){return a.removeAtIndex(t)}},p.a.createElement(A.a,null)))}}))})),p.a.createElement(y.a,{disableGutters:!0},p.a.createElement(f.a,{value:o,placeholder:"add new",onChange:function(e){return l(e.target.value)},InputProps:{endAdornment:p.a.createElement($.a,null,p.a.createElement(j.a,{onClick:function(){a.add(o),l("")},disabled:""===o,color:"secondary","data-testid":"stringArrayAdd-".concat(a.name)},p.a.createElement(M.a,null)))}}))),p.a.createElement(C.a,null,a.description))})),te=Object(c.a)((function(e){return{card:{marginTop:e.spacing(1)}}})),ne=Object(s.observer)((function(e){var a=e.slot,t=te(),r=Object(d.useState)(""),o=Object(n.a)(r,2),l=o[0],i=o[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement(g.a,null,a.name),Array.from(a.value,(function(e){var r=Object(n.a)(e,2),o=r[0],l=r[1];return p.a.createElement(O.a,{raised:!0,key:o,className:t.card},p.a.createElement(w.a,{title:o,action:p.a.createElement(j.a,{color:"secondary",onClick:function(){return a.remove(o)}},p.a.createElement(A.a,null))}),p.a.createElement(x.a,null,p.a.createElement(ae,{slot:{value:l,description:"Values associated with entry ".concat(o),setAtIndex:function(e,t){a.setAtKeyIndex(o,e,t)},removeAtIndex:function(e){a.removeAtKeyIndex(o,e)},add:function(e){a.addToKey(o,e)}}})))})),p.a.createElement(O.a,{raised:!0,className:t.card},p.a.createElement(w.a,{disableTypography:!0,title:p.a.createElement(f.a,{fullWidth:!0,value:l,placeholder:"add new",onChange:function(e){return i(e.target.value)},InputProps:{endAdornment:p.a.createElement($.a,null,p.a.createElement(j.a,{disabled:""===l,onClick:function(){a.add(l,[]),i("")},color:"secondary"},p.a.createElement(M.a,null)))}})})),p.a.createElement(C.a,null,a.description))})),re=Object(s.observer)((function(e){var a=e.slot,t=te(),r=Object(d.useState)(""),o=Object(n.a)(r,2),l=o[0],i=o[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement(g.a,null,a.name),Array.from(a.value,(function(e){var r=Object(n.a)(e,2),o=r[0],l=r[1];return p.a.createElement(O.a,{raised:!0,key:o,className:t.card},p.a.createElement(w.a,{title:o,action:p.a.createElement(j.a,{color:"secondary",onClick:function(){return a.remove(o)}},p.a.createElement(A.a,null))}),p.a.createElement(x.a,null,p.a.createElement(oe,{slot:{value:l,set:function(e){return a.add(o,e)}}})))})),p.a.createElement(O.a,{raised:!0,className:t.card},p.a.createElement(w.a,{disableTypography:!0,title:p.a.createElement(f.a,{fullWidth:!0,value:l,placeholder:"add new",onChange:function(e){return i(e.target.value)},InputProps:{endAdornment:p.a.createElement($.a,null,p.a.createElement(j.a,{disabled:""===l,onClick:function(){a.add(l,0),i("")},color:"secondary"},p.a.createElement(M.a,null)))}})})),p.a.createElement(C.a,null,a.description))})),oe=Object(s.observer)((function(e){var a=e.slot,t=Object(d.useState)(a.value),r=Object(n.a)(t,2),o=r[0],l=r[1];return Object(d.useEffect)((function(){var e=parseFloat(o,10);Number.isNaN(e)?a.reset():a.set(e)}),[a,o]),p.a.createElement(f.a,{label:a.name,helperText:a.description,value:o,type:"number",onChange:function(e){return l(e.target.value)}})})),le=Object(s.observer)((function(e){var a=e.slot,t=Object(d.useState)(a.value),r=Object(n.a)(t,2),o=r[0],l=r[1];return Object(d.useEffect)((function(){var e=parseInt(o,10);Number.isNaN(e)||a.set(e)}),[a,o]),p.a.createElement(f.a,{label:a.name,helperText:a.description,value:o,type:"number",onChange:function(e){return l(e.target.value)}})})),ie=Object(s.observer)((function(e){var a=e.slot;return p.a.createElement(k.a,null,p.a.createElement(S.a,{label:a.name,control:p.a.createElement(N.a,{checked:a.value,onChange:function(e){return a.set(e.target.checked)}})}),p.a.createElement(C.a,null,a.description))})),ce=Object(s.observer)((function(e){var a=e.slot,t=e.slotSchema,n=Object(u.getPropertyMembers)(Object(h.getSubType)(t)),r=Object(h.getUnionSubTypes)(Object(h.getUnionSubTypes)(Object(h.getSubType)(Object(h.getPropertyType)(n,"value")))[1]).map((function(e){return e.value}));return p.a.createElement(f.a,{value:a.value,label:a.name,select:!0,helperText:a.description,fullWidth:!0,onChange:function(e){return a.set(e.target.value)}},r.map((function(e){return p.a.createElement(T.a,{key:e,value:e},e)})))})),se=Object(s.observer)((function(e){var a=e.slot;return p.a.createElement(b.FileSelector,{location:a.value,setLocation:function(e){return a.set(e)},name:a.name,description:a.description})})),ue={string:Q,text:Y,fileLocation:se,stringArray:ae,stringArrayMap:ne,numberMap:re,number:oe,integer:le,color:Z,stringEnum:ce,boolean:ie,frozen:_.a,configRelationships:_.a},me=Object(c.a)((function(e){return{paper:{display:"flex",marginBottom:e.spacing(2),position:"relative",overflow:"visible"},paperContent:{flex:"auto",padding:e.spacing(1),overflow:"auto"},slotModeSwitch:{width:24,background:e.palette.secondary.light,display:"flex",justifyContent:"center",alignItems:"center"}}})),de=Object(s.observer)((function(e){var a=e.slot,t=e.slotSchema,n=me(),r=a.type,o=a.isCallback?J:ue[r];return o||(console.warn("no slot editor defined for ".concat(r,", editing as string")),o=Q),r in ue||console.warn("SlotEditor needs to implement ".concat(r)),p.a.createElement(L.a,{className:n.paper},p.a.createElement("div",{className:n.paperContent},p.a.createElement(o,{slot:a,slotSchema:t})),p.a.createElement("div",{className:n.slotModeSwitch},a.contextVariable.length?p.a.createElement(j.a,{className:n.slotModeIcon,onClick:function(){return a.isCallback?a.convertToValue():a.convertToCallback()},title:"convert to ".concat(a.isCallback?"regular value":"callback"),color:"secondary"},a.isCallback?p.a.createElement(ee,null):p.a.createElement(R.a,null)):null))})),pe=Object(s.observer)((function(e){var a=e.typeNameChoices,t=e.slot,n=e.slotName,r=e.onChange,o=me();return p.a.createElement(L.a,{className:o.paper},p.a.createElement("div",{className:o.paperContent},p.a.createElement(f.a,{value:t.type,label:"Type",select:!0,helperText:"Type of ".concat(n," to use"),fullWidth:!0,onChange:r},a.map((function(e){return p.a.createElement(T.a,{key:e,value:e},e)})))))})),be=Object(c.a)((function(e){return{subSchemaContainer:{marginLeft:e.spacing(1),borderLeft:"1px solid ".concat(e.palette.secondary.main),paddingLeft:e.spacing(1),marginBottom:e.spacing(1)},root:{padding:e.spacing(1,3,1,1),background:e.palette.background.default,overflowX:"hidden"}}})),he=Object(s.observer)((function(e){var a,t=be(),n=e.slotName,o=e.slotSchema,c=e.schema,s=e.slot,u=void 0===s?c[n]:s;if(Object(r.isConfigurationSchemaType)(o)){if(u.length)return p.a.createElement(p.a.Fragment,null,u.map((function(a,t){var r="".concat(Object(m.singular)(n)," ").concat(t+1);return p.a.createElement(he,Object.assign({},e,{key:r,slot:a,slotName:r}))})));var d=Object(r.getTypeNamesFromExplicitlyTypedUnion)(o);return d.length&&(a=p.a.createElement(pe,{typeNameChoices:d,slotName:n,slot:u,onChange:function(e){e.target.value!==u.type&&c.setSubschema(n,{type:e.target.value})}})),p.a.createElement(p.a.Fragment,null,p.a.createElement(i.a,null,n),p.a.createElement("div",{className:t.subSchemaContainer},a,p.a.createElement(l.a,null,p.a.createElement(fe,{schema:u}))))}return Object(r.isConfigurationSlotType)(o)?p.a.createElement(de,{key:n,slot:u,slotSchema:o}):null})),fe=Object(s.observer)((function(e){var a=e.schema;return Object(o.iterMap)(Object.entries(Object(u.getMembers)(a).properties),(function(e){var t=Object(n.a)(e,2),r=t[0],o=t[1];return p.a.createElement(he,{key:r,slotName:r,slotSchema:o,schema:a})}))})),ve=Object(s.observer)((function(e){var a=e.model,t=be(),n=a.target&&Object(r.readConfObject)(a.target,"trackId");return p.a.createElement("div",{className:t.root,key:n,"data-testid":"configEditor"},a.target?p.a.createElement(fe,{schema:a.target}):"no target set")}));a.default=ve},467:function(e,a,t){e.exports=function(){var e=[],a=[],t={},n={},r={};function o(e){return"string"===typeof e?new RegExp("^"+e+"$","i"):e}function l(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function i(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,t){return a[t]||""}))}function c(e,a){return e.replace(a[0],(function(t,n){var r=i(a[1],arguments);return l(""===t?e[n-1]:t,r)}))}function s(e,a,n){if(!e.length||t.hasOwnProperty(e))return a;for(var r=n.length;r--;){var o=n[r];if(o[0].test(a))return c(a,o)}return a}function u(e,a,t){return function(n){var r=n.toLowerCase();return a.hasOwnProperty(r)?l(n,r):e.hasOwnProperty(r)?l(n,e[r]):s(r,n,t)}}function m(e,a,t,n){return function(n){var r=n.toLowerCase();return!!a.hasOwnProperty(r)||!e.hasOwnProperty(r)&&s(r,r,t)===r}}function d(e,a,t){return(t?a+" ":"")+(1===a?d.singular(e):d.plural(e))}return d.plural=u(r,n,e),d.isPlural=m(r,n,e),d.singular=u(n,r,a),d.isSingular=m(n,r,a),d.addPluralRule=function(a,t){e.push([o(a),t])},d.addSingularRule=function(e,t){a.push([o(e),t])},d.addUncountableRule=function(e){"string"!==typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},d.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),r[e]=a,n[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()}}]);
//# sourceMappingURL=34.ddc42d81.chunk.js.map