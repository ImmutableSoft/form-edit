  // Edit Captcha field
  //  params are { field, index, handleFieldChange }
  const CaptchaEdit = ({params}) => {

    var field = params.field;
    const index = params.index;
    const handleFieldChange = params.handleFieldChange;
    const siteKey = params.siteKey;

//    console.log("CaptchaEdit (" + field.name + ", " + field.type + ", " + field.value + "," +
//                " + field.min + ", " + field.max + ", " + index);
    return(
            <>
            {
              (siteKey != undefined && siteKey.length > 0) ?
                <input 
                  type="text"
                  placeholder="Site Key"
                  name="value"
                  defaultValue={siteKey}
                  readOnly
                />
                :
                <input 
                  type="text"
                  placeholder="Site Key"
                  name="value"
                  value={field.value} 
                  onChange={(e) => handleFieldChange(e, index)} 
                  required 
                />
            }
            </>
          );
  }

export default CaptchaEdit;
