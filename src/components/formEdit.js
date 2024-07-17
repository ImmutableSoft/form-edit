import { useState } from "react"; 
import TextEdit from "./fields/TextEdit";
import DateEdit from "./fields/DateEdit";
import DisplayEdit from "./fields/DisplayEdit";
import StripeEdit from "./fields/StripeEdit";
import ImageEdit from "./fields/ImageEdit";
import FileEdit from "./fields/FileEdit";
import SelectEdit from "./fields/SelectEdit";
import PurchaseEdit from "./fields/PurchaseEdit";
import CheckboxEdit from "./fields/CheckboxEdit";
import CaptchaEdit from "./fields/CaptchaEdit";
import SourceEdit from "./fields/SourceEdit";
import QueueEdit from "./fields/QueueEdit";

const FormallyVersion = "1.0";

export function FormEditToObjectArray(data, endKey)
{
    var formData = [];
    var object = {};

    data.forEach(function(value, key)
    {
      // If key found, push and clear field object
      if (key === endKey)
      {
        if (Object.keys(object).length > 0)
          formData.push(object);
        object = {};
      }
      else
        object[key] = value;
    });

	return formData;
}

export function FormEditToObjectArrayNoHeader(data, endKey)
{
    // Delete the form header fields
    data.delete("formally_name");
    data.delete("formally_version");
    data.delete("formally_username");

    return FormEditToObjectArray(data, endKey);
}

