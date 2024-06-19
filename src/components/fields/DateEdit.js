  // Edit Date/Datetime field
  //  params are { field, index, handleFieldChange }
  const DateEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;

//    console.log("TextEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <>
              <input 
                type={field.type}
                placeholder="Min"
                name="min"
                value={field.min} 
                onChange={(e) => handleFieldChange(e, index)}
              />
              <input 
                type={field.type}
                placeholder="Max"
                name="max"
                value={field.max} 
                onChange={(e) => handleFieldChange(e, index)} 
              />
            </>
          );
  }

export default DateEdit;
