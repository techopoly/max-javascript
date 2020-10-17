const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', ()=>{
    const text = generateText('Ishmam', 23);
    expect(text).toBe('Ishmam (23 years old)');
    const text2 = generateText('Tasin', 15);
    expect(text2).toBe('Tasin (15 years old)');
});

test('should output data-less text', ()=>{
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

//31-5
/* integration test: 
we take a funtion that has dependencies which means that function run other function inside that function and if 
those inside functions fail to te execute then the whole function fails.
thats why we do unit testing for all those inside function. ex: the 2 test above is unit tested
and the function below is integration test which tests if all the pieces of all unit is syncing properly when they 
are executed as dependencies. we are doing integration test for checkAndGenerate()
so even though units might work properly they can fail when combined together and one depends on the other and thats
why we do integration testing 
*/

test('should check and generate a valid text', ()=>{
    const text = checkAndGenerate('md', 40);
    expect(text).toBe('md (40 years old)');
});
