# PowerLinux
轻量易用的下一代Linux控制面板
基于[MWPanel](https://github.com/midoks/mdserver-web/),同时增加现代化的UI和更多控制模块


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

### JSDelivr安装链接

- **初始安装**

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@latest/scripts/install.sh)
```

- **直接更新**

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@latest/scripts/update.sh)
```

- **卸载**

```
wget --no-check-certificate -O uninstall.sh https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@latest/scripts/uninstall.sh && bash uninstall.sh
```

### Github安装链接

- **初始安装**

```
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/AndyXeCM/PowerLinux/master/scripts/install.sh)
```

- **更新**

```
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/AndyXeCM/PowerLinux/master/scripts/update.sh)
```

- **卸载**

```
wget --no-check-certificate -O uninstall.sh https://raw.githubusercontent.com/AndyXeCM/PowerLinux/master/scripts/uninstall.sh && bash uninstall.sh
```

## 插件开发与扩展

插件开发文档仍在完善中，如有疑问欢迎提交 Issue。

- 插件文档：https://github.com/midoks/mdserver-web/wiki/插件开发

本项目采用 Apache 开源授权许可证，完整的授权说明已放置在 [LICENSE](https://github.com/midoks/mdserver-web/blob/master/LICENSE) 文件中。
