# Gatsby Typescript Starter

Simple gatsby starter with Typescript support.

## Component folder structure by example

```
/components
  /components
    /GlobalComponent
      GlobalComponent.tsx

  /ComponentA
    /components
      /ComponentASubComponent
        ComponentASubComponent.tsx
    ComponentA.tsx

  /ComponentB
    ComponentB.tsx
```

In the example above:

- `ComponentA` could import `ComponentASubComponent`
- `ComponentB` could **not** import `ComponentASubComponent`
- Both components could import `GlobalComponent`

```
/ComponentA
  /components
  /images
  ComponentA.tsx
  ComponentA.css
```

Each component folder should hold all it's related files including styles and other assets. There are almost no exceptions for sharing assets globally, so thread carefully.

## Component file structure by example

```javascript
/**
 * Imports
 */

import React from 'react'

/**
 * Types
 */

type Props = {
  title: string
  subtitle?: string
}

/**
 * Styles (if using CSS-in-JS)
 */

const Wrapper = styled.section`
  display: flex;
`

const Title = styled.h1`
  font-weight: bold;
`

const Subtitle = styled.p`
  font-size: 0.9em;
`

/**
 * Main Component
 */

export default function MyComponent({ title, subtitle }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  )
}

```
