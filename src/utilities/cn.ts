export function CnClassNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
  }