Archetype
=========

Archetype (n): 1. A symbol, pattern, or prototype upon which others are copied, patterned, or emulated; 2. A flexible, object oriented, Sass architecture for mobile-first, responsive builds with built in live style guide powered by Dexy


Archetype is a front-end toolkit designed with the principles of [OOCSS](https://github.com/stubbornella/oocss) and [SMACSS](http://smacss.com) for building responsive, mobile-first front-ends using a specific [coding standardard](https://github.com/kwaledesign/Coding-Standards). Archetype integrates [Dexy](http://dexy.it) to automatically generate and update a project specific style guide and/or pattern library to facilitate style-guide-driven development to create a custom framework that is easily testable.

## Installation and Setup

```bash

$ bower install Archetype
$ cd Archetype
$ grunt init

```
This provides you with the bare-minimum Archetype project scafolding. To extend
your project with additional [Archetype
modules](https://github.com/Archetype-CSS/Archetype-docs/Archetype-modules.md),
use `bower install [module name]`, then `@import` the module within `main.scss`
for utilities and objects; or within its own partial within the `components/`
  directory for components.

For a more detailed walk through, see: [Archetype-docs/Getting-Started.md](https://github.com/Archetype-CSS/Archetype-docs)


### Style Guide
Archetype has a built in living style guide powered by [Dexy](http://dexy.it). [Front-End Style Guides](http://24ways.org/2011/front-end-style-guides/) are the visual guidelines for designing discrete web components. [Style guide driven development](https://speakerdeck.com/jina/style-guide-driven-ui-design-with-sass) using [module design and UI patterns](https://speakerdeck.com/anotheruiguy/module-design-ui-dev-patterns) integrates this methodology into the process, rather than simply documentation of an end product. This has enormous benefits in regards to testing and refining components and interactions to be self-contained, discrete, modules that can be rearranged and reorganized to fit different contexts. The Style Guide clearly communicates interface and interaction standards to team members of any design/development knowledge. This document is built directly on top of the project's production code base and includes template includes for the HTML, CSS, Sass, and JavaScript code that supplement the rendered HTML examples. This document communicates not only how each component looks and behaves but also the code necessary to consistently implement.

```bash

$ cd Archetype/style-guide
$ dexy reset
$ dexy setup
$ dexy
$ dexy serve

```

For more detailed instructions for how to build the and launch your project's style guide, see: the [Archetype-docs](https://github.com/Archetype-CSS/Archetype-docs/Getting-Started.md).

---

### License
© Kwale Design - Original source code dual licensed under [MIT license](http://www.opensource.org/licenses/mit-license.php) / [GPL2 license](http://www.gnu.org/licenses/gpl-2.0.html). Open-sourced projects used within this project retain their original licenses.

