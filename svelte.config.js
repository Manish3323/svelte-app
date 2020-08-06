const sveltePreprocess = require("svelte-preprocess");
module.exports = {
  preprocess: sveltePreprocess({
    // https://github.com/sveltejs/svelte-preprocess/blob/master/docs/preprocessing.md#typescript
    // tsconfig.file can be referenced here..
  }),
};
