import { ref, onMounted, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MainLayout-zIEbSbGH.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./ProductCardGame-QWbuLZK0.js";
import "vue-final-modal";
import "pinia";
const _sfc_main = {
  __name: "products",
  __ssrInlineRender: true,
  props: {
    category: Object,
    products: Object
  },
  setup(__props) {
    const props = __props;
    const productsList = ref(props.products.data);
    ref(1);
    const form = useForm({});
    const loading = ref(false);
    onMounted(() => {
      productsList.value = props.products.data;
    });
    function loadMore() {
      loading.value = true;
      form.get(props.products.next_page_url, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: (page) => {
          productsList.value = [
            ...productsList.value,
            ...page.props.products.data
          ];
          loading.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="flex flex-col gap-6"${_scopeId}><div class="flex flex-col gap-5"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h1 class="text-4xl font-semibold"${_scopeId}>${ssrInterpolate(props.category.name)}</h1></div><div class="grid grid-cols-4 gap-5"${_scopeId}><!--[-->`);
            ssrRenderList(productsList.value, (product) => {
              _push2(`<div${_scopeId}>`);
              if (product.is_full_image) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  category: props.category,
                  product
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  category: props.category,
                  product
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="flex justify-center items-center"${_scopeId}>`);
            if (__props.products.next_page_url) {
              _push2(`<button class="btn btn-primary"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}${_scopeId}>`);
              if (!loading.value) {
                _push2(`<div${_scopeId}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M7.49996 1.66663V13.3333M1.66663 7.49996H13.3333" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div>`);
              } else {
                _push2(`<span class="loader"${_scopeId}></span>`);
              }
              _push2(` More programs </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></main>`);
          } else {
            return [
              createVNode("main", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("h1", { class: "text-4xl font-semibold" }, toDisplayString(props.category.name), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-4 gap-5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(productsList.value, (product) => {
                      return openBlock(), createBlock("div", null, [
                        product.is_full_image ? (openBlock(), createBlock(_sfc_main$2, {
                          key: 0,
                          category: props.category,
                          product
                        }, null, 8, ["category", "product"])) : (openBlock(), createBlock(_sfc_main$3, {
                          key: 1,
                          category: props.category,
                          product
                        }, null, 8, ["category", "product"]))
                      ]);
                    }), 256))
                  ]),
                  createVNode("div", { class: "flex justify-center items-center" }, [
                    __props.products.next_page_url ? (openBlock(), createBlock("button", {
                      key: 0,
                      onClick: loadMore,
                      class: "btn btn-primary",
                      disabled: loading.value
                    }, [
                      !loading.value ? (openBlock(), createBlock("div", { key: 0 }, [
                        (openBlock(), createBlock("svg", {
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M7.49996 1.66663V13.3333M1.66663 7.49996H13.3333",
                            stroke: "white",
                            "stroke-width": "1.66667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "loader"
                      })),
                      createTextVNode(" More programs ")
                    ], 8, ["disabled"])) : createCommentVNode("", true)
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
