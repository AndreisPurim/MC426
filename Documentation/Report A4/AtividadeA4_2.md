# Atividade A4.2

Nesta atividade, fizemos detectamos e refatoramos os seguintes 4 _Code Smells:_

 1. **Frontend Bloater:** [#69](https://github.com/AndreisPurim/MC426/issues/69) UserTable.tsx is a single gigantic +250 line function that operates the table. Separated into
	 - UserTable: shows the rows and calls the other functions
	 - UserTableSelector: selects which table (favorites, recent, etc...) is shown
	 - UserTableToolbar: is the toolbar used to select columns
2. **Frontend Bloater:** [#69 (as well)](https://github.com/AndreisPurim/MC426/issues/69)  Questions.tsx has one function with +300 lines that creates the questions for the forms. Separated into:
     - Question: Holds the main bulk of the question, calls other functions
     - QuestionFooter: Holds variable name and if it is required
     - QuestionHead: Functionalities such as question text and type
     - QuestionChoices: provides a draggable field for question choices
3.  **Backend Bloater:** [#64](https://github.com/AndreisPurim/MC426/issues/64) On users_controller.py the patch method could receive an object as a parameter instead of separated strings. Here there is a bloater code smell. The refactoring method used was keeping everything inside an object
4. **Backend Dispensable:** [#63](https://github.com/AndreisPurim/MC426/issues/63) On users_controller.py we have a dispensable code smell at the add_item method. This method was necessary before the sql database creation. It's no longer necessary
