function castArray(input: string | string[]): string[] {
  return Array.isArray(input) ? input : [input]
}

export { castArray }
