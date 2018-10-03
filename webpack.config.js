module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
           test: /\.vue$/,
           loader: 'vue-loader',
           options: {
               loaders: {
                   'scss': 'vue-style-loader!css-loader!sass-loader',
                   'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
               }
           }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translate css into commonJS modules
          },
          {
            loader: 'sass-loader' // compile Sass to CSS
          }
        ]
      }
    ]
  },
  // plugin omitted
}