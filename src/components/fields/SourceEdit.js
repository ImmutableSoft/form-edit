  // Edit Source field
  //  a Source field contains the external form and data
  //  that was submitted to this Queue.
  //  A form with a Source field is considered a Queue,
  //  or Queue capable.
  //    Options are Required, Optional, as well as Private, Public.
  //      A Required Source field will fail submission without a
  //      valid form and data in submission field.
  //      A Public Source field will allow submissions from other
  //      users, regardless of the scope of this form. A Private Source
  //      will NOT allow submission from other users forms.
  //
  // params are { field, index, handleFieldChange }
  const SourceEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;

//    console.log("QueueEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <>
              <select
                value={field.min} 
                name="min"
                onChange={(e) => handleFieldChange(e, index)} 
                required 
              >
                <option value="0">Required/Private</option> 
                <option value="1">Optional/Private</option> 
                <option value="2">Required/Public</option> 
                <option value="3">Optional/Public</option> 
              </select>
              <select
                value={field.max} 
                name="max"
                onChange={(e) => handleFieldChange(e, index)} 
                required 
              >
                <option value="0">Editable</option> 
                <option value="1">Read-Only</option> 
              </select>
            </>
          );
  }

export default SourceEdit;
