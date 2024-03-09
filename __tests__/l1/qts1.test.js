import inverte from "../src/listas/qst1_l1";

test("verifica inversao", 
    () => {
        expect(inverte("ABC")).toBe("CBA");
    }
);