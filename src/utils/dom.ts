export const hasClassName = (dom: HTMLElement, name: string): boolean => {
  const classNameList = dom.className.split(' ')
  return classNameList.includes(name)
}
