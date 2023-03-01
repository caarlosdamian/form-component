import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const Form = ({
  onSubmitFunction,
  initialValues,
  schema,
  inputs,
}: any): any => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(schema),
  });

  const handleSave = (formValues: any) => {
    onSubmitFunction(formValues);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      {inputs.map((item: any) => (
        <div key={item.id}>
          <p>{item.value}</p>
          <input
            type={item.type}
            placeholder={item?.placeholder}
            {...register(`${item.value}`)}
          />
          {errors[item.value] && (
            <p style={{ color: "red" }}>{errors[item.value]?.message}</p>
          )}
        </div>
      ))}
      <input type="submit" />
    </form>
  );
};
