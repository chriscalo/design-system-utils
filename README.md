# @chriscalo/design-system-utils

## Local development

To autogenerate `dist/colors.scss` and Sassdocs in watch mode:

``` sh
yarn run dev
```

## Publish to npm

First, update the version:

``` sh
npm version patch
# or
npm version minor
# or
npm version major
```

Then log in and publish:

``` sh
npm login
npm publish
```
