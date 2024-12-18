import { useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, ref, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { Link, usePage, Head } from "@inertiajs/vue3";
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import { defineStore } from "pinia";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "139",
    height: "37",
    viewBox: "0 0 139 37",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_ii_240_35)"><path d="M16 3C8.83187 3 3 8.83187 3 16V25.6769L8.125 27.7275L9.18 33H12V29H14V33H15V29H17V33H18V29H20V33H22.82L23.875 27.7275L29 25.6769V16C29 8.83187 23.1681 3 16 3ZM10.5 23C9.80777 23 9.13108 22.7947 8.5555 22.4101C7.97993 22.0256 7.53133 21.4789 7.26642 20.8394C7.00152 20.1999 6.9322 19.4961 7.06725 18.8172C7.2023 18.1383 7.53564 17.5146 8.02513 17.0251C8.51461 16.5356 9.13825 16.2023 9.81718 16.0673C10.4961 15.9322 11.1999 16.0015 11.8394 16.2664C12.4789 16.5313 13.0256 16.9799 13.4101 17.5555C13.7947 18.1311 14 18.8078 14 19.5C13.999 20.428 13.6299 21.3176 12.9738 21.9738C12.3176 22.6299 11.428 22.999 10.5 23ZM13.7194 27L15.25 22H16.75L18.2806 27H13.7194ZM21.5 23C20.8078 23 20.1311 22.7947 19.5555 22.4101C18.9799 22.0256 18.5313 21.4789 18.2664 20.8394C18.0015 20.1999 17.9322 19.4961 18.0673 18.8172C18.2023 18.1383 18.5356 17.5146 19.0251 17.0251C19.5146 16.5356 20.1383 16.2023 20.8172 16.0673C21.4961 15.9322 22.1999 16.0015 22.8394 16.2664C23.4789 16.5313 24.0256 16.9799 24.4101 17.5555C24.7947 18.1311 25 18.8078 25 19.5C24.999 20.428 24.6299 21.3176 23.9738 21.9738C23.3176 22.6299 22.428 22.999 21.5 23Z" fill="url(#paint0_linear_240_35)"></path></g><path d="M42.08 16.24C41.0133 16.24 40.0867 16.0133 39.3 15.56C38.5133 15.0933 37.9 14.44 37.46 13.6C37.0333 12.76 36.82 11.78 36.82 10.66C36.82 9.54 37.0333 8.56 37.46 7.72C37.9 6.88 38.5133 6.23333 39.3 5.78C40.0867 5.31333 41.0133 5.08 42.08 5.08C43.44 5.08 44.5667 5.43333 45.46 6.14C46.3667 6.84667 46.9 7.83333 47.06 9.1L44.42 9.24C44.3133 8.56 44.0533 8.04667 43.64 7.7C43.2267 7.34 42.7067 7.16 42.08 7.16C41.2533 7.16 40.6133 7.46667 40.16 8.08C39.7067 8.69333 39.48 9.55333 39.48 10.66C39.48 11.7667 39.7067 12.6267 40.16 13.24C40.6133 13.8533 41.2533 14.16 42.08 14.16C42.7067 14.16 43.2267 13.98 43.64 13.62C44.0667 13.26 44.3267 12.7 44.42 11.94L47.06 12.06C46.9133 13.34 46.3867 14.36 45.48 15.12C44.5867 15.8667 43.4533 16.24 42.08 16.24ZM48.343 16V5.32H50.743L50.803 7.4C51.0163 6.68 51.3296 6.15333 51.743 5.82C52.1563 5.48667 52.6963 5.32 53.363 5.32H54.343V7.52H53.343C52.5296 7.52 51.9163 7.70667 51.503 8.08C51.103 8.44 50.903 9.02667 50.903 9.84V16H48.343ZM58.6564 16.24C57.5364 16.24 56.6364 15.9867 55.9564 15.48C55.2764 14.9733 54.9364 14.2533 54.9364 13.32C54.9364 12.4 55.2231 11.68 55.7964 11.16C56.3697 10.64 57.2431 10.2667 58.4164 10.04L61.9564 9.34C61.9564 7.82 61.2764 7.06 59.9164 7.06C59.2897 7.06 58.7964 7.20667 58.4364 7.5C58.0897 7.78 57.8564 8.18667 57.7364 8.72L55.1164 8.6C55.3297 7.48 55.8497 6.61333 56.6764 6C57.5031 5.38667 58.5831 5.08 59.9164 5.08C61.4364 5.08 62.5831 5.46667 63.3564 6.24C64.1297 7 64.5164 8.09333 64.5164 9.52V13.4C64.5164 13.68 64.5631 13.8733 64.6564 13.98C64.7631 14.0867 64.9164 14.14 65.1164 14.14H65.4564V16C65.2297 16.0533 64.9231 16.08 64.5364 16.08C63.9497 16.08 63.4564 15.96 63.0564 15.72C62.6564 15.4667 62.4031 15.0133 62.2964 14.36C62.0297 14.92 61.5697 15.3733 60.9164 15.72C60.2764 16.0667 59.5231 16.24 58.6564 16.24ZM59.1764 14.38C60.0297 14.38 60.7031 14.1333 61.1964 13.64C61.7031 13.1467 61.9564 12.4933 61.9564 11.68V11.08L59.1964 11.64C58.6231 11.76 58.2097 11.94 57.9564 12.18C57.7164 12.4067 57.5964 12.7067 57.5964 13.08C57.5964 13.9467 58.1231 14.38 59.1764 14.38ZM71.3933 16.24C70.3266 16.24 69.3999 16.0133 68.6133 15.56C67.8266 15.0933 67.2133 14.44 66.7733 13.6C66.3466 12.76 66.1333 11.78 66.1333 10.66C66.1333 9.54 66.3466 8.56 66.7733 7.72C67.2133 6.88 67.8266 6.23333 68.6133 5.78C69.3999 5.31333 70.3266 5.08 71.3933 5.08C72.7533 5.08 73.8799 5.43333 74.7733 6.14C75.6799 6.84667 76.2133 7.83333 76.3733 9.1L73.7333 9.24C73.6266 8.56 73.3666 8.04667 72.9533 7.7C72.5399 7.34 72.0199 7.16 71.3933 7.16C70.5666 7.16 69.9266 7.46667 69.4733 8.08C69.0199 8.69333 68.7933 9.55333 68.7933 10.66C68.7933 11.7667 69.0199 12.6267 69.4733 13.24C69.9266 13.8533 70.5666 14.16 71.3933 14.16C72.0199 14.16 72.5399 13.98 72.9533 13.62C73.3799 13.26 73.6399 12.7 73.7333 11.94L76.3733 12.06C76.2266 13.34 75.6999 14.36 74.7933 15.12C73.8999 15.8667 72.7666 16.24 71.3933 16.24ZM77.5 16V1.8H80.06V10.14L84.44 5.32H87.6L83.42 9.76L87.74 16H84.86L81.74 11.28L80.06 13.06V16H77.5Z" fill="url(#paint1_linear_240_35)"></path><path d="M42.08 34.24C41.0133 34.24 40.0867 34.0133 39.3 33.56C38.5133 33.0933 37.9 32.44 37.46 31.6C37.0333 30.76 36.82 29.78 36.82 28.66C36.82 27.54 37.0333 26.56 37.46 25.72C37.9 24.88 38.5133 24.2333 39.3 23.78C40.0867 23.3133 41.0133 23.08 42.08 23.08C43.44 23.08 44.5667 23.4333 45.46 24.14C46.3667 24.8467 46.9 25.8333 47.06 27.1L44.42 27.24C44.3133 26.56 44.0533 26.0467 43.64 25.7C43.2267 25.34 42.7067 25.16 42.08 25.16C41.2533 25.16 40.6133 25.4667 40.16 26.08C39.7067 26.6933 39.48 27.5533 39.48 28.66C39.48 29.7667 39.7067 30.6267 40.16 31.24C40.6133 31.8533 41.2533 32.16 42.08 32.16C42.7067 32.16 43.2267 31.98 43.64 31.62C44.0667 31.26 44.3267 30.7 44.42 29.94L47.06 30.06C46.9133 31.34 46.3867 32.36 45.48 33.12C44.5867 33.8667 43.4533 34.24 42.08 34.24ZM53.0425 34.24C51.9892 34.24 51.0692 34.0133 50.2825 33.56C49.4958 33.0933 48.8825 32.4467 48.4425 31.62C48.0025 30.78 47.7825 29.7933 47.7825 28.66C47.7825 27.5267 48.0025 26.5467 48.4425 25.72C48.8825 24.88 49.4958 24.2333 50.2825 23.78C51.0692 23.3133 51.9892 23.08 53.0425 23.08C54.0958 23.08 55.0158 23.3133 55.8025 23.78C56.5892 24.2333 57.1958 24.88 57.6225 25.72C58.0625 26.5467 58.2825 27.5267 58.2825 28.66C58.2825 29.7933 58.0625 30.78 57.6225 31.62C57.1958 32.4467 56.5892 33.0933 55.8025 33.56C55.0158 34.0133 54.0958 34.24 53.0425 34.24ZM53.0425 32.16C53.8692 32.16 54.5092 31.8533 54.9625 31.24C55.4158 30.6267 55.6425 29.7667 55.6425 28.66C55.6425 27.5533 55.4158 26.6933 54.9625 26.08C54.5092 25.4667 53.8692 25.16 53.0425 25.16C52.2158 25.16 51.5758 25.4667 51.1225 26.08C50.6692 26.6933 50.4425 27.5533 50.4425 28.66C50.4425 29.7667 50.6692 30.6267 51.1225 31.24C51.5758 31.8533 52.2158 32.16 53.0425 32.16ZM59.7547 34V23.32H62.0747L62.1347 25.1C62.4014 24.46 62.788 23.9667 63.2947 23.62C63.8147 23.26 64.408 23.08 65.0747 23.08C65.8614 23.08 66.5147 23.2733 67.0347 23.66C67.568 24.0467 67.948 24.5867 68.1747 25.28C68.4147 24.56 68.7947 24.0133 69.3147 23.64C69.848 23.2667 70.488 23.08 71.2347 23.08C72.3414 23.08 73.208 23.4267 73.8347 24.12C74.4747 24.8133 74.7947 25.82 74.7947 27.14V34H72.2347V27.8C72.2347 26.04 71.628 25.16 70.4147 25.16C69.8014 25.16 69.3214 25.4 68.9747 25.88C68.628 26.3467 68.4547 27.0133 68.4547 27.88V34H66.0747V27.88C66.0747 27.0133 65.9414 26.3467 65.6747 25.88C65.408 25.4 64.948 25.16 64.2947 25.16C63.6814 25.16 63.1947 25.4 62.8347 25.88C62.488 26.36 62.3147 27.0267 62.3147 27.88V34H59.7547ZM76.6547 34V23.32H78.9747L79.0347 25.1C79.3014 24.46 79.688 23.9667 80.1947 23.62C80.7147 23.26 81.308 23.08 81.9747 23.08C82.7614 23.08 83.4147 23.2733 83.9347 23.66C84.468 24.0467 84.848 24.5867 85.0747 25.28C85.3147 24.56 85.6947 24.0133 86.2147 23.64C86.748 23.2667 87.388 23.08 88.1347 23.08C89.2414 23.08 90.108 23.4267 90.7347 24.12C91.3747 24.8133 91.6947 25.82 91.6947 27.14V34H89.1347V27.8C89.1347 26.04 88.528 25.16 87.3147 25.16C86.7014 25.16 86.2214 25.4 85.8747 25.88C85.528 26.3467 85.3547 27.0133 85.3547 27.88V34H82.9747V27.88C82.9747 27.0133 82.8414 26.3467 82.5747 25.88C82.308 25.4 81.848 25.16 81.1947 25.16C80.5814 25.16 80.0947 25.4 79.7347 25.88C79.388 26.36 79.2147 27.0267 79.2147 27.88V34H76.6547ZM97.1528 34.24C96.0595 34.24 95.1995 33.8867 94.5728 33.18C93.9461 32.4733 93.6328 31.48 93.6328 30.2V23.32H96.1928V29.56C96.1928 30.4667 96.3395 31.1267 96.6328 31.54C96.9395 31.9533 97.3995 32.16 98.0128 32.16C98.6928 32.16 99.2261 31.9333 99.6128 31.48C99.9995 31.0133 100.193 30.34 100.193 29.46V23.32H102.753V34H100.413L100.373 32.26C99.8128 33.58 98.7395 34.24 97.1528 34.24ZM104.966 34V23.32H107.286L107.346 25.14C107.64 24.4067 108.066 23.88 108.626 23.56C109.2 23.24 109.84 23.08 110.546 23.08C111.72 23.08 112.62 23.46 113.246 24.22C113.873 24.9667 114.186 25.94 114.186 27.14V34H111.626V27.96C111.626 27.0533 111.486 26.36 111.206 25.88C110.94 25.4 110.46 25.16 109.766 25.16C109.073 25.16 108.526 25.4 108.126 25.88C107.726 26.36 107.526 27.0533 107.526 27.96V34H104.966ZM116.378 34V23.32H118.938V34H116.378ZM116.338 21.9V19.62H118.998V21.9H116.338ZM124.765 34C123.698 34 122.912 33.76 122.405 33.28C121.912 32.7867 121.665 32.0067 121.665 30.94V25.3H119.985V23.32H121.665V20.82H124.225V23.32H127.045V25.3H124.225V30.7C124.225 31.2067 124.332 31.5533 124.545 31.74C124.772 31.9267 125.105 32.02 125.545 32.02H127.045V34H124.765ZM129.219 37V35.02H130.579C130.926 35.02 131.179 34.9667 131.339 34.86C131.513 34.7533 131.653 34.5733 131.759 34.32L132.039 33.58H131.299L127.499 23.32H130.139L132.839 31.18L135.379 23.32H138.039L133.859 35.12C133.633 35.7867 133.299 36.2667 132.859 36.56C132.433 36.8533 131.826 37 131.039 37H129.219Z" fill="#80858E"></path><defs><filter id="filter0_ii_240_35" x="3" y="2" width="26" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.855 0 0 0 0 0.8685 0 0 0 0 0.9 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_240_35"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="-1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.415662 0 0 0 0 0.436233 0 0 0 0 0.472232 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="effect1_innerShadow_240_35" result="effect2_innerShadow_240_35"></feBlend></filter><linearGradient id="paint0_linear_240_35" x1="16" y1="3" x2="16" y2="33" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="#80858E"></stop></linearGradient><linearGradient id="paint1_linear_240_35" x1="87.5" y1="-1.70536e-07" x2="87.5" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="#80848E"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/Logo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Aside",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col justify-between" }, _attrs))}><div class="flex flex-col gap-12">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Logo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Logo)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col aside-nav gap-4"><!--[-->`);
      ssrRenderList(props.categories, (category) => {
        _push(ssrRenderComponent(unref(Link), {
          href: `/category/${category.id}`,
          class: "flex items-center gap-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-dark rounded-full h-8 w-8 flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", `/storage/${category.icon}`)} class="h-4.5 w-4.5" alt="" srcset=""${_scopeId}></div> ${ssrInterpolate(category.name)}`);
            } else {
              return [
                createVNode("div", { class: "bg-dark rounded-full h-8 w-8 flex items-center justify-center" }, [
                  createVNode("img", {
                    src: `/storage/${category.icon}`,
                    class: "h-4.5 w-4.5",
                    alt: "",
                    srcset: ""
                  }, null, 8, ["src"])
                ]),
                createTextVNode(" " + toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="flex aside-nav flex-col gap-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/information",
        class: "flex items-center gap-2.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Copyright Holders <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0.75 1.5L5.25 6L0.75 10.5" stroke="#8A8F99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Copyright Holders "),
              (openBlock(), createBlock("svg", {
                width: "6",
                height: "12",
                viewBox: "0 0 6 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M0.75 1.5L5.25 6L0.75 10.5",
                  stroke: "#8A8F99",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/privacy",
        class: "flex items-center gap-2.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Privacy &amp; Policy <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0.75 1.5L5.25 6L0.75 10.5" stroke="#8A8F99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Privacy & Policy "),
              (openBlock(), createBlock("svg", {
                width: "6",
                height: "12",
                viewBox: "0 0 6 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M0.75 1.5L5.25 6L0.75 10.5",
                  stroke: "#8A8F99",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/faq",
        class: "flex items-center gap-2.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQ <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0.75 1.5L5.25 6L0.75 10.5" stroke="#8A8F99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" FAQ "),
              (openBlock(), createBlock("svg", {
                width: "6",
                height: "12",
                viewBox: "0 0 6 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M0.75 1.5L5.25 6L0.75 10.5",
                  stroke: "#8A8F99",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/contacts",
        class: "flex items-center gap-2.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contacts <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0.75 1.5L5.25 6L0.75 10.5" stroke="#8A8F99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Contacts "),
              (openBlock(), createBlock("svg", {
                width: "6",
                height: "12",
                viewBox: "0 0 6 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M0.75 1.5L5.25 6L0.75 10.5",
                  stroke: "#8A8F99",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Aside.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useDownloadModalStore = defineStore("downloadModal", {
  state: () => ({
    options: ref({
      teleportTo: "body",
      modelValue: false,
      displayDirective: "if",
      hideOverlay: false,
      overlayTransition: "vfm-fade",
      contentTransition: "vfm-fade",
      clickToClose: true,
      escToClose: true,
      background: "non-interactive",
      lockScroll: true,
      reserveScrollBarGap: true,
      swipeToClose: "none"
    }),
    product: null
  }),
  actions: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    openModal(product) {
      this.product = product;
      this.options.modelValue = true;
    },
    closeModal() {
      this.product = null;
      this.options.modelValue = false;
    }
  }
});
const _sfc_main = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = computed(() => usePage().props.categories);
    const title = computed(() => usePage().props.title);
    const downloadModalStore = useDownloadModalStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex container mx-auto gap-6">`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(title.value)}</title>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(title.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { categories: categories.value }, null, _parent));
      _push(`<div class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(VueFinalModal), {
        modelValue: unref(downloadModalStore).options.modelValue,
        "onUpdate:modelValue": ($event) => unref(downloadModalStore).options.modelValue = $event,
        "teleport-to": unref(downloadModalStore).options.teleportTo,
        "display-directive": unref(downloadModalStore).options.displayDirective,
        "hide-overlay": unref(downloadModalStore).options.hideOverlay,
        "overlay-transition": unref(downloadModalStore).options.overlayTransition,
        "content-transition": unref(downloadModalStore).options.contentTransition,
        "click-to-close": unref(downloadModalStore).options.clickToClose,
        "esc-to-close": unref(downloadModalStore).options.escToClose,
        background: unref(downloadModalStore).options.background,
        "lock-scroll": unref(downloadModalStore).options.lockScroll,
        "reserve-scroll-bar-gap": unref(downloadModalStore).options.reserveScrollBarGap,
        "swipe-to-close": unref(downloadModalStore).options.swipeToClose,
        class: "flex justify-center items-center",
        "content-class": "max-w-[640px] flex flex-col gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full justify-end flex"${_scopeId}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M15 15L1 1M15 1L1 15" stroke="#8A8F99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><div class="flex bg-dark border p-8 border-gray_border rounded-2xl flex-col gap-8"${_scopeId}><div class="flex flex-col gap-4"${_scopeId}><h2 class="text-2xl font-semibold"${_scopeId}>Install Instructions</h2><p class="text-sm"${_scopeId}> Run the downloaded image and drag the application to the Programs folder shortcut (Applications). After copying is complete, you can launch the application from Launchpad. <br${_scopeId}><br${_scopeId}> If the game doesn&#39;t work on Ventura and above, try entering the following command in the terminal: <br${_scopeId}><br${_scopeId}><span class="consolas hover:opacity-70 cursor-pointer transition-all"${_scopeId}>${ssrInterpolate(unref(downloadModalStore).product.win_r_link)}</span></p></div><div class="flex flex-col gap-2"${_scopeId}><a${ssrRenderAttr("href", unref(downloadModalStore).product.download_file)} target="_blank" class="btn btn-primary flex justify-center"${_scopeId}><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M18.4648 6.90234C17.9469 6.57305 17.2996 6.33359 16.5867 6.20195C16.4666 6.17895 16.3558 6.1212 16.2682 6.03586C16.1806 5.95053 16.1199 5.84136 16.0938 5.72187C15.7867 4.37383 15.1328 3.2168 14.1738 2.33984C13.0527 1.31445 11.5707 0.75 10 0.75C8.61914 0.75 7.34375 1.18281 6.31367 2C5.61797 2.55467 5.0576 3.26038 4.675 4.06367C4.63244 4.15425 4.56881 4.23333 4.48943 4.29429C4.41006 4.35524 4.31725 4.39631 4.21875 4.41406C3.15898 4.60547 2.24492 4.9875 1.54648 5.53516C0.535156 6.3293 0 7.45156 0 8.78125C0 11.4141 2.18477 13.25 5.3125 13.25H9.375V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25H15.4688C18.3062 13.25 20 11.9125 20 9.67187C20 8.49805 19.4691 7.54023 18.4648 6.90234ZM9.375 16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25H9.375V16.118Z" fill="white"${_scopeId}></path><path d="M9.375 13.25H5.3125C2.18477 13.25 0 11.4141 0 8.78125C0 7.45156 0.535156 6.3293 1.54648 5.53516C2.24492 4.9875 3.15898 4.60547 4.21875 4.41406C4.31725 4.39631 4.41006 4.35524 4.48943 4.29429C4.56881 4.23333 4.63244 4.15425 4.675 4.06367C5.0576 3.26038 5.61797 2.55467 6.31367 2C7.34375 1.18281 8.61914 0.75 10 0.75C11.5707 0.75 13.0527 1.31445 14.1738 2.33984C15.1328 3.2168 15.7867 4.37383 16.0938 5.72187C16.1199 5.84136 16.1806 5.95053 16.2682 6.03586C16.3558 6.1212 16.4666 6.17895 16.5867 6.20195C17.2996 6.33359 17.9469 6.57305 18.4648 6.90234C19.4691 7.54023 20 8.49805 20 9.67187C20 11.9125 18.3062 13.25 15.4688 13.25H10.625M9.375 13.25V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25M9.375 13.25H10.625M9.375 13.25V16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25" stroke="white" stroke-width="0.0390625"${_scopeId}></path></svg> Download </a><a${ssrRenderAttr("href", unref(downloadModalStore).product.download_link)} target="_blank" class="btn btn-primary flex justify-center"${_scopeId}><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M18.4648 6.90234C17.9469 6.57305 17.2996 6.33359 16.5867 6.20195C16.4666 6.17895 16.3558 6.1212 16.2682 6.03586C16.1806 5.95053 16.1199 5.84136 16.0938 5.72187C15.7867 4.37383 15.1328 3.2168 14.1738 2.33984C13.0527 1.31445 11.5707 0.75 10 0.75C8.61914 0.75 7.34375 1.18281 6.31367 2C5.61797 2.55467 5.0576 3.26038 4.675 4.06367C4.63244 4.15425 4.56881 4.23333 4.48943 4.29429C4.41006 4.35524 4.31725 4.39631 4.21875 4.41406C3.15898 4.60547 2.24492 4.9875 1.54648 5.53516C0.535156 6.3293 0 7.45156 0 8.78125C0 11.4141 2.18477 13.25 5.3125 13.25H9.375V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25H15.4688C18.3062 13.25 20 11.9125 20 9.67187C20 8.49805 19.4691 7.54023 18.4648 6.90234ZM9.375 16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25H9.375V16.118Z" fill="white"${_scopeId}></path><path d="M9.375 13.25H5.3125C2.18477 13.25 0 11.4141 0 8.78125C0 7.45156 0.535156 6.3293 1.54648 5.53516C2.24492 4.9875 3.15898 4.60547 4.21875 4.41406C4.31725 4.39631 4.41006 4.35524 4.48943 4.29429C4.56881 4.23333 4.63244 4.15425 4.675 4.06367C5.0576 3.26038 5.61797 2.55467 6.31367 2C7.34375 1.18281 8.61914 0.75 10 0.75C11.5707 0.75 13.0527 1.31445 14.1738 2.33984C15.1328 3.2168 15.7867 4.37383 16.0938 5.72187C16.1199 5.84136 16.1806 5.95053 16.2682 6.03586C16.3558 6.1212 16.4666 6.17895 16.5867 6.20195C17.2996 6.33359 17.9469 6.57305 18.4648 6.90234C19.4691 7.54023 20 8.49805 20 9.67187C20 11.9125 18.3062 13.25 15.4688 13.25H10.625M9.375 13.25V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25M9.375 13.25H10.625M9.375 13.25V16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25" stroke="white" stroke-width="0.0390625"${_scopeId}></path></svg> Download from Mediafire </a></div><div class="text-sm max-w-[300px] text-gray"${_scopeId}> Having trouble downloading or activating?<br${_scopeId}> We have gathered all the answers on `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue hover:opacity-70",
              href: "/faq"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`this page`);
                } else {
                  return [
                    createTextVNode("this page")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                onClick: ($event) => unref(downloadModalStore).options.modelValue = false,
                class: "w-full justify-end flex"
              }, [
                (openBlock(), createBlock("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M15 15L1 1M15 1L1 15",
                    stroke: "#8A8F99",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ], 8, ["onClick"]),
              createVNode("div", { class: "flex bg-dark border p-8 border-gray_border rounded-2xl flex-col gap-8" }, [
                createVNode("div", { class: "flex flex-col gap-4" }, [
                  createVNode("h2", { class: "text-2xl font-semibold" }, "Install Instructions"),
                  createVNode("p", { class: "text-sm" }, [
                    createTextVNode(" Run the downloaded image and drag the application to the Programs folder shortcut (Applications). After copying is complete, you can launch the application from Launchpad. "),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" If the game doesn't work on Ventura and above, try entering the following command in the terminal: "),
                    createVNode("br"),
                    createVNode("br"),
                    createVNode("span", {
                      onClick: ($event) => unref(downloadModalStore).copyToClipboard(
                        unref(downloadModalStore).product.win_r_link
                      ),
                      class: "consolas hover:opacity-70 cursor-pointer transition-all"
                    }, toDisplayString(unref(downloadModalStore).product.win_r_link), 9, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-2" }, [
                  createVNode("a", {
                    href: unref(downloadModalStore).product.download_file,
                    target: "_blank",
                    class: "btn btn-primary flex justify-center"
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "20",
                      height: "19",
                      viewBox: "0 0 20 19",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M18.4648 6.90234C17.9469 6.57305 17.2996 6.33359 16.5867 6.20195C16.4666 6.17895 16.3558 6.1212 16.2682 6.03586C16.1806 5.95053 16.1199 5.84136 16.0938 5.72187C15.7867 4.37383 15.1328 3.2168 14.1738 2.33984C13.0527 1.31445 11.5707 0.75 10 0.75C8.61914 0.75 7.34375 1.18281 6.31367 2C5.61797 2.55467 5.0576 3.26038 4.675 4.06367C4.63244 4.15425 4.56881 4.23333 4.48943 4.29429C4.41006 4.35524 4.31725 4.39631 4.21875 4.41406C3.15898 4.60547 2.24492 4.9875 1.54648 5.53516C0.535156 6.3293 0 7.45156 0 8.78125C0 11.4141 2.18477 13.25 5.3125 13.25H9.375V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25H15.4688C18.3062 13.25 20 11.9125 20 9.67187C20 8.49805 19.4691 7.54023 18.4648 6.90234ZM9.375 16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25H9.375V16.118Z",
                        fill: "white"
                      }),
                      createVNode("path", {
                        d: "M9.375 13.25H5.3125C2.18477 13.25 0 11.4141 0 8.78125C0 7.45156 0.535156 6.3293 1.54648 5.53516C2.24492 4.9875 3.15898 4.60547 4.21875 4.41406C4.31725 4.39631 4.41006 4.35524 4.48943 4.29429C4.56881 4.23333 4.63244 4.15425 4.675 4.06367C5.0576 3.26038 5.61797 2.55467 6.31367 2C7.34375 1.18281 8.61914 0.75 10 0.75C11.5707 0.75 13.0527 1.31445 14.1738 2.33984C15.1328 3.2168 15.7867 4.37383 16.0938 5.72187C16.1199 5.84136 16.1806 5.95053 16.2682 6.03586C16.3558 6.1212 16.4666 6.17895 16.5867 6.20195C17.2996 6.33359 17.9469 6.57305 18.4648 6.90234C19.4691 7.54023 20 8.49805 20 9.67187C20 11.9125 18.3062 13.25 15.4688 13.25H10.625M9.375 13.25V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25M9.375 13.25H10.625M9.375 13.25V16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25",
                        stroke: "white",
                        "stroke-width": "0.0390625"
                      })
                    ])),
                    createTextVNode(" Download ")
                  ], 8, ["href"]),
                  createVNode("a", {
                    href: unref(downloadModalStore).product.download_link,
                    target: "_blank",
                    class: "btn btn-primary flex justify-center"
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "20",
                      height: "19",
                      viewBox: "0 0 20 19",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M18.4648 6.90234C17.9469 6.57305 17.2996 6.33359 16.5867 6.20195C16.4666 6.17895 16.3558 6.1212 16.2682 6.03586C16.1806 5.95053 16.1199 5.84136 16.0938 5.72187C15.7867 4.37383 15.1328 3.2168 14.1738 2.33984C13.0527 1.31445 11.5707 0.75 10 0.75C8.61914 0.75 7.34375 1.18281 6.31367 2C5.61797 2.55467 5.0576 3.26038 4.675 4.06367C4.63244 4.15425 4.56881 4.23333 4.48943 4.29429C4.41006 4.35524 4.31725 4.39631 4.21875 4.41406C3.15898 4.60547 2.24492 4.9875 1.54648 5.53516C0.535156 6.3293 0 7.45156 0 8.78125C0 11.4141 2.18477 13.25 5.3125 13.25H9.375V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25H15.4688C18.3062 13.25 20 11.9125 20 9.67187C20 8.49805 19.4691 7.54023 18.4648 6.90234ZM9.375 16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25H9.375V16.118Z",
                        fill: "white"
                      }),
                      createVNode("path", {
                        d: "M9.375 13.25H5.3125C2.18477 13.25 0 11.4141 0 8.78125C0 7.45156 0.535156 6.3293 1.54648 5.53516C2.24492 4.9875 3.15898 4.60547 4.21875 4.41406C4.31725 4.39631 4.41006 4.35524 4.48943 4.29429C4.56881 4.23333 4.63244 4.15425 4.675 4.06367C5.0576 3.26038 5.61797 2.55467 6.31367 2C7.34375 1.18281 8.61914 0.75 10 0.75C11.5707 0.75 13.0527 1.31445 14.1738 2.33984C15.1328 3.2168 15.7867 4.37383 16.0938 5.72187C16.1199 5.84136 16.1806 5.95053 16.2682 6.03586C16.3558 6.1212 16.4666 6.17895 16.5867 6.20195C17.2996 6.33359 17.9469 6.57305 18.4648 6.90234C19.4691 7.54023 20 8.49805 20 9.67187C20 11.9125 18.3062 13.25 15.4688 13.25H10.625M9.375 13.25V8.26758C9.375 7.93125 9.63359 7.64258 9.96992 7.62578C10.0544 7.62171 10.1389 7.63484 10.2182 7.66437C10.2974 7.6939 10.3699 7.73922 10.4312 7.79759C10.4924 7.85595 10.5412 7.92614 10.5745 8.00391C10.6078 8.08167 10.625 8.1654 10.625 8.25V13.25M9.375 13.25H10.625M9.375 13.25V16.118L7.94141 14.6867C7.82351 14.5725 7.66538 14.5092 7.5012 14.5106C7.33703 14.5119 7.17998 14.5779 7.06402 14.6941C6.94805 14.8103 6.88247 14.9675 6.88146 15.1317C6.88044 15.2959 6.94407 15.4538 7.05859 15.5715L9.55859 18.0672C9.67576 18.1841 9.8345 18.2497 10 18.2497C10.1655 18.2497 10.3242 18.1841 10.4414 18.0672L12.9414 15.5715C13.0559 15.4538 13.1196 15.2959 13.1185 15.1317C13.1175 14.9675 13.0519 14.8103 12.936 14.6941C12.82 14.5779 12.663 14.5119 12.4988 14.5106C12.3346 14.5092 12.1765 14.5725 12.0586 14.6867L10.625 16.118V13.25",
                        stroke: "white",
                        "stroke-width": "0.0390625"
                      })
                    ])),
                    createTextVNode(" Download from Mediafire ")
                  ], 8, ["href"])
                ]),
                createVNode("div", { class: "text-sm max-w-[300px] text-gray" }, [
                  createTextVNode(" Having trouble downloading or activating?"),
                  createVNode("br"),
                  createTextVNode(" We have gathered all the answers on "),
                  createVNode(unref(Link), {
                    class: "text-blue hover:opacity-70",
                    href: "/faq"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("this page")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ModalsContainer), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _export_sfc as a,
  useDownloadModalStore as u
};
