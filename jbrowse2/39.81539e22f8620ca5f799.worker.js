this.webpackChunk([39],{2067:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(9),c=t(0),l=t.n(c),s=t(106),o=t(99),i=t(961),p=t(958),u=t(959),m=t(960),d=t(171),g=t(7),f=t(4),b=t(16),h=t(957),y=t(170),k=t(383),v=t(1),E=t(22),w=Object(s.a)((function(e){return{spacing:{marginBottom:e.spacing(3)}}}));function N(e){var a,t=e.trackAdapter,n=e.trackType,r=w();return"SNPCoverageAdapter"===t.type?l.a.createElement(o.a,{className:r.spacing},"Selected ",l.a.createElement("code",null,n),". Using adapter"," ",l.a.createElement("code",null,t.type)," with subadapter"," ",l.a.createElement("code",null,null===(a=t.subadapter)||void 0===a?void 0:a.type),". Please enter a track name and, if necessary, update the track type."):l.a.createElement(o.a,{className:r.spacing},"Using adapter ",l.a.createElement("code",null,t.type)," and guessing track type"," ",l.a.createElement("code",null,n),". Please enter a track name and, if necessary, update the track type.")}function T(e){var a=e.model,t=w(),n=Object(g.getSession)(a),r=a.adapterHint;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{className:t.spacing},"Was not able to guess the adapter type for this data, but it may be in the list below. If not, you can"," ",l.a.createElement(h.a,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer"},"check for new releases")," ","of JBrowse to see if they support this data type or"," ",l.a.createElement(h.a,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer"},"file an issue")," ","and add a feature request for this data type."),l.a.createElement(k.a,{className:t.spacing,value:r,label:"adapterType",helperText:"An adapter type",select:!0,fullWidth:!0,onChange:function(e){a.setAdapterHint(e.target.value)},SelectProps:{SelectDisplayProps:{"data-testid":"adapterTypeSelect"}}},Object(v.getEnv)(n).pluginManager.getElementTypesInGroup("adapter").filter((function(e){return"SNPCoverageAdapter"!==e.name})).map((function(e){return l.a.createElement(y.a,{key:e.name,value:e.name},e.name)}))))}var O=Object(b.observer)((function(e){var a=e.model,t=w(),n=Object(g.getSession)(a),r=a.trackName,c=a.trackAdapter,s=a.trackType,i=a.assembly,p=a.warningMessage;return a.unsupported?l.a.createElement(o.a,{className:t.spacing},"This version of JBrowse cannot display data of this type. It is possible, however, that there is a newer version that can display them. You can"," ",l.a.createElement(h.a,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer"},"check for new releases")," ","of JBrowse or"," ",l.a.createElement(h.a,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer"},"file an issue")," ","and add a feature request for this data type."):(null===c||void 0===c?void 0:c.type)===E.UNKNOWN?l.a.createElement(T,{model:a}):(null===c||void 0===c?void 0:c.type)?l.a.createElement(l.a.Fragment,null,c?l.a.createElement(N,{trackAdapter:c,trackType:s}):null,p?l.a.createElement(o.a,{style:{color:"orange"}},p):null,l.a.createElement(k.a,{className:t.spacing,label:"trackName",helperText:"A name for this track",fullWidth:!0,value:r,onChange:function(e){return a.setTrackName(e.target.value)},inputProps:{"data-testid":"trackNameInput"}}),l.a.createElement(k.a,{className:t.spacing,value:s,label:"trackType",helperText:"A track type",select:!0,fullWidth:!0,onChange:function(e){a.setTrackType(e.target.value)},SelectProps:{SelectDisplayProps:{"data-testid":"trackTypeSelect"}}},Object(v.getEnv)(n).pluginManager.getElementTypesInGroup("track").map((function(e){var a=e.name;return l.a.createElement(y.a,{key:a,value:a},a)}))),l.a.createElement(k.a,{value:i,label:"assemblyName",helperText:"Assembly to which the track will be added",select:!0,fullWidth:!0,onChange:function(e){a.setAssembly(e.target.value)},SelectProps:{SelectDisplayProps:{"data-testid":"assemblyNameSelect"}}},n.assemblies.map((function(e){var a=Object(f.readConfObject)(e,"name");return l.a.createElement(y.a,{key:a,value:a},a)})))):l.a.createElement(o.a,null,"Could not recognize this data type.")})),j=t(54),C=t(159),S=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column"},paper:{padding:e.spacing(1)}}}));var A=function(e){var a=e.model,t=S();return l.a.createElement("div",{className:t.root},l.a.createElement(C.a,{className:t.paper},l.a.createElement(j.FileSelector,{name:"Main file",description:"",location:a.trackData,setLocation:a.setTrackData}),l.a.createElement(j.FileSelector,{name:"Index file",description:"Automatically inferred from the URL if not supplied",location:a.indexTrackData,setLocation:a.setIndexTrackData})))},D=Object(s.a)((function(e){return{root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},stepContent:{margin:e.spacing(1)}}})),x=["Enter track data","Confirm track type"];a.default=Object(b.observer)((function(e){var a=e.model,t=Object(c.useState)(0),s=Object(r.a)(t,2),b=s[0],h=s[1],y=D(),k=Object(g.getSession)(a),v=a.assembly,E=a.trackAdapter,w=a.trackData,N=a.trackName,T=a.trackType;function j(){if(b===x.length-1){var e="".concat(N.toLowerCase().replace(/ /g,"_"),"-").concat(Date.now()).concat(k.adminMode?"":"-sessionTrack"),t=k.assemblyManager.get(v);k.addTrackConf({trackId:e,type:T,name:N,assemblyNames:[v],adapter:Object(n.a)(Object(n.a)({},E),{},{sequenceAdapter:Object(f.getConf)(t,["sequence","adapter"])})}),a.view?a.view.showTrack(e):k.notify("Open a new view, or use the track selector in an existing view, to view this track","info"),a.clearData(),k.hideWidget(a)}else h(b+1)}function C(){h(b-1)}function S(){switch(b){case 0:return!w;case 1:return!(N&&T&&(null===E||void 0===E?void 0:E.type)&&v);default:return!0}}return l.a.createElement("div",{className:y.root},l.a.createElement(i.a,{className:y.stepper,activeStep:b,orientation:"vertical"},x.map((function(e,t){return l.a.createElement(p.a,{key:e},l.a.createElement(u.a,null,e),l.a.createElement(m.a,null,function(e){switch(e){case 0:return l.a.createElement(A,{model:a});case 1:return l.a.createElement(O,{model:a});default:return l.a.createElement(o.a,null,"Unknown step")}}(t),l.a.createElement("div",{className:y.actionsContainer},l.a.createElement(d.a,{disabled:0===b,onClick:C,className:y.button},"Back"),l.a.createElement(d.a,{disabled:S(),variant:"contained",color:"primary",onClick:j,className:y.button,"data-testid":"addTrackNextButton"},b===x.length-1?"Add":"Next"))))}))))}))}});
//# sourceMappingURL=39.81539e22f8620ca5f799.worker.js.map