  // Edit Purchase field
  //  params are { field, index, handleFieldChange }
  const PurchaseEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;

//    console.log("TextEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <input 
              type="text"
              placeholder="Stripe Product Id"
              name="value"
              value={field.value} 
              onChange={(e) => handleFieldChange(e, index)}
              required
            />
          );
  }

export default PurchaseEdit;
