const add = (a, b) => a + b;
const generateGreeting = (name='Annonymouse') => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(3, 4);
  // if(result !==7){
  //   throw new Error(`You added 4 and 3. The result was ${result}, Expect 7`);
  //}
  expect(result).toBe(7);
});

test('should generat a greeting with a name', () => {
  const result = generateGreeting('jessie');
  expect(result).toBe('Hello jessie');
});

test('should generat a greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Annonymouse');
});