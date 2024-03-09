import rpn from "../../src/listas/l1/qst6_l1.js";

// test("((a+b)*(z+x))", () => {
//     expect(rpn("((a+t)*((b+(a+c))^(c+d)))")).toBe("ab+zx+*");
// });

test("(a+(b*c))", () =>{
    expect(rpn("(a+(b*c))")).toBe("abc*+");
});


test("((a+b)*(z+x))", () =>{
    expect(rpn("((a+b)*(z+x))")).toBe("ab+zx+*");
});

test("((a+t)*((b+(a+c))^(c+d)))", () =>{
    expect(rpn("((a+t)*((b+(a+c))^(c+d)))")).toBe("at+bac++cd+^*");
});


test("a+b*c-d", () =>{
    expect(rpn("a+b*c-d")).toBe("abc*+d-");
});