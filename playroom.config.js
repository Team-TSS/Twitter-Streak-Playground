module.exports = {
  components: './src/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Playground',
  // themes: './src/themes',
  snippets: './playroom/snippets.js',
  // frameComponent: './playroom/FrameComponent.js',
  // scope: './playroom/useScope.js',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  paramType: 'search', // default is 'hash'
  exampleCode: `
    <button>
      Hello World!
    </button>
  `,
  baseUrl: '/play/',
  iframeSandbox: 'allow-scripts',
};
