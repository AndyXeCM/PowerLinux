<img width="100" height="100" alt="image" src="https://github.com/AndyXeCM/PowerLinux/blob/master/web/static/logo.png" />

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
***
以下是原作者readme
<p align="center">
  <img alt="logo" src="https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/route/static/logo.png" height="140" />
  <h3 align="center">mdserver-web</h3>
  <p align="center">一款简单Linux面板服务</p>
  <p align="center">强烈推荐系统:debian</p>
</p>

### 简介

简单的Linux面板,感谢BT.CN写出如此好的web管理软件。我一看到，就知道这是我一直想要的页面化管理方式。
复制了后台管理界面，按照自己想要的方式写了一版。

![EulerOS](https://img.shields.io/badge/LINUX-EulerOS-blue?style=for-the-badge&logo=EulerOS)
![Debian](https://img.shields.io/badge/LINUX-Debian-blue?style=for-the-badge&logo=Debian)
![Ubuntu](https://img.shields.io/badge/LINUX-Ubuntu-blue?style=for-the-badge&logo=Ubuntu)
![Fedora](https://img.shields.io/badge/LINUX-Fedora-blue?style=for-the-badge&logo=Fedora)
![CentOS](https://img.shields.io/badge/LINUX-CentOS-blue?style=for-the-badge&logo=CentOS)


[![Wiki](https://img.shields.io/badge/MW-Wiki-red?style=for-the-badge&logo=wiki)](https://github.com/midoks/mdserver-web/wiki)
[![jsdelivr](https://data.jsdelivr.com/v1/package/gh/midoks/mdserver-web/badge)](https://www.jsdelivr.com/package/gh/midoks/mdserver-web)

* SSH终端工具
* 面板收藏功能
* 网站备份功能
* 插件方式管理

基本上可以使用,后续会继续优化!欢迎提供意见！

- 吹水组 - https://t.me/mdserver_web
- 交流论坛 - https://bbs.midoks.icu

```
如果出现问题，最好私给我面板信息。不要让我猜。如果不提供，不要提出问题，自行解决。  — 座右铭
Talk is cheap, show me the code.  -- linus
```

- [兼容性测试报告](/compatibility.md)
- [常用命令说明](/cmd.md) [ mw default ] [ mw dev ]

### 特别赞助

- [虚位以待](https://bbs.midoks.icu)

### 主要插件介绍

* OpenResty - 轻量级，占有内存少，并发能力强。
* PHP[53-85] - PHP是世界上最好的编程语言。
* MySQL - 一种关系数据库管理系统。
* MariaDB - 是MySQL的一个重要分支。
* MySQL[community] - 一种关系数据库管理系统。
* MongoDB - 一种非关系NOSQL数据库管理系统。
* PostgreSQL - 功能强大的开源数据库。
* phpMyAdmin - 著名Web端MySQL管理工具。
* Memcached - 一个高性能的分布式内存对象缓存系统。
* Redis - 一个高性能的KV数据库。
* PureFtpd - 一款专注于程序健壮和软件安全的免费FTP服务器软件。
* Gogs - 一款极易搭建的自助Git服务。
* Rsyncd - 通用同步服务。


### 插件开发相关

```
插件文档还不完善，如果有不明白的地方提Issue! 我会尽力完善。
如果你自己写了插件，想分享出来，也可以提Issue。
```

- 简单例子 - https://github.com/mw-plugin/simple-plugin 
- 插件地址 - https://github.com/mw-plugin
- 开发文档 - https://github.com/midoks/mdserver-web/wiki/插件开发

## 其他插件

- OP鉴权 - https://github.com/mw-plugin/op_auth


# Note

```
phpMyAdmin[4.4.15]支持MySQL[5.5-5.7]
phpMyAdmin[5.2.1]支持MySQL[8.0+]

PHP[53-72]支持phpMyAdmin[4.4.15]
PHP[72-84]支持phpMyAdmin[5.2.1]
```

# 郑重声明

不卖、不会监控(统计使用除外)、更不会注入病毒,大家使用方便(望大家不吝捐赠)。

- https://www.youtube.com/watch?v=2taa5K-Jmmw


# AD - VPS推荐 - 🙏

| 服务商			| 	LOGO   |  推广地址  | 优惠码 |
| ------------- |----------|-----------|-------|
| digitalvirt	|[![digitalvirt](https://digitalvirt.com/templates/BlueWhite/img/logo-dark.svg)](https://digitalvirt.com/aff.php?aff=154) | https://digitalvirt.com/aff.php?aff=154 | mdserver-web |

# Docker

- 由[DDS-Derek](https://github.com/DDS-Derek)开发维护。
- https://github.com/DDS-Derek/mdserver-web-Docker

```
docker run -itd --name mw-server --privileged=true -p 7200:7200 -p 80:80 -p 443:443 -p 888:888 ddsderek/mw-server:latest
```


### 版本更新 0.18.4

- 国内安装优化。

### JSDelivr安装地址

- 初始安装

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/scripts/install.sh)
```

- 直接更新

```
bash <(curl --insecure -fsSL https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/scripts/update.sh)
```

- 卸载脚本

```
wget --no-check-certificate -O uninstall.sh https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/scripts/uninstall.sh && bash uninstall.sh
```

### 备用地址

- 初始安装

```

bash <(curl --insecure -fsSL https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/install.sh)
bash <(curl --insecure -fsSL https://code.midoks.icu/midoks/mdserver-web/raw/branch/master/scripts/install.sh)
```

- 直接更新

```
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/midoks/mdserver-web/master/scripts/update.sh)
```

- 卸载脚本

```
wget --no-check-certificate -O uninstall.sh https://raw.githubusercontent.com/midoks/mdserver-web/master/scripts/uninstall.sh && bash uninstall.sh
```


### 通用软件安装[命令行安装]

- 需已经安装mdserver-web

```
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/quick/app.sh)
```


### DEV使用

```
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/install.sh)
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/update.sh)

bash <(curl --insecure -fsSL https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/install_dev.sh)
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/update_dev.sh)

wget --no-check-certificate -O install.sh https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/install.sh && bash install.sh

wget --no-check-certificate -O uninstall.sh https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/uninstall.sh && bash uninstall.sh

bash <(curl --insecure -fsSL https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/quick/debug.sh)

bash <(curl --insecure -fsSL https://code.midoks.icu/midoks/mdserver-web/raw/branch/dev/scripts/install.sh)
bash <(curl --insecure -fsSL https://code.midoks.icu/midoks/mdserver-web/raw/branch/dev/scripts/update.sh)

bash <(curl --insecure -fsSL https://code.midoks.icu/midoks/mdserver-web/raw/branch/dev/scripts/install_dev.sh)
bash <(curl --insecure -fsSL https://code.midoks.icu/midoks/mdserver-web/raw/branch/dev/scripts/update_dev.sh)
```

### 旧版安装/更新
```
curl --insecure -fsSL  https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/old/install.sh | bash
curl --insecure -fsSL  https://raw.githubusercontent.com/midoks/mdserver-web/dev/scripts/old/update.sh | bash
```

### 偶然问题
- 在安装/更新时，突然出现python插件pip,psutil,可尝试如下解决方案
```
cd /www/server/mdserver-web rm -rf lib
cd /www/server/mdserver-web && rm -rf lib64
cd /www/server/mdserver-web && rm -rf bin
cd /www/server/mdserver-web && rm -rf include

mw update/mw update_dev/mw dev
```

### 捐赠地址 USDT（TRC20）

TVbNgrpeGBGZVm5gTLa21ADP7RpnPFhjya

日行一善，以后必定大富大贵


### 支付宝赞助

[![截图](https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/route/static/img/alipay_zz.png)](https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/route/static/img/alipay_zz.png)


### 无图不真相

[![截图](https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/route/static/mdw.jpg)](https://cdn.jsdelivr.net/gh/midoks/mdserver-web@latest/route/static/mdw.jpg)


### Stargazers over time

[![Stargazers over time](https://starchart.cc/midoks/mdserver-web.svg)](https://starchart.cc/midoks/mdserver-web)


### 感谢开发赞助

[![digitalvirt](https://digitalvirt.com/templates/BlueWhite/img/logo-dark.svg)](https://digitalvirt.com/aff.php?aff=154)

### 授权许可

本项目采用 Apache 开源授权许可证，完整的授权说明已放置在 [LICENSE](https://github.com/midoks/mdserver-web/blob/master/LICENSE) 文件中。


