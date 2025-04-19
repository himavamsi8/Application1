
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/application1',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/application1"
  },
  {
    "renderMode": 2,
    "route": "/application1/home"
  },
  {
    "renderMode": 2,
    "route": "/application1/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 678, hash: 'de68a231ab5e9474f07197da9f858fc2a9736fa7cea17f7ae62065d8ee532ab5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: 'fb90ac452f76649164ada9f7d7a454db3a41704a1fe6da660bf1702b95cd928c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15880, hash: '10ce729e205d48f0dedb12cad6ff6ded0a491ebcfcff0d9ef532cdac7b3e6524', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4930, hash: '2d83ee92953d9e3df1ea2f46be2162195e13c5f92c58815b09a90da32ef8a55a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15880, hash: '10ce729e205d48f0dedb12cad6ff6ded0a491ebcfcff0d9ef532cdac7b3e6524', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YOJSRKDF.css': {size: 45, hash: 'JkZSGfrDQ7c', text: () => import('./assets-chunks/styles-YOJSRKDF_css.mjs').then(m => m.default)}
  },
};
