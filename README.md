### Personal ESLint configuration for multi-stack.
#### Based on Airbnb.
.
```
npm i github:neki-dev/eslint-config -D --force
```
```
module.exports = {
  extends: [
    '@neki-dev/eslint-config',
    '@neki-dev/eslint-config/typescript', // optional
  ],
};
```