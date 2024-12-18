import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MainLayout-zIEbSbGH.js";
import "@inertiajs/vue3";
import "./ProductCardGame-QWbuLZK0.js";
import "vue-final-modal";
import "pinia";
const _sfc_main = {
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="flex flex-col gap-6"${_scopeId}><div class="flex flex-col gap-5"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h1 class="text-4xl font-semibold"${_scopeId}>Contacts</h1></div></div><div class="text-sm font-medium"${_scopeId}> If you need assistance with software installation, please contact specialists <br${_scopeId}><br${_scopeId}> Information for copyright holders (DMCA) <br${_scopeId}><br${_scopeId}> Other inquiries: 8745yudfhkdsh@gmail.com </div></main>`);
          } else {
            return [
              createVNode("main", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("h1", { class: "text-4xl font-semibold" }, "Contacts")
                  ])
                ]),
                createVNode("div", { class: "text-sm font-medium" }, [
                  createTextVNode(" If you need assistance with software installation, please contact specialists "),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" Information for copyright holders (DMCA) "),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" Other inquiries: 8745yudfhkdsh@gmail.com ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
