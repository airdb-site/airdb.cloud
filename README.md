# AirDB Cloud

一个面向普通用户的云服务产品站点 — <https://airdb.cloud>

**不用懂云，也能用好云。**

## 定位

将阿里云、腾讯云、AWS、Google Cloud 等主流云平台的底层技术能力产品化，
提供开箱即用、稳定可靠高效的云端服务，让用户无需具备专业技术背景即可使用。

官网遵循定位文档第 4 章的体验哲学：**不罗列功能，用场景演示**——
首屏即"选场景 → 一键开通 → 看健康度"的三步交互演示；
筹备期不设任何付费入口，所有指标数字标注为演示/目标值。

## 开发

```bash
make install   # pnpm install --frozen-lockfile
make run       # 本地开发 (astro dev)
make build     # 构建到 dist/
```

技术栈：Astro（静态输出）+ 自托管字体（Bricolage Grotesque / IBM Plex Mono，CJK 走系统字体栈）。
推送到 `main` 后由 GitHub Actions 构建并发布到 GitHub Pages（自定义域名 airdb.cloud）。

## 结构

- `src/pages/index.astro` — 单页官网（首屏演示面板的文案与步骤都在此文件内）
- `src/pages/404.astro` — 品牌化 404
- `src/styles/global.css` — 设计令牌（"晴空"色板）与字体
- `docs/product-positioning.md` — 产品定位与设计文档（官网文案的唯一事实来源）
