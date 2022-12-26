export function mergeEventHandlers(handlers) {
  const filteredHandlers = handlers.filter((handler) => handler !== undefined)
  if (filteredHandlers.length === 0) return undefined
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (filteredHandlers.length === 1) return filteredHandlers[0]
  return (e) => {
    handlers.forEach((handler) => {
      if (handler) {
        handler(e)
      }
    })
  }
}
