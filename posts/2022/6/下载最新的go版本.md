---
layout: Post
title: 如何下载最新的go版本
subtitle: 讲解使用go install 下载&编译go版本
author: 科科人神
date: 2022-6-2
headerImage: /images/post/2022/6/1.jpeg
tags:
  - go
---
首先，我们使用这个命令，将你需要的go版本包下载到go的可执行文件目录
```go
go install golang.org/dl/go1.18.3@latest
```
这里，我下载的是`go1.18.3` 这个包，`@latest` 注明版本，这里指的是`go1.18.3` 这个包的最新版

```go
go1.18.3 download
```
使用这个命令，将go全量数据下载到本地，使用macOS的话是下载到了`~/sdk`中

下载以后就可以使用 `go1.18.3` 这样的命令去行使`go`的命令了。

`go.18.3`命令最终调用的是sdk中的go项目中的`bin/go`命令

你可以试试将sdk中go项目的bin/go 删除会发生什么

答案就是 go.18.3 命令将不会出现任何效果，所以可以佐证上文的说法