export const FormEdit = ({nameObj, initialFields, handleEditSubmit, stripePk, siteKey}) =>
{ 
  const [editFields, setEditFields] = useState(initialFields);

//  console.log("FE-" + JSON.stringify(editFields) + "<>" + JSON.stringify(nameObj));

  const handleFieldChange = (e, i) => { 
    e.preventDefault();
    const field = e.target.name; 
    const newFields = [...editFields]; 
    newFields[i][field] = e.target.value; 
//    console.log("FieldChange:" + JSON.stringify(newFields));
    setEditFields(newFields); 
  }
  
  const handleAddField = (e) => { 
    e.preventDefault();
//    console.log("FormEdit:" + JSON.stringify(editFields));
    setEditFields([...editFields, { type: "text", name: "", value: "", description: "", min: "", max: "" }]);
  }
  
  const handleDeleteField = (e, i) => { 
    e.preventDefault();
    const newFields = [...editFields]; 
    newFields.splice(i, 1); 
    setEditFields(newFields);
  }

  const handleMoveField = (e, i, type) => { 
    e.preventDefault();
    const newFields = [...editFields];
    if ((type === "up") && (i > 0))
    {
      const tempField = newFields[i - 1];
      newFields[i - 1] = newFields[i];
      newFields[i] = tempField;
    }
    else if ((type === "down") && (i < editFields.length - 1))
    {
      const tempField = newFields[i + 1];
      newFields[i + 1] = newFields[i];
      newFields[i] = tempField;
    }
    setEditFields(newFields);
  }

  return (
      <form onSubmit={(e) => handleEditSubmit(e)}>
        <div align="center">
         <h2>{nameObj.name}</h2>
        </div>
        <input 
          type="text"
          placeholder="New Unique Form Name Here"
          name="formally_name"
          defaultValue={nameObj.name} 
          required
          readOnly
          hidden
        />
        <hr/>
        <input 
          type="text"
          name="formally_version"
          defaultValue={FormallyVersion} 
          hidden 
        />
        <input 
          type="text"
          name="formally_username"
          defaultValue={nameObj.username} 
          readOnly
          hidden
        />
        {editFields.map((field, index) => ( 
          <div key={index} style={{border: "2px solid #dee0e4", backgroundColor:"#e0efff", borderRadius: "20px"}} align="left">
            &nbsp;
              <button title="Delete field" onClick={(e) => handleDeleteField(e, index)}>
                              &nbsp;&nbsp;
                              <img alt="Trash" src="./trash-slash.svg" width="20px"></img>
                              &nbsp;&nbsp;
              </button> 
            &nbsp;&nbsp;
            <button title="Move up" className="arrowButton" onClick={(e) => handleMoveField(e, index, "up")}>🔼</button>
            <button title="Move down" className="arrowButton" onClick={(e) => handleMoveField(e, index, "down")}>🔽</button>
            &nbsp;&nbsp;
            <select 
              value={field.type} 
              name="type"
              onChange={(e) => handleFieldChange(e, index)} 
              required 
            > 
              <option value="display">display</option> 
              <option value="text">text</option> 
              <option value="textarea">textarea</option> 
              <option value="datetime-local">datetime</option> 
              <option value="date">date</option> 
              <option value="daterange">daterange</option> 
              <option value="timestamp">timestamp</option> 
              <option value="email">email</option> 
              <option value="tel">telephone</option> 
              <option value="number">number</option> 
              <option value="checkbox">checkbox</option> 
              <option value="select">select</option> 
              <option value="url">URL/URI</option> 
              <option value="file">file</option> 
              <option value="files">files</option> 
              <option value="image">image</option> 
              <option value="video">video</option> 
              <option value="signature">signature</option> 
              <option value="password">password</option>
              <option value="captcha">captcha</option> 
              <option value="stripe">stripe</option> 
              <option value="purchase">purchase</option> 
              <option value="queue">queue</option> 
              <option value="source">source</option> 
            </select>
            <input 
              type="text"
              placeholder="field name"
              name="name"
              value={field.name} 
              onChange={(e) => handleFieldChange(e, index)} 
              required 
            />
            { // Add the type specific fields
              (field.type === 'checkbox') ?
                <CheckboxEdit params={{field, index, handleFieldChange}} />
              :
              (field.type === 'select') ?
                <SelectEdit params={{field, index, handleFieldChange}} />
              :
              (field.type === 'purchase') ?
                <PurchaseEdit params={{field, index, handleFieldChange}} />
              :
              (field.type === 'file') ?
                <FileEdit params={{field, index, handleFieldChange}} />
              :
              (field.type === 'image') ?
                <ImageEdit params={{field, index, handleFieldChange}} />
              :
              (field.type === 'stripe') ?
                <StripeEdit params={{field, index, handleFieldChange, stripePk}} />
              :
              (field.type === 'captcha') ?
                <CaptchaEdit params={{field, index, handleFieldChange, siteKey}} />
              :
              (field.type === 'source') ?
                <SourceEdit params={{field, index, handleFieldChange}} />
              :
              (field.type === 'queue') ?
                <QueueEdit params={{field, index, handleFieldChange}} />
              :
              (field.type === 'display') ?
                <DisplayEdit params={{field, index, handleFieldChange}} />
              :
              (field.type.startsWith('date')) ?
                <DateEdit params={{field, index, handleFieldChange}} />
              :
              (field.type.startsWith('text') ||
               (field.type === 'number') || (field.type === 'url') ||
               (field.type === 'password') || (field.type === 'email')) ?
                <TextEdit params={{field, index, handleFieldChange}} />
              :
                ""//"Unsupported type " + field.type
            }
            <input 
              type="text"
              name="formally_separator_3210"
              defaultValue="separator"
              readOnly
              hidden 
            />
          </div> 
        ))}
        <div align="center">
          <button title="Add Field" onClick={(e) => handleAddField(e)}>
                &nbsp;&nbsp;
                <img alt="Add" src="./rectangle-history-circle-plus.svg" width="20px"></img>
                &nbsp;&nbsp;
          </button>
          &nbsp;&nbsp;&nbsp;
          <button title="Save Form" type="submit">
                &nbsp;&nbsp;
                <img alt="Save" src="./cloud-back-up-alt.svg" width="20px"></img>
                &nbsp;&nbsp;
          </button>
        </div>
      </form>
     );
}
