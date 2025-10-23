import { computed as i, createElementBlock as l, openBlock as a, normalizeClass as u, renderSlot as d } from "vue";
import { clsx as c } from "clsx";
import { twMerge as f } from "tailwind-merge";
function p(...e) {
  return f(c(e));
}
const b = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2", g = {
  __name: "Button",
  props: {
    variant: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const t = e, s = {
      default: "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400",
      destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-400",
      outline: "border border-slate-300 bg-transparent hover:bg-slate-100 focus-visible:ring-slate-400",
      secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:ring-slate-400",
      ghost: "hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400",
      link: "text-slate-900 underline-offset-4 hover:underline"
    }, n = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-12 rounded-md px-8",
      icon: "h-10 w-10"
    }, o = i(
      () => p(
        b,
        s[t.variant] || s.default,
        n[t.size] || n.default
      )
    );
    return (r, v) => (a(), l("button", {
      class: u(o.value)
    }, [
      d(r.$slots, "default")
    ], 2));
  }
};
function m(e) {
  e.component("Button", g);
}
const y = { install: m };
export {
  g as Button,
  p as cn,
  y as default,
  m as install
};
