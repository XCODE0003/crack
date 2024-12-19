import { withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MainLayout-rxxRvUJY.js";
import "@inertiajs/vue3";
import "./ProductCardGame-_lk9caIX.js";
import "vue-final-modal";
import "pinia";
const _sfc_main = {
  __name: "updates",
  __ssrInlineRender: true,
  props: {
    updates: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="flex flex-col gap-6"${_scopeId}><div class="flex flex-col gap-5"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h1 class="text-4xl font-semibold"${_scopeId}>Updates</h1></div></div><div class="max-w-[640px] flex flex-col gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.updates, (update) => {
              _push2(`<div class="p-6 rounded-xl font-medium bg-dark flex justify-between items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(update.title)}</span><span class="text-sm text-gray"${_scopeId}>${ssrInterpolate(update.date_created)}</span></div>`);
            });
            _push2(`<!--]--></div></main>`);
          } else {
            return [
              createVNode("main", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("h1", { class: "text-4xl font-semibold" }, "Updates")
                  ])
                ]),
                createVNode("div", { class: "max-w-[640px] flex flex-col gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.updates, (update) => {
                    return openBlock(), createBlock("div", { class: "p-6 rounded-xl font-medium bg-dark flex justify-between items-center" }, [
                      createVNode("span", null, toDisplayString(update.title), 1),
                      createVNode("span", { class: "text-sm text-gray" }, toDisplayString(update.date_created), 1)
                    ]);
                  }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/updates.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
