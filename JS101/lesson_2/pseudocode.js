// Write pseudocode (both casual and formal) for the following:
/*
1. A function that returns the sum of two numbers.

Get the first number
Get the second number
Add the two numbers
Return the result

START
SET firstNumber
SET secondNUmber
SET result = firstNumber + secondNumber
PRINT result
END


2. A function that takes an array of strings, 
and returns a string that is all those strings concatenated together.

Given an array with a collection of strings
Create a result variable to store the concatenated strings
Iterate through the array one by one
  Assign the value of the result to the result plus the current value
  Move to the next iteration
After iterating through the array, return the saved result

START
# Given an array with a collection of strings
SET result
SET iterator = 1
WHILE iterator <= length of the array
  SET result = result + current string value
  iterator = iterator + 1
PRINT result
END


3. A method that takes an array of integers, 
and returns a new array with every other element from the original array, 
starting with the first element.

Given an array of integers
Create an empty result array to store the results
Iterate through the given array
  If the index of the current element is even
    Store the current value to the result array
    Move to the next iteration
After iterating through the given array, return the saved result.

START
# Given array of integers
SET result
SET iterator = 0
WHILE iterator <= length of the array
  IF ITERATOR % 2 = 0
    PUSH result = current value
  ITERATOR = ITERATOR + 1
PRINT result
END


4. A function that determines the index of the 
3rd occurrence of a given character in a string.

Given a string
Given a character
Set an empty result variable to store the index of the character
Create a counter for to record the occurence for the character
Iterate through the string
  If the current character value matches the given character
    Add 1 to the counter
    If the counter is 3
      Set the result to the current index value of the character
      Break
    Move to the next iteration
After iterating 
  If the counter is less than 3
    Return null
  Else
  Return the result value

START
# Given a string
# Given a character
SET RESULT
SET COUNTER
SET ITERATOR
WHILE ITERATOR <= length of the string
  IF current value matches character
    COUNTER = COUNTER + 1
    IF COUNTER is equal to 3
      RESULT = index of the current character
      BREAK
    ITERATOR = ITERATOR + 1
IF COUNTER < 3
  PRINT null
ELSE
  PRINT RESULT
END
    

5. A function that takes two arrays of numbers and returns the result of merging the arrays.
Given array one
Given array two
Create a result array
Create an iterator
  Assign first value of array one to the result
  Assign first value of array two to the result
  Move to the next iteration
After iterating through the arrays, return the result

START
# Given array one
# Given array two
SET RESULT
SET ITERATOR = 0
WHILE ITERATOR <= length of array one
  RESULT = append current value of array one
  RESULT = append current value of array two
  ITERATOR = ITERATOR + 1
PRINT RESULT
END