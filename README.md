# Mars Rovers

Mars Rovers is one of the famous puzzle asked by many companies while recruiting people for them.

## Subject

You're part of a team developing an API for a NASA mars rover. The surface of the planet is represented as a cartesian grid from 0,0 in the south west to 20,20 in the north east.
At initialisation you will be given the origin position and direction of the rover, the controllers at NASA will send an array of characters representing commands to be given to the rover.
The commands are: 'L' for a 90 degree turn left, 'R' for a 90 degree turn right, 'F' to move one space forward and 'B' to move one space backwards.

You should write some code to take the initial position and array of commands and calculate the result position and direction of the rover.
Remember TDD and try to use design patterns in you solution.

## Example

Test Input: [10, 10, N], ['F', 'F', 'L', 'F', 'L', 'B']
Expected Output: [9, 13, S]

## Extensions

Add the ability to specify the grid size for other planetary options.
Add the ability to retrieve the location history of the rover.
Implement wrapping around the grid (as planets are spheres), when the rover reaches the edge of the grid and continues to move it should move to the opposite side of the grid.
Add the ability to load an array of obstacles positions.
Add the ability to add multiple rovers and prevent collisions between them.
