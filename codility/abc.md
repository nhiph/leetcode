Problem:
Given an array of integers A of size N, where each element represents the height of a block. There are two frogs sitting on adjacent blocks initially (say index i and i+1), and they want to jump away from each other.

Each frog can jump to the next block only if:

The height of the next block is equal to or greater than the current block.

They can only jump in their respective direction (left or right).

They stop when they can no longer jump.

The goal is to maximize the distance between them after both have jumped as far as they can.

Constrains:
N is interger within the range of [2, 200000]
Each element of array blocks is an interger within the range [1, 1000000000]

Write an efficient argorithm solution function with those requirements:

Example:
solution([2,6,5,8]) should return 3
solution([1,5,5,2,6]) should return 4
solution([1,1]) should return 2
solution([1,2,3,4,5]) should return 5
solution([5,4,3,2,1]) should return 5
