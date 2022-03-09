import { useForm } from "react-hook-form";

import AnchorLink from "shared/AnchorLink";
import FormTemplate from "shared/FormTemplate";
import InputErrorMessage from "shared/InputErrorMessage";
import PrimaryButton from "shared/PrimaryButton";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: object) => {
        console.log({data});
        
    }

    return <FormTemplate>
    <h1>Agnity Mobile Care</h1>
    <h3>Login to continue the Mobile Care</h3>
    <form onSubmit={handleSubmit((data,e) => {e?.preventDefault(); onSubmit(data);})}>
        <label>Username</label>
        <input type="text" {...register('username',{ required: 'Enter Username'})} />
        {errors.username && <InputErrorMessage message={errors.username.message} />}
        <label>Password</label>
        <input type="text" {...register('password',{ required: 'Enter Password'})} />
        {errors.password && <InputErrorMessage message={errors.password.message} />}
        <PrimaryButton type="submit" title="Submit" />
        <AnchorLink href="/forgot-password" title="Forgot Password?" />
        <AnchorLink href="/register-domain" title="Register your Domain" />
    </form>
</FormTemplate>;
}