/////////// IMPORTS
///
import styles from "./Documents.module.css"
import DatePicker from "react-date-picker"
import { Field } from "formik"
import { documentFormSelectOptions } from "../../../helpers/hValues"
import Select from "react-select"
///
/////////// Types
///
type FormBlockProps_TP = {
  labelTitle: string
  placeholder?: string | null
  required: boolean
  type: "text" | "date" | "select"
  value: Date | string
  name: string
  onChange?: any
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const FormBlock = ({
  labelTitle,
  placeholder,
  required,
  type,
  value,
  name,
  onChange,
}: FormBlockProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  //   console.log(value)

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <div className={styles.form__block}>
      <label className={styles.label} htmlFor={name}>
        {labelTitle} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      {type === "date" && (
        <DatePicker
          onChange={onChange}
          value={typeof value === "object" ? value : new Date()}
          className="datePicker"
          format="d-M-y"
        />
      )}
      {type === "text" && (
        <Field
          placeholder={placeholder}
          className={styles.input}
          type={type}
          name={name}
          id={name}
          //   className="datePicker"
        />
      )}
      {type === "select" && (
        <Select
        className={styles.select}
          value={{ label: value, value }}
          onChange={(X: any) => onChange(name, X.value)}
          options={
            documentFormSelectOptions[
              name as keyof typeof documentFormSelectOptions
            ]
          }
          placeholder="إختر..."
        />
      )}
    </div>
  )
}
