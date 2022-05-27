export function foldl<T, V>(arr: T[], init: V, foldFn: (acc: V, item: T, index: number, arr: T[]) => V) {
    return arr.reduce(foldFn, init);
}
