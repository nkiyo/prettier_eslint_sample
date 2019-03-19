prettier examples
=================

```
$ prettier sample.js --write
$ prettier sample.vue --write
$ prettier sample.yaml --write
$ prettier sample.json --write
```

eslint examples
===============

```
$ vi .eslintrc.json # 後述の設定を実施
$ eslint sample.vue
$ eslint sample.js
```

```
{
  "extends": ["eslint:recommended", "plugin:vue/recommended"],
  "plugins": ["vue"],
  "parserOptions": {},
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {},
  "rules": {
    "semi": "warn",
    "prefer-const": "warn"
  }
}
```

