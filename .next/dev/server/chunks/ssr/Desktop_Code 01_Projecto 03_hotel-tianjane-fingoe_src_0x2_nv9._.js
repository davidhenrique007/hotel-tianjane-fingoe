module.exports = [
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/utils/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Combina classes condicionalmente, ignorando valores falsy.
 * Ex.: cn('btn', isActive && 'btn-active', className)
 */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Button/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/Button/Button.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/utils/cn.ts [app-ssr] (ecmascript)");
;
;
const variantClasses = {
    primary: 'bg-gold hover:bg-gold-dark text-charcoal shadow-gold hover:shadow-gold/50 transition-all duration-300',
    outline: 'border-2 border-cream/50 text-cream hover:bg-cream/10',
    'outline-light': 'border-2 border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/40 transition-all duration-300',
    ghost: 'text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 transition-all duration-300'
};
function Button({ variant = 'primary', href, target, rel, icon, children, className, ...props }) {
    const baseClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out', variantClasses[variant], className);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: target,
            rel: rel,
            className: baseClasses,
            children: [
                children,
                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Button/Button.tsx",
                    lineNumber: 41,
                    columnNumber: 18
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Button/Button.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: baseClasses,
        ...props,
        children: [
            children,
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Button/Button.tsx",
                lineNumber: 49,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Button/Button.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/sections/Hero/Hero.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Button/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "inicio",
        className: "relative overflow-hidden min-h-screen flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: "w-full h-full object-cover",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/videos/hotel-hero.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-forest-dark"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/15 to-charcoal/45 lg:bg-gradient-to-r lg:from-charcoal/75 lg:via-charcoal/25 lg:to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-grain opacity-40 z-10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page relative z-20 py-20 md:py-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 28
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                ease: 'easeOut'
                            },
                            className: "flex flex-col gap-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        "Fingoe · Marávia · Tete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl leading-[1.08] text-cream sm:text-5xl md:text-[3.4rem]",
                                    children: [
                                        "Uma estadia confortável",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden sm:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        " no coração de ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gold italic",
                                            children: "Fingoe"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 52,
                                            columnNumber: 64
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-md text-base leading-relaxed text-cream/80 md:text-lg",
                                    children: "Quartos cuidados, atendimento próximo e um ambiente tranquilo para descansar, trabalhar ou receber a sua família — no ponto certo de Marávia, Tete."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 sm:flex-row sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whatsappLink"])('Olá! Gostaria de reservar um quarto no Hotel Tianjane Fingoe.'),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                                lineNumber: 65,
                                                columnNumber: 23
                                            }, this),
                                            children: "Reserve o seu quarto"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#quartos",
                                            variant: "outline",
                                            children: "Ver quartos e tarifas"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "mt-6 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-cream/10 pt-7 sm:grid-cols-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "font-display text-2xl text-gold",
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-xs leading-snug text-cream/60",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, stat.label, true, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiverLineDivider"], {
                className: "absolute bottom-0 left-0 w-full h-16 opacity-40 z-20",
                color: "#C9A66B"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
    const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: '-80px'
        },
        transition: {
            duration: 0.7,
            ease: 'easeOut'
        },
        className: `flex flex-col gap-4 max-w-2xl ${alignClass}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `eyebrow ${light ? 'text-gold-light' : ''}`,
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `text-3xl md:text-[2.6rem] leading-[1.1] font-medium ${light ? 'text-cream' : 'text-forest'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-base md:text-lg leading-relaxed ${light ? 'text-cream/80' : 'text-charcoal/70'}`,
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Benefits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/bed-double.mjs [app-ssr] (ecmascript) <export default as BedDouble>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-ssr] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/hand-heart.mjs [app-ssr] (ecmascript) <export default as HandHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/smile.mjs [app-ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const benefits = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        text: 'Durma tranquilo, num ambiente seguro dia e noite'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__["HandHeart"],
        text: 'Tenha um atendimento próximo e verdadeiramente personalizado'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__["BedDouble"],
        text: 'Aproveite o conforto que a sua viagem merece'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"],
        text: 'Economize tempo: reserva simples, direto pelo WhatsApp'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
        text: 'Viva uma experiência acolhedora do início ao fim'
    }
];
function Benefits() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-forest py-24 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-grain opacity-50"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page relative flex flex-col gap-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        eyebrow: "Por que escolher o Tianjane Fingoe",
                        title: "O que muda na sua estadia",
                        align: "center",
                        light: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid max-w-5xl gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5",
                        children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-60px'
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.07
                                },
                                className: "flex flex-col items-center gap-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(benefit.icon, {
                                            size: 24,
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-cream/85",
                                        children: benefit.text
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, benefit.text, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiverLineMark"], {
                        className: "mx-auto mt-4 h-8 w-40 opacity-60",
                        color: "#E8D5A8"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/gallery.ts [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useMediaQuery(query) {
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mediaQueryList = window.matchMedia(query);
        const listener = ()=>setMatches(mediaQueryList.matches);
        listener();
        mediaQueryList.addEventListener('change', listener);
        return ()=>mediaQueryList.removeEventListener('change', listener);
    }, [
        query
    ]);
    return matches;
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fachada-principal.2pr-yxm9mwr9x.jpeg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg.mjs { IMAGE => \"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1175,
    height: 912,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDd3arFC5m1aeUg7vkby+3TikpN7ilBX0P/2Q=="
};
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/rececao.1trllql527vpc.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg.mjs { IMAGE => \"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 892,
    height: 703,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBmlwwadrMs8dvE8u3EZccJke1VFcs3YzqNSiubof/Z"
};
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$ImagePlaceholder$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/gallery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/utils/cn.ts [app-ssr] (ecmascript)");
// IMPORTAR AS IMAGENS
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg.mjs { IMAGE => "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg.mjs { IMAGE => "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)'); // ← .jpg (não .jpeg)
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Gallery() {
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(min-width: 768px)');
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleImages = isDesktop || showAll ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["galleryImages"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["galleryImages"].slice(0, 4);
    // MAPEAMENTO DAS IMAGENS REAIS
    const imageMap = {
        'g1': __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        'g5': __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "galeria",
        className: "bg-white py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page flex flex-col gap-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "Galeria",
                    title: "Um vislumbre da sua estadia",
                    description: "Quartos, áreas comuns e a paisagem à volta de Fingoe — fotografias reais serão adicionadas nesta secção assim que disponíveis (ver README)."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5",
                    children: visibleImages.map((image, index)=>{
                        const imageSrc = imageMap[image.id];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-40px'
                            },
                            transition: {
                                duration: 0.45,
                                delay: index % 4 * 0.06
                            },
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(index === 0 && 'col-span-2 row-span-2'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$ImagePlaceholder$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: image.label,
                                aspect: index === 0 ? 'square' : 'portrait',
                                className: "h-full",
                                src: imageSrc,
                                alt: image.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, this)
                        }, image.id, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                            lineNumber: 41,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                !isDesktop && !showAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowAll(true),
                    className: "mx-auto flex items-center gap-2 text-sm font-semibold text-forest hover:text-clay transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        "Ver mais fotografias"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Location
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/car.mjs [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const nearby = [
    'Centro de Fingoe — poucos minutos de distância',
    'Principais vias de acesso à Marávia',
    'Rota para outras localidades da Província de Tete'
];
function Location() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "localizacao",
        className: "bg-cream py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page grid gap-14 lg:grid-cols-2 lg:items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            eyebrow: "Localização",
                            title: "Localização estratégica em Fingoe",
                            description: "Fácil de encontrar, fácil de chegar. Estamos posicionados para servir quem viaja por Fingoe e por toda a região de Marávia."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 20,
                                            className: "mt-0.5 shrink-0 text-clay"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-forest",
                                                    children: "Endereço"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-charcoal/70",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].location
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                            size: 20,
                                            className: "mt-0.5 shrink-0 text-clay"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-forest",
                                                    children: "Pontos próximos"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-1 flex flex-col gap-1 text-sm text-charcoal/70",
                                                    children: nearby.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: point
                                                        }, point, false, {
                                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                            size: 20,
                                            className: "mt-0.5 shrink-0 text-clay"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-forest",
                                                    children: "Como chegar"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-charcoal/70",
                                                    children: "Envie-nos a sua localização de partida pelo WhatsApp e ajudamos a planear o melhor trajeto até ao hotel."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 border-t border-charcoal/10 pt-6 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whatsappLink"])('Olá! Preciso de indicações para chegar ao Hotel Tianjane Fingoe.'),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn-forest",
                                    children: "Pedir indicações"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:+${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].whatsappNumber}`,
                                    className: "btn-outline !text-forest !border-forest/30 hover:!bg-forest/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        "Ligar agora"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: '-60px'
                    },
                    transition: {
                        duration: 0.7
                    },
                    className: "overflow-hidden rounded-2xl shadow-card",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: "Localização do Hotel Tianjane Fingoe",
                        src: "https://www.google.com/maps?q=Fingoe,+Marávia,+Tete,+Moçambique&output=embed",
                        width: "100%",
                        height: "420",
                        style: {
                            border: 0
                        },
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Objections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const objections = [
    {
        question: 'Como faço uma reserva?',
        answer: 'Pelo botão de WhatsApp em qualquer parte do site. Indique as datas e o quarto pretendido — respondemos com a confirmação e todos os detalhes.'
    },
    {
        question: 'O hotel é seguro?',
        answer: 'Sim. Mantemos vigilância permanente nas instalações e um ambiente cuidado para que a sua estadia seja tranquila do início ao fim.'
    },
    {
        question: 'Posso reservar por telefone ou WhatsApp?',
        answer: 'Sim, é a forma mais rápida. A nossa equipa confirma disponibilidade diretamente consigo, sem burocracia.'
    },
    {
        question: 'O hotel atende empresas?',
        answer: 'Sim, mediante disponibilidade — recebemos regularmente equipas e funcionários em viagem de trabalho pela região.'
    }
];
function Objections() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page flex flex-col gap-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "Ainda com dúvidas?",
                    title: "Respostas diretas antes de reservar",
                    align: "center"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-4xl gap-6 sm:grid-cols-2",
                    children: objections.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-60px'
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.07
                            },
                            className: "rounded-2xl border border-forest/10 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-2 text-base font-medium text-forest",
                                    children: item.question
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-charcoal/70",
                                    children: item.answer
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.question, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/rooms.ts [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Booking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/rooms.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Booking() {
    const [roomId, setRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rooms"][0].id);
    const [checkIn, setCheckIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [checkOut, setCheckOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [guests, setGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const room = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rooms"].find((r)=>r.id === roomId);
        const lines = [
            'Olá! Gostaria de reservar no Hotel Tianjane Fingoe.',
            room ? `Quarto: ${room.name}` : '',
            checkIn ? `Check-in: ${checkIn}` : '',
            checkOut ? `Check-out: ${checkOut}` : '',
            `Número de hóspedes: ${guests}`
        ].filter(Boolean);
        window.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whatsappLink"])(lines.join('\n')), '_blank', 'noopener,noreferrer');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-forest-dark py-24 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-grain opacity-50"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiverLineMark"], {
                className: "pointer-events-none absolute -top-4 right-10 h-16 w-40 opacity-20",
                color: "#C9A66B"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: '-80px'
                        },
                        transition: {
                            duration: 0.7
                        },
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow text-gold-light",
                                children: "Reserve em poucos passos"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-[2.6rem] leading-[1.1] text-cream font-medium",
                                children: "Prepare a sua próxima estadia em Fingoe com conforto e tranquilidade"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-md text-cream/75 leading-relaxed",
                                children: "Preencha os dados ao lado e envie-nos diretamente pelo WhatsApp. A nossa equipa confirma a disponibilidade e trata do resto consigo, sem complicações."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whatsappLink"])('Olá! Gostaria de falar sobre uma reserva no Hotel Tianjane Fingoe.'),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn-outline w-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    "Prefiro falar diretamente pelo WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].form, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: '-80px'
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.1
                        },
                        onSubmit: handleSubmit,
                        className: "flex flex-col gap-5 rounded-2xl bg-cream p-7 shadow-soft md:p-9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "room",
                                        className: "text-sm font-semibold text-forest",
                                        children: "Quarto pretendido"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "room",
                                        value: roomId,
                                        onChange: (e)=>setRoomId(e.target.value),
                                        className: "rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rooms"].map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: room.id,
                                                children: room.name
                                            }, room.id, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "checkin",
                                                className: "flex items-center gap-1.5 text-sm font-semibold text-forest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Entrada"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "checkin",
                                                type: "date",
                                                value: checkIn,
                                                onChange: (e)=>setCheckIn(e.target.value),
                                                className: "rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "checkout",
                                                className: "flex items-center gap-1.5 text-sm font-semibold text-forest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Saída"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "checkout",
                                                type: "date",
                                                value: checkOut,
                                                onChange: (e)=>setCheckOut(e.target.value),
                                                className: "rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "guests",
                                        className: "flex items-center gap-1.5 text-sm font-semibold text-forest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            " Número de hóspedes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "guests",
                                        type: "number",
                                        min: 1,
                                        max: 8,
                                        value: guests,
                                        onChange: (e)=>setGuests(Number(e.target.value)),
                                        className: "rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-primary mt-2 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    "Reservar agora pelo WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/testimonials.ts [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/quote.mjs [app-ssr] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/testimonials.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Testimonials() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-cream-soft py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page flex flex-col gap-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "O que dizem os nossos hóspedes",
                    title: "Confiança construída estadia após estadia"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testimonials"].map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].figure, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-60px'
                            },
                            transition: {
                                duration: 0.55,
                                delay: index * 0.08
                            },
                            className: "flex flex-col gap-5 rounded-2xl bg-white p-7 shadow-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                    size: 26,
                                    className: "text-gold",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "text-[15px] leading-relaxed text-charcoal/80",
                                    children: [
                                        '"',
                                        testimonial.quote,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "mt-auto text-xs text-charcoal/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-forest",
                                            children: testimonial.author
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        " — ",
                                        testimonial.context
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, testimonial.id, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Code%2001_Projecto%2003_hotel-tianjane-fingoe_src_0x2_nv9._.js.map