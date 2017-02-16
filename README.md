# PostCSS French Stylesheets

[PostCSS] plugin for writing French Stylesheets :fr:.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    arrondi: 3px;
    fond: #fff;
    largeur: 300px;
    hauteur: 200px;
    flux: gauche;
    haut: 10px;
    bas: 0px;
    gauche: 100px;
    droite: 100px;
    approche: -1px;
    curseur: pointeur !important;
    text-transform: majuscule;
}
```

```css
.foo {
    border-radius: 3px;
    background: #fff;
    width: 300px;
    height: 200px;
    float: left;
    top: 10px;
    bottom: 0px;
    left: 100px;
    right: 100px;
    letter-spacing: -1px;
    cursor: pointer !important;
    text-transform: uppercase;
}
```

#### [See the complete list of properties and values translated](https://github.com/kud/postcss-french-stylesheets/blob/master/index.js)


## Usage

```js
postcss([ require('postcss-french-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.
