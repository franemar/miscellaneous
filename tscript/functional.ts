let fst: (a: any, b: any) => any = (a, b) => a;
// or more precisely:
//let fst: <T, U>(a: T, b: U) => T = (a, b) => a;
let o: { n: number; xs: object[] } = { n: 1, xs: [] };
