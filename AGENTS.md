## Style
* don't use semicolons
* prefer a functional style
* write modern js: ES2025+, es modules, fetch async/await

## Tools
* use oxfmt for formatting, oxlint for linting
* use vitest for testing
* use vite for assembly

## Tests
* Only feature tests (mock backend response backend is in path ~/project/tasks-api)
* unit tests forbidden
* Name each test after the scenario it verifies, omitting the English grammatical articles "a", "an", and "the".

## Boundaries
index.js job is only do orchestration and should not contain business logic, it talks to single responsibility es modules, which is public contexts, which define public api

## File changes and decisions

* Do not create, modify, or delete any files without prior agreement with the user.
* If any part of a task leaves room for the agent to make a choice, treat that choice as an unresolved decision and discuss it with the user before proceeding.
* Do not choose any implementation details at the agent's discretion.

## Unrequested tasks and issues

* Leave working behavior unchanged unless the requested outcome requires a change or a confirmed defect is in scope. A hypothetical failure is not a defect.
* Do not attempt to solve tasks that the user has not requested.
* Do not propose solutions or write a plan to fix an issue unless the user has requested it.
* If you notice an issue outside the user's request, you may only point it out and ask whether the user wants to address it.
* If the user declines, ignore the issue.
