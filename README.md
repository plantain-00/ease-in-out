[![Dependency Status](https://david-dm.org/plantain-00/ease-in-out.svg)](https://david-dm.org/plantain-00/ease-in-out)
[![devDependency Status](https://david-dm.org/plantain-00/ease-in-out/dev-status.svg)](https://david-dm.org/plantain-00/ease-in-out#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/ease-in-out.svg?branch=master)](https://travis-ci.org/plantain-00/ease-in-out)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/ease-in-out?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/ease-in-out/branch/master)
[![npm version](https://badge.fury.io/js/ease-in-out.svg)](https://badge.fury.io/js/ease-in-out)
[![Downloads](https://img.shields.io/npm/dm/ease-in-out.svg)](https://www.npmjs.com/package/ease-in-out)

# ease-in-out
An ease-in-out no-css animation library.

#### install

`npm i ease-in-out`

#### usage

```ts
import EaseInOut from "ease-in-out";
// <script src="./node_modules/ease-in-out/ease-in-out.min.js"></script>

const contentElement = document.getElementById("content");
const contentScroll = new EaseInOut(currentValue => {
    contentElement.scrollTop = currentValue;
});
this.contentScroll.start(contentElement.scrollTop, contentElement.scrollTop + 100);
```
