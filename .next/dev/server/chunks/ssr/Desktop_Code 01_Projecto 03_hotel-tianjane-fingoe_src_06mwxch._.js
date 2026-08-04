module.exports = [
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
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
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `text-3xl md:text-[2.6rem] leading-[1.1] font-medium ${light ? 'text-cream' : 'text-forest'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/SectionHeading/SectionHeading.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImagePlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/lucide-react/dist/esm/icons/image.mjs [app-ssr] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/utils/cn.ts [app-ssr] (ecmascript)");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden rounded-2xl', aspectClass[aspect], className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: alt,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest via-forest-dark to-clay-dark/80', aspectClass[aspect], className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grain"
            }, void 0, false, {
                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-cream/70",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                        size: 28,
                        strokeWidth: 1.25
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/ImagePlaceholder/ImagePlaceholder.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/gallery.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg.mjs { IMAGE => "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/assets/images/gallery/rececao.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)'); // â† .jpg (nÃ£o .jpeg)
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
        'g1': __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$hero$2f$fachada$2d$principal$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        'g5': __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$assets$2f$images$2f$gallery$2f$rececao$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
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
                    description: "Quartos, Ã¡reas comuns e a paisagem Ã  volta de Fingoe â€” fotografias reais serÃ£o adicionadas nesta secÃ§Ã£o assim que disponÃ­veis (ver README)."
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/rooms.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/data/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/components/Motif/RiverLine.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiverLineDivider",
    ()=>RiverLineDivider,
    "RiverLineMark",
    ()=>RiverLineMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function RiverLineDivider({ className = '', color = '#C9A66B' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 1440 100",
        preserveAspectRatio: "none",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 200 60",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            'OlÃ¡! Gostaria de reservar no Hotel Tianjane Fingoe.',
            room ? `Quarto: ${room.name}` : '',
            checkIn ? `Check-in: ${checkIn}` : '',
            checkOut ? `Check-out: ${checkOut}` : '',
            `NÃºmero de hÃ³spedes: ${guests}`
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
                                children: "Prepare a sua prÃ³xima estadia em Fingoe com conforto e tranquilidade"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-md text-cream/75 leading-relaxed",
                                children: "Preencha os dados ao lado e envie-nos diretamente pelo WhatsApp. A nossa equipa confirma a disponibilidade e trata do resto consigo, sem complicaÃ§Ãµes."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/sections/Booking/Booking.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whatsappLink"])('OlÃ¡! Gostaria de falar sobre uma reserva no Hotel Tianjane Fingoe.'),
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
                                                    " SaÃ­da"
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
                                            " NÃºmero de hÃ³spedes"
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
];

//# sourceMappingURL=Desktop_Code%2001_Projecto%2003_hotel-tianjane-fingoe_src_06mwxch._.js.map