# Starterkit

Starterkit für interaktiv-Projekte.

## API

### Config

Die App Config liegt unter: ```/app/config.js```

* ```siteURL``` - Hier die URL eintragen, die zum teilen verwendet wird
* ```socialID``` - Die ID um die Social Counts anzuzeigen (http://mpst.achernar.uberspace.de/socialcount/m29.json -> der Name von der JSON, also in diesem Fall m29)
* ```whatsappText``` - Der Text der beim Teilen via Whatsapp angezeigt wird.
* ```facebookText``` - Der Text der beim Teilen via Facebook angezeigt wird.
* ```twitterText``` - Der Text der beim Teilen via Twitter angezeigt wird.

### CSS

**Typo**

* ```.sans``` - sans-serif font
* ```.serif``` - serif font

**Layout**

* ```.mobile-only``` - Elemente nur auf Mobil anzeigen
* ```.clearfix``` - clearfix
* ```.hidden``` - Element ausblenden
* ```.fallback``` - Wird nur angezeigt, wenn alter Browser

### JS

**devices.js**

Modul für Browser-Detection

```
var devices = require('./utils/devices');

```

* ```devices.oldBrowser``` - IE9 check
* ```devices.mobile``` - Tablet / Smartphone
* ```devices.smartphone``` - Smartphone
* ```devices.reInit()``` - Variablen aktualisieren

**bmo.js**

Morgenpost Custom Scripts (TODO: Tracking)

```
var bmo = require('./utils/bmo');

```

* ```bmo.numberFormat(number)``` - NumberFormat: Ab 10.000 Trennung bei Tausendern

**helper.js**

Helper Functions

```
var helper = require('./utils/helper');

```

* ```helper.isUndefined(obj)``` - undefined check
* ```helper.isNumeric(number)``` - number check

**social.js**

Social Sharing Functions

```
var social = require('./utils/social');

```

* ```social.init([url])``` - initialisiert die social buttons


## Installation

```
$ npm install
```

## Development

```
$ gulp
```
or

```
$ npm start
```

## Build

```
$ gulp build --type production
```

## Styleguide

Create a styleguide at ```/documentation```

```
$ gulp styleguide
```
# newnewsquiz
