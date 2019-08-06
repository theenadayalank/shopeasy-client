
module.exports = {  
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: 'react',  
  env: {    
    browser: true,    
    node: true  
  },
  rules: {
    "indent": ["error", 2],

    //overwritten react plugin rules
    "react/prop-types": [2, { ignore: ['children'] }],
  }
}


