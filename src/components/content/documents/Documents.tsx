/////////// IMPORTS
///
import styles from "./Documents.module.css"
import { SlDocs } from "react-icons/sl"
import { Formik, Form, ErrorMessage } from "formik"
import { FormBlock } from "./FormBlock"
import * as Yup from "yup"
import { useState } from "react"
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi"
import { hColors } from "../../../helpers/hValues"

///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Documents = () => {
  /////////// VARIABLES
  ///
  const initialValues = {
    docDate: new Date(),
    regDate: new Date(),
    supplierName: "",
    buyerName: "",
    docNum: "",
    goldPrice: "",
    stockTotal: "",
    discountTotal: "",
    type: "",
    kind: "",
    metal: "",
    weight: "",
    caliber: "",
    stocks: "",
  }

  const validatingSchema = Yup.object({
    docDate: Yup.date()
      .required("برجاء ملئ هذا الحقل")
      .typeError("أدخل التاريخ من فضلك"),
    regDate: Yup.date()
      .required("برجاء ملئ هذا الحقل")
      .typeError("أدخل التاريخ من فضلك"),
    supplierName: Yup.string().required("برجاء ملئ هذا الحقل"),
    buyerName: Yup.string().required("برجاء ملئ هذا الحقل"),
    docNum: Yup.number()
      .required("برجاء ملئ هذا الحقل")
      .typeError("الأرقام فقط مسموحة"),
    goldPrice: Yup.number()
      .required("برجاء ملئ هذا الحقل")
      .typeError("الأرقام فقط مسموحة"),
    stockTotal: Yup.number()
      .required("برجاء ملئ هذا الحقل")
      .typeError("الأرقام فقط مسموحة"),
    discountTotal: Yup.number()
      .required("برجاء ملئ هذا الحقل")
      .typeError("الأرقام فقط مسموحة"),
    type: Yup.string().required("برجاء ملئ هذا الحقل"),
    kind: Yup.string().required("برجاء ملئ هذا الحقل"),
    metal: Yup.string().required("برجاء ملئ هذا الحقل"),
    weight: Yup.number()
      .required("برجاء ملئ هذا الحقل")
      .typeError("الأرقام فقط مسموحة"),
    caliber: Yup.string().required("برجاء ملئ هذا الحقل"),
    stocks: Yup.string().required("برجاء ملئ هذا الحقل"),
  })
  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///
  const [formValues, setFormValues] = useState({})
  const [stage, setStage] = useState(1)
  ///
  /////////// SIDE EFFECTS
  ///
  console.log(stage)

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///
  const goBack = () => setStage(1)
  ///
  return (
    <div className={styles.container}>
      <Formik
        onSubmit={(values) => {
          setFormValues(values)
          setStage(2)
        }}
        initialValues={initialValues}
        validationSchema={validatingSchema}
      >
        {(formik) => (
          <>
            <Form>
              <div className={`${styles.docHeader}`}>
                <h3>
                  إنشاء سند <span>{stage}/2</span>
                </h3>
                {/* We can do better here (custom Button component), but it is okay for now */}
                {stage === 1 && (
                  <button type="submit" className={styles.form__submit}>
                    <span style={{ marginLeft: "1rem" }}>التالي</span>{" "}
                    <HiOutlineArrowNarrowLeft size={20} />
                  </button>
                )}

                {stage === 2 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className={styles.form__submit}
                  >
                    <HiOutlineArrowNarrowRight size={20} />
                    <span style={{ marginRight: "1rem" }}>السابق</span>
                  </button>
                )}
              </div>

              {stage === 1 && (
                <div className={`${styles.form__body}`}>
                  <div className={styles.form__header}>
                    <div>
                      <SlDocs color="darkorange" />
                      <h3>تفاصيل السند</h3>
                    </div>
                    <div>WHATEVER</div>
                  </div>
                  {/* We can do better here (minor components and store these data in arrays and loop over them) , but it is okay for now */}
                  {/* ROW 1 */}
                  <div className={`${styles.form__row}`}>
                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        onChange={formik.setFieldValue.bind(null, "docDate")}
                        value={formik.values.docDate}
                        type="date"
                        required={true}
                        labelTitle="تاريخ السند"
                        name="docDate"
                      />
                      <ErrorMessage
                        name="docDate"
                        component="p"
                        className="errorMessage"
                      />
                    </div>

                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        onChange={formik.setFieldValue.bind(null, "regDate")}
                        value={formik.values.regDate}
                        type="date"
                        required={true}
                        labelTitle="تاريخ التسجيل"
                        name="regDate"
                      />
                      <ErrorMessage
                        name="regDate"
                        component="p"
                        className="errorMessage"
                      />
                    </div>
                  </div>

                  {/* ROW 2 */}
                  <div className={`${styles.form__row}`}>
                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        value={formik.values.supplierName}
                        type="text"
                        required={true}
                        labelTitle="إسم المورد"
                        name="supplierName"
                        placeholder="إسم المورد"
                      />
                      <ErrorMessage
                        name="supplierName"
                        component="p"
                        className="errorMessage"
                      />
                    </div>

                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        value={formik.values.buyerName}
                        type="text"
                        required={true}
                        labelTitle="إسم المشتري"
                        name="buyerName"
                        placeholder="إسم المشتري"
                      />
                      <ErrorMessage
                        name="buyerName"
                        component="p"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                  {/* ROW 3 */}
                  <div className={`${styles.form__row}`}>
                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        value={formik.values.docNum}
                        type="text"
                        required={true}
                        labelTitle="رقم السند المرفق"
                        name="docNum"
                        placeholder="12"
                      />
                      <ErrorMessage
                        name="docNum"
                        component="p"
                        className="errorMessage"
                      />
                    </div>

                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        value={formik.values.goldPrice}
                        type="text"
                        required={true}
                        labelTitle="سعر الذهب"
                        name="goldPrice"
                        placeholder="12 ر.س"
                      />
                      <ErrorMessage
                        name="goldPrice"
                        component="p"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                  {/* ROW 4 */}
                  <div className={`${styles.form__row}`}>
                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        value={formik.values.stockTotal}
                        type="text"
                        required={true}
                        labelTitle="إجمالي حسب الأسهم"
                        name="stockTotal"
                        placeholder="12"
                      />
                      <ErrorMessage
                        name="stockTotal"
                        component="p"
                        className="errorMessage"
                      />
                    </div>

                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        value={formik.values.discountTotal}
                        type="text"
                        required={true}
                        labelTitle="إجمالي الخصم"
                        name="discountTotal"
                        placeholder="12 ر.س"
                      />
                      <ErrorMessage
                        name="discountTotal"
                        component="p"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                  {/* ROW 5 */}
                  <div className={`${styles.form__row}`}>
                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        onChange={formik.setFieldValue}
                        value={formik.values.type}
                        type="select"
                        required={true}
                        labelTitle="الصنف"
                        name="type"
                      />
                      <ErrorMessage
                        name="type"
                        component="p"
                        className="errorMessage"
                      />
                    </div>

                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        onChange={formik.setFieldValue}
                        value={formik.values.kind}
                        type="select"
                        required={true}
                        labelTitle="الفئة"
                        name="kind"
                      />
                      <ErrorMessage
                        name="kind"
                        component="p"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                  {/* ROW 6 */}
                  <div className={`${styles.form__row}`}>
                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        onChange={formik.setFieldValue}
                        value={formik.values.metal}
                        type="select"
                        required={true}
                        labelTitle="المعدن"
                        name="metal"
                      />
                      <ErrorMessage
                        name="metal"
                        component="p"
                        className="errorMessage"
                      />
                    </div>

                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        value={formik.values.weight}
                        type="text"
                        required={true}
                        labelTitle="الوزن"
                        name="weight"
                        placeholder="12 كجم"
                      />
                      <ErrorMessage
                        name="weight"
                        component="p"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                  {/* ROW 7 */}
                  <div className={`${styles.form__row}`}>
                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        onChange={formik.setFieldValue}
                        value={formik.values.caliber}
                        type="select"
                        required={true}
                        labelTitle="العيار"
                        name="caliber"
                      />
                      <ErrorMessage
                        name="caliber"
                        component="p"
                        className="errorMessage"
                      />
                    </div>

                    <div className={`${styles.form__row_block}`}>
                      <FormBlock
                        onChange={formik.setFieldValue}
                        value={formik.values.stocks}
                        type="select"
                        required={true}
                        labelTitle="الأسهم"
                        name="stocks"
                      />
                      <ErrorMessage
                        name="stocks"
                        component="p"
                        className="errorMessage"
                      />
                    </div>
                  </div>
                </div>
              )}

              {stage === 2 && <p>{JSON.stringify(formValues)}</p>}
            </Form>
          </>
        )}
      </Formik>
      <div className={styles.showOff}>THIS SECTION'S DATA IS JUST STATIC DATA</div>
    </div>
  )
}

/*
const [value, onChange] = useState(new Date())
<DatePicker
  onChange={onChange}
  value={value}
  className="datePicker"
  format="d-M-y"
/>
*/

/* 
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

  <Select options={options} placeholder='احمد' />
*/
