let x;

beforeEach(() => {
    x = 5;
});
  
afterEach(() => {
    console.log("Writing it after tests");
});
  

// describe("Nested Tests", () => { // This 4 playwright
//     beforeEach(() => {
//         console.log("Outer beforeEach");
//     });

//     test("After that test it will be one extra message", () => {
        
//         beforeEach(() => {
//             console.log("It will be only once");
//         })
        
//         test("tests if x is exists", () => {
//             expect(x).toBe(5);
//         });    
//     })
// });


test("example test", () => {
    expect(5).toBe(5)
});
