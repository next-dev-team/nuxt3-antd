# Nuxt 3 Boilerplate with Ant Design

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Online Preview

<https://nuxt3-ant-design.netlify.app/>

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm i
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
pnpm  dev
```

## Known Issue

- hot reload antd not working in folder pages so I move all UI to template folder
- Auto import Antd design Icon must be with Prefix <IconAnt...
- Antd Typescript issue
  TypeScript not working with LiteralUnion please change new LiteralUnion [here](node_modules/.pnpm/ant-design-vue@3.3.0-beta.3/node_modules/ant-design-vue/es/_util/type.d.ts)

```ts
type Primitive = null | undefined | string | number | boolean | symbol | bigint;

export type LiteralUnion<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & Record<never, never>);
```

## Credit

Thanks to Vue open source community

- <https://github.com/amihhs/nuxt-ant-vue>
- <https://github.com/viandwi24/nuxt3-awesome-starter>
- <https://github.com/antfu/vitesse-nuxt3>
