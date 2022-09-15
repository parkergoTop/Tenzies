const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports={
    
    //entry point of the application 
    entry: './src/index.js', 
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js',
        publicPath: '/',
    },
    // tell webpack the name and location of our bundle file that will be generated whn we produce a production build
    //we pass the "output" obeject
    // Remember that webpack is a module bundler meanings it takes a group of file and budles them into a smaller groups of file
    // so in here we are gonna turning all our javascript file into one file called "bundle.js"
    
    plugins:[
        new HTMLWebpackPlugin({
                template:'./src/index.html'
                //tells webpack to inject the bundled files it generates into a html file
                //called index.html
            })
    ],
    module:{
        rules:[
            {
            test: /.js$/, 
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            }
            },
           {
             test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                    name: '[path][name].[ext]',
                    esModule: false,
                  },
              } ],
              type: 'javascript/auto',
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },   
        ],
    }
    
}
