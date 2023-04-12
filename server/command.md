npm install ts-node -g
npm init -y
npm install @types/node -D
npm install express -S
npm install @types/express -D
npm install axios -S

这个报错是因为在 TypeScript 中，当使用带有 `export =` 的模块时，需要使用 `esModuleInterop` 标志。在你的代码中，你试图从 `express` 模块中导入，但是没有使用正确的导入方式。

为了解决这个问题，你可以按照以下两种方法之一操作：

**方法 1：** 更改你的 `tsconfig.json` 文件以启用 `esModuleInterop`。在 `tsconfig.json` 文件中，将以下内容添加到 `compilerOptions` 对象中：

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    ...
  },
  ...
}
```

保存更改后，重新运行 `npm run dev`。

**方法 2：** 更改你的导入语句以使用 `require`。将以下代码替换为你的当前导入语句：

```typescript
import * as express from 'express'
import { Express, Router, Request, Response } from 'express'
```

保存更改后，重新运行 `npm run dev`。

这两种方法中的任何一种都应该解决你遇到的问题。
