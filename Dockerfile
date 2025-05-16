# 第一阶段：构建应用
FROM node:20-alpine as build-stage
WORKDIR /app

# 升级npm到最新版
RUN npm install -g npm@latest

# 安装pnpm
RUN npm install -g pnpm

# 复制项目文件（先复制锁文件以加速依赖安装）
COPY package*.json pnpm-lock.yaml ./
COPY . .

# 安装依赖（保留开发依赖）
RUN pnpm install --production=false

# 更新Browserslist数据
RUN npx update-browserslist-db@latest

# 执行构建（Vite默认输出到dist目录）
RUN pnpm build

# 第二阶段：部署静态文件
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# 清理默认文件并复制构建结果
RUN rm -rf ./*
COPY --from=build-stage /app/dist .

# 暴露端口并启动服务
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]