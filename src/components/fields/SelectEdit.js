  // Edit Purchase field
  //  params are { field, index, handleFieldChange }
  const SelectEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;

//    console.log("TextEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <input 
              type="text"
              placeholder="Options (comma delimited)"
              name="description"
              value={field.description} 
              onChange={(e) => handleFieldChange(e, index)}
              required
            />
          );
  }

export default SelectEdit;
