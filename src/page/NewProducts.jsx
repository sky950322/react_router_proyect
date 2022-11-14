import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../context/DataContext";

export default function NewProducts() {
  const { createBook } = useAxios();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          price: "",
          image: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          await createBook(values);
          navigate("/products");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="name" placeholder="name" />
            <Field name="price" placeholder="price" />
            <Field name="image" placeholder="image" />
            <Field name="description" placeholder="description" />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
