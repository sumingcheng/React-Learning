## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### PM2

```bash
    pm2 start pm2.json ; 启动pm2.json配置文件中的应用程序
    pm2 start npm --name "next" -- run start ; 启动npm run start命令
    pm2 stop app ; 停止应用程序
    pm2 restart app ; 重启应用程序
    pm2 delete app ; 删除应用程序
    pm2 list ; 列出当前正在运行的应用程序
    pm2 logs ; 查看应用程序的日志
    pm2 monit ; 监视应用程序的 CPU 内存和网络等信息
    pm2 reload all ; 重新加载所有应用程序
    pm2 show app ; 显示应用程序的所有信息
```

