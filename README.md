<p align="center">
  <img alt="PowerLinux logo" src="https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/route/static/logo.png" height="140" />
  <h3 align="center">PowerLinux</h3>
  <p align="center">面向日常运维的轻量级 Linux 面板</p>
  <p align="center">建议系统：Debian/Ubuntu</p>
</p>

## 设计理念

PowerLinux 希望把常见的运维任务做得更“省心”：

- **一致性**：常见操作路径一致，减少重复学习成本。
- **低心智负担**：界面直观、入口清晰，安装后即可上手。
- **可扩展**：插件化管理，按需安装与更新。
- **可靠可控**：关键操作可追溯，可按需备份与恢复。

## 功能一览

- SSH 终端工具
- 面板收藏功能
- 网站备份功能
- 插件方式管理

## 兼容性与文档

- [兼容性测试报告](/compatibility.md)
- [常用命令说明](/cmd.md)

## 安装指南（推荐）

> 适用于大多数用户，按步骤执行即可。

1. **准备环境**
   - 推荐系统：Debian / Ubuntu
   - 确保具备 `curl`、`bash` 基础工具

2. **一键安装**

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@latest/scripts/install.sh)
```

3. **完成后访问面板**

```
http://<服务器IP>:7200
```

> 首次登录信息会在安装输出中显示，请妥善保存。

## 更新与卸载

- **更新**

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@latest/scripts/install.sh)
```

- **卸载**

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@latest/scripts/update.sh)
```

## 备用下载地址

```
wget --no-check-certificate -O uninstall.sh https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@latest/scripts/uninstall.sh && bash uninstall.sh
```

### 备用地址

- 初始安装

```
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/AndyXeCM/PowerLinux/main/scripts/install.sh)
```

- **更新**

```
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/AndyXeCM/PowerLinux/main/scripts/update.sh)
```

- **卸载**

```
wget --no-check-certificate -O uninstall.sh https://raw.githubusercontent.com/AndyXeCM/PowerLinux/main/scripts/uninstall.sh && bash uninstall.sh
```

## 插件开发与扩展

插件开发文档仍在完善中，如有疑问欢迎提交 Issue。

- 插件文档：https://github.com/midoks/mdserver-web/wiki/插件开发

本项目采用 Apache 开源授权许可证，完整的授权说明已放置在 [LICENSE](https://github.com/midoks/mdserver-web/blob/master/LICENSE) 文件中。
