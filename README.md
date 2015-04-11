Movement
========

SCSS animation framework for creating, composing, sequencing, and using animations.

Conforms (as closely as possible) to the [W3C Web Animations spec](http://w3c.github.io/web-animations/).

**Current status: Design/Architecture**

```scss
// Simple animations
.foo {
  @include m-animate((left: 300px), 3000ms);
  
  // Animate .foo on hover
  @include m-animate((color: green), 0.5s);
}

// Keyframe effects
.bar {
  $effect-1: m-keyframe(&, (top: 200px), 1s);
  $effect-2: m-keyframe(&, (opacity: 0.5), 0.5s);
  
  &.active {
    @include m-play($effect-1);
  }
  
  &.inactive {
    @include m-play($effect-2);
  }
}
```

