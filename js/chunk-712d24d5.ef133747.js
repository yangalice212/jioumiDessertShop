(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-712d24d5"],{"67e3":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),r={class:"container-fluid container-lg"},o={class:"d-flex justify-content-end my-4"},s=Object(c["g"])("span",{class:"material-icons"}," delete ",-1),d=Object(c["f"])("Delete All "),n={class:"table-responsive"},l={class:"table text-warning",style:{"min-width":"710px"}},i=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{width:"15%"},"Date"),Object(c["g"])("th",{width:"25%"},"Email"),Object(c["g"])("th",{width:"15%"},"Detail"),Object(c["g"])("th",{width:"15%"},"Total"),Object(c["g"])("th",{width:"15%"},"isPaid"),Object(c["g"])("th",{width:"15%",class:"text-center"},"Edit")])],-1),b={class:"fw-bold"},u={class:"fw-bold"},O={key:0,class:"form-check form-switch"},m={key:1,class:"form-check form-switch"},g={class:"text-center"},p=Object(c["g"])("span",{class:"material-icons"}," remove_red_eye ",-1),j=Object(c["g"])("span",{class:"material-icons"}," delete ",-1),f={class:"d-flex justify-content-end"};function h(e,t,a,h,v,y){var w=Object(c["x"])("Loading"),x=Object(c["x"])("Pagination"),k=Object(c["x"])("OrderModal"),$=Object(c["x"])("DetailModal");return Object(c["s"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(w,{isLoading:v.isLoading},null,8,["isLoading"]),Object(c["g"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger d-flex align-items-center",onClick:t[1]||(t[1]=Object(c["J"])((function(){return y.delOrders&&y.delOrders.apply(y,arguments)}),["prevent"]))},[s,d])]),Object(c["g"])("div",n,[Object(c["g"])("table",l,[i,Object(c["g"])("tbody",null,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(v.orders,(function(t){return Object(c["s"])(),Object(c["d"])("tr",{key:t.id},[Object(c["g"])("td",null,Object(c["A"])(e.$filter.date(t.create_at)),1),Object(c["g"])("td",null,Object(c["A"])(t.user.email),1),Object(c["g"])("td",b,[Object(c["g"])("a",{href:"#",onClick:Object(c["J"])((function(e){return y.openModal(t,"detail")}),["prevent"])},"Order Detail",8,["onClick"])]),Object(c["g"])("td",u,"NT$ "+Object(c["A"])(t.total),1),Object(c["g"])("td",null,[t.is_paid?(Object(c["s"])(),Object(c["d"])("span",O,[Object(c["g"])("input",{class:"form-check-input",type:"checkbox",checked:"",onClick:function(e){return y.updatePaid(t)},id:t.id},null,8,["onClick","id"]),Object(c["g"])("label",{class:"form-check-label",for:t.id},"已付款",8,["for"])])):(Object(c["s"])(),Object(c["d"])("span",m,[Object(c["g"])("input",{class:"form-check-input",type:"checkbox",onClick:function(e){return y.updatePaid(t)},id:t.id},null,8,["onClick","id"]),Object(c["g"])("label",{class:"form-check-label text-gray",for:t.id},"未付款",8,["for"])]))]),Object(c["g"])("td",g,[Object(c["g"])("a",{href:"#",class:"me-1",onClick:Object(c["J"])((function(e){return y.openModal(t,"edit")}),["prevent"])},[p],8,["onClick"]),Object(c["g"])("a",{href:"#",onClick:Object(c["J"])((function(e){return y.delOrder(t.id)}),["prevent"])},[j],8,["onClick"])])])})),128))])])]),Object(c["g"])("div",f,[Object(c["g"])(x,{page:v.pagination,onGetData:y.getOrders},null,8,["page","onGetData"])])]),Object(c["g"])(k,{order:v.tempOrder,onUpdateOrder:y.updateOrder,ref:"orderModal"},null,8,["order","onUpdateOrder"]),Object(c["g"])($,{order:v.tempOrder,ref:"detailModal"},null,8,["order"])],64)}var v=a("5530"),y=(a("99af"),a("b0c0"),{id:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref:"modal"}),w={class:"modal-dialog modal-xl modal-dialog-centered"},x={class:"modal-content border-0"},k=Object(c["g"])("div",{class:"modal-header border-0"},[Object(c["g"])("button",{type:"button",class:"btn-close bg-transparent","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body"},C={class:"row"},L={class:"col-md-7 mb-3"},M=Object(c["g"])("h3",{class:"mb-3"},"訂單資訊",-1),B={class:"row mb-2"},A={class:"form-group col-md-6"},T=Object(c["g"])("label",{for:"id",class:"mb-2"},"訂單編號",-1),_={class:"form-group col-md-6"},E=Object(c["g"])("label",{for:"time",class:"mb-2"},"購買時間",-1),D={class:"form-control border-0"},U={class:"row mb-2"},I={class:"form-group col-md-6"},J=Object(c["g"])("label",{class:"mb-2"},"是否付款",-1),P={key:0},V={key:1},N={key:0,class:"form-group col-md-6"},q=Object(c["g"])("label",{for:"paidTime",class:"mb-2"},"付款時間",-1),G={class:"form-control border-0"},F={class:"row mb-2"},S={class:"form-group col"},z=Object(c["g"])("label",{for:"message",class:"mb-2"},"留言",-1),H=Object(c["g"])("h3",{class:"mb-3"},"訂購人資訊",-1),K={key:0,class:"row mb-2"},Q={class:"form-group col-md-6"},R=Object(c["g"])("label",{for:"name",class:"mb-2"},"姓名",-1),W={class:"form-group col-md-6"},X=Object(c["g"])("label",{for:"tel",class:"mb-2"},"電話",-1),Y={key:1},Z={class:"form-group mb-2"},ee=Object(c["g"])("label",{for:"address",class:"mb-2"},"地址",-1),te={class:"form-group"},ae=Object(c["g"])("label",{for:"email",class:"mb-2"},"Email",-1),ce={class:"col-md-5"},re=Object(c["g"])("h3",{class:"mb-3"},"產品資訊",-1),oe={class:"list-unstyled"},se={class:"modal-footer border-0"},de=Object(c["g"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ne(e,t,a,r,o,s){return Object(c["s"])(),Object(c["d"])("div",y,[Object(c["g"])("div",w,[Object(c["g"])("div",x,[k,Object(c["g"])("div",$,[Object(c["g"])("div",C,[Object(c["g"])("div",L,[M,Object(c["g"])("div",B,[Object(c["g"])("div",A,[T,Object(c["I"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.tempOrder.id=e}),id:"id",class:"form-control bg-transparent border-0",readonly:""},null,512),[[c["E"],o.tempOrder.id]])]),Object(c["g"])("div",_,[E,Object(c["g"])("p",D,Object(c["A"])(e.$filter.date(o.tempOrder.create_at)),1)])]),Object(c["g"])("div",U,[Object(c["g"])("div",I,[J,Object(c["g"])("div",null,[o.tempOrder.is_paid?(Object(c["s"])(),Object(c["d"])("span",P,"已付款")):(Object(c["s"])(),Object(c["d"])("span",V,"未付款"))])]),o.tempOrder.is_paid?(Object(c["s"])(),Object(c["d"])("div",N,[q,Object(c["g"])("p",G,Object(c["A"])(e.$filter.date(o.tempOrder.paid_date)),1)])):Object(c["e"])("",!0)]),Object(c["g"])("div",F,[Object(c["g"])("div",S,[z,Object(c["I"])(Object(c["g"])("textarea",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.tempOrder.message=e}),id:"message",class:"form-control border-0 bg-transparent",readonly:""},null,512),[[c["E"],o.tempOrder.message]])])]),H,o.tempOrder.user?(Object(c["s"])(),Object(c["d"])("div",K,[Object(c["g"])("div",Q,[R,Object(c["I"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.tempOrder.user.name=e}),id:"name",class:"form-control border-0 border-bottom border-primary"},null,512),[[c["E"],o.tempOrder.user.name]])]),Object(c["g"])("div",W,[X,Object(c["I"])(Object(c["g"])("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.tempOrder.user.tel=e}),id:"tel",class:"form-control border-0 border-bottom border-primary"},null,512),[[c["E"],o.tempOrder.user.tel,void 0,{number:!0}]])])])):Object(c["e"])("",!0),o.tempOrder.user?(Object(c["s"])(),Object(c["d"])("div",Y,[Object(c["g"])("div",Z,[ee,Object(c["I"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.tempOrder.user.address=e}),id:"address",class:"form-control border-0 border-bottom border-primary"},null,512),[[c["E"],o.tempOrder.user.address]])]),Object(c["g"])("div",te,[ae,Object(c["I"])(Object(c["g"])("input",{type:"email","onUpdate:modelValue":t[6]||(t[6]=function(e){return o.tempOrder.user.email=e}),id:"email",class:"form-control border-0 border-bottom border-primary"},null,512),[[c["E"],o.tempOrder.user.email]])])])):Object(c["e"])("",!0)]),Object(c["g"])("div",ce,[re,Object(c["g"])("ul",oe,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(o.tempOrder.products,(function(e){return Object(c["s"])(),Object(c["d"])("li",{key:e.id,class:"d-flex justify-content-between"},[Object(c["g"])("p",null,Object(c["A"])(e.product.title)+" x "+Object(c["A"])(e.qty)+" / "+Object(c["A"])(e.product.unit),1),Object(c["g"])("p",null,"NT$ "+Object(c["A"])(e.final_total),1)])})),128))])])])]),Object(c["g"])("div",se,[de,Object(c["g"])("button",{onClick:t[7]||(t[7]=function(t){return e.$emit("update-order",o.tempOrder)}),type:"button",class:"btn btn-primary text-white"}," 確認 ")])])])],512)}var le=a("9641"),ie={props:["order"],data:function(){return{tempOrder:{}}},mixins:[le["a"]],watch:{order:function(){this.tempOrder=this.order}}};ie.render=ne;var be=ie,ue={id:"detailModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref:"modal"},Oe={class:"modal-dialog modal-md modal-dialog-centered"},me={class:"modal-content border-0"},ge=Object(c["g"])("div",{class:"modal-header border-0"},[Object(c["g"])("h5",{id:"orderModalLabel",class:"modal-title"},"查看訂單"),Object(c["g"])("button",{type:"button",class:"btn-close bg-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),pe={class:"modal-body"},je={class:"row"},fe={class:"list-unstyled"},he=Object(c["g"])("div",{class:"modal-footer border-0"},[Object(c["g"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ")],-1);function ve(e,t,a,r,o,s){return Object(c["s"])(),Object(c["d"])("div",ue,[Object(c["g"])("div",Oe,[Object(c["g"])("div",me,[ge,Object(c["g"])("div",pe,[Object(c["g"])("div",je,[Object(c["g"])("ul",fe,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(o.tempOrder.products,(function(e){return Object(c["s"])(),Object(c["d"])("li",{key:e.id,class:"d-flex justify-content-between"},[Object(c["g"])("p",null,Object(c["A"])(e.product.title)+" x "+Object(c["A"])(e.qty)+" / "+Object(c["A"])(e.product.unit),1),Object(c["g"])("p",null,"NT$ "+Object(c["A"])(e.final_total),1)])})),128))])])]),he])])],512)}var ye={props:["order"],data:function(){return{tempOrder:{}}},mixins:[le["a"]],watch:{order:function(){this.tempOrder=this.order}}};ye.render=ve;var we=ye,xe=a("1799"),ke={name:"Orders",data:function(){return{orders:[],tempOrder:{},pagination:{},isLoading:!1}},components:{OrderModal:be,DetailModal:we,Pagination:xe["a"]},mounted:function(){this.getOrders()},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/orders?page=").concat(t);this.$http.get(a).then((function(t){t.data.success?(e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1):e.$swal({title:t.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"})})).catch((function(e){console.log(e)}))},openModal:function(e,t){var a=this.$refs,c=a.orderModal,r=a.detailModal;switch(this.tempOrder=Object(v["a"])({},e),t){case"edit":c.openModal();break;case"detail":r.openModal();break;default:break}},updateOrder:function(){var e=this;this.isLoading=!0;var t=this.$refs.orderModal,a=this.isNew?"post":"put",c=this.isNew?"":"".concat(this.tempOrder.id),r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/order/").concat(c);this.$http[a](r,{data:this.tempOrder}).then((function(a){a.data.success?(e.$swal({title:a.data.message,icon:"success"}),e.getOrders(),t.hideModal(),e.isLoading=!1):(e.$swal({title:a.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"}),e.isLoading=!1)})).catch((function(e){console.log(e)}))},updatePaid:function(e){var t=this;this.isLoading=!0,this.tempOrder=Object(v["a"])({},e),this.tempOrder.is_paid?this.tempOrder.is_paid=!1:this.tempOrder.is_paid=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/order/").concat(e.id);this.$http.put(a,{data:this.tempOrder}).then((function(e){e.data.success?(t.$swal({title:e.data.message,icon:"success"}),t.getOrders(),t.isLoading=!1):(t.$swal({title:e.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"}),t.isLoading=!1)})).catch((function(e){console.log(e)}))},delOrder:function(e){var t=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/order/").concat(e);this.$swal({icon:"warning",title:"確定要刪除嗎？",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(e){e.isConfirmed&&(t.isLoading=!0,t.$http.delete(a).then((function(e){e.data.success?(t.isLoading=!1,t.$swal(e.data.message,"","success"),t.getOrders()):t.$swal({title:e.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"})})))}))},delOrders:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/orders/all");this.$swal({icon:"warning",title:"確定要全部刪除嗎？",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(a){a.isConfirmed&&(e.isLoading=!0,e.$http.delete(t).then((function(t){t.data.success?(e.isLoading=!1,e.$swal(t.data.message,"","success"),e.getOrderss()):e.$swal({title:t.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"})})))}))}}};ke.render=h;t["default"]=ke},b0c0:function(e,t,a){var c=a("83ab"),r=a("9bf2").f,o=Function.prototype,s=o.toString,d=/^\s*function ([^ (]*)/,n="name";c&&!(n in o)&&r(o,n,{configurable:!0,get:function(){try{return s.call(this).match(d)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-712d24d5.ef133747.js.map