// 1. console.log()
console.log("Hello, world!");
// Output: Hello, world!

// 2. console.error()
console.error("Oops! Something went wrong.");
// Output: Oops! Something went wrong.

// 3. console.warn()
console.warn("Warning: This action may cause data loss.");
// Output: Warning: This action may cause data loss.

// 4. console.info()
console.info("Info: This is an informational message.");
// Output: Info: This is an informational message.

// 5. console.table()
const tableData = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];
console.table(tableData);
/* Output:
┌─────────┬──────┬─────┐
│ (index) │ name │ age │
├─────────┼──────┼─────┤
│    0    │ John │  30 │
│    1    │ Jane │  25 │
└─────────┴──────┴─────┘
*/

                    Muhammad Asadullah

// 6. console.group()
console.group("Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
/* Output:
Group
  Message 1
  Message 2
*/

// 7. console.count()
for (let i = 0; i < 3; i++) {
  console.count("Counter");
}
/* Output:
Counter: 1
Counter: 2
Counter: 3
*/

// 8. console.time() and console.timeEnd()
console.time("Timer");
for (let i = 0; i < 1000000; i++) {
  // Perform some operation
}
console.timeEnd("Timer");
// Output: Timer: 8.319ms

// 9. console.clear()
console.clear();
// Output: Console is cleared.

// 10. console.dir()
const obj = { name: "John", age: 30 };
console.dir(obj);
/* Output:
{ name: 'John', age: 30 }
*/
