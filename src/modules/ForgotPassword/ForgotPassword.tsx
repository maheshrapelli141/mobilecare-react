import { useAppDispatch, useAppSelector } from "app/hooks";
import { useForm, Controller } from "react-hook-form";

import AnchorLink from "shared/AnchorLink";
import FormTemplate from "shared/FormTemplate";
import InputErrorMessage from "shared/InputErrorMessage";
import PrimaryButton from "shared/PrimaryButton";
import { forgotPassword } from "./forgotPasswordSlice";
import { ForgotPasswordDto } from "./interface";

export const ForgotPassword = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useAppDispatch();
    const forgotPasswordState = useAppSelector(state => state.forgotPassword);

    const onSubmit = (data: object) => {
        console.log({data});
        dispatch(forgotPassword(data as ForgotPasswordDto));
    }
    console.log({errors});
    
    return <FormTemplate>
    <h1>Forgot Password</h1>
    <h3>Don't worry! It Happens. Please enter below Details</h3>
    {forgotPasswordState.isError && <p>{forgotPasswordState.message}</p>}
    <form onSubmit={handleSubmit((data,e) => {e?.preventDefault(); onSubmit(data);})}>
        <label>Security Question</label>
        <Controller
        name="question"
        control={control}
        render={({ field }) => <select {...field}>
            <option value="color">What is your favourite Color?</option>
        </select>}
        rules={{ required: 'Select Question' }}
      />
        {errors.question && <InputErrorMessage message={errors.question.message} />}
        <label>Answer to Security Question</label>
        <input type="password" {...register('answer',{ required: 'Enter Answer'})}/>
        {errors.answer && <InputErrorMessage message={errors.answer.message} />}
        <label>Username</label>
        <input type="text" {...register('username',{ required: 'Enter Username'})}/>
        {errors.username && <InputErrorMessage message={errors.username.message} />}
        <PrimaryButton type="submit" title="Submit" />
        <AnchorLink href="/login" title="Back to Login" />
    </form>
</FormTemplate>;
}