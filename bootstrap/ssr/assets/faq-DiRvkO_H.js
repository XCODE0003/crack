import { ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, Transition, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as _export_sfc, _ as _sfc_main$1 } from "./MainLayout-CEhTnx9A.js";
import { Head } from "@inertiajs/vue3";
import "./ProductCardGame-QWbuLZK0.js";
import "vue-final-modal";
import "pinia";
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqItems = ref([
      {
        question: "How do I install the program?",
        answer: "To install the program, follow these simple steps:<br> 1. Download the file from the program's page.<br> 2. Open the downloaded file on your device.<br> 3. Launch the console (terminal) and enter the code provided in the program instructions.",
        isOpen: false
      },
      {
        question: "Is it safe to download and use these programs?",
        answer: "We carefully verify all downloadable files to minimize risks for users. However, we strongly recommend:<br> - Using a test environment or virtual machine to check the program before use.<br> - Reviewing our <a href='/privacy' class='text-blue'>rules</a> beforehand. This section provides important information about the legality and safety of using these programs.",
        isOpen: false
      },
      {
        question: "Why won't the program start or why does it show an error?",
        answer: "If you experience issues while starting the program:<br> - Make sure you've followed all the steps in the installation guide.<br> - Verify that the program is compatible with your operating system.<br> - Ensure all necessary components (e.g., libraries or additional scripts) are installed on your device.",
        isOpen: false
      },
      {
        question: "Why should I disable my antivirus?",
        answer: "Antivirus software might interfere with the installation process, as some protective algorithms block files downloaded from the internet—even if they are safe. To avoid conflicts:<br> 1. Temporarily disable your antivirus before installation.<br> 2. Reactivate it once the installation is complete.",
        isOpen: false
      },
      {
        question: "Where can I find updates and additional files?",
        answer: 'Updates and additional files are available in the designated section of our website. We regularly update content to ensure users have access to the latest program versions.<br><br> We suggest subscribing to our newsletter or checking the <a href="/updates" class="text-blue">Updates</a> section to stay informed about the latest releases.',
        isOpen: false
      }
    ]);
    const toggleItem = (index) => {
      faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Learn how to install software safely with our step-by-step guide. Find answers to common questions about installation, compatibility, updates, and antivirus settings." data-v-293ee74c${_scopeId}><meta name="keywords" content="how to install software, software installation guide, safe software download, fix installation errors, software updates, disable antivirus for installation" data-v-293ee74c${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Learn how to install software safely with our step-by-step guide. Find answers to common questions about installation, compatibility, updates, and antivirus settings."
              }),
              createVNode("meta", {
                name: "keywords",
                content: "how to install software, software installation guide, safe software download, fix installation errors, software updates, disable antivirus for installation"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="flex flex-col gap-6" data-v-293ee74c${_scopeId}><div class="flex flex-col gap-5" data-v-293ee74c${_scopeId}><div class="flex justify-between items-center" data-v-293ee74c${_scopeId}><h1 class="text-4xl font-semibold" data-v-293ee74c${_scopeId}>FAQ</h1></div></div><div class="max-w-[640px] flex flex-col gap-2" data-v-293ee74c${_scopeId}><!--[-->`);
            ssrRenderList(faqItems.value, (item, index) => {
              _push2(`<div class="p-6 rounded-xl font-medium bg-dark" data-v-293ee74c${_scopeId}><div class="flex justify-between items-center cursor-pointer" data-v-293ee74c${_scopeId}><div class="faq-question flex w-full items-center gap-2" data-v-293ee74c${_scopeId}><span data-v-293ee74c${_scopeId}>${ssrInterpolate(item.question)}</span><svg width="12" height="7" viewBox="0 0 12 7" class="${ssrRenderClass([{ "rotate-180": item.isOpen }, "transition-transform duration-300"])}" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-293ee74c${_scopeId}><path d="M1.5 1.25L6 5.75L10.5 1.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-293ee74c${_scopeId}></path></svg></div></div>`);
              if (item.isOpen) {
                _push2(`<div class="faq-answer mt-4 text-gray-300" data-v-293ee74c${_scopeId}><span data-v-293ee74c${_scopeId}>${item.answer ?? ""}</span></div>`);
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
                            createVNode("span", {
                              innerHTML: item.answer
                            }, null, 8, ["innerHTML"])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-293ee74c"]]);
export {
  faq as default
};
