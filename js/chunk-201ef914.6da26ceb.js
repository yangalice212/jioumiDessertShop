(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-201ef914"],{"057f":function(t,n,e){var o=e("fc6a"),r=e("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(n){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):r(o(t))}},"1dde":function(t,n,e){var o=e("d039"),r=e("b622"),i=e("2d00"),c=r("species");t.exports=function(t){return i>=51||!o((function(){var n=[],e=n.constructor={};return e[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"428f":function(t,n,e){var o=e("da84");t.exports=o},"746f":function(t,n,e){var o=e("428f"),r=e("5135"),i=e("e538"),c=e("9bf2").f;t.exports=function(t){var n=o.Symbol||(o.Symbol={});r(n,t)||c(n,t,{value:i.f(t)})}},8418:function(t,n,e){"use strict";var o=e("a04b"),r=e("9bf2"),i=e("5c6c");t.exports=function(t,n,e){var c=o(n);c in t?r.f(t,c,i(0,e)):t[c]=e}},"99af":function(t,n,e){"use strict";var o=e("23e7"),r=e("d039"),i=e("e8b5"),c=e("861d"),a=e("7b0b"),u=e("50c4"),s=e("8418"),f=e("65f0"),d=e("1dde"),l=e("b622"),p=e("2d00"),b=l("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",y=p>=51||!r((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),v=d("concat"),m=function(t){if(!c(t))return!1;var n=t[b];return void 0!==n?!!n:i(t)},O=!y||!v;o({target:"Array",proto:!0,forced:O},{concat:function(t){var n,e,o,r,i,c=a(this),d=f(c,0),l=0;for(n=-1,o=arguments.length;n<o;n++)if(i=-1===n?c:arguments[n],m(i)){if(r=u(i.length),l+r>g)throw TypeError(h);for(e=0;e<r;e++,l++)e in i&&s(d,l,i[e])}else{if(l>=g)throw TypeError(h);s(d,l++,i)}return d.length=l,d}})},a4d3:function(t,n,e){"use strict";var o=e("23e7"),r=e("da84"),i=e("d066"),c=e("c430"),a=e("83ab"),u=e("4930"),s=e("d039"),f=e("5135"),d=e("e8b5"),l=e("861d"),p=e("d9b5"),b=e("825a"),g=e("7b0b"),h=e("fc6a"),y=e("a04b"),v=e("577e"),m=e("5c6c"),O=e("7c73"),j=e("df75"),w=e("241c"),S=e("057f"),x=e("7418"),k=e("06cf"),q=e("9bf2"),C=e("d1e7"),P=e("9112"),L=e("6eeb"),$=e("5692"),E=e("f772"),N=e("d012"),Q=e("90e3"),A=e("b622"),T=e("e538"),I=e("746f"),J=e("d44e"),_=e("69f3"),B=e("b727").forEach,F=E("hidden"),M="Symbol",U="prototype",z=A("toPrimitive"),D=_.set,V=_.getterFor(M),W=Object[U],G=r.Symbol,H=i("JSON","stringify"),K=k.f,R=q.f,X=S.f,Y=C.f,Z=$("symbols"),tt=$("op-symbols"),nt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),ot=$("wks"),rt=r.QObject,it=!rt||!rt[U]||!rt[U].findChild,ct=a&&s((function(){return 7!=O(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,n,e){var o=K(W,n);o&&delete W[n],R(t,n,e),o&&t!==W&&R(W,n,o)}:R,at=function(t,n){var e=Z[t]=O(G[U]);return D(e,{type:M,tag:t,description:n}),a||(e.description=n),e},ut=function(t,n,e){t===W&&ut(tt,n,e),b(t);var o=y(n);return b(e),f(Z,o)?(e.enumerable?(f(t,F)&&t[F][o]&&(t[F][o]=!1),e=O(e,{enumerable:m(0,!1)})):(f(t,F)||R(t,F,m(1,{})),t[F][o]=!0),ct(t,o,e)):R(t,o,e)},st=function(t,n){b(t);var e=h(n),o=j(e).concat(bt(e));return B(o,(function(n){a&&!dt.call(e,n)||ut(t,n,e[n])})),t},ft=function(t,n){return void 0===n?O(t):st(O(t),n)},dt=function(t){var n=y(t),e=Y.call(this,n);return!(this===W&&f(Z,n)&&!f(tt,n))&&(!(e||!f(this,n)||!f(Z,n)||f(this,F)&&this[F][n])||e)},lt=function(t,n){var e=h(t),o=y(n);if(e!==W||!f(Z,o)||f(tt,o)){var r=K(e,o);return!r||!f(Z,o)||f(e,F)&&e[F][o]||(r.enumerable=!0),r}},pt=function(t){var n=X(h(t)),e=[];return B(n,(function(t){f(Z,t)||f(N,t)||e.push(t)})),e},bt=function(t){var n=t===W,e=X(n?tt:h(t)),o=[];return B(e,(function(t){!f(Z,t)||n&&!f(W,t)||o.push(Z[t])})),o};if(u||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,n=Q(t),e=function(t){this===W&&e.call(tt,t),f(this,F)&&f(this[F],n)&&(this[F][n]=!1),ct(this,n,m(1,t))};return a&&it&&ct(W,n,{configurable:!0,set:e}),at(n,t)},L(G[U],"toString",(function(){return V(this).tag})),L(G,"withoutSetter",(function(t){return at(Q(t),t)})),C.f=dt,q.f=ut,k.f=lt,w.f=S.f=pt,x.f=bt,T.f=function(t){return at(A(t),t)},a&&(R(G[U],"description",{configurable:!0,get:function(){return V(this).description}}),c||L(W,"propertyIsEnumerable",dt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:G}),B(j(ot),(function(t){I(t)})),o({target:M,stat:!0,forced:!u},{for:function(t){var n=v(t);if(f(nt,n))return nt[n];var e=G(n);return nt[n]=e,et[e]=n,e},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:lt}),o({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),o({target:"Object",stat:!0,forced:s((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(g(t))}}),H){var gt=!u||s((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));o({target:"JSON",stat:!0,forced:gt},{stringify:function(t,n,e){var o,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(o=n,(l(n)||void 0!==t)&&!p(t))return d(n)||(n=function(t,n){if("function"==typeof o&&(n=o.call(this,t,n)),!p(n))return n}),r[1]=n,H.apply(null,r)}})}G[U][z]||P(G[U],z,G[U].valueOf),J(G,M),N[F]=!0},d2f1:function(t,n,e){"use strict";e.r(n);e("a4d3"),e("e01a");var o=e("7a23"),r={class:"container mt-6"},i={class:"row"},c={class:"col-md-7"},a={class:"col-md-5"},u={class:"list-unstyled"},s={class:"h3"},f={class:"h4 d-flex"},d={class:"text-gray me-2"},l={class:"d-flex w-50 mb-3 btn-group"};function p(t,n,e,p,b,g){var h=Object(o["x"])("Loading");return Object(o["s"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(h,{isLoading:b.isLoading},null,8,["isLoading"]),Object(o["g"])("div",r,[Object(o["g"])("div",i,[Object(o["g"])("div",c,[Object(o["g"])("div",{style:[{height:"600px","background-size":"cover","background-position":"center"},{"background-image":"url(".concat(b.product.imageUrl,")")}]},null,4)]),Object(o["g"])("main",a,[Object(o["g"])("ul",u,[Object(o["g"])("li",s,Object(o["A"])(b.product.title),1),Object(o["g"])("li",f,[Object(o["g"])("del",d,"NT$ "+Object(o["A"])(b.product.origin_price),1),Object(o["g"])("p",null,"NT$ "+Object(o["A"])(b.product.price),1)]),Object(o["g"])("li",null,Object(o["A"])(b.product.content),1),Object(o["g"])("li",null,Object(o["A"])(b.product.description),1)]),Object(o["g"])("div",l,[Object(o["g"])("button",{class:"btn btn-outline-secondary remove",type:"button",onClick:n[1]||(n[1]=function(){return g.minusQty&&g.minusQty.apply(g,arguments)}),disabled:b.qty<=1}," - ",8,["disabled"]),Object(o["I"])(Object(o["g"])("input",{class:"text-center quantity w-100",type:"number",min:"1","onUpdate:modelValue":n[2]||(n[2]=function(t){return b.qty=t})},null,512),[[o["E"],b.qty]]),Object(o["g"])("button",{type:"button",class:"btn btn-outline-secondary plus",onClick:n[3]||(n[3]=function(){return g.addQty&&g.addQty.apply(g,arguments)})},"+")]),Object(o["g"])("button",{type:"button",class:"btn btn-primary text-white",onClick:n[4]||(n[4]=function(t){return g.addCart(b.product.id,b.qty)})}," 加入購物車 ")])])])],64)}e("99af");var b=e("e689"),g={name:"Product",data:function(){return{product:{},isLoading:!1,qty:1}},methods:{minusQty:function(){this.qty-=1},addQty:function(){this.qty+=1},addCart:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/cart"),r={product_id:t,qty:e};this.$http.post(o,{data:r}).then((function(t){t.data.success?(n.isLoading=!1,n.$swal({icon:"success",title:t.data.message,confirmButtonColor:"#3085d6"}),b["a"].emit("update-cart")):alert(t.data.message)})).catch((function(t){console.log(t)}))},updateCart:function(t){var n=this;this.loadingStatus.loadingItem=t.id;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/cart/").concat(t.id),o={product_id:t.product.id,qty:t.qty};this.$http.put(e,{data:o}).then((function(t){t.data.success?(n.loadingStatus.loadingItem="",b["a"].emit("update-cart"),n.getCart()):alert(t.data.message)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.isLoading=!0;var n=this.$route.params.id,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/product/").concat(n);this.$http.get(e).then((function(n){n.data.success?(t.product=n.data.product,t.isLoading=!1):alert(n.data.message)})).catch((function(t){console.log(t)}))}};g.render=p;n["default"]=g},e01a:function(t,n,e){"use strict";var o=e("23e7"),r=e("83ab"),i=e("da84"),c=e("5135"),a=e("861d"),u=e("9bf2").f,s=e("e893"),f=i.Symbol;if(r&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var d={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof l?new f(t):void 0===t?f():f(t);return""===t&&(d[n]=!0),n};s(l,f);var p=l.prototype=f.prototype;p.constructor=l;var b=p.toString,g="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=b.call(t);if(c(d,t))return"";var e=g?n.slice(7,-1):n.replace(h,"$1");return""===e?void 0:e}}),o({global:!0,forced:!0},{Symbol:l})}},e538:function(t,n,e){var o=e("b622");n.f=o},e689:function(t,n,e){"use strict";var o=function(t){return{all:t=t||new Map,on:function(n,e){var o=t.get(n);o?o.push(e):t.set(n,[e])},off:function(n,e){var o=t.get(n);o&&(e?o.splice(o.indexOf(e)>>>0,1):t.set(n,[]))},emit:function(n,e){var o=t.get(n);o&&o.slice().map((function(t){t(e)})),(o=t.get("*"))&&o.slice().map((function(t){t(n,e)}))}}},r=o();n["a"]=r}}]);
//# sourceMappingURL=chunk-201ef914.6da26ceb.js.map