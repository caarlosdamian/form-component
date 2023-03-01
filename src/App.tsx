import { Form } from "./components/Form";
import { LoginInputs, userFormInputs } from "./utils/formInputs";
import { loginSchema, userSchema } from "./schemas";
import { login, user } from "./utils/formInitValues";
import "./App.css";

function App() {
  const handleSave = (value: any) => {
    console.log({ value });
  };

  return (
    <div className="App">
      <Form
        onSubmitFunction={handleSave}
        initialValues={user}
        schema={userSchema}
        inputs={userFormInputs}
      />
      <br />
      <br />
      <hr />
      <Form
        onSubmitFunction={handleSave}
        initialValues={login}
        schema={loginSchema}
        inputs={LoginInputs}
      />
    </div>
  );
}

export default App;
