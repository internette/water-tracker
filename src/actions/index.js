export const init = (emitter, args) => {
  return {
    type: 'init',
    lastReset: args.resetDate,
    cups: args.cups
  }
}

export const setTopStatus = (emitter, keepOnTop) => {
  return {
    type: 'on-top-check',
    keepOnTop
  }
}