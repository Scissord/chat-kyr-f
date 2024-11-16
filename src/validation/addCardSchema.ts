import * as Yup from "yup";

export const addCardSchema = Yup.object().shape({
  price: Yup.number()
    .typeError('Цена должна быть числом')
    .positive('Цена должна быть больше 0')
    .test('is-decimal', 'Цена должна быть числом и может содержать не более двух знаков после запятой', (value) =>
      value !== undefined && /^-?\d+(\.\d{1,2})?$/.test(value.toString())
    )
    .required('Цена обязательна'),
  source_id: Yup.string()
    // .oneOf(["1", "2"], 'Source must be one of 0, 1, or 2')
    .oneOf(["1", "2"], 'Source must be one of 1, 2')
    .required('Source is required'),
  client_id: Yup.string()
    .required('Выберите клиента'),
  products: Yup.array()
    .of(Yup.string().required('Product ID is required'))
    .min(1, 'Как минимум 1 продукт')
    .required('Products are required'),
  // responsible_id: Yup.number()
  //   .integer('Responsible ID must be an integer')
  //   .required('Responsible ID is required'),
  // payment_check: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       pdf: Yup.mixed()
  //         .required('PDF file is required')
  //         .test(
  //           'fileType',
  //           'Only PDF files are allowed',
  //           (value) => value && value.type === 'application/pdf'
  //         )
  //     })
  //   )
  //   .min(1, 'There must be at least one payment check')
  //   .required('Payment checks are required'),
  // attorney_power: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       pdf: Yup.mixed()
  //         .required('PDF file is required')
  //         .test(
  //           'fileType',
  //           'Only PDF files are allowed',
  //           (value) => value && value.type === 'application/pdf'
  //         )
  //     })
  //   )
  //   .min(1, 'There must be at least one attorney power document')
  //   .required('Attorney power documents are required'),
  // closing_documents: Yup.array()
  //   .of(
  //     Yup.mixed()
  //       .required('Closing document is required')
  //       .test(
  //         'fileType',
  //         'Only XLSX files are allowed',
  //         (value) => value && value.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  //       )
  //   )
  //   .min(1, 'There must be at least one closing document')
  //   .required('Closing documents are required')
});