import { mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main$1 = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: Object,
    category: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5 rounded-2xl hover:bg-dark/50 cursor-pointer transition-all duration-300 bg-dark p-6" }, _attrs))}><div class="flex justify-center items-center"><img class="w-16 rounded-lg h-16"${ssrRenderAttr("src", "/storage/" + __props.product.image)}></div><div class="flex items-center flex-col gap-1"><p class="leading-none font-medium">${ssrInterpolate(__props.product.title)}</p><div class="flex items-center specification gap-2"><!--[-->`);
      ssrRenderList(__props.product.slug, (slug) => {
        _push(`<span style="${ssrRenderStyle({ color: slug.color })}">${ssrInterpolate(slug.title)}</span>`);
      });
      _push(`<!--]--></div><p class="leading-none text-sm text-gray">${ssrInterpolate(__props.category.full_name)}</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ProductCardGame",
  __ssrInlineRender: true,
  props: {
    product: Object,
    category: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: "/product/" + __props.product.id,
        class: "flex flex-col gap-5 rounded-2xl hover:bg-dark/50 cursor-pointer transition-all duration-300 bg-dark"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center items-center"${_scopeId}><img class="w-full rounded-t-2xl h-[120px]"${ssrRenderAttr("src", "/storage/" + __props.product.image)}${_scopeId}></div><div class="flex px-6 py-5 items-center flex-col gap-1"${_scopeId}><p class="leading-none font-medium"${_scopeId}>${ssrInterpolate(__props.product.title)}</p><div class="flex items-center specification gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.product.slug, (slug) => {
              _push2(`<span style="${ssrRenderStyle({ color: slug.color })}"${_scopeId}>${ssrInterpolate(slug.title)}</span>`);
            });
            _push2(`<!--]--></div><p class="leading-none text-sm text-gray"${_scopeId}>${ssrInterpolate(__props.category.full_name)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("img", {
                  class: "w-full rounded-t-2xl h-[120px]",
                  src: "/storage/" + __props.product.image
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "flex px-6 py-5 items-center flex-col gap-1" }, [
                createVNode("p", { class: "leading-none font-medium" }, toDisplayString(__props.product.title), 1),
                createVNode("div", { class: "flex items-center specification gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.product.slug, (slug) => {
                    return openBlock(), createBlock("span", {
                      style: { color: slug.color }
                    }, toDisplayString(slug.title), 5);
                  }), 256))
                ]),
                createVNode("p", { class: "leading-none text-sm text-gray" }, toDisplayString(__props.category.full_name), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductCardGame.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
