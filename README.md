# Casumo Javascript Style Guide

Some code style choices are beyond the scope of linting and static analysis or are of particular interest to people,
and we hope these are raised as issues for discussion so that we can make the best decision for the team. This is a
place to capture these discussions for future generations.

# Table of Contents
1. [Style Guide](#style-guide)
    1. [Method Definition](#method-definition)
    2. [Knockout Punches](#knockout-punches)
    3. [Multi line conditionals](#multi-line-conditionals)
    4. [Closing bracket for multi line expressions](#closing-bracket-for-multi-line-expressions)
    5. [Comments](#comments)
2. [Contribution](#contribution)

## Style Guide

### Method definition
Keep the definition and the implementation together.

```javascript
function Foo() {
}

// Bad
Foo.prototype.bar = bar;
function bar () {
    // ...
}

// Good
Foo.prototype.foo = function () {
    // ...
}
```

### Knockout Punches
Use curly braces wherever you can instead of `data-bind="..."` attributes.
Add spaces before and after curly braces.

```html
<!-- Bad -->
<span>{{{something}}}</span>

{{#if: condition}}
    <span>foo</span>
{{/if}}

<!-- Good -->
<span>{{{ something }}}</span>

{{ #if: condition }}
    <span>foo</span>
{{ /if }}
```

### Multi line conditionals
Put conditionals at the end of the line.

```javascript
// Bad
var someVeryLongExpression === iLikeTurtles || anotherLongExpressionOnAnotherLine
    || somethingFooBar;

// Good
var someVeryLongExpression === iLikeTurtles ||
    anotherLongExpressionOnAnotherLine ||
    somethingFooBar;
```

### Closing bracket for multi line expressions
Closing bracket on a new line, in line with the start of the expression.

```javascript
// Bad
likesTurtles(
    fetchKidFromTheInternet());

// Good
likesTurtles(
    fetchKidFromTheInternet()
);
```

### Comments

**Single line comments** - use `//`
```javascript
// One line comment
```

**Single line comments** - start with a capital letter
```javascript
// Wrong
// one line comments

// Good
// One line comment
```

**Multi line comments** - use `//` for low level code comments
```javascript
// Multi line comment
// for low level code comments
var foo = 'bar';
```

**Multi line comments** - use `/* ... */` for high level code comments
```javascript
/**
 * Multi line comment
 * for high level ones (namely: docs)
 * @param {String} foo Parameter description.
 */
function foo (bar) {
    // ...
}
```

## Contribution
**Just open a PR** with the suggestion.

The majority of the frontenders has to agree on something to be merged in.

For the poll either use `Slack` or use :+1: and :-1: in the PR.

Don't forget to link the poll / discussion.