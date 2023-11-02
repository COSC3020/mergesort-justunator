[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11754427&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

My forloop that determines the size of the partitioned array starts at size of 1 and works itself up until the size of the partition matches the full size of the array which should be log(n), the actual sorting of the array between the partitioned parts should take $n^2$ time as compares each number of the left side with every number on the right side so we end up going through n numbers n times in order to sort them. Therefore, worst-case should be $\Theta(n^2log(n))$ as it has to search through n numbers log(n) times.
