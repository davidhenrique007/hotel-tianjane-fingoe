(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/src/hooks/useMediaQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Code 01/Projecto 03/hotel-tianjane-fingoe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useMediaQuery(query) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Code__01$2f$Projecto__03$2f$hotel$2d$tianjane$2d$fingoe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const mediaQueryList = window.matchMedia(query);
            const listener = {
                "useMediaQuery.useEffect.listener": ()=>setMatches(mediaQueryList.matches)
            }["useMediaQuery.useEffect.listener"];
            listener();
            mediaQueryList.addEventListener('change', listener);
            return ({
                "useMediaQuery.useEffect": ()=>mediaQueryList.removeEventListener('change', listener)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=0im4_Code%2001_Projecto%2003_hotel-tianjane-fingoe_src_hooks_useMediaQuery_ts_052n7ws._.js.map