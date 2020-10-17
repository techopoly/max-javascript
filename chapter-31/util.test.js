const { generateText } = require('./util');

test('should output name and age', ()=>{
    const text = generateText('Ishmam', 23);
    expect(text).toBe('Ishmam (23 years old)');
    const text2 = generateText('Tasin', 15);
    expect(text2).toBe('Tasin (15 years old)')
});

test('should output data-less text', ()=>{
    const text = generateText('', null);
    expect(text).toBe(' (null years old)')
})
