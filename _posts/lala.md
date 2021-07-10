---
title: "Error: Can't resolve 'component' in '/vercel/workpath0/lib'"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
date: "2020-04-16T05:35:07.322Z"
author:
  name: Gutavo Scafeli
  picture: "/assets/images/gustavo-scafeli.png"
ogImage:
  url: "https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
---

## Error: Can't resolve 'component' in '/vercel/workpath0/lib'

O erro durante o deploy na [Vercel](https://vercel.com/) ocorreu para mim quando mudei a caixa de alguns nomes de arquivo, por exemplo, /File.js para /file.js. Como _git config caseignore_ era _true_, ele não se propagou para o Github, então quando eu mudei a configuração, ele fez duplicatas no remoto. **Não faça isso**! A melhor maneira de corrigir o problema original, minha duplicação, e quando você não tiver certeza de quais arquivos podem estar contaminados, é remover a árvore git, refazer o estágio e enviar para o Github.

Veja o exemplo abaixo:

```shell
git rm -r --cached .
```

```shell
git add --all .
```

```shell
git commit -am "Fix casing discrepancies."
```

```shell
git push origin nome_da_branch
```
