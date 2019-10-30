export function get(obj: { [k: string]: any }, path: string, defaultValue: any = path): any {
  const pathArray = path.split('.');

  let index = 0;
  let length = pathArray.length;
  let value = obj;

  while (value != null && index < length) {
    value = value[pathArray[index++]];
  }
  return index && index == length ? value : defaultValue;
}
