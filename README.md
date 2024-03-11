# jscalc

simple js calc

In this project, the goal was to use basic JS knowledge to build a calculator mimicking a lot of the core behaviors of your iOS mobile calculator.

Some of the challenges faced starting on the CSS was use of the CSS-grid layout for the calculator keys. Based on flexbox vs grid behavior, I decided to go with grid as the better method to structure the keys. I wasn't too familiar with writing the CSS and more importantly the behavior of those CSS rules and their interactions. After some practice, I was able to figure out the layout component and even mimic the 2 column spanned '0' key. I feel a bit more comfortable now with Grid and can see myself using it with a bit less challenge - but more more to learn of course.

Laying out the HTML wasn't too bad, I opted to ID/class certain 'p' elements to help on the doc querySelector side in JS. I opted for differentiating between number keys, operator keys, then individually selecting keys such as equals & decimal.

On the JS side, I faced the most challanges. Firstly, how to divide up all the functionaility necessary for te user to use the calculator. I quickly realized that a simple 4 operation calculator can have a lot to think about from the programming side. I addressed this by guidng myself through the simple user experience or 'happy case' of inputting a number, selecting an operation, then another number and ending with the equals selection.

Writing the logic for this calculator really enforced the practice of dividing up the larger programming goal to smaller tasks at a time. I got more comfortable with doing this and thinking about the logic in smaller chunks at a time - helped build upon it easier as well. Commenting out the particular part I was working on at the time helped guide me likewise.

Most challenging was definitely how to mimic the behavior of your iOS calcultor which will continue to show number1 even after operator is pressed. It will only remove it after the next input after operator key is pressed. This begins 'recording' of number 2. The 3 inputs are locked into the calculate function which is called upon equals being clicked or enter for keyboard input. I sought guidance online & stack overflow. I first tried reading the logic of calculators built by others and learned a lot which helped in my approach. I got help on SO which was very insightful and showed me I was repeating code far too much and needing to use smaller functions - in addition to employing the use of the string.includes method which made my input checks simpler. After it was all said and done I'd say I feel I reinforced basics of JS through much trial and error. It has made me curious as well about state management and how learning that in the future could help improve this project.
