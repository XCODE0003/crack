import { unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./MainLayout-rxxRvUJY.js";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./ProductCardGame-_lk9caIX.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "vue-final-modal";
import "pinia";
const _sfc_main$1 = {
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    sliders: Array
  },
  setup(__props) {
    const modules = [Pagination, Autoplay];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        pagination: true,
        "slides-per-view": 1,
        "space-between": 10,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        modules,
        class: "h-[400px] max-w-[1000px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.sliders, (slider) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: slider.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="object-cover"${ssrRenderAttr("src", `/storage/${slider.image}`)}${ssrRenderAttr("alt", slider.alt_image)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "object-cover",
                        src: `/storage/${slider.image}`,
                        alt: slider.alt_image
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.sliders, (slider) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: slider.id
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "object-cover",
                      src: `/storage/${slider.image}`,
                      alt: slider.alt_image
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Slider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "main",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    sliders: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<meta name="title" content="Free Software for Windows - Download Free Tools and Utilities"${_scopeId2}><meta name="description" content="Discover the best free software for Windows. Download utilities, antivirus programs, media players, and more without registration. Your source for reliable and secure free tools."${_scopeId2}><meta name="keywords" content="free software for Windows, free Windows tools, free antivirus download, best free media player, free utilities for Windows"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("meta", {
                      name: "title",
                      content: "Free Software for Windows - Download Free Tools and Utilities"
                    }),
                    createVNode("meta", {
                      name: "description",
                      content: "Discover the best free software for Windows. Download utilities, antivirus programs, media players, and more without registration. Your source for reliable and secure free tools."
                    }),
                    createVNode("meta", {
                      name: "keywords",
                      content: "free software for Windows, free Windows tools, free antivirus download, best free media player, free utilities for Windows"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<main class="flex flex-col gap-6"${_scopeId}><div class="w-full max-w-full overflow-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              sliders: __props.sliders,
              class: "w-full max-w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><!--[-->`);
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
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    product,
                    category
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_sfc_main$4, {
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
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  createVNode("meta", {
                    name: "title",
                    content: "Free Software for Windows - Download Free Tools and Utilities"
                  }),
                  createVNode("meta", {
                    name: "description",
                    content: "Discover the best free software for Windows. Download utilities, antivirus programs, media players, and more without registration. Your source for reliable and secure free tools."
                  }),
                  createVNode("meta", {
                    name: "keywords",
                    content: "free software for Windows, free Windows tools, free antivirus download, best free media player, free utilities for Windows"
                  })
                ]),
                _: 1
              }),
              createVNode("main", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "w-full max-w-full overflow-hidden" }, [
                  createVNode(_sfc_main$1, {
                    sliders: __props.sliders,
                    class: "w-full max-w-full"
                  }, null, 8, ["sliders"])
                ]),
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
                          product.is_full_image ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 0,
                            product,
                            category
                          }, null, 8, ["product", "category"])) : (openBlock(), createBlock(_sfc_main$4, {
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
