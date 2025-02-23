# 应用图标生成器

语言: [English](./README.md) | [简体中文](./README_cn.md)

直观的应用程序图标生成器，可以让您自定义颜色、边框、渐变、阴影、文本、本地图像等，轻松创建独特的应用程序图标。

## 案例

![案例1](./screenshots/1-1.png)
![案例2](./screenshots/1-2.png)
![案例3](./screenshots/1-3.png)
![案例4](./screenshots/1-4.png)

## 功能

- 自定义图标尺寸、位置、颜色、背景颜色、边界、渐变和阴影。
- 自定义文本内容和文本渐变。
- 自定义本地 SVG 或图片文件。
- 通过包含20,0000 可用图标的 [Iconify Icons](https://iconify.design/) 来生成图标。
- 实时预览你的图标的变化。
- 轻松导出图标。

> [!IMPORTANT]
> 文本图标使用系统默认字体，无法保证版权合规，请谨慎选择。

## Usage

你可以不用进行任何安装，而是直接通过 Github Pages 来使用应用图标生成器。直接访问下面这个链接即可：

[AppIcon Forge on GitHub Pages](https://zhangyu1818.github.io/appicon-forge/)

如果你想在本地运行：

克隆这个仓库并安装依赖：

```sh
# 克隆仓库
git clone https://github.com/zhangyu1818/appicon-forge.git

# 进入目录
cd appicon-forge

# 安装依赖
pnpm install
```

启动开发服务器:

```sh
pnpm dev
```

在你的浏览器中访问 `http://localhost:5173/appicon-forge/` 来使用应用图标生成器。

## 部署

构建生产项目:

```sh
pnpm build
```

将 `out` 文件夹的内容部署到您的 Web 服务器或 GitHub Pages。

## 许可

该项目使用 MIT 许可。
