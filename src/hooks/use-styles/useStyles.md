# useStyles

## Emotion

- At this time of writing the code Emotion types are a mess.
- When the hook satisfies all types it can't be feed with data.
- So the hook works now without Emotion types.

Example:

```js
const style3 = {
  label: "style3",
  backgroundColor: "red",
};

css(style3); // works fine
```

```ts
const style3 = {
  label: "style3",
  backgroundColor: "red",
};

css(style3); // Gives an error
```
