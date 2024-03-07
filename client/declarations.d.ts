declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*/' {
  const value: any;
  const Input: any;
  export {Input};
  export default value;
}
