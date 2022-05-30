import { useState } from 'react';
import { useFormik, Form, Formik } from 'formik';

import { RoundedButton } from '../RoundedButton';

import { Container, Label, Input, Title } from './FileInput.styled';
import axios from 'axios';
import { baseUrl, mockUserToken } from 'store/actionCreators/boardActionCreator';

export const FileInput = () => {
  const [title, setTitle] = useState('Add file');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
    if (e.currentTarget.files.length !== 0) {
      setTitle(e.currentTarget?.files[0].name);
      setIsEmpty(false);
    } else {
      setTitle('Add file');
      setIsEmpty(true);
    }
  };

  // const formik = useFormik({
  //   initialValues: {
  //     file: '',
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <Formik
      initialValues={{ file: '' }}
      onSubmit={async (values) => {
        console.log(values.file);
        const fileData = new FormData();
        fileData.append('file', values.file);

        const response = await axios.post(
          `${baseUrl}/file`,
          { fileData },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${mockUserToken}`,
            },
          }
        );
        const data = await response;
        console.log(data);
      }}
    >
      {(formProps) => (
        <Form>
          <Container>
            <Label empty={formProps.values.file !== '' ? false : true} htmlFor="file">
              <Input
                type="file"
                name="file"
                onChange={(event) => formProps.setFieldValue('file', event.target.files[0])}
              />
              <Title empty={formProps.values.file !== '' ? false : true}>
                {formProps.values.file ? formProps.values.file.name : 'Add file'}
              </Title>
            </Label>

            {formProps.values.file && (
              <RoundedButton variant="small" type="submit" typeBtn="addBtn">
                Attach
              </RoundedButton>
            )}
          </Container>
        </Form>
      )}
    </Formik>
  );
};

// <FormStyled onSubmit={formik.handleSubmit}>
//   <label htmlFor="file">
//     <input
//       type="file"
//       name="file"
//       onChange={(event) => formik.setFieldValue('file', event.target.files[0])}
//       value={formik.values.file}
//     />
//   </label>

{
  /* <Label htmlFor="file" empty={isEmpty}>
        <Input
          type="file"
          name="file"
          onChange={(event) => formik.setFieldValue('file', event.target.files[0])}
          value={formik.values.file}
        />
        <Title empty={isEmpty}>{title}</Title>
      </Label>
      {!isEmpty && (
        <RoundedButton variant="small" type="submit" typeBtn="addBtn">
          Attach
        </RoundedButton>
      )} */
}
// </FormStyled>
