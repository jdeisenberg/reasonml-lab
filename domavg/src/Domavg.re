open Webapi.Dom;

let optFloat = (str : option(string)) : option(float) =>
  switch (str) {
    | Some(s) =>
      switch (float_of_string(s)) {
        | fNum => Some(fNum)
        | exception (Failure("float_of_string")) => None
      };
    | None => None
  };

let getInputValue  = (el: option(Dom.element)) : option(string) => {
  switch (el) {
    | Some(inputElement) => Some(HtmlElement.value(Element.unsafeAsHtmlElement(inputElement)))
    | None => None
  };
};

let setText = (text: string, el: option(Dom.element)) : unit => {
  switch (el) {
    | Some (element) => Element.setTextContent(element, text)
    | None => ()
  };
};

let getNumValue = (id : string) : option(float) => {
  Document.getElementById(id, document)
  |> getInputValue
  |> optFloat
};

let avg = (optX : option(float), optY: option(float)) : option(float) => {
  switch (optX, optY) {
    | (Some(x), Some(y)) => Some ((x +. y) /. 2.0)
    | (_, _) => None
  };
};

let calculate = (_evt: Dom.mouseEvent) : unit => {
  let outputElement = Document.getElementById("output", document);
  let result = avg(getNumValue("input1"), getNumValue("input2"));
  switch (result) {
    | Some (n) => setText(string_of_float(n), outputElement)
    | None => setText("", outputElement)
  };
};

switch (Document.getElementById("calculate", document)) {
  | Some (el) => EventTarget.addClickEventListener(calculate, Element.asEventTarget(el))
  | None => ()
};

  
