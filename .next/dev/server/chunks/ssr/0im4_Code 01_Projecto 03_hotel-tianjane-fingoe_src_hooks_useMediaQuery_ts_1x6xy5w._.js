module.exports = [
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
];

//# sourceMappingURL=0im4_Code%2001_Projecto%2003_hotel-tianjane-fingoe_src_hooks_useMediaQuery_ts_1x6xy5w._.js.map