import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B6PkY7rX.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CMuAYwit.mjs');
const _page1 = () => import('./chunks/_id__CXFh-JCA.mjs');
const _page2 = () => import('./chunks/index_DezYvgex.mjs');
const _page3 = () => import('./chunks/_.._CGZLiRXK.mjs');
const _page4 = () => import('./chunks/rss_BS2lZzcP.mjs');
const _page5 = () => import('./chunks/index_B1Y-t-3f.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.4_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/[id].json.ts", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/rss.xml.js", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a2055af6-972f-43a1-b4d2-ff22cfb1be80"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
