import { ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, Transition, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as _export_sfc, _ as _sfc_main$1 } from "./MainLayout-zIEbSbGH.js";
import "@inertiajs/vue3";
import "./ProductCardGame-QWbuLZK0.js";
import "vue-final-modal";
import "pinia";
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqItems = ref([
      {
        question: "How to install and activate?",
        answer: "To install and activate the software, you need to follow these steps: 1. Download the software from your account 2. Run the installer 3. Follow the installation wizard 4. Enter your activation key when prompted",
        isOpen: false
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, PayPal, and cryptocurrency payments including Bitcoin, Ethereum, and others.",
        isOpen: false
      },
      {
        question: "How long does delivery take?",
        answer: "Digital products are delivered instantly after payment confirmation. Physical products typically ship within 1-3 business days.",
        isOpen: false
      }
    ]);
    const toggleItem = (index) => {
      faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="flex flex-col gap-6" data-v-d941a6fd${_scopeId}><div class="flex flex-col gap-5" data-v-d941a6fd${_scopeId}><div class="flex justify-between items-center" data-v-d941a6fd${_scopeId}><h1 class="text-4xl font-semibold" data-v-d941a6fd${_scopeId}>FAQ</h1></div></div><div class="max-w-[640px] flex flex-col gap-2" data-v-d941a6fd${_scopeId}><!--[-->`);
            ssrRenderList(faqItems.value, (item, index) => {
              _push2(`<div class="p-6 rounded-xl font-medium bg-dark" data-v-d941a6fd${_scopeId}><div class="flex justify-between items-center cursor-pointer" data-v-d941a6fd${_scopeId}><div class="faq-question flex w-full items-center gap-2" data-v-d941a6fd${_scopeId}><span data-v-d941a6fd${_scopeId}>${ssrInterpolate(item.question)}</span><svg width="12" height="7" viewBox="0 0 12 7" class="${ssrRenderClass([{ "rotate-180": item.isOpen }, "transition-transform duration-300"])}" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d941a6fd${_scopeId}><path d="M1.5 1.25L6 5.75L10.5 1.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d941a6fd${_scopeId}></path></svg></div></div>`);
              if (item.isOpen) {
                _push2(`<div class="faq-answer mt-4 text-gray-300" data-v-d941a6fd${_scopeId}><span data-v-d941a6fd${_scopeId}>${ssrInterpolate(item.answer)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></main>`);
          } else {
            return [
              createVNode("main", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "flex flex-col gap-5" }, [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("h1", { class: "text-4xl font-semibold" }, "FAQ")
                  ])
                ]),
                createVNode("div", { class: "max-w-[640px] flex flex-col gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(faqItems.value, (item, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "p-6 rounded-xl font-medium bg-dark",
                      onClick: ($event) => toggleItem(index)
                    }, [
                      createVNode("div", { class: "flex justify-between items-center cursor-pointer" }, [
                        createVNode("div", { class: "faq-question flex w-full items-center gap-2" }, [
                          createVNode("span", null, toDisplayString(item.question), 1),
                          (openBlock(), createBlock("svg", {
                            width: "12",
                            height: "7",
                            viewBox: "0 0 12 7",
                            class: [{ "rotate-180": item.isOpen }, "transition-transform duration-300"],
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M1.5 1.25L6 5.75L10.5 1.25",
                              stroke: "white",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], 2))
                        ])
                      ]),
                      createVNode(Transition, {
                        "enter-active-class": "transition duration-300 ease-out",
                        "enter-from-class": "transform scale-95 opacity-0",
                        "enter-to-class": "transform scale-100 opacity-100",
                        "leave-active-class": "transition duration-200 ease-in",
                        "leave-from-class": "transform scale-100 opacity-100",
                        "leave-to-class": "transform scale-95 opacity-0"
                      }, {
                        default: withCtx(() => [
                          item.isOpen ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "faq-answer mt-4 text-gray-300"
                          }, [
                            createVNode("span", null, toDisplayString(item.answer), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ], 8, ["onClick"]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d941a6fd"]]);
export {
  faq as default
};
