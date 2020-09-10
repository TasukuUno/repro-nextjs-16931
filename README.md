# Reproduction of the following issue

https://github.com/vercel/next.js/issues/16931

## To Reproduce

### run on next@9.5.3

build and start

```
yarn start:9.5.3
```

access http://localhost:3000

click link in `[NG] go to error page via server rendering` section

![9 5 3](https://user-images.githubusercontent.com/4372047/92681887-e0643280-f369-11ea-8c69-be777a5914d2.gif)


### run on next@9.5.2 (woks fine)

build and start

```
yarn start:9.5.2
```

access http://localhost:3000

click link in `[NG] go to error page via server rendering` section

![9 5 2](https://user-images.githubusercontent.com/4372047/92681891-e2c68c80-f369-11ea-84e3-8fd84be76f2f.gif)
