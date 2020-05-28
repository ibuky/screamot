
module.exports = {
  root: true,
  "parserOptions": {
    "ecmaVersion": 2019
  },
  "env": {
    "es6": true
  },

  rules: {
    // セミコロンに関する設定
    "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
    "semi-spacing": ["error", {"after": true, "before": false}],
    "semi-style": ["error", "first"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",

    // スペースに関する設定
    'no-multi-spaces': ['warn', {
      'ignoreEOLComments': true,      // 行末コメント前のmulti spaceは無視
      'exceptions': {
        'Property'           : true,  // objectのキーと値の間は無視
        'VariableDeclarator' : true,  // 変数宣言では無視
        'ImportDeclaration'  : true   // importでは無視
      }
    }],

    // インデントに関する設定
    // 'indent': ['error', 2],

    "vue/attribute-hyphenation": "off",
    "curly": [2, "multi"]
  }
}