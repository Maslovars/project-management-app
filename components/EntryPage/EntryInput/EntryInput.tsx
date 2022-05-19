import { Formik, Form, useField, useFormikContext } from "formik";
import { TextInput } from "@/components/common/TextInput";
import { type } from "os";
import { runInThisContext } from "vm";
import props from 'prop-types';

interface TextInputProps {
  htmlFor: string;
  name: string;
  type?: string;
  placeholder?: string;
  showErrors?: boolean;
}

export const EnterInput:React.FC<TextInputProps> = ({ 
  htmlFor,
  name,
  type }) => {
  //@ts-ignore
  const [field, meta] = useField(props);
  return (
    <>
     <label htmlFor={htmlFor}>{name}</label>
      <input className="text-input" {...field} type={type} name={name} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
