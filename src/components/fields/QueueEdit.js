  // Edit Queue field
  //  a Queue field contains the form path that the submission is
  //  to be saved under. <username>/<formname>.
  //    ex) TestOrg/TestForm
  //  NOTE: This Queue To form MUST contain a SourceField or
  //  the submission will fail.
  //
  // params are { field, index, handleFieldChange }
  const QueueEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;

//    console.log("QueueEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <>
              <input 
                type="text"
                placeholder="Form Path to Queue Submission To"
                name="value"
                value={field.value} 
                onChange={(e) => handleFieldChange(e, index)} 
                required
              />
            </>
          );
  }

export default QueueEdit;
