(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[81856],{823493:(e,t,n)=>{var r=n(23279),i=n(513218);e.exports=function(e,t,n){var o=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),r(e,t,{leading:o,maxWait:t,trailing:s})}},782677:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e){return!(!e||"function"!=typeof e.hasOwnProperty||!(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function c(e,t,n){return Object.keys(e).reduce((function(t,r){var i=""+r;return t.has(i)?t.set(i,n(t.get(i),e[i])):t}),t)}n.d(t,{Fv:()=>x,cY:()=>A,fK:()=>I});var l=function(){function e(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n={}),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var r=n,i=r.idAttribute,s=void 0===i?"id":i,c=r.mergeStrategy,l=void 0===c?function(e,t){return o({},e,t)}:c,d=r.processStrategy,u=void 0===d?function(e){return o({},e)}:d,h=r.fallbackStrategy,f=void 0===h?function(e,t){}:h;this._key=e,this._getId="function"==typeof s?s:function(e){return function(t){return a(t)?t.get(e):t[e]}}(s),this._idAttribute=s,this._mergeStrategy=l,this._processStrategy=u,this._fallbackStrategy=f,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce((function(t,n){var r,i=e[n];return o({},t,((r={})[n]=i,r))}),this.schema||{})},t.getId=function(e,t,n){return this._getId(e,t,n)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.fallback=function(e,t){return this._fallbackStrategy(e,t)},t.normalize=function(e,t,n,r,i,o){var s=this,a=this.getId(e,t,n),c=this.key;if(c in o||(o[c]={}),a in o[c]||(o[c][a]=[]),o[c][a].some((function(t){return t===e})))return a;o[c][a].push(e);var l=this._processStrategy(e,t,n);return Object.keys(this.schema).forEach((function(t){if(l.hasOwnProperty(t)&&"object"==typeof l[t]){var n=s.schema[t],a="function"==typeof n?n(e):n;l[t]=r(l[t],l,t,a,i,o)}})),i(this,l,e,t,n),a},t.denormalize=function(e,t){var n=this;return a(e)?c(this.schema,e,t):(Object.keys(this.schema).forEach((function(r){if(e.hasOwnProperty(r)){var i=n.schema[r];e[r]=t(e[r],i)}})),e)},i(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),d=function(){function e(e,t){t&&(this._schemaAttribute="string"==typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)},t.inferSchema=function(e,t,n){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(e,t,n);return this.schema[r]},t.normalizeValue=function(e,t,n,r,i,o){var s=this.inferSchema(e,t,n);if(!s)return e;var a=r(e,t,n,s,i,o);return this.isSingleSchema||null==a?a:{id:a,schema:this.getSchemaAttribute(e,t,n)}},t.denormalizeValue=function(e,t){var n=a(e)?e.get("schema"):e.schema;return this.isSingleSchema||n?t((this.isSingleSchema?void 0:a(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):e},i(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),u=function(e){function t(t,n){if(!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,t,n)||this}s(t,e);var n=t.prototype;return n.normalize=function(e,t,n,r,i,o){return this.normalizeValue(e,t,n,r,i,o)},n.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(d),h=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.normalize=function(e,t,n,r,i,s){var a=this;return Object.keys(e).reduce((function(t,n,c){var l,d=e[n];return null!=d?o({},t,((l={})[n]=a.normalizeValue(d,e,n,r,i,s),l)):t}),{})},n.denormalize=function(e,t){var n=this;return Object.keys(e).reduce((function(r,i){var s,a=e[i];return o({},r,((s={})[i]=n.denormalizeValue(a,t),s))}),{})},t}(d),f=function(e){if(Array.isArray(e)&&e.length>1)throw new Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},p=function(e){return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t]}))},_=function(e,t,n,r,i,o,s){return e=f(e),p(t).map((function(t,a){return i(t,n,r,e,o,s)}))},b=function(e,t,n){return e=f(e),t&&t.map?t.map((function(t){return n(t,e)})):t},m=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.normalize=function(e,t,n,r,i,o){var s=this;return p(e).map((function(e,a){return s.normalizeValue(e,t,n,r,i,o)})).filter((function(e){return null!=e}))},n.denormalize=function(e,t){var n=this;return e&&e.map?e.map((function(e){return n.denormalizeValue(e,t)})):e},t}(d),y=function(e,t,n,r,i,s,a){var c=o({},t);return Object.keys(e).forEach((function(n){var r=e[n],o="function"==typeof r?r(t):r,l=i(t[n],t,n,o,s,a);null==l?delete c[n]:c[n]=l})),c},v=function(e,t,n){if(a(t))return c(e,t,n);var r=o({},t);return Object.keys(e).forEach((function(t){null!=r[t]&&(r[t]=n(r[t],e[t]))})),r},g=function e(t,n,r,i,o,s){return"object"==typeof t&&t?"object"!=typeof i||i.normalize&&"function"==typeof i.normalize?i.normalize(t,n,r,e,o,s):(Array.isArray(i)?_:y)(i,t,n,r,e,o,s):t},I={Array:m,Entity:l,Object:function(){function e(e){this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce((function(t,n){var r,i=e[n];return o({},t,((r={})[n]=i,r))}),this.schema||{})},t.normalize=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return y.apply(void 0,[this.schema].concat(t))},t.denormalize=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.apply(void 0,[this.schema].concat(t))},e}(),Union:u,Values:h},x=function(e,t){if(!e||"object"!=typeof e)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===e?"null":typeof e)+'".');var n={},r=function(e){return function(t,n,r,i,o){var s=t.key,a=t.getId(r,i,o);s in e||(e[s]={});var c=e[s][a];e[s][a]=c?t.merge(c,n):n}}(n);return{entities:n,result:g(e,e,null,t,r,{})}},w=function(e){var t={},n=S(e);return function e(r,i){return"object"!=typeof i||i.denormalize&&"function"==typeof i.denormalize?null==r?r:i instanceof l?function(e,t,n,r,i){var s=r(e,t);if(void 0===s&&t instanceof l&&(s=t.fallback(e,t)),"object"!=typeof s||null===s)return s;if(i[t.key]||(i[t.key]={}),!i[t.key][e]){var c=a(s)?s:o({},s);i[t.key][e]=c,i[t.key][e]=t.denormalize(c,n)}return i[t.key][e]}(r,i,e,n,t):i.denormalize(r,e):(Array.isArray(i)?b:v)(i,r,e)}},S=function(e){var t=a(e);return function(n,r){var i=r.key;return"object"==typeof n?n:t?e.getIn([i,n.toString()]):e[i]&&e[i][n]}},A=function(e,t,n){if(void 0!==e)return w(n)(e,t)}},139176:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(667294),i=(n(470623),n(755742)),o=n(883119),s=n(898781),a=n(785893);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l extends r.Component{constructor(...e){super(...e),c(this,"setInputRef",(e=>{e&&(this._input=e)})),c(this,"handleKeyDown",(e=>{const{disabled:t,indexManager:n}=this.props;if(!t)switch(e.which){case i.Z.ENTER:case i.Z.NUMPAD_ENTER:e.preventDefault(),n.select();break;case i.Z.UP:e.preventDefault(),n.prev();break;case i.Z.DOWN:e.preventDefault(),n.next()}}))}componentDidMount(){this._input&&this._input.focus()}render(){const{onChange:e,value:t}=this.props;return(0,a.jsx)("div",{onKeyDown:this.handleKeyDown,role:"presentation",style:{width:"100%"},children:(0,a.jsx)(o.Um,{accessibilityLabel:"",id:"pickerSearchField",onChange:({value:t})=>e(t),placeholder:this.props.i18n._('Search', 'search bar placeholder text', 'search bar placeholder text'),ref:this.setInputRef,size:"lg",value:t})})}}const d=function(e){const t=(0,s.ZP)();return(0,a.jsx)(l,{...e,i18n:t})}},957119:(e,t,n)=>{n.d(t,{j:()=>o});const r={"á":"a","à":"a","â":"a","ä":"a","ã":"a","å":"a","æ":"a","ç":"c","é":"e","è":"e","ê":"e","ë":"e","í":"i","ì":"i","î":"i","ï":"i","ñ":"n","ó":"o","ò":"o","ô":"o","ö":"o","õ":"o","ø":"o","œ":"o","ß":"s","ú":"u","ù":"u","û":"u","ü":"u"},i=e=>{if(!e)return"";let t="";for(let n=0;n<e.length;n+=1)t+=r[e.charAt(n)]||e.charAt(n);return t},o=(e,t,n="name")=>{const r=t.toLowerCase();return e.filter((e=>((e,t)=>{const n=t.split(" "),r=e.split(" ");let o=0;for(let s=0;s<r.length;s+=1)(i(r[s]).includes(n[o])||r[s].includes(n[o]))&&(o+=1);return o===n.length})(e[n].toLowerCase(),r)))}},917311:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(693456),i=n(89061),o=n(883119),s=n(785893);const a=({collaborator_count:e,useLegoLayout:t,type:n})=>t?(0,s.jsx)(o.xu,{marginEnd:e?2:0,children:(0,s.jsx)(r.Z,{type:n})}):(0,s.jsx)(r.Z,{type:n}),c=({board:e,showCollaborativeIcon:t,showPrivateIcon:n,showProtectedIcon:c,showSectionsIcon:l,useLegoLayout:d})=>{var u;const h=(null==e||null===(u=e.collaborating_users)||void 0===u?void 0:u.length)||0;return t||n||c||l?(0,s.jsxs)(o.xu,{display:"flex",direction:"row",marginEnd:d?0:5,dangerouslySetInlineStyle:{__style:{paddingLeft:8}},alignItems:"center",children:[n&&(0,s.jsx)(a,{collaborator_count:h,useLegoLayout:d,type:"secret"}),c&&(0,s.jsx)(a,{collaborator_count:h,useLegoLayout:d,type:"protected"}),t&&(d?(0,s.jsx)(i.Z,{board:e,isCompact:!0,ownerOnly:!1}):(0,s.jsx)(r.Z,{type:"group"})),l&&(0,s.jsx)(r.Z,{type:"sections"})]}):null}},130053:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(883119),i=n(785893);const o=({image_url:e,naturalHeight:t,naturalWidth:n})=>(0,i.jsx)(r.xu,{"aria-hidden":"true",marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,height:48,children:(0,i.jsx)(r.zd,{wash:!0,width:48,height:48,rounding:2,children:(0,i.jsx)(r.Ee,{src:e,alt:"",naturalHeight:t,naturalWidth:n})})})},470623:(e,t,n)=>{n.d(t,{Z:()=>s});const r={row:0,section:0},i={row:-1,section:-1},o=()=>{};class s{constructor(e){this.index=Object.assign({},r),this.sections=e,this.updateCallback=o,this.selectItem=o}getIndex(){return this.index}isAtStart(){const{row:e,section:t}=this.index;return 0===e&&0===t}isAtEnd(){const{row:e,section:t}=this.index,n=this.sections[t]||[];return this.sections.length===t+1&&n.length===e+1}next(){if(this.isAtEnd())return;const{row:e,section:t}=this.index;e===i.row&&t===i.section?this.index=Object.assign({},r):this.sections[t].length>e+1?this.index.row+=1:(this.index.section+=1,this.index.row=0),this.updateCallback(!0)}prev(){if(this.isAtStart())return;const{row:e,section:t}=this.index;if(e===i.row&&t===i.section)this.index=Object.assign({},r);else if(e>0)this.index.row-=1;else{const e=this.index.section-1;this.index={section:e,row:this.sections[e].length-1}}this.updateCallback(!0)}select(){const{row:e,section:t}=this.index;this.selectItem((this.sections[t]||[])[e])}setInactive(){this.index=Object.assign({},i),this.updateCallback()}setSelectItem(e){this.selectItem=e}setUpdateCallback(e){this.updateCallback=e}updateIndex(e){this.index=e,this.updateCallback()}}},603174:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(667294),i=n(169158),o=(n(470623),n(883119)),s=n(785893);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class c extends r.Component{constructor(e){super(e),a(this,"setSelectedItemRef",(e=>{this.selectedItemRef=e})),a(this,"handleIndexUpdate",(e=>{const{indexManager:t}=this.props;this.setState({selectedIndex:t.getIndex(),selectionMovedByKeyboard:!!e})})),a(this,"handleSelectItem",(e=>()=>{const{disabled:t,onSelectItem:n}=this.props;t||n(e)})),a(this,"handleMouseEnter",(e=>()=>{const{disabled:t,indexManager:n}=this.props;t||n.updateIndex(e)})),a(this,"handleMouseLeave",(()=>{const{disabled:e,indexManager:t}=this.props;e||t.setInactive()})),a(this,"renderItems",((e,t)=>{const{renderItem:n}=this.props,{selectedIndex:r}=this.state,{row:i,section:a}=r||{},{customProps:c={},items:l,renderItem:d}=e,{isDisabled:u=(e=>!1)}=c,h=t===a,f=d||n;return f&&l.map(((e,n)=>{const r=u(e),a={section:t,row:n},l=h&&n===i;return(0,s.jsx)(o.xu,{"data-test-id":"board-selection",ref:!r&&l?this.setSelectedItemRef:null,children:r?f({item:e,hovered:l,sectionProps:c}):(0,s.jsx)(o.iP,{fullWidth:!1,onMouseEnter:this.handleMouseEnter(a),onMouseLeave:this.handleMouseLeave,onTap:this.handleSelectItem(e),rounding:2,children:f({item:e,hovered:l,sectionProps:c})})},n)}))})),a(this,"renderSections",(()=>{const{renderSectionHeader:e,sections:t}=this.props;return t.map(((t,n)=>(0,s.jsxs)(o.xu,{children:[e&&e(t,n),this.renderItems(t,n)]},n)))}));const{indexManager:t}=this.props;this.state={selectedIndex:t.getIndex(),selectionMovedByKeyboard:!1},t.setUpdateCallback(this.handleIndexUpdate)}componentDidUpdate(e){const{containerRef:t}=this;if(this.selectedItemRef&&this.state.selectionMovedByKeyboard&&t){const e=this.selectedItemRef;if(!(e instanceof HTMLElement))return;const n=e.getBoundingClientRect(),r=n.top,i=n.bottom,o=t.getBoundingClientRect(),s=o.top;i>=o.bottom?e.scrollIntoView(!1):r<=s&&e.scrollIntoView(!0)}e.indexManager!==this.props.indexManager&&this.props.indexManager.setUpdateCallback(this.handleIndexUpdate)}render(){const{grow:e=!1,maxHeight:t,fetchMore:n}=this.props;return(0,s.jsx)(i.Z,{fetchMore:n,children:({setRef:n,onScroll:r})=>(0,s.jsx)(o.xu,{flex:e?"grow":void 0,height:e?"100%":void 0,maxHeight:t,onScroll:r,overflow:"auto",ref:e=>{this.containerRef=e,n(e)},children:this.renderSections()})})}}},310204:(e,t,n)=>{function r(e,t,n){return{privacy_filter:t?"secret":"public",sort:n||"last_pinned_to",field_set_key:"profile_grid_item",username:e}}n.d(t,{Z:()=>r})},501817:(e,t,n)=>{n.d(t,{O:()=>a,Q:()=>c});var r=n(588028),i=n(280773),o=n(414327);const s=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],a={name:"BoardsResource",key:"boardsResource",options:({boardOrder:e,filterStories:t,mixPublicSecret:n,username:r},i)=>({privacy_filter:"all",sort:e||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:t,username:r,page_size:25,group_by:n?"mix_public_private":"visibility",include_archived:!0,redux_normalize_feed:!0,...i?{orbac_subject_id:i}:Object.freeze({})})},c=e=>s.reduce(((t,n)=>{const s=[(0,i.Z)("profileBoards",(0,r.O)(e,n))];return[!0,!1].forEach((t=>{[!0,!1].forEach((r=>{s.push((0,o.jB)(a.name,a.options({username:e,boardOrder:n,mixPublicSecret:t,filterStories:r})))}))})),t.concat(s)}),[])},108391:(e,t,n)=>{n.d(t,{W:()=>d,Z:()=>u});var r=n(693456),i=n(917311),o=n(27255),s=n(130053),a=n(898781),c=n(883119),l=n(785893);function d(e,t=""){const n=e&&e.length>1?new RegExp(e,"i"):"";return e&&e.length>1?t.split(n).reduce(((n,r,i)=>{if(n.length>0&&e&&e.length){const o=t.toLowerCase().indexOf(e.toLowerCase());return n.concat((0,l.jsx)("em",{style:{borderBottom:"1px solid #333",fontStyle:"normal",paddingBottom:"1px"},children:t.substring(o,o+e.length)},i),r)}return[r]}),[]):t}const u=function(e){var t,n,u,h,f,p;const _=(0,a.ZP)(),{disabled:b,item:m,isSection:y,isSelectMode:v,isWithinSectionPicker:g,saveState:I,searchQuery:x,selected:w}=e,S=y?null:m,A=y?m:null,P=A&&A.title||S&&S.name||"";let j="",E=!1,k="",O=0;S&&({image_cover_url:j,is_collaborative:E,privacy:k,section_count:O=0}=S);const z=d(x,P),C=k===o.Z.BoardPrivacy.SECRET,R=!b&&(w||!!I),B=!g&&"number"==typeof O&&O>0,D="number"==typeof O&&O>0?"boardWithSection":"boardWithoutSection",Z=v?_._('Select', 'Board select button label', 'Board select button label'):_._('Save', 'Pin save button label', 'Pin save button label');return(0,l.jsxs)(c.xu,{alignItems:"center",color:R?"lightGray":"white",display:"flex",height:64,marginStart:2,marginEnd:2,marginTop:1,padding:2,rounding:3,"data-test-id":D,children:[S&&(0,l.jsx)(c.xu,{height:48,width:48,color:"secondary",overflow:"hidden",rounding:2,marginEnd:2,flex:"none",children:j?(0,l.jsx)(c.Ee,{src:j,alt:P,fit:"cover",naturalWidth:1,naturalHeight:1}):(0,l.jsx)("span",{})}),A&&!(null===(t=A.preview_pins)||void 0===t||!t.length)&&(0,l.jsx)(s.Z,{image_url:null!==(n=A.preview_pins[0].image_square_url)&&void 0!==n?n:"",naturalHeight:null!==(u=null===(h=A.preview_pins[0].image_square_size_pixels)||void 0===h?void 0:h.height)&&void 0!==u?u:1,naturalWidth:null!==(f=null===(p=A.preview_pins[0].image_square_size_pixels)||void 0===p?void 0:p.width)&&void 0!==f?f:1}),(0,l.jsxs)(c.kC,{alignItems:"center",flex:"grow",justifyContent:"between",children:[(0,l.jsx)(c.xv,{color:b?"subtle":"default",size:"300",lineClamp:1,weight:"bold",children:z}),(B||!R)&&(0,l.jsxs)(c.kC,{alignItems:"center",justifyContent:"start",children:[C&&(0,l.jsx)(r.Z,{type:"secret"}),E&&(0,l.jsx)(i.Z,{board:S,showCollaborativeIcon:E,useLegoLayout:!0}),B&&(0,l.jsx)(r.Z,{type:"sections"})]}),!B&&R&&!I&&(0,l.jsx)(c.xu,{alignItems:"center",color:"primary","data-test-id":"BoardPickerSaveButton",display:"flex",flex:"none",paddingX:3,paddingY:2,rounding:4,children:(0,l.jsx)(c.xv,{color:"inverse",overflow:"normal",size:"300",weight:"bold",children:Z})}),!B&&R&&"loading"===I&&(0,l.jsx)(c.xu,{dangerouslySetInlineStyle:{__style:{transform:"scale(0.7)"}},maxHeight:35,children:(0,l.jsx)(c.$j,{accessibilityLabel:_._('Saving', 'Accessibility label for saving a pin to a board', 'Accessibility label for saving a pin to a board'),show:!0})})]})]})}},693456:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(898781),i=n(883119),o=n(785893);const s=function({type:e}){const t=(0,r.ZP)(),n={group:{accessibilityLabel:t._('group board', 'Board picker group board icon', 'Board picker group board icon'),icon:"people"},protected:{accessibilityLabel:t._('protected board', 'Board picker protected board icon', 'Board picker protected board icon'),icon:"protect"},secret:{accessibilityLabel:t._('secret board', 'Board picker secret board icon', 'Board picker secret board icon'),icon:"lock"},sections:{accessibilityLabel:t._('board with sections', 'Board picker board with sections icon', 'Board picker board with sections icon'),icon:"arrow-forward"},sectionsInline:{accessibilityLabel:t._('board with sections', 'Board picker board with sections icon', 'Board picker board with sections icon'),icon:"arrow-down"}}[e];return(0,o.jsx)(i.xu,{marginStart:1,children:(0,o.jsx)(i.xu,{marginStart:2,children:"sections"===e||"sectionsInline"===e?(0,o.jsx)(i.JO,{accessibilityLabel:n.accessibilityLabel,icon:n.icon,size:"12",color:"default"}):(0,o.jsx)(i.JO,{accessibilityLabel:n.accessibilityLabel,icon:n.icon,size:16,color:"default"})})})}},683190:(e,t,n)=>{n.d(t,{Fi:()=>_,K8:()=>u,Tq:()=>l,YV:()=>f,oL:()=>d,xH:()=>p,xk:()=>h});var r=n(280773),i=n(6637),o=n(935409),s=n(281615),a=n(379725),c=n(501817);function l(e,t){return(0,a.U2)("BoardResource",{options:{board_id:e,field_set_key:t}})}function d(e={},t,n){return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:t},error:n}}function u(e){return t=>{e&&(0,c.Q)(e).forEach((e=>{t(e)}))}}function h(e){return t=>(t(function(e){return{type:"BOARD_ARCHIVED",payload:{boardId:e}}}(e)),i.ZP.create("BoardArchiveResource",{boardId:e}).callUpdate())}function f(e){return t=>(t(function(e){return{type:"BOARD_UNARCHIVED",payload:{boardId:e}}}(e)),i.ZP.create("BoardArchiveResource",{boardId:e}).callDelete())}function p(e,t){return n=>i.ZP.create("BoardsMergeResource",{source_board_id:e,target_board_id:t}).callUpdate().then((()=>Promise.all([n((0,o.eo)({boardId:e})),n(l(t,"pin_count")),n((0,r.Z)(s.DV.BOARD_SECTIONS,t))])))}function _(e){return{type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}}},280773:(e,t,n)=>{function r(e,t){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:t}}}n.d(t,{Z:()=>r})},843747:(e,t,n)=>{n.d(t,{Z:()=>_,S:()=>p});var r=n(417498),i=n(280773),o=n(820384),s=n(674578),a=n(6637),c=n(683190),l=n(281615),d=n(124237);const u=e=>t=>{d.Z.showError(function(e,t){switch(e.api_error_code){case 2171:case 2172:case 2173:return t._('Please wait until the previous board action finishes.', ' - ', ' -- ');default:return e.message}}(t,e))},h=e=>(0,i.Z)(e.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,e.sectionId||e.boardId);function f(e,t){const{source:n,target:i}=e;i.boardId!==n.boardId?(t((0,c.Tq)(n.boardId,"pin_count")),t((0,c.Tq)(i.boardId,"pin_count"))):n.sectionId&&i.sectionId||t((0,c.Tq)(i.boardId,"pin_count")),n.sectionId&&t((0,r.Z)(n.sectionId)),i.sectionId&&t((0,r.Z)(i.sectionId))}function p(e){return t=>{const{selectedPinIds:n,source:r,target:i}=e;t((0,s.Z)({feedId:r.sectionId||r.boardId,feedType:r.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,itemIds:n,itemType:"pin"})),t((0,o.Z)({feedId:i.sectionId||i.boardId,feedType:i.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,itemIds:n,itemType:"pin"})),f(e,t)}}function _(e,t){return n=>function(e,t,n){const{inverseSelection:r,selectedPinIds:i,source:c,target:d}=e;if(c.boardId===d.boardId&&(c.sectionId||null)===(d.sectionId||null))return Promise.reject();if(r){const e={board_id:c.boardId,new_board_id:d.boardId,old_section_id:c.sectionId||void 0,new_section_id:d.sectionId||void 0,pin_ids:i};return a.ZP.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then((()=>Promise.all([t(h(c)),t(h(d))]))).catch(u(n))}{const e=(e,n)=>{t((0,s.Z)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,itemIds:i,itemType:"pin"})),t((0,o.Z)({feedId:n.sectionId||n.boardId,feedType:n.sectionId?l.DV.SECTION_PINS:l.DV.BOARD_PINS,itemIds:i,itemType:"pin"}))};e(c,d);const r=()=>e(d,c);if(d.boardId===c.boardId){if(d.sectionId){const e={section_id:d.sectionId,pins:i};return a.ZP.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch((e=>{r(),u(n)(e)}))}{const e={section_id:c.sectionId,pins:i};return a.ZP.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch((e=>{r(),u(n)(e)}))}}{const e={board_id:d.boardId,section_id:d.sectionId||void 0,pin_ids:i};return a.ZP.create("BulkEditResource",e).callUpdate({showError:!1}).catch((e=>{r(),u(n)(e)}))}}}(e,n,t).then((()=>f(e,n)))}},4392:(e,t,n)=>{n.d(t,{Z:()=>u,h:()=>d});var r=n(280773),i=n(820384),o=n(843747),s=n(6637),a=n(683190),c=n(281615),l=n(414327);function d(e,t){return{type:"SECTION_ADDED",payload:{boardId:e,section:t}}}function u({boardId:e,name:t,nameSource:n,pinImport:u,initialPinIds:h=[]},f,p){let _=0;"RECOMMENDATION"===n?_=1:"EDITED_RECOMMENDATION"===n&&(_=2);const b={board_id:e,initial_pins:u&&!u.all?u.pinIds:h,name:t,name_source:_,...p?{orbac_subject_id:p}:Object.freeze({})};return t=>s.ZP.create("BoardSectionResource",b).callCreate({showError:!1}).then((({resource_response:{data:n}})=>{t(d(e,n)),t((0,i.Z)({feedId:e,feedType:c.DV.BOARD_SECTIONS,itemIds:[n.id],itemType:"board_section"})),t((0,a.Tq)(e,"pin_count")),t((0,l.jB)("BoardSectionsRepinResource",{board_id:e}));const{all:s,pinIds:h}=u||{all:!1,pinIds:[]};return s?new Promise(((r,i)=>t((0,o.Z)({inverseSelection:!0,selectedPinIds:h,source:{boardId:e,sectionId:null},target:{boardId:e,sectionId:n.id}},f)).then((()=>r(n))).catch(i))):(h.length>0&&t((0,r.Z)(c.DV.BOARD_PINS,e)),n)}))}},417498:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(379725);function i(e,t){return n=>n((0,r.U2)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}},887831:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(667294);let i=null,o=!1,s=0;const a=()=>{i&&clearTimeout(i),o=!0,i=setTimeout((()=>{o=!1}),100)},c=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(null);(0,r.useEffect)((()=>(0===s&&window.addEventListener("scroll",a),s+=1,()=>{n.current&&clearTimeout(n.current),s-=1,s||window.removeEventListener("scroll",a)})),[]);const i=e=>{n.current&&clearTimeout(n.current),n.current=e&&o?setTimeout((()=>i(!0)),100):setTimeout((()=>{t(e)}),32)};return{isHovering:e,hoverHandlers:(0,r.useRef)({onMouseOver:()=>i(!0),onMouseLeave:()=>i(!1)}).current}}},232843:(e,t,n)=>{n.d(t,{H:()=>i,W:()=>o});var r=n(425288);const{Provider:i,useMaybeHook:o}=(0,r.Z)("PinCreateDeleteContext")},169158:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(667294),i=n(823493),o=n.n(i);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a extends r.PureComponent{constructor(...e){super(...e),s(this,"setContainerRef",(e=>{this.containerRef=e})),s(this,"fetchMoreIfNecessary",o()((()=>{const{fetchMore:e,scrollBuffer:t}=this.props;e&&this.containerRef&&(({scrollTop:e,clientHeight:t,scrollHeight:n},r)=>e+t+(r?r(t):2*t)>n)(this.containerRef,t)&&e()}),200))}componentDidMount(){setTimeout(this.fetchMoreIfNecessary)}componentDidUpdate(){this.fetchMoreIfNecessary()}render(){const{children:e}=this.props;return e({onScroll:this.fetchMoreIfNecessary,setRef:this.setContainerRef})}}},756777:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(883119),i=n(785893);const o={__style:{margin:"0 10px",borderRight:"3px solid transparent",borderTop:"3px solid #fff",animation:"spin .8s linear infinite"}};function s(){return(0,i.jsx)(r.xu,{alignItems:"center",color:"primary",display:"flex",height:"100%",justifyContent:"center",position:"absolute",width:"100%",rounding:8,children:(0,i.jsx)(r.xu,{dangerouslySetInlineStyle:o,display:"inlineBlock",height:18,position:"relative",rounding:"circle",width:18})})}function a({disabled:e,name:t,onClick:n,size:o,submitting:a,text:c}){return(0,i.jsxs)(r.xu,{display:"flex",position:"relative",children:[a&&(0,i.jsx)(s,{}),(0,i.jsx)(r.zx,{color:"red",disabled:e||a,name:t,onClick:n,size:o,type:"submit",text:c})]})}},89061:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(189734),i=n.n(r),o=n(898781),s=n(19121),a=n(883119),c=n(349700),l=n(785893);function d(e){var t,n,r,i;const o=null!==(t=null!==(n=null==e?void 0:e.imageMediumUrl)&&void 0!==n?n:null==e?void 0:e.image_medium_url)&&void 0!==t?t:"";return{name:null!==(r=null!==(i=null==e?void 0:e.fullName)&&void 0!==i?i:null==e?void 0:e.full_name)&&void 0!==r?r:"",src:"https://s.pinimg.com/images/user/default_75.png"===o?void 0:o}}function u({board:e,forceViewer:t,isCompact:n,ownerOnly:r}){var u,h,f,p,_;const b=(0,o.ZP)(),m=(0,s.Z)(),y=r?[d(null==e?void 0:e.owner)]:function(e,t,n){const{collaborated_by_me:r,collaborating_users:o,owner:s}=null!=e?e:{},a=null!=o?o:[],c=[s];if(r||n){const e=a.findIndex((e=>t.isAuth&&e.id===t.id));if(-1!==e){const t=a.splice(e,1)[0];c.push(t)}else c.push(t)}const l=i()(a,"full_name");return[...c,...l]}(e,m,t).map(d),v=y.slice(0,3).map((e=>e.name));let g="";switch(y.length){case 3:g=(0,c.Wc)(`${b._('{{ first }}, {{ second }}, and {{ last }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars', 'List of three usernames')}`,{first:`${null!==(u=v[0])&&void 0!==u?u:""}`,second:`${null!==(h=v[1])&&void 0!==h?h:""}`,last:`${null!==(f=v[2])&&void 0!==f?f:""}`});break;case 2:g=(0,c.Wc)(`${b._('{{ first }} and {{ second }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars', 'List of two usernames.')}`,{first:`${null!==(p=v[0])&&void 0!==p?p:""}`,second:`${null!==(_=v[1])&&void 0!==_?_:""}`});break;default:g=v.join(", ")}const I=y.length>3?(0,c.Wc)(`, ${b.ngettext('Collaborators: {{ userNames }} and {{ leftCount }} more.', 'Collaborators: {{ userNames }} and {{ leftCount }} more.', y.length - 3, 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree', 'Accessibility label that lists the names of collaborators and a final count of non-displayed avatars')}`,{userNames:g,leftCount:""+(y.length-3)}):(0,c.Wc)(`, ${b._('Collaborators: {{ userNames }}.', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree', 'Accessibility label that lists the names of collaborators')}`,{userNames:g});return(0,l.jsx)(a.HE,{accessibilityLabel:I,collaborators:y,size:n?"xs":"sm"})}},223123:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(966338),i=n(6637),o=n(332611),s=n(886858),a=n(379725),c=n(414327),l=n(782677);function d(){const e=(0,r.useDispatch)(),t=(0,r.useSelector)((e=>e.resources));return async function({boardCreateOptions:n,deprecatedSchemaForNormalization:r}){var d,u;const h=await i.ZP.create("BoardResource",n).callCreate(),f=null===(d=h.resource_response)||void 0===d?void 0:d.data,p=r?(0,l.Fv)(f,r):void 0;e((0,c.XM)("BoardResource",n,h,p)),e((0,o.fO)({event_type:20})),null!==(u=f.owner)&&void 0!==u&&u.id&&e((0,a.bi)("UserResource",{options:{user_id:f.owner.id,field_set_key:"save_behavior"}}));const _=t.BoardsResource||{},b=t.BoardsFeedResource||{};return Object.keys(_).forEach((t=>{var n;(0,s.k)(t).username===(null===(n=f.owner)||void 0===n?void 0:n.username)&&e((0,c.jB)("BoardsResource",t))})),Object.keys(b).forEach((t=>{var n;(0,s.k)(t).username===(null===(n=f.owner)||void 0===n?void 0:n.username)&&e((0,c.jB)("BoardsFeedResource",t))})),f}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/81856-2b3cd0e8a313c9a5.mjs.map