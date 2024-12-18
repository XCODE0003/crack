import { withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MainLayout-zIEbSbGH.js";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ProductCardGame-QWbuLZK0.js";
import "vue-final-modal";
import "pinia";
const _sfc_main = {
  __name: "main",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="flex flex-col gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<div class="flex flex-col gap-5"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h1 class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(category.name)}</h1>`);
              _push2(ssrRenderComponent(unref(Link), {
                class: "text-blue font-medium hover:text-blue/50 transition-all duration-300",
                href: `/category/${category.id}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` See all `);
                  } else {
                    return [
                      createTextVNode(" See all ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-4 gap-5"${_scopeId}><!--[-->`);
              ssrRenderList(category.products, (product) => {
                _push2(`<div${_scopeId}>`);
                if (product.is_full_image) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    product,
                    category
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    product,
                    category
                  }, null, _parent2, _scopeId));
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div></div>`);
            });
            _push2(`<!--]--></main>`);
          } else {
            return [
              createVNode("main", { class: "flex flex-col gap-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                  return openBlock(), createBlock("div", { class: "flex flex-col gap-5" }, [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h1", { class: "text-2xl font-bold" }, toDisplayString(category.name), 1),
                      createVNode(unref(Link), {
                        class: "text-blue font-medium hover:text-blue/50 transition-all duration-300",
                        href: `/category/${category.id}`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" See all ")
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-4 gap-5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(category.products, (product) => {
                        return openBlock(), createBlock("div", null, [
                          product.is_full_image ? (openBlock(), createBlock(_sfc_main$2, {
                            key: 0,
                            product,
                            category
                          }, null, 8, ["product", "category"])) : (openBlock(), createBlock(_sfc_main$3, {
                            key: 1,
                            product,
                            category
                          }, null, 8, ["product", "category"]))
                        ]);
                      }), 256))
                    ])
                  ]);
                }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
