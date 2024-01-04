import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from "yup"
import KodlamaIoTextInput from '../utils/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {

    const initialValues = { title: "", body: "" }

    const schema = Yup.object({
        title: Yup.string().required("Zorunlu Alan!"),
        body: Yup.string().required("Bu alan zorunlu!")
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(value) => {
                console.log(value);
            }}
        >
            <Form className='ui form'>
                <KodlamaIoTextInput name="title" placeholder="Kullanıcı adı" />
                <KodlamaIoTextInput name="body" placeholder="Açıklama" />
                <Button color='blue' type='submit'>Ekle</Button>
            </Form>
        </Formik>
    )
}
