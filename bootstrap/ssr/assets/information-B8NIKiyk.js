import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MainLayout-zIEbSbGH.js";
import "@inertiajs/vue3";
import "./ProductCardGame-QWbuLZK0.js";
import "vue-final-modal";
import "pinia";
const _sfc_main = {
  __name: "information",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="flex flex-col gap-6"${_scopeId}><div class="flex flex-col gap-5"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h1 class="text-4xl font-semibold"${_scopeId}> Information for Copyright Holders </h1></div></div><div class="text-sm font-medium"${_scopeId}> If you are the copyright holder of materials (texts, photographs, or other objects of copyright) posted on the Site and/or your rights are infringed by materials on the Site in any other way, please send a corresponding request to the Site Administration at the email address support@appstorrent.org and provide exhaustive evidence of your ownership of exclusive rights to the relevant materials (works) and/or other information and data regarding the nature of the rights infringement. <br${_scopeId}><br${_scopeId}> Your request will be reviewed by the Site Administration within a period not exceeding 5 (Five) business days from the date of receipt of the request with exhaustive data and confirmations of the violation of your rights. <br${_scopeId}><br${_scopeId}> In accordance with the current norms of Russian legislation, the Site Administration is ready to consider all disputed issues within the framework of the pre-trial procedure for settlement. </div></main>`);
          } else {
            return [
              createVNode("main", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("h1", { class: "text-4xl font-semibold" }, " Information for Copyright Holders ")
                  ])
                ]),
                createVNode("div", { class: "text-sm font-medium" }, [
                  createTextVNode(" If you are the copyright holder of materials (texts, photographs, or other objects of copyright) posted on the Site and/or your rights are infringed by materials on the Site in any other way, please send a corresponding request to the Site Administration at the email address support@appstorrent.org and provide exhaustive evidence of your ownership of exclusive rights to the relevant materials (works) and/or other information and data regarding the nature of the rights infringement. "),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" Your request will be reviewed by the Site Administration within a period not exceeding 5 (Five) business days from the date of receipt of the request with exhaustive data and confirmations of the violation of your rights. "),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" In accordance with the current norms of Russian legislation, the Site Administration is ready to consider all disputed issues within the framework of the pre-trial procedure for settlement. ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/information.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
