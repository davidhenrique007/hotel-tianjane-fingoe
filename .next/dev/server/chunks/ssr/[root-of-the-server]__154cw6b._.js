module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navLinks",
    ()=>navLinks,
    "siteConfig",
    ()=>siteConfig,
    "whatsappLink",
    ()=>whatsappLink
]);
const siteConfig = {
    hotelName: 'Hotel Tianjane Fingoe',
    shortName: 'Tianjane Fingoe',
    tagline: 'Uma estadia confortável no coração de Fingoe',
    location: 'Fingoe, Distrito de Marávia, Província de Tete, Moçambique',
    addressLine: 'Fingoe, Marávia — Tete, Moçambique',
    // TODO: substituir pelos contactos reais do hotel
    whatsappNumber: '258840000000',
    phoneDisplay: '+258 84 000 0000',
    email: 'reservas@tianjanefingoe.co.mz',
    socials: {
        facebook: 'https://facebook.com/hoteltianjanefingoe',
        instagram: 'https://instagram.com/hoteltianjanefingoe'
    },
    stats: [
        {
            value: '+500',
            label: 'hóspedes acolhidos'
        },
        {
            value: '18',
            label: 'quartos disponíveis'
        },
        {
            value: '7/7',
            label: 'atendimento todos os dias'
        },
        {
            value: '100%',
            label: 'compromisso com a sua segurança'
        }
    ]
};
const whatsappLink = (message)=>`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
const navLinks = [
    {
        label: 'Início',
        href: '#inicio'
    },
    {
        label: 'Sobre nós',
        href: '#sobre'
    },
    {
        label: 'Quartos',
        href: '#quartos'
    },
    {
        label: 'Serviços',
        href: '#servicos'
    },
    {
        label: 'Galeria',
        href: '#galeria'
    },
    {
        label: 'Localização',
        href: '#localizacao'
    },
    {
        label: 'Contactos',
        href: '#contactos'
    }
];
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiverLineDivider",
    ()=>RiverLineDivider,
    "RiverLineMark",
    ()=>RiverLineMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function RiverLineDivider({ className = '', color = '#C9A66B' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 1440 100",
        preserveAspectRatio: "none",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0 40 C 180 90, 320 0, 500 45 S 820 95, 980 35 S 1280 -10, 1440 50",
            fill: "none",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function RiverLineMark({ className = '', color = '#C9A66B' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 200 60",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 30 C 40 5, 60 55, 100 30 S 160 5, 198 30",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/utils/cn.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Button/Button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// src/components/Button/Button.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/utils/cn.ts [app-rsc] (ecmascript)");
;
;
const variantClasses = {
    primary: 'bg-gold hover:bg-gold-dark text-charcoal shadow-gold hover:shadow-gold/50 transition-all duration-300',
    outline: 'border-2 border-cream/50 text-cream hover:bg-cream/10',
    'outline-light': 'border-2 border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/40 transition-all duration-300',
    ghost: 'text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 transition-all duration-300'
};
function Button({ variant = 'primary', href, target, rel, icon, children, className, ...props }) {
    const baseClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out', variantClasses[variant], className);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: target,
            rel: rel,
            className: baseClasses,
            children: [
                children,
                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: baseClasses,
        ...props,
        children: [
            children,
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// src/sections/Hero/Hero.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Button/Button.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "inicio",
        className: "relative overflow-hidden min-h-screen flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: "w-full h-full object-cover",
                        poster: "/videos/hotel-hero-poster.jpg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/videos/hotel-hero.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-forest-dark"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/15 to-charcoal/45 lg:bg-gradient-to-r lg:from-charcoal/75 lg:via-charcoal/25 lg:to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-grain opacity-40 z-10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page relative z-20 py-20 md:py-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        "Fingoe · Marávia · Tete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl leading-[1.08] text-cream sm:text-5xl md:text-[3.4rem]",
                                    children: [
                                        "Uma estadia confortável",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden sm:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        " no coração de ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gold italic",
                                            children: "Fingoe"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 51,
                                            columnNumber: 64
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-md text-base leading-relaxed text-cream/80 md:text-lg",
                                    children: "Quartos cuidados, atendimento próximo e um ambiente tranquilo para descansar, trabalhar ou receber a sua família — no ponto certo de Marávia, Tete."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 sm:flex-row sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])('Olá! Gostaria de reservar um quarto no Hotel Tianjane Fingoe.'),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                                lineNumber: 64,
                                                columnNumber: 23
                                            }, this),
                                            children: "Reserve o seu quarto"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#quartos",
                                            variant: "outline",
                                            children: "Ver quartos e tarifas"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "mt-6 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-cream/10 pt-7 sm:grid-cols-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "font-display text-2xl text-gold",
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-xs leading-snug text-cream/60",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, stat.label, true, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RiverLineDivider"], {
                className: "absolute bottom-0 left-0 w-full h-16 opacity-40 z-20",
                color: "#C9A66B"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
;
;
function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
    const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `eyebrow ${light ? 'text-gold-light' : ''}`,
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `text-3xl md:text-[2.6rem] leading-[1.1] font-medium ${light ? 'text-cream' : 'text-forest'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-base md:text-lg leading-relaxed ${light ? 'text-cream/80' : 'text-charcoal/70'}`,
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImagePlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/image.mjs [app-rsc] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/utils/cn.ts [app-rsc] (ecmascript)");
;
;
;
const aspectClass = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]'
};
function ImagePlaceholder({ label, aspect = 'landscape', className = '', src, alt = 'Hotel Tianjane Fingoe', children }) {
    // Se tiver src, mostra imagem real
    if (src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden rounded-2xl', aspectClass[aspect], className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: alt,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    // Fallback para placeholder (sem imagem)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest via-forest-dark to-clay-dark/80', aspectClass[aspect], className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grain"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-cream/70",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                        size: 28,
                        strokeWidth: 1.25
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs tracking-widest2 uppercase leading-relaxed",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                        lineNumber: 68,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/check.mjs [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/users.mjs [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$ImagePlaceholder$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function RoomCard({ room, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].article, {
        initial: {
            opacity: 0,
            y: 32
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
            duration: 0.6,
            delay: index * 0.08,
            ease: 'easeOut'
        },
        className: "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$ImagePlaceholder$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                label: room.imageLabel,
                aspect: "landscape",
                className: "rounded-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col gap-4 p-6 md:p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: room.tagline
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-1 text-2xl font-medium text-forest",
                                children: room.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-charcoal/70 text-[15px] leading-relaxed",
                        children: room.description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col gap-2.5",
                        children: room.benefits.map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2.5 text-sm text-charcoal/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 16,
                                        className: "mt-0.5 shrink-0 text-clay",
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    benefit
                                ]
                            }, benefit, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto flex items-center justify-between gap-3 pt-4 border-t border-charcoal/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5 text-xs text-charcoal/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    room.capacity
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])(`Olá! Gostaria de consultar disponibilidade para o ${room.name} no Hotel Tianjane Fingoe.`),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm font-semibold text-forest hover:text-clay transition-colors",
                                children: "Consultar disponibilidade →"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/rooms.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rooms",
    ()=>rooms
]);
const rooms = [
    {
        id: 'standard',
        name: 'Quarto Standard',
        tagline: 'O essencial, bem-feito',
        description: 'Um espaço bem cuidado para descansar depois de um dia de viagem ou trabalho. Tudo o que você precisa está no lugar certo, sem excessos e sem descuido.',
        benefits: [
            'Cama confortável com roupa de cama fresca',
            'Ambiente silencioso e bem organizado',
            'Casa de banho privativa',
            'Ideal para viagens individuais e estadias curtas'
        ],
        capacity: '1–2 hóspedes',
        priceHint: 'Sob consulta',
        imageLabel: 'Quarto Standard — cama de casal junto à janela'
    },
    {
        id: 'deluxe',
        name: 'Quarto Deluxe',
        tagline: 'Mais espaço para respirar',
        description: 'Pensado para quem passa vários dias em Fingoe a trabalho ou em família. Mais amplo, mais silencioso e com pequenos detalhes que fazem diferença ao fim do dia.',
        benefits: [
            'Área ampliada com zona de estar',
            'Secretária para trabalho',
            'Roupeiro completo para estadias longas',
            'Ideal para profissionais e famílias pequenas'
        ],
        capacity: '2–3 hóspedes',
        priceHint: 'Sob consulta',
        imageLabel: 'Quarto Deluxe — zona de estar com luz natural'
    },
    {
        id: 'suite-premium',
        name: 'Suíte Premium',
        tagline: 'A experiência Tianjane',
        description: 'A nossa acomodação mais exclusiva. Um espaço amplo e privado para hóspedes que procuram tranquilidade absoluta e um padrão superior de conforto durante a estadia em Fingoe.',
        benefits: [
            'Sala e quarto em ambientes separados',
            'Maior privacidade e isolamento acústico',
            'Amenidades premium',
            'Atendimento prioritário durante a estadia'
        ],
        capacity: '2–4 hóspedes',
        priceHint: 'Sob consulta',
        imageLabel: 'Suíte Premium — sala privativa e quarto amplo'
    }
];
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Rooms/Rooms.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Rooms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$RoomCard$2f$RoomCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/RoomCard/RoomCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/rooms.ts [app-rsc] (ecmascript)");
;
;
;
;
function Rooms() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "quartos",
        className: "bg-white py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page flex flex-col gap-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "Quartos e acomodações",
                    title: "Um espaço para cada tipo de viagem",
                    description: "Três categorias pensadas para necessidades diferentes — da estadia rápida de uma noite à experiência mais exclusiva da casa."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Rooms/Rooms.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rooms"].map((room, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$RoomCard$2f$RoomCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            room: room,
                            index: index
                        }, room.id, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Rooms/Rooms.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Rooms/Rooms.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Rooms/Rooms.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Rooms/Rooms.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Benefits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/bed-double.mjs [app-rsc] (ecmascript) <export default as BedDouble>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-rsc] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/hand-heart.mjs [app-rsc] (ecmascript) <export default as HandHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/smile.mjs [app-rsc] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const benefits = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        text: 'Durma tranquilo, num ambiente seguro dia e noite'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$heart$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HandHeart$3e$__["HandHeart"],
        text: 'Tenha um atendimento próximo e verdadeiramente personalizado'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__["BedDouble"],
        text: 'Aproveite o conforto que a sua viagem merece'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"],
        text: 'Economize tempo: reserva simples, direto pelo WhatsApp'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
        text: 'Viva uma experiência acolhedora do início ao fim'
    }
];
function Benefits() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-forest py-24 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-grain opacity-50"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page relative flex flex-col gap-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        eyebrow: "Por que escolher o Tianjane Fingoe",
                        title: "O que muda na sua estadia",
                        align: "center",
                        light: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid max-w-5xl gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5",
                        children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(benefit.icon, {
                                            size: 24,
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-cream/85",
                                        children: benefit.text
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, benefit.text, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RiverLineMark"], {
                        className: "mx-auto mt-4 h-8 w-40 opacity-60",
                        color: "#E8D5A8"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/gallery.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryImages",
    ()=>galleryImages
]);
const galleryImages = [
    {
        id: 'g1',
        label: 'Fachada do hotel ao entardecer',
        category: 'Exterior'
    },
    {
        id: 'g2',
        label: 'Quarto Standard',
        category: 'Quartos'
    },
    {
        id: 'g3',
        label: 'Quarto Deluxe',
        category: 'Quartos'
    },
    {
        id: 'g4',
        label: 'Suíte Premium',
        category: 'Quartos'
    },
    {
        id: 'g5',
        label: 'Receção e área de estar',
        category: 'Áreas comuns'
    }
];
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const useMediaQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useMediaQuery() from the server but useMediaQuery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts <module evaluation>", "useMediaQuery");
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const useMediaQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useMediaQuery() from the server but useMediaQuery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts", "useMediaQuery");
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fachada-principal.2pr-yxm9mwr9x.jpeg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg.mjs { IMAGE => \"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg (static in ecmascript, tag client)\" } [app-rsc] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg.mjs { IMAGE => \"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg (static in ecmascript, tag client)\" } [app-rsc] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-rsc] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$ImagePlaceholder$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/gallery.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/utils/cn.ts [app-rsc] (ecmascript)");
// IMPORTAR AS IMAGENS
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg.mjs { IMAGE => "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/hero/fachada-principal.jpeg (static in ecmascript, tag client)" } [app-rsc] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg.mjs { IMAGE => "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg (static in ecmascript, tag client)" } [app-rsc] (structured image object with data url, ecmascript)'); // ← .jpg (não .jpeg)
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
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMediaQuery"])('(min-width: 768px)');
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleImages = isDesktop || showAll ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["galleryImages"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["galleryImages"].slice(0, 4);
    // MAPEAMENTO DAS IMAGENS REAIS
    const imageMap = {
        'g1': __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        'g5': __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "galeria",
        className: "bg-white py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page flex flex-col gap-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "Galeria",
                    title: "Um vislumbre da sua estadia",
                    description: "Quartos, áreas comuns e a paisagem à volta de Fingoe — fotografias reais serão adicionadas nesta secção assim que disponíveis (ver README)."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5",
                    children: visibleImages.map((image, index)=>{
                        const imageSrc = imageMap[image.id];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(index === 0 && 'col-span-2 row-span-2'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$ImagePlaceholder$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                label: image.label,
                                aspect: index === 0 ? 'square' : 'portrait',
                                className: "h-full",
                                src: imageSrc,
                                alt: image.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, this)
                        }, image.id, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                !isDesktop && !showAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowAll(true),
                    className: "mx-auto flex items-center gap-2 text-sm font-semibold text-forest hover:text-clay transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        "Ver mais fotografias"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Location
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/car.mjs [app-rsc] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-rsc] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-rsc] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "localizacao",
        className: "bg-cream py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page grid gap-14 lg:grid-cols-2 lg:items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            eyebrow: "Localização",
                            title: "Localização estratégica em Fingoe",
                            description: "Fácil de encontrar, fácil de chegar. Estamos posicionados para servir quem viaja por Fingoe e por toda a região de Marávia."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 20,
                                            className: "mt-0.5 shrink-0 text-clay"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-forest",
                                                    children: "Endereço"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-charcoal/70",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].location
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                            size: 20,
                                            className: "mt-0.5 shrink-0 text-clay"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-forest",
                                                    children: "Pontos próximos"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-1 flex flex-col gap-1 text-sm text-charcoal/70",
                                                    children: nearby.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: point
                                                        }, point, false, {
                                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                            size: 20,
                                            className: "mt-0.5 shrink-0 text-clay"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-forest",
                                                    children: "Como chegar"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-charcoal/70",
                                                    children: "Envie-nos a sua localização de partida pelo WhatsApp e ajudamos a planear o melhor trajeto até ao hotel."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 border-t border-charcoal/10 pt-6 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])('Olá! Preciso de indicações para chegar ao Hotel Tianjane Fingoe.'),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn-forest",
                                    children: "Pedir indicações"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:+${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].whatsappNumber}`,
                                    className: "btn-outline !text-forest !border-forest/30 hover:!bg-forest/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        "Ligar agora"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
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
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Objections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-rsc] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page flex flex-col gap-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "Ainda com dúvidas?",
                    title: "Respostas diretas antes de reservar",
                    align: "center"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-4xl gap-6 sm:grid-cols-2",
                    children: objections.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-2 text-base font-medium text-forest",
                                    children: item.question
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-charcoal/70",
                                    children: item.answer
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.question, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Booking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-rsc] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/users.mjs [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/rooms.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function Booking() {
    const [roomId, setRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rooms"][0].id);
    const [checkIn, setCheckIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])('');
    const [checkOut, setCheckOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])('');
    const [guests, setGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(2);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const room = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rooms"].find((r)=>r.id === roomId);
        const lines = [
            'Olá! Gostaria de reservar no Hotel Tianjane Fingoe.',
            room ? `Quarto: ${room.name}` : '',
            checkIn ? `Check-in: ${checkIn}` : '',
            checkOut ? `Check-out: ${checkOut}` : '',
            `Número de hóspedes: ${guests}`
        ].filter(Boolean);
        window.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])(lines.join('\n')), '_blank', 'noopener,noreferrer');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-forest-dark py-24 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-grain opacity-50"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$Motif$2f$RiverLine$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RiverLineMark"], {
                className: "pointer-events-none absolute -top-4 right-10 h-16 w-40 opacity-20",
                color: "#C9A66B"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow text-gold-light",
                                children: "Reserve em poucos passos"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-[2.6rem] leading-[1.1] text-cream font-medium",
                                children: "Prepare a sua próxima estadia em Fingoe com conforto e tranquilidade"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-md text-cream/75 leading-relaxed",
                                children: "Preencha os dados ao lado e envie-nos diretamente pelo WhatsApp. A nossa equipa confirma a disponibilidade e trata do resto consigo, sem complicações."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])('Olá! Gostaria de falar sobre uma reserva no Hotel Tianjane Fingoe.'),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn-outline w-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    "Prefiro falar diretamente pelo WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].form, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "room",
                                        className: "text-sm font-semibold text-forest",
                                        children: "Quarto pretendido"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "room",
                                        value: roomId,
                                        onChange: (e)=>setRoomId(e.target.value),
                                        className: "rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$rooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rooms"].map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: room.id,
                                                children: room.name
                                            }, room.id, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "checkin",
                                                className: "flex items-center gap-1.5 text-sm font-semibold text-forest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Entrada"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "checkin",
                                                type: "date",
                                                value: checkIn,
                                                onChange: (e)=>setCheckIn(e.target.value),
                                                className: "rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "checkout",
                                                className: "flex items-center gap-1.5 text-sm font-semibold text-forest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Saída"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "checkout",
                                                type: "date",
                                                value: checkOut,
                                                onChange: (e)=>setCheckOut(e.target.value),
                                                className: "rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "guests",
                                        className: "flex items-center gap-1.5 text-sm font-semibold text-forest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            " Número de hóspedes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "guests",
                                        type: "number",
                                        min: 1,
                                        max: 8,
                                        value: guests,
                                        onChange: (e)=>setGuests(Number(e.target.value)),
                                        className: "rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-primary mt-2 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    "Reservar agora pelo WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/testimonials.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testimonials",
    ()=>testimonials
]);
const testimonials = [
    {
        id: 't1',
        quote: 'Cheguei tarde depois de uma viagem longa e fui muito bem recebido. Quarto limpo, cama confortável e a equipa sempre disponível.',
        author: 'Hóspede',
        context: 'Viagem de trabalho'
    },
    {
        id: 't2',
        quote: 'Um dos poucos lugares em Fingoe onde me senti realmente em segurança com a minha família. Vamos voltar na próxima visita à região.',
        author: 'Hóspede',
        context: 'Viagem em família'
    },
    {
        id: 't3',
        quote: 'Atendimento próximo, sem complicação nenhuma na reserva. Trataram tudo pelo WhatsApp antes de eu chegar.',
        author: 'Hóspede',
        context: 'Estadia de negócios'
    }
];
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/quote.mjs [app-rsc] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/testimonials.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function Testimonials() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-cream-soft py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page flex flex-col gap-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$components$2f$SectionHeading$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "O que dizem os nossos hóspedes",
                    title: "Confiança construída estadia após estadia"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$testimonials$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["testimonials"].map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["motion"].figure, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                    size: 26,
                                    className: "text-gold",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "text-[15px] leading-relaxed text-charcoal/80",
                                    children: [
                                        '"',
                                        testimonial.quote,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "mt-auto text-xs text-charcoal/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-forest",
                                            children: testimonial.author
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        " — ",
                                        testimonial.context
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, testimonial.id, true, {
                            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Hero$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Hero/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Rooms$2f$Rooms$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Rooms/Rooms.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Benefits$2f$Benefits$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Benefits/Benefits.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Gallery$2f$Gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Gallery/Gallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Location$2f$Location$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Location/Location.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Objections$2f$Objections$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Objections/Objections.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Booking$2f$Booking$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Testimonials$2f$Testimonials$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Testimonials/Testimonials.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Hero$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Rooms$2f$Rooms$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Benefits$2f$Benefits$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Gallery$2f$Gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Location$2f$Location$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Objections$2f$Objections$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Booking$2f$Booking$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$sections$2f$Testimonials$2f$Testimonials$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$features$2f$Home$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/features/Home.tsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$features$2f$Home$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/app/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__154cw6b._.js.map