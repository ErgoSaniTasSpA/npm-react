/************************************************************************
 * *  LINK
 * * - https://www.npmjs.com/package/rollup-plugin-postcss
 * * - https://www.npmjs.com/package/@rollup/plugin-image
 * * INSTALAR
 * * - npm i rollup-plugin-postcss
 * * - npm i @rollup/plugin-image 
**************************************************************************/
const postcss = require('rollup-plugin-postcss'); 
const images = require('@rollup/plugin-image'); 

module.exports = { 
    
  rollup(config, options) { 
    config.plugins = [ 
      postcss({ modules: true }), 
      images({ incude: ['**/*.png', '**/*.jpg'] }), 
      ...config.plugins, 
    ]; 
    return config; 
  }, 
}; 