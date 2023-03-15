# Environment
Use the environment you are most comfortable with. I recommend using create-react-app or similar and publishing your work to a hosted git repo (on github or your preferred provider) so that we can see your commit history. Alternatively, you can work from a blank React template in CodeSandbox or similar.

# Specs 
Write a functional component to render a list of items and their prices. Above the list, there should be two input fields that allow the user to enter the name of an item and a price and append a row to the list on submit. To the right of each row, there should be a button that allows the user to remove that row from the list. An example of the complete component with three items in the list is shown below.



The ‘Submit’ button should be disabled until both inputs have values. For prices, do not allow number values less than zero (how you enforce this is up to you), and the value displayed should be in the common US dollar format with a preceding dollar sign and decimal precision of two.


# Bonus Points (optional enhancements)
Write your solution in TypeScript (recommended but not required)
Style your components using a style framework, CSS, or inline styles
Make the item/price table responsive with flexbox or CSS grid. Feel free to use a style framework like bootstrap to help with this, or you can write the styles yourself.
An additional ‘filter’ input above the table that when a string is entered, filters the list of items to those whose ‘name’ property contains the filter string as a substring. For example, if “tom” was entered, only the row with “Tomatoes” would remain in the list, but if “a” is entered all three would remain.
