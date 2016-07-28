# Ionic2-ng2-translate

Implementing localization of strings with [Ng2-Translate](https://github.com/ocombe/ng2-translate) and [Ionic 2](http://ionicframework.com/docs/v2/). This is using PLATFORM_PIPES to provide translation to all .html files without modifying .ts files.

# Initialization

Clone repository

```Batchfile
git clone https://github.com/JarmoKukkola/Ionic2-ng2-translate.git
```

Install [Node.Js](https://nodejs.org/en/)

Install Ionic2 and Ng2-Translate

```Batchfile
npm install -g ionic@beta
npm install ng2-translate --save
```

Run in browser

```Batchfile
ionic serve
```

Usage (hello is a keyword in www/assets/i18n/*.json file)

```Html
<h2>{{"hello"|translate}}</h2> 
```
