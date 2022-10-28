# Mr. Roboger's Neighborhood

#### By Kirsten Opstad

#### A web application that takes a number from the user and returns algorithmically-constructed neighborly nonsense

## Technologies Used

* HTML 
* CSS 
* Bootstrap
* JavaScript

## Description

### Objectives (MVP)

Mr. Roboger's Neighborhood will:
 * Take a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:
  * For numbers that contain a 1, all digits are replaced with "Beep!"
    * For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
  * For numbers that contain a 2, all digits are replaced with "Boop!"
    * For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
  * For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
    * For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"
  * Handle substitutions following this hierarchical structure:
    * The first substitution should apply unless the second does
    * The second substitution should apply unless the third one does
      * For example, in your finished program:
        * The number 13 should be replaced with "Won't you be my neighbor?"
        * The number 12 should be replaced with "Boop!".
        * The number 23 should be replaced with "Won't you be my neighbor?"
        * The number 21 should be replaced with "Boop!".
* Additional requirements:
  * JavaScript business logic and user interface logic are separate.
  * Tests are included for each business logic behavior and code is committed after each test passes.
  * Application implements a loop and works as expected.
  * The user can use the application repeatedly and see new results.

<!-- This template includes placeholders for:

[x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images)

[x] [Link to operational site](http://www.kirstenopstad.github.com/<REPOSITORY NAME>) -->

### Goals
1. Meet MVP requirements.
2. Add images, styling, and custom animations.
3. Implement different behaviors/effects/images for different inputs.

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Tests
```
Describe: roboTranslateNums()

Test: "It should return 0 if the user input is not a number"
Code: roboTranslateNums(!);
Expected Output: 0

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: roboTranslateNums(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace any elements that include a 1 with 'Beep!'"
Code: roboTranslateNums(5);
Expected Output: [0, "Beep!", 2, 3, 4, 5]

Test: "It should replace any elements that include a 2 with 'Boop!'"
Code: roboTranslateNums(5);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]

Test: "It should replace any elements that include a 3 with 'Won't you be my neighbor?'"
Code: roboTranslateNums(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "It should replace any elements that contain both a 1 and a 2 with "Boop!"
Code: roboTranslateNums(12);
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]

Test: "It should replace any elements that contain both 1 and 3 with 'Won't you be my neighbor?'."
Code: roboTranslateNums(13);
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

Test: "It should replace any elements that contain both a 2 and 3 with "Won't you be my neighbor?"
Code: roboTranslateNums(23);
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep", "Beep", "Beep", "Beep", "Beep", "Beep", "Boop!", "Boop!", "Won't you be my neighbor?"]

```

## Known Bugs

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

MIT License

Copyright (c) 2022 Kirsten Opstad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.