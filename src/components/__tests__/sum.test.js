import { sum } from "../sum";

test('Check sum of two positive numbers', () => { 
    expect(sum(2,4)).toBe(6);
 })




// Different types of testing?
// -Manual Testing 
// -Automation Testing 
//     -Selenium Testing 
// -End to end (E2E) testing

// -Unit Testing
// -Integration Testing


// - Install React Testing Library -> npm install --save-dev @testing-library/react
// - Install Jest  -> npm i -D jest
// - configure jest -> npx jest --init
// -Install jest-environment-jsdom -> npm i -D jest-environment-jsdom 
// -configure babel -> npm install --save-dev babel-jest @babel/core @babel/preset-env (jest-babel config)
                    // --> import error
                    // --> syntax 'jsx' isn't currently enabled -> npm i -D @babel/preset-react
