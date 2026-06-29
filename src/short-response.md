# Short Response Questions

## Question 1: Promise States

What are the three states of a Promise? For each state, explain what it represents and which Promise method (`.then()` or `.catch()`) is used to handle it.

**Your Answer:**
The first state is pending. This is when the promise is first created but hasn't resolved yet. `.then()` and `.catch()`, don't handle this state, the just wait for it to change.
The next stage is fullfilled, which just means the promise was successfull, this stage is handled by the `.then()` method were we get the resolved value back.
the third stage is rejected, which means either an error or the promise failed. This is handled by the `.catch()` method.



## Question 2: Callback Hell vs. Promise Chaining

Explain why deeply nested callbacks (callback hell) are problematic, and describe how Promise chaining with `.then()` solves this problem.

**Your Answer:**
When you have nested callbacks, it is hard to keep track of  and follow due to all the indentations. With the `.then()` method they don't have to be nested. 



## Question 3: Error Handling with `.catch()`

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, what happens? Why is this behavior useful?

**Your Answer:**
The error skips the third `.then()`, and goes to the `.catch()`. This is useful because one `catch()` can handle the errors from any point in the chain.
