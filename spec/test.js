function multiply(a, b) {
    return a * b;
}

test('multiplies 4 * 2 to equal 8', () => {
    expect(multiply(4, 2)).toBe(8);
});