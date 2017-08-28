Nebula is heavily influenced by two conventions that complement one another: [ITCSS](#itcss) and [BEMIT](#bemit). While it is not crucial you understand these to consume Nebula, knowledge of them will help you get the most out of Nebula and ultimately help you write better CSS that can scale gracefully.

## ITCSS
Nebula is built upon the [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4) architecture popularised by [Harry
Roberts](http://csswizardry.com/).

ITCSS stands for *Inverted Triangle* architecture for *CSS*.

It is a sane, scalable, managed architecture and is more of a school of thought than a framework.

The architecture is based on the *write CSS in specificity order* principle. This eliminates many of the specificity issues that often occur as a project scales.

ITCSS is divided up into 7 distinct sections they are:

1. Settings
2. Tools
3. Resets
4. Base
5. Objects
6. Components
7. Utilities

### 1. Settings
Settings contains all the global variables and feature toggles for the project.

Feature toggles is where you can include modules, components and trump classes, this helps
minimise the amount of bloat in the compiled CSS.

### 2. Tools
Globally used mixins and functions.

### 3. Resets (Generic)
[Normalize.css](https://github.com/necolas/normalize.css/) and any additional
resets on top of Normalize.

### 4. Base
Global styles using only element selectors, baseline styles for things like
headings, paragraphs, form elements, links etc&hellip;

### 5. Objects
Cosmetic-free design patters, things like the grid, spaced lists, the flag
object.  Think of it like the skeleton of the layout, with no visual styling
applied.

### 6. Components
Designed components, chunks of UI.  Think of it like the skin on top of the
skeleton, so anything with colours, borders, backgrounds etc.  If in doubt
whether some CSS/Sass code belongs in layout or components then put it within
components.

### 7. Utilities
Helpers and overrides. AKA Trumps.

## BEM

BEM groups selectors/classnames into three related groups and helps us to reason about
the architecture of the CSS/Sass from the HTML / Classnames.

* **Block:** The sole root of the component - It's recommended each BEM block lives within it's own file.
* **Element:** A descendant of the Block.
* **Modifier:** A variant or extension of the Block or Element.


```scss
.c-car {
  // Block
}
.c-car__wheel {
  // Block + Element
}
.c-car--ford {
  // Block + Modifier
}
.c-car--ford__wheel {
  // Block + Modifier + Element
}
.c-car__wheel--alloy {
  // Block + Element + Modifier
}
.c-car__wheel__tyre {
  // Block + Element + Element (ERROR!! don't do this!)
}
.c-car__tyre {
  // Block + Element (Instead do this!)
}

```

[Further reading](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)


<section class="o-section-md u-hard-top">
## BEMIT

BEMIT is an ITCSS extension of BEM that makes selectors more transparent and further
aids self documentation via namespacing and suffixes.  Ultimately it results in terse yet non-cryptic self describing classnames.

### Namespaces

We can give selectors namespaces that signify where within ITCSS the BEM block lives:
* `o-layout` The `o-` portion indicates that it lives within the **objects** ITCSS layer.
* `c-site-header` The `c-` portion of the namespace indicates that this block lives within the **components** ITCSS layer.

We also use namespacing to indicate state with the `is-` or `has-` and we also recommend you use `js-`
for JavaScript hooks - ensuring that classname follows the single responsibility principle having no styling attached.

[More on namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

### Responsive Suffixes

Used to denote what viewport-width breakpoint this class will be applied to.
`ln-u-hidden@md` means this class should only applied on viewports larger than the `screen-md`
breakpoint found in the [$ln-breakpoints](#responsive-breakpoints) setting.  Also note that these should also contain a call to the [respond-to](#respond-to) mixin.
[More on responsive suffixes](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/#responsive-suffixes)

**Note** The `@` symbol has to be escaped when writing Sass/CSS.

```scss
.ln-u-hiddenk@md {
	// Err!
}
.ln-u-hidden\@md {
	// Yay! (Screen sizes > 'md' breakpoint)
	@include respond-to('md') {
	  display: none;
	}
}
.ln-u-hidden\@max-sm {
  // Viewports < 'sm' breakpoint
  @include respond-to('max-sm') {
    display: none;
  }
}
```

```html
<div class="ln-u-hidden@max-sm">...</div>
```

### Math operators

There's a high probability that we require fractions or multiples of a
spacing unit on a particular chunk of UI.
For example you could create a utility class such as
`ln-u-push-bottom*2` will result in a margin bottom that is double the spacing
unit.

```scss
.ln-u-push-bottom*2 {
  //Err!
}
.ln-u-push-bottom\*2 {
  // Yay!
  margin-bottom: ($ln-spacing-unit * 2);
}
```

```html
<div class="ln-u-push-bottom*2">...</div>
```

Math operators are already used in width classes used in the grid system to denote the fractions:
`ln-u-1/2` will give a width of 50%.
If you're writing CSS/Sass that is using these operations you *must* escape
them.

```scss
.ln-u-1/2 {
	// Err!
}
.ln-u-1\/2 {
	// Yay!
	width: 50%;
}
```

```html
<div class="ln-u-1/2">...</div>
```

### Composing BEMIT classes

There's no reason why we cannot combine the above e.g.

```scss
.ln-u-1\/2\@sm {
	@include respond-to('sm') {
		width: 50%;
	}
}
```

```html
<div class="ln-u-1/2@sm"></div>
```
