import React from 'react';
import styles from './form.scss';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { IUserData } from '../../../hooks/useUserData';

export function Form() {
  const { name } = useSelector<RootState, IUserData>(state => state.me.data)

  const formik = useFormik({
    initialValues: {
      text: ""
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .max(50, "Должно быть 50 символов или меньше")
        .required("Объязательна для заполнения"),
    }),
    onSubmit: (e) => { 
      alert(e.text)
    }
  })


  return (
      <form onSubmit={formik.handleSubmit} >
        <textarea name="text" id="text" className={styles.textarea} onChange={formik.handleChange} placeholder={`${name}, оставьте ваш комментарий`} onBlur={formik.handleBlur}>
        </textarea>
        <div className={styles.textarea_bottom}>
          <div className={styles.error}>{formik.touched.text && formik.errors.text}</div>
          <button type='submit' className={styles.textarea_btn}>Комментировать</button>
        </div>
      </form>
  );
}
