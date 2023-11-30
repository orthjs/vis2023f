# Medium baseline(5pt)--滑鼠移動過去顯示該成員相關資訊(1pt)、滑鼠移動過去放大節點與圖片(2pt)、點擊節點可以展開或縮放(2pt)

https://observablehq.com/d/3fd3f9ff1ca04791@21

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@5
npm install https://api.observablehq.com/d/3fd3f9ff1ca04791@21.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "3fd3f9ff1ca04791";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~
