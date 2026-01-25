# PowerLinux

轻量易用的下一代Linux控制面板
<p></p>
<img width="2796" height="3022" alt="image" src="https://github.com/user-attachments/assets/9b23df4c-47a2-4f9f-a107-0ecafcd5cc70" />
<p>
开源项目，社区维护，不！可！能！收！费！
<p></p>
欢迎各位积极完善，提交pull request!
<p></p>
基于[MWPanel](https://github.com/midoks/mdserver-web/) 构建，没有原作者的构建就没有这个面板，非常感谢！！！
<p></p>
兼容MWPanel的应用生态

***

主要设计语言：MDUI2，简洁美观，功能够用。

***

功能请参照宝塔面板v9，宝塔面板有的功能这个面板基本上都有，只不过软件商店里面的软件少了一些，欢迎各位为这个面板的生态作出贡献～～～

***

## 兼容性与文档

- [兼容性测试报告](/compatibility.md)
- [常用命令说明](/cmd.md)
***

### jsDelivr安装链接（建议国内服务器使用）

- **初始安装**

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@master/scripts/install.sh)

```

- **更新**

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@master/scripts/update.sh)
```

- **卸载**

```
wget --no-check-certificate -O uninstall.sh https://cdn.jsdelivr.net/gh/AndyXeCM/PowerLinux@master/scripts/uninstall.sh && bash uninstall.sh
```
***
### Github安装链接（建议国外服务器使用）

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
***
## 插件开发与扩展

插件开发文档仍在完善中，如有疑问欢迎提交 Issue。

- 插件文档：https://github.com/midoks/mdserver-web/wiki/插件开发
***

本项目采用 Apache 开源授权许可证，完整的授权说明已放置在 [LICENSE](https://github.com/midoks/mdserver-web/blob/master/LICENSE) 文件中。
