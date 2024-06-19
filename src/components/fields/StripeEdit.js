  // Edit Stripe field
  //  params are { field, index, handleFieldChange }
  const StripeEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;
    const stripePk = params.stripePk;

//    console.log("TextEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <>
            {
              stripePk === undefined ?
                  ""
                :
                (stripePk.length > 0) ?
                <input 
                  type="text"
                  placeholder="Publishable Key"
                  name="value"
                  defaultValue={stripePk} 
                  readOnly 
                />
                :
                <input 
                  type="text"
                  placeholder="Publishable Key"
                  name="value"
                  value={field.value} 
                  onChange={(e) => handleFieldChange(e, index)} 
                  required 
                />
            }
            </>
          );
  }

export default StripeEdit;
