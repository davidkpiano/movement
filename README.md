Cadenza Movement
========

Sass/SCSS/CSS animation framework for creating, composing, sequencing, and using animations.

## The animation model

```scss
// var animation = new Animation(targetElement,
//     [{left: '0px'}, {left: '100px'}], 2000);
.targetElement {
  @include animation($duration: 2000) {
    @include keyframe { left: 0; }
    @include keyframe { left: 100px; }
  }
}
```

## Animating between keyframes

**KeyframeEffect**
```scss
@include keyframe($offset: 0.2) { left: 35px; }
@include keyframe($offset: 0.6) { left: 50px; }
@include keyframe($offset: 0.9) { left: 70px; }
```

If the offset is not specified, keyframes are evenly distributed at offsets between 0 and 1.

```scss
@include keyframe { left: 35px; }
@include keyframe { left: 50px; }
@include keyframe { left: 70px; }
```

## Sequencing and synchronizing animations

Two different types of TimingGroups (AnimationGroup and AnimationSequence) allow animations to be synchronized and sequenced.

**AnimationGroup** (TimingGroup) plays animations synchronized (in parallel):
```scss
// var animationGroup = new AnimationGroup([new Animation(...), new Animation(...)]);
@include animation-group {
  @include animation() { ... }
  @include animation() { ... }
}
```

**AnimationSequence** (TimingGroup) plays animations in sequence:
```scss
// var animationSequence = new AnimationSequence([new Animation(...), new Animation(...)]);
@include animation-sequence {
  @include animation() { ... }
  @include animation() { ... }
}
```

Because `Animation`, `AnimationGroup`, `AnimationSequence` are all `TimedItems`, groups can be nested:
```scss
@include animation-group {
  @include animation-sequence {
    @include animation() { ... };
    @include animation() { ... };
  }
  @include animation() { ... };
}
```

Groups also take an optional `TimingDictionary` parameter (see below), which among other things allows iteration and timing functions to apply at the group level:
```scss
// var animationGroup = new AnimationGroup([new Animation(...), new Animation(...)], {iterations: 4});
@include animation-group($iterations: 4) {
  ...
}
```

