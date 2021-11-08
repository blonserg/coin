import colors from "vuetify/es5/util/colors";
const isDev = process.env.NODE_ENV !== "production";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - coin",
    title: "coin",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "normalize.css",
    "./assets/scss/styles.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    ["@nuxtjs/stylelint-module"],
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    // https://typescript.nuxtjs.org
    "@nuxt/typescript-build"
  ],

  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}"
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: "#000",
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
          background: "#ffffff"
        },
        dark: {
          primary: "#ffffff",
          secondary: "#23262e",
          background: "#1d1e21",
          accent: "#2d7bf6"
        }
      }
    }
  },

  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => isDev ? "[name].js" : "js/[contenthash].js",
      chunk: ({ isDev }) => isDev ? "[name].js" : "js/[contenthash].js",
      css: ({ isDev }) => isDev ? "[name].css" : "css/[contenthash].css",
      img: ({ isDev }) => isDev ? "[path][name].[ext]" : "img/[contenthash:7].[ext]",
      font: ({ isDev }) => isDev ? "[path][name].[ext]" : "fonts/[contenthash:7].[ext]",
      video: ({ isDev }) => isDev ? "[path][name].[ext]" : "videos/[contenthash:7].[ext]"
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    babel: {
      presets ({ isServer }) {
        const targets = isServer ? { node: "current" } : { ie: 11 };
        return [
          [require.resolve("@babel/preset-env"), { targets }]
        ];
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator"
      ]
    },
    optimization: {
      minimize: !isDev
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: ["advanced", {
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true
              }
            }]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: "cover 99.5%",
          autoprefixer: true
        }
      }),

      order: "cssnanoLast"
    }
  }
};
