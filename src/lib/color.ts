export const variants = [
  "primary",
  "success",
  "danger",
  "warning",
  "violet",
  "indigo",
  "purple",
];

export function getRandomColor(variants: string[]) {
  return variants[Math.floor(Math.random() * variants.length)];
}

export function createBGVariants(color: string | boolean, mode: string) {
  switch (mode) {
    case "gradient":
      return variants.reduce(
        (object, variant) => ({
          ...object,
          [`from-${variant}-400 to-${variant}-600`]: color === variant,
        }),
        {}
      );

    case "background":
      return variants.reduce(
        (object, variant) => ({
          ...object,
          [`bg-${variant}-500`]: color === variant,
        }),
        {}
      );

    case "border":
      return variants.reduce(
        (object, variant) => ({
          ...object,
          [`border-${variant}-500`]: color === variant,
        }),
        {}
      );
  }
}

export function createClassName(color: string) {
  return `from-${color}-400 to-${color}-600`;
}

export function addVariants(color: string) {
  return variants.push(color);
}
