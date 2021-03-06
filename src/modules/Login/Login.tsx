import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import AnchorLink from "shared/AnchorLink";
import FormTemplate from "shared/FormTemplate";
import InputErrorMessage from "shared/InputErrorMessage";
import PrimaryButton from "shared/PrimaryButton";
import { LoginDto } from "./interface";
import { login } from "./loginSlice";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginState = useAppSelector(state => state.login);

    useEffect(() => {
        if(loginState.isSuccess) {
            setTimeout(() => {
                navigate('/my-patients');
            },2000);
        }
    },[loginState.isSuccess,navigate]);

    const onSubmit = async (data: any) => {
        // data['forced-login'] = 1;
        await dispatch(login(data as LoginDto));
    }

    return <FormTemplate>
    <h1>Agnity Mobile Care</h1>
    <h3>Login to continue the Mobile Care</h3>
    {loginState.message.length ? <p>{loginState.message}</p> : null}
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