import priorite from "../src/listas/qst5_l1.js";

test("formatacao falsa", () => {
    expect(priorite("( ( ) ]")).toBe(false);
});

test("formatacao valida", () => {
    expect(priorite(" [ ( ) [ ( ) ] ] ( )")).toBe(true);
});