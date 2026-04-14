---
name: add-solution
description: Create the folder structure for algoexpert tracking and update the metrics on each readme
---

# add-solution

Create a folder in the right place for the solution provided by the user

## Instructions

1. **Ask for topic**: Request the user the topic of the problem
2. **Get problem difficulty**: Request the user the url of this problem and gather difficulty
3. **Ask for code solution**: Ask the code solution for the topic. If the problem has two solutions, merge them in one file
4. **Create folder**: From the solution take the name of the function and create a folder using kebab-style folder in the right difficulty
5. **Add code**: Create an index.js and include the code passed as input
6. **Add problem description**: The description image can be provided by the user, or ask for the image of the description and add it next to index.js
7. **Add readme**: After having the solution, the description image, add a new readme with both elements added
8. **Commit changes**: Run commit skill to set the changes

### Topics

- arrays
- binary-trees
- BST
- code-challenges
- dynamic-programming
- famous-algorithms
- graphs
- greedy-algorithms
- heaps
- linked-lists
- recursion
- searching
- sorting
- stacks
- strings
- tries

### Difficulties

- Easy
- Medium
- Hard
- Very hard

### Rules

- All the solutions will be under `Javascript` folder
- When updating the readme remember to:
  - Update total metrics
  - Add the topic and the link under the right difficulty
- If the solution has multiple solutions merged them in one file (index.js)
  - Modify the solution function name with V1...Vn. Where n is the total solutions provided
  - Remember to remove extra `export`s
- Run the commit skill using the following message:

```
I've added a new solution in ${path}, commit it
```
