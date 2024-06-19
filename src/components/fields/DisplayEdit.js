  // Edit Display field
  //  params are { field, index, handleFieldChange }
  const DisplayEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;

//    console.log("TextEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <textarea cols="40" rows="4" 
              placeholder="Value"
              name="value"
              value={field.value}
              onChange={(e) => handleFieldChange(e, index)}
              style={{width: "32%"}}
            />
          );
  }

export default DisplayEdit;
