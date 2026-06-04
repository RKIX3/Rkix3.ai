<div align="center">
  <img src="1780136894650-Photoroom.png" width="520" alt="RKIX3 Logo">

  <h1>RKIX3 AI Studio</h1>
  <p><strong>React/Vite web app được dựng thành file và trang thật từ tài liệu dự án RKIX3.</strong></p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-Vite-00d2ff?style=for-the-badge&logo=react&logoColor=white">
    <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-Actions-22272e?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0d1117">
    <img alt="Mobile First" src="https://img.shields.io/badge/Mobile-First-16a34a?style=for-the-badge&logo=android&logoColor=white">
  </p>

  <p>
    <a href="./index.html"><strong>🚀 Mở RKIX3</strong></a>
    ·
    <a href="#-file-tài-liệu-gốc">File tài liệu</a>
    ·
    <a href="#-cây-source-đã-tạo">Cây source</a>
    ·
    <a href="#-pages-đã-triển-khai">Pages</a>
  </p>
</div>

---

## 📄 File tài liệu gốc

File bạn đưa đã được dùng làm blueprint triển khai:

```txt
17805318804541328577397787959494.jpg
```

<div align="center">
  <a href="./17805318804541328577397787959494.jpg">
    <img src="17805318804541328577397787959494.jpg" width="360" alt="Tài liệu dự án RKIX3">
  </a>
</div>

## ✅ Nội dung đã triển khai từ tài liệu

- Chuyển repo từ trang HTML đơn lẻ sang app **React + Vite** có source thật.
- Tạo các thư mục/file theo tài liệu: `.backup`, `.config`, `src/components`, `src/pages`, `src/data`, `src/services`, `src/hooks`, `src/store`, `src/utils`.
- Tạo đủ 7 trang chính: AI Workspace, Workspace, Code Studio, Build Center, Library Hub, Integration Center, Profile.
- Không tạo thêm bản sao binary trong `src`; app dùng trực tiếp hai file gốc ở repo root để tránh lỗi/khó push tệp nhị phân.
- Cập nhật GitHub Pages workflow để build app bằng `npm run build`, copy file tài liệu JPG vào `_site` và deploy.

## 🏗️ Cây source đã tạo

```txt
RKIX3/
├─ .backup/
│  └─ src-v0.1/README.md
├─ .config/
│  ├─ VERSION_LOCK.md
│  ├─ ROADMAP.md
│  ├─ CHANGELOG.md
│  ├─ TASKS.md
│  └─ ARCHITECTURE.md
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  ├─ main.jsx
│  ├─ assets/
│  │  ├─ icons/README.md
│  │  └─ themes/rkix3.css
│  ├─ components/
│  │  ├─ TopBar.jsx
│  │  ├─ BottomNav.jsx
│  │  ├─ PromptBox.jsx
│  │  ├─ Card.jsx
│  │  ├─ ProjectCard.jsx
│  │  ├─ LibraryCard.jsx
│  │  ├─ ChatBox.jsx
│  │  ├─ ThemeSwitch.jsx
│  │  └─ Modal.jsx
│  ├─ pages/
│  │  ├─ AI.jsx
│  │  ├─ Workspace.jsx
│  │  ├─ Code.jsx
│  │  ├─ Build.jsx
│  │  ├─ Library.jsx
│  │  ├─ Integration.jsx
│  │  └─ Profile.jsx
│  ├─ data/
│  │  ├─ libraries.js
│  │  ├─ templates.js
│  │  ├─ projects.js
│  │  ├─ tasks.js
│  │  └─ integrations.js
│  ├─ services/
│  │  ├─ apiService.js
│  │  ├─ github.js
│  │  ├─ vercel.js
│  │  ├─ railway.js
│  │  └─ storage.js
│  ├─ hooks/
│  │  ├─ useTheme.js
│  │  ├─ useProjects.js
│  │  ├─ useTasks.js
│  │  └─ useAI.js
│  ├─ store/
│  │  ├─ project.js
│  │  ├─ promptStore.js
│  │  └─ uiStore.js
│  └─ utils/
│     ├─ format.js
│     ├─ export.js
│     ├─ parser.js
│     └─ constants.js
├─ 1780136894650-Photoroom.png
├─ 17805318804541328577397787959494.jpg
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
└─ README.md
```

## 🧭 Pages đã triển khai

| Trang | Module con |
| --- | --- |
| 🤖 AI Workspace | Chat, AI Agent, Workflow Builder, App Builder, Code Generator |
| 🧭 Workspace | Projects, Tasks, Roadmap, Project Memory |
| ⌨️ Code Studio | Editor, Snippets, Templates, AI Coding |
| 🚀 Build Center | React, NextJS, NodeJS, Flutter, Export ZIP, Deploy |
| 📚 Library Hub | Frameworks, Databases, APIs, Documentation |
| 🔗 Integration Center | GitHub, Vercel, Railway, Netlify, Supabase |
| 👤 Profile | User, Theme, Settings, Security |

## 🛠️ Chạy local

```bash
npm install
npm run dev
# mở http://127.0.0.1:5173
```

## ✅ Kiểm tra build

```bash
npm run build
```

## 🚀 Deploy GitHub Pages

Workflow `.github/workflows/static.yml` sẽ:

1. Checkout source.
2. Setup Node và chạy `npm ci`.
3. Build React/Vite bằng `npm run build` với `base: './'` để chạy đúng trên GitHub Pages project path.
4. Tạo `_site` từ `dist`.
5. Copy `README.md`, logo và `17805318804541328577397787959494.jpg` vào `_site`.
6. Upload artifact và deploy GitHub Pages.

<div align="center">
  <sub>RKIX3 — tạo file, tạo page, build được, deploy được.</sub>
</div>
