  // Edit Image field
  //  params are { field, index, handleFieldChange }
  const ImageEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;

//    console.log("TextEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <select
              value={field.min} 
              name="min"
              onChange={(e) => handleFieldChange(e, index)} 
              required 
            > 
              <option value="0">private URL</option> 
              <option value="1">data URL</option> 
              <option value="2">public URL</option> 
            </select>
          );
  }

export default ImageEdit;
