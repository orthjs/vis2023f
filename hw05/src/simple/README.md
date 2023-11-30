# Simple baseLine(3pt)--實作Force-directed tree呈現小組情況(1pt)、節點可以被拖拉移動(1pt)、將個人圖片放入節點圓圈中(1pt)

https://observablehq.com/d/23295b2c00b26766@56

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@5
npm install https://api.observablehq.com/d/23295b2c00b26766@56.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "23295b2c00b26766";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~
