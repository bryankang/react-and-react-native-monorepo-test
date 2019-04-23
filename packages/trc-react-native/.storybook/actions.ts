export function action(message: string) {
  return (...args: any) => {
    console.log(args, message);
  }
}
