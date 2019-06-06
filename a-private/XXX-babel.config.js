 

const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "11", 
        //will convert arrow functions
        /* edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1", */
      },
    },
  ],
];
  
module.exports = { presets };
  
/*
    mozna zamiast tego w package.json:
   "babel": {
      "presets": ["@babel/preset-env"]
    },
    
   "browserslist": [
       "last 2 versions and > 1.0% in Pl",
      "Edge > 16",
      "Firefox ESR",
      "maintained node versions",
      "not dead"
    ]
   */
  