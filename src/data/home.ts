export type Locale = 'en' | 'zh';

export interface HomeContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    sub: string;
    primaryCta: string;
    githubCta: string;
    demoCta: string;
    terminalTitle: string;
    terminalCode: string;
    copyLabel: string;
    copiedLabel: string;
  };
  showcase: {
    heading: string;
    sub: string;
    url: string;
    shot: { src: string; width: number; height: number; alt: string; caption: string };
  };
  features: {
    heading: string;
    sub: string;
    items: { icon: 'download' | 'grid' | 'code' | 'server' | 'database' | 'image'; title: string; body: string }[];
  };
  comparison: {
    heading: string;
    headers: string[];
    rows: string[][];
  };
  quickStart: {
    heading: string;
    steps: { num: string; title: string; body: string; code?: string }[];
    cta: string;
  };
}

export const REPO_URL = 'https://github.com/atbeta/picfast';
export const DEMO_URL = 'https://demo.picfast.dev';

const TERMINAL_CODE = `$ docker network create picfast-net
$ docker run -d --name picfast-db --network picfast-net \\
    -e POSTGRES_PASSWORD=devonly \\
    -v picfast-pgdata:/var/lib/postgresql/data \\
    postgres:16-alpine
$ docker run -d --name picfast --network picfast-net -p 18080:8080 \\
    -e PICFAST_DATABASE_URL='postgres://postgres:devonly@picfast-db:5432/postgres?sslmode=disable' \\
    -e PICFAST_JWT_SECRET='change-me-in-production' \\
    -e PICFAST_SERVER_BASE_URL='http://localhost:18080' \\
    -v picfast-uploads:/app/data/uploads \\
    -v picfast-thumbnails:/app/data/thumbnails \\
    xbeta/picfast:latest`;

const DOWNLOAD_CODE = `mkdir picfast && cd picfast
wget https://raw.githubusercontent.com/atbeta/picfast/main/docker/docker-compose.yml
wget https://raw.githubusercontent.com/atbeta/picfast/main/docker/.env.example -O .env`;

const CONFIG_CODE = `PICFAST_DOMAIN=picfast.example.com
PICFAST_SERVER_BASE_URL=https://picfast.example.com
PICFAST_JWT_SECRET=change-me-in-production
POSTGRES_PASSWORD=change-me-too`;

