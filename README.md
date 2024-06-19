# Getting Started

FormAlly form editor for ReactJS, creates .json definitions for rendering
with @immutablesoft/form-render. To see this library in action,
and to view documentation of supported form fields, visit
https://formally.immutablesoft.org

## Install the library

```
npm install --save @immutablesoft/form-edit
```

## Import and Use the library

This application requires React (a peerDependency of the library).
Here is an example import and basic usage. Typically the resulting 'formData'
will be used for a call to FormRender, or saved to a file for later use
with FormRender (an import from @immutablesoft/form-render).

```
import { FormEdit, FormEditToObjectArrayNoHeader } from "@immutablesoft/form-edit"

...

  const [formData, setFormData] = useState("");

  // ---------------------------------------------------------------
  // Submit button handling events for UI forms
  // ---------------------------------------------------------------
  const handleEditSubmit = (event) => { 
    event.preventDefault(); 
    const data = new FormData(event.target);

    // Without form name, parse the form and populate object array
    var formData = FormEditToObjectArrayNoHeader(data, "formally_separator_3210");

    setFormData(formData);
  };

  return (
      <div align="center">
        <FormEdit nameObj={form.formally} initialFields={form.form}
                  handleEditSubmit={handleEditSubmit} />
      </div>

```
