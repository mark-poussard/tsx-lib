import { FieldType } from "./FieldType";

class JsonDeserializationHelper {
    
    assertFieldExists = (json : any, field : string) => {
        const rawValue = json[field];
        if(rawValue == null){
            throw new Error(`Field ${field} did not exist.`);
        }
    }

    assertField = <IT, OT> (json : any, field : string, type : FieldType<IT, OT>) => {
        this.assertFieldExists(json, field);
        const value = type.assertType(json[field]);
        return value;
    }

    assertFieldOrDefault = <IT, OT> (json : any, field : string, type : FieldType<IT, OT>, defaultValue : OT) => {
        const value = this.assertOptionalField(json, field, type);
        if(value == null){
            return defaultValue;
        }
        return value;
    }

    assertOptionalField = <IT, OT> (json : any, field : string, type : FieldType<IT, OT>) => {
        let value = undefined;
        const rawValue = json[field];
        if(rawValue != null){
            value = this.assertField(json, field, type);
        }
        return value;
    }

    assertOptionalNullField = <IT, OT> (json : any, field : string, type : FieldType<IT, OT>) => {
        const optionalValue = this.assertOptionalField(json, field, type);
        return (optionalValue != null)?(optionalValue):(null);
    }
}
export default new JsonDeserializationHelper();