const LAUNCH_CODE = 'docker compose up -d';

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    meta: {
      title: 'PicFast — Self-hosted Image Hosting',
      description:
        'PicFast is a self-hosted image hosting app. Deploy in one command with Docker. Full admin panel, 6 storage backends, API-first with MCP AI integration and ShareX support.',
    },
    hero: {
      badge: 'Open Source · GNU GPL v3',
      titleA: 'Self-hosted image hosting,',
      titleB: 'deployed in one command.',
      sub: 'Pull and run with a single <code>docker run</code> — PostgreSQL, PicFast, and a guided setup wizard in minutes. ShareX, MCP for AI agents, and any HTTP client work natively.',
      primaryCta: 'Get Started',
      githubCta: 'View on GitHub',
      demoCta: 'Live Demo',
      terminalTitle: 'terminal',
      terminalCode: TERMINAL_CODE,
      copyLabel: 'Copy commands',
      copiedLabel: 'Copied',
    },
    showcase: {
      heading: 'A full web console, included',
      sub: 'Upload by drag &amp; drop, manage images and albums, and configure storage strategies — no database access required.',
      url: 'picfast.example.com',
      shot: {
        src: '/images/console-en.png',
        width: 2780,
        height: 1772,
        alt: 'PicFast web console — upload view',
        caption: 'The PicFast web console — upload view',
      },
    },
    features: {
      heading: 'Everything you need, one command away',
      sub: 'Deployment, management, integrations, and storage — covered out of the box.',
      items: [
        {
          icon: 'download',
          title: 'One-Command Deploy',
          body: 'Pull the prebuilt image and deploy with a single <code>docker run</code> — no building from source required. Full Docker Compose template included, production-ready with a few lines of config.',
        },
        {
          icon: 'grid',
          title: 'Full Admin Panel',
          body: 'Manage users, groups, storage strategies, images, and site configuration from a clean React dashboard. Day-to-day operations require no direct database access.',
        },
        {
          icon: 'code',
          title: 'API-First, AI-Ready',
          body: 'Clean REST API with an OpenAPI spec and live documentation. The built-in MCP server enables Claude, Cursor, and other AI agents to upload, list, and manage images. Run <code>npx @picfast/mcp</code> to connect.',
        },
        {
          icon: 'server',
          title: 'Native Tool Integrations',
          body: 'One-click config for ShareX, PicGo, PicList, uPic, Dropshare, and more. Official VS Code extension on the Marketplace, plus a cross-platform CLI via npm. Multi-format output — URL, Markdown, BBCode, HTML. Works with curl, Python, JavaScript, or any HTTP client. No vendor lock-in.',
        },
        {
          icon: 'database',
          title: '6 Storage Backends',
          body: 'Local filesystem, S3-compatible (MinIO, R2), Alibaba OSS, Tencent COS, Qiniu Kodo, and WebDAV. Switch backends anytime — existing images stay where they are.',
        },
        {
          icon: 'image',
          title: 'Image Processing &amp; Management',
          body: 'Automatic thumbnail generation, configurable compression, and watermark support. EXIF extraction, tag-based organization, and advanced search (by keyword, extension, date range, tags). Manual admin moderation with a pre-built interface ready for third-party moderation services.',
        },
      ],
    },
    comparison: {
      heading: 'How it compares',
      headers: ['', 'Chevereto', 'Lsky Pro', 'Picsur', 'PicFast'],
      rows: [
        ['Setup time', '~30 min', '~30 min', '~10 min', '~5 min'],
        ['Admin panel', 'Basic', 'Full', 'Basic', 'Full React dashboard'],
        ['API support', 'Basic', 'API', 'Postman', 'OpenAPI + live docs'],
        ['ShareX integration', '✅', '❌', '✅', '✅ Built-in'],
        ['AI / MCP tools', '❌', '❌', '❌', '✅ 5 tools + resources'],
        ['Storage backends', 'Limited', '9 backends', 'Local only', '6 backends'],
        ['Content moderation', '❌', '✅', '❌', '✅ Built-in'],
        ['Image processing', 'Basic', '✅ Watermark', '✅ Edit/convert', '✅ Compress + watermark'],
        ['License', 'Paid', 'GPL v3', 'AGPL v3', 'GPL v3'],
        ['Status', 'Maintained', 'Discontinued', 'Discontinued', 'Active'],
      ],
    },
    quickStart: {
      heading: 'Quick start',
      steps: [
        {
          num: '1',
          title: 'Download',
          body: 'Grab the Compose file and environment template — no need to clone the repo.',
          code: DOWNLOAD_CODE,
        },
        {
          num: '2',
          title: 'Configure',
          body: 'Edit <code>.env</code> — set your domain, database password, and JWT secret. For headless setups, add admin credentials to skip the setup wizard.',
          code: CONFIG_CODE,
        },
        {
          num: '3',
          title: 'Launch',
          body: 'One command starts PostgreSQL and PicFast. Open <code>http://localhost:18080</code> and follow the setup wizard.',
          code: LAUNCH_CODE,
        },
      ],
      cta: 'Full documentation',
    },
  },
  zh: {
    meta: {
      title: 'PicFast — 自托管图床应用',
      description:
        'PicFast 是开源自托管图床应用，一条 Docker 命令即可部署。完整管理面板、6 种存储后端、API 优先设计，支持 MCP 与 ShareX 接入。',
    },
    hero: {
      badge: '开源 · GNU GPL v3',
      titleA: '一行命令，部署完整的',
      titleB: '自托管图床。',
      sub: '一条 <code>docker run</code> 即可启动，数分钟内完成部署。原生支持 ShareX、MCP（AI Agent）及任意 HTTP 客户端。',
      primaryCta: '快速开始',
      githubCta: 'GitHub',
      demoCta: '在线演示',
      terminalTitle: 'terminal',
      terminalCode: TERMINAL_CODE,
      copyLabel: '复制命令',
      copiedLabel: '已复制',
    },
    showcase: {
      heading: '自带完整网页控制台',
      sub: '拖拽上传、图片与相册管理、存储策略配置，全部在浏览器中完成，无需操作数据库。',
      url: 'picfast.example.com',
      shot: {
        src: '/images/console-zh.png',
        width: 2786,
        height: 1806,
        alt: 'PicFast 网页控制台 — 上传界面',
        caption: 'PicFast 网页控制台 — 上传界面',
      },
    },
    features: {
      heading: '功能完备，部署极简',
      sub: '部署、管理、集成与存储，开箱即用。',
      items: [
        {
          icon: 'download',
          title: '一键 Docker 部署',
          body: '拉取预构建镜像，一条 <code>docker run</code> 命令即可完成部署，无需从源码构建。同时提供完整的 Docker Compose 模板，几行配置即可部署生产级实例。',
        },
        {
          icon: 'grid',
          title: '完整管理面板',
          body: '基于 React 构建的管理后台，可集中管理用户、分组、存储策略、图片资源及站点配置。日常运维无需直接操作数据库。',
        },
        {
          icon: 'code',
          title: 'API 优先，AI 就绪',
          body: '完整的 REST API 与 OpenAPI 规范文档，支持在线调试。内置 MCP 服务器，Claude、Cursor 等 AI 助手可通过标准协议完成图片上传、查询与管理。执行 <code>npx @picfast/mcp</code> 即可接入。',
        },
        {
          icon: 'server',
          title: '原生工具集成',
          body: '内置 ShareX、PicGo、PicList、uPic、Dropshare 等工具的一键配置支持。官方 VS Code 插件（已上架 Marketplace），以及通过 npm 安装的跨平台 CLI。多格式链接输出（URL、Markdown、BBCode、HTML）。兼容任意 HTTP 客户端，无供应商锁定风险。',
        },
        {
          icon: 'database',
          title: '6 种存储后端',
          body: '支持本地文件系统、S3 兼容协议（MinIO、R2）、阿里云 OSS、腾讯云 COS、七牛云 Kodo 及 WebDAV。切换后端无需迁移已有数据。',
        },
        {
          icon: 'image',
          title: '图片处理与管理',
          body: '自动生成缩略图，支持可配置的图片压缩与水印。自动提取 EXIF 元数据，支持标签分类管理，高级搜索（按关键词、扩展名、日期范围、标签筛选）。支持管理员手动审核，同时预置自动审核接口。',
        },
      ],
    },
    comparison: {
      heading: '与同类方案对比',
      headers: ['', 'Chevereto', 'Lsky Pro', 'Picsur', 'PicFast'],
      rows: [
        ['部署时间', '约 30 分钟', '约 30 分钟', '约 10 分钟', '约 5 分钟'],
        ['管理面板', '基础', '完整', '基础', '完整 React 后台'],
        ['API 支持', '基础', 'API', 'Postman', 'OpenAPI + 在线文档'],
        ['ShareX 集成', '✅', '❌', '✅', '✅ 内置'],
        ['AI / MCP 工具', '❌', '❌', '❌', '✅ 5 工具 + 资源'],
        ['存储后端', '有限', '9 种后端', '仅本地', '6 种后端'],
        ['内容审核', '❌', '✅', '❌', '✅ 内置'],
        ['图片处理', '基础', '✅ 水印', '✅ 编辑/转换', '✅ 压缩 + 水印'],
        ['协议', '付费', 'GPL v3', 'AGPL v3', 'GPL v3'],
        ['维护状态', '维护中', '已停更', '已停更', '活跃开发'],
      ],
    },
    quickStart: {
      heading: '快速开始',
      steps: [
        {
          num: '1',
          title: '下载编排文件',
          body: '获取 Compose 文件和环境变量模板，无需克隆整个仓库。',
          code: DOWNLOAD_CODE,
        },
        {
          num: '2',
          title: '编辑配置',
          body: '编辑 <code>.env</code> — 设置域名、数据库密码和 JWT 密钥。无头部署可添加管理员凭据跳过向导。',
          code: CONFIG_CODE,
        },
        {
          num: '3',
          title: '启动服务',
          body: '一行命令同时启动 PostgreSQL 和 PicFast。打开 <code>http://localhost:18080</code> 完成初始化向导。',
          code: LAUNCH_CODE,
        },
      ],
      cta: '浏览完整文档',
    },
  },
};
