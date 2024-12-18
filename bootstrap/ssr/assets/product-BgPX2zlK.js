import { computed, withCtx, unref, mergeProps, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { a as _export_sfc, u as useDownloadModalStore, _ as _sfc_main$1 } from "./MainLayout-zIEbSbGH.js";
import { Head, Link } from "@inertiajs/vue3";
import "vue-final-modal";
import "pinia";
const _sfc_main = {
  __name: "product",
  __ssrInlineRender: true,
  props: {
    product: Object,
    category: Object,
    products: Array
  },
  setup(__props) {
    const downloadModalStore = useDownloadModalStore();
    const props = __props;
    function createSeoTags(seoCode) {
      var _a;
      const div = document.createElement("div");
      div.innerHTML = seoCode;
      return {
        title: ((_a = div.querySelector("title")) == null ? void 0 : _a.innerText) || props.product.title,
        meta: Array.from(div.querySelectorAll("meta")).map((meta) => ({
          name: meta.getAttribute("name"),
          content: meta.getAttribute("content"),
          property: meta.getAttribute("property"),
          "http-equiv": meta.getAttribute("http-equiv")
        }))
      };
    }
    const seoTags = computed(() => createSeoTags(props.product.seo_code));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (seoTags.value.title) {
                    _push3(`<title data-v-46a9a9de${_scopeId2}>${ssrInterpolate(seoTags.value.title)}</title>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(seoTags.value.meta, (meta, index) => {
                    _push3(`<meta${ssrRenderAttrs(mergeProps({ ref_for: true }, meta))} data-v-46a9a9de${_scopeId2}>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    seoTags.value.title ? (openBlock(), createBlock("title", { key: 0 }, toDisplayString(seoTags.value.title), 1)) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(seoTags.value.meta, (meta, index) => {
                      return openBlock(), createBlock("meta", mergeProps({
                        key: index,
                        ref_for: true
                      }, meta), null, 16);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<main class="flex flex-col gap-6" data-v-46a9a9de${_scopeId}><div class="flex flex-col gap-5" data-v-46a9a9de${_scopeId}><div class="flex flex-col gap-2" data-v-46a9a9de${_scopeId}><h1 class="text-4xl font-semibold" data-v-46a9a9de${_scopeId}>${ssrInterpolate(__props.product.title)}</h1><span class="text-blue" data-v-46a9a9de${_scopeId}>${ssrInterpolate(__props.category.name)}</span></div></div><div class="flex gap-6" data-v-46a9a9de${_scopeId}><div class="flex flex-col flex-1 gap-6" data-v-46a9a9de${_scopeId}><img${ssrRenderAttr("src", "/storage/" + __props.product.image)}${ssrRenderAttr("alt", __props.product.alt_image)} class="w-full h-full max-h-[400px] rounded-xl object-cover" data-v-46a9a9de${_scopeId}><div class="bg-dark rounded-3xl p-6 flex flex-col gap-6" data-v-46a9a9de${_scopeId}><h2 class="font-semibold text-2xl" data-v-46a9a9de${_scopeId}>Description</h2><div class="h-[1px] bg-gray_border" data-v-46a9a9de${_scopeId}></div><p data-v-46a9a9de${_scopeId}>${__props.product.description ?? ""}</p></div></div><div class="p-6 bg-dark max-w-[300px] h-fit w-full rounded-3xl flex flex-col gap-9" data-v-46a9a9de${_scopeId}><div class="flex flex-col gap-4" data-v-46a9a9de${_scopeId}><!--[-->`);
            ssrRenderList(__props.product.specifications, (spec) => {
              _push2(`<div class="flex flex-col gap-1" data-v-46a9a9de${_scopeId}><span class="text-sm text-gray font-medium" data-v-46a9a9de${_scopeId}>${ssrInterpolate(spec.title)}</span><p data-v-46a9a9de${_scopeId}>${ssrInterpolate(spec.value)}</p></div>`);
            });
            _push2(`<!--]--></div><button class="download-btn w-full justify-between" data-v-46a9a9de${_scopeId}><div class="flex items-center gap-2" data-v-46a9a9de${_scopeId}><span data-v-46a9a9de${_scopeId}>Download</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-46a9a9de${_scopeId}></svg></div><span class="text-white/75" data-v-46a9a9de${_scopeId}>${ssrInterpolate(__props.product.size_file)}</span></button><div class="flex flex-col gap-4" data-v-46a9a9de${_scopeId}><h2 class="text-sm font-medium text-gray" data-v-46a9a9de${_scopeId}> Similar apps </h2><div class="flex flex-col gap-3" data-v-46a9a9de${_scopeId}><!--[-->`);
            ssrRenderList(props.products, (product2) => {
              _push2(ssrRenderComponent(unref(Link), {
                href: "/product/" + product2.id,
                class: "flex items-center gap-3 pb-3 border-b border-gray_border"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", "/storage/" + product2.image)} class="w-6 h-6 rounded-md object-cover" data-v-46a9a9de${_scopeId2}><span data-v-46a9a9de${_scopeId2}>${ssrInterpolate(product2.title)}</span>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: "/storage/" + product2.image,
                        class: "w-6 h-6 rounded-md object-cover"
                      }, null, 8, ["src"]),
                      createVNode("span", null, toDisplayString(product2.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div></div></main>`);
          } else {
            return [
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  seoTags.value.title ? (openBlock(), createBlock("title", { key: 0 }, toDisplayString(seoTags.value.title), 1)) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(seoTags.value.meta, (meta, index) => {
                    return openBlock(), createBlock("meta", mergeProps({
                      key: index,
                      ref_for: true
                    }, meta), null, 16);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode("main", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("h1", { class: "text-4xl font-semibold" }, toDisplayString(__props.product.title), 1),
                    createVNode("span", { class: "text-blue" }, toDisplayString(__props.category.name), 1)
                  ])
                ]),
                createVNode("div", { class: "flex gap-6" }, [
                  createVNode("div", { class: "flex flex-col flex-1 gap-6" }, [
                    createVNode("img", {
                      src: "/storage/" + __props.product.image,
                      alt: __props.product.alt_image,
                      class: "w-full h-full max-h-[400px] rounded-xl object-cover"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "bg-dark rounded-3xl p-6 flex flex-col gap-6" }, [
                      createVNode("h2", { class: "font-semibold text-2xl" }, "Description"),
                      createVNode("div", { class: "h-[1px] bg-gray_border" }),
                      createVNode("p", {
                        innerHTML: __props.product.description
                      }, null, 8, ["innerHTML"])
                    ])
                  ]),
                  createVNode("div", { class: "p-6 bg-dark max-w-[300px] h-fit w-full rounded-3xl flex flex-col gap-9" }, [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.product.specifications, (spec) => {
                        return openBlock(), createBlock("div", { class: "flex flex-col gap-1" }, [
                          createVNode("span", { class: "text-sm text-gray font-medium" }, toDisplayString(spec.title), 1),
                          createVNode("p", null, toDisplayString(spec.value), 1)
                        ]);
                      }), 256))
                    ]),
                    createVNode("button", {
                      onClick: ($event) => unref(downloadModalStore).openModal(__props.product),
                      class: "download-btn w-full justify-between"
                    }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", null, "Download"),
                        (openBlock(), createBlock("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }))
                      ]),
                      createVNode("span", { class: "text-white/75" }, toDisplayString(__props.product.size_file), 1)
                    ], 8, ["onClick"]),
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("h2", { class: "text-sm font-medium text-gray" }, " Similar apps "),
                      createVNode("div", { class: "flex flex-col gap-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.products, (product2) => {
                          return openBlock(), createBlock(unref(Link), {
                            href: "/product/" + product2.id,
                            class: "flex items-center gap-3 pb-3 border-b border-gray_border"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/storage/" + product2.image,
                                class: "w-6 h-6 rounded-md object-cover"
                              }, null, 8, ["src"]),
                              createVNode("span", null, toDisplayString(product2.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]);
                        }), 256))
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46a9a9de"]]);
export {
  product as default
};
