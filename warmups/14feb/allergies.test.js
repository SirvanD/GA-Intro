test("not allergic to anything", () => {
  const allergies = new Allergies(0);
  expect(allergies.isAllergicTo("eggs")).toBe(false);
});

test("allergic only to eggs", () => {
  const allergies = new Allergies(1);
  expect(allergies.isAllergicTo("eggs")).toBe(true);
  expect(allergies.isAllergicTo("peanuts")).toBe(false);
});

test("allergic to eggs and something else", () => {
  const allergies = new Allergies(3);
  expect(allergies.isAllergicTo("eggs")).toBe(true);
});

test("allergic to something, but not eggs", () => {
  const allergies = new Allergies(2);
  expect(allergies.isAllergicTo("eggs")).toBe(false);
});
