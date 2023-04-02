var superAdd = (a, b) => {
    return a + b + 1000;
}
// add функцийг const-оор бичсэн тул дахин add функц бичих боломжгүй
export const add = (a, b) => superAdd(a, b);
export let multiple = (a, b) => a * b;
export const id = 25;