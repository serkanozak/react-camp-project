import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function KodlamaIoTextInput({ ...props }) {
    //console.log(props);

    const [field, meta] = useField(props); // ilgili input elemanı için bilgi toplayan hook.
    console.log(field);

    return (
        <FormField error={meta.touched && !!meta.error} >
            <input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color='red' content={meta.error}></Label>
            ) : null}
        </FormField>
    )
}
