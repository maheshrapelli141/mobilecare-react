import { useForm, Controller } from "react-hook-form";

import AnchorLink from "shared/AnchorLink";
import FormTemplate from "shared/FormTemplate";
import InputErrorMessage from "shared/InputErrorMessage";
import PrimaryButton from "shared/PrimaryButton";

export const ForgotPassword = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: object) => {
        console.log({data});
        
    }
    console.log({errors});
    
    return <FormTemplate>
    <h1>Forgot Password</h1>
    <h3>Don't worry! It Happens. Please enter below Details</h3>
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