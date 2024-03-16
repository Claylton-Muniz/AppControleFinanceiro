declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*' {
  const value: any;
  const Input: any;
  const InputDate: any;
  export {InputDate};
  export {Input};
  export default value;
}
