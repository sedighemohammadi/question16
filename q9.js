// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================
// it can sometimes lead to undesirable behavior. This is particularly true when you have event listeners on multiple levels of the DOM hierarchy.

// to prevent event bubbling, we can use the stopPropagation() or stopImmediatePropagation()
// Event bubbling can be problematic as it may lead to unintended behavior, especially when multiple event listeners are present at different levels of the DOM. This can result in both parent and child event listeners being triggered.

// To prevent event bubbling, you can use:

// 1. stopPropagation(): Prevents the event from propagating to parent elements.
// 2. stopImmediatePropagation(): Prevents the event from propagating and stops other listeners on the same element from executing.
