/*** Convert a string to float; failure results in None.
   */
let optFloat: (option(string)) => option(float);

/*** Get <input> element’s value
 */
let getInputValue: (option(Dom.element)) => option(string);

/*** Set text of an element
 */
let setText: (string, option(Dom.element)) => unit;

/*** Given the id of an <input> element, get its numeric value
 */
let getNumValue : (string) => option(float);

/*** Average of two optional floats */
let avg: (option(float), option(float)) => option(float);

/*** Mouse click handler */
let calculate: (Dom.mouseEvent) => unit;
