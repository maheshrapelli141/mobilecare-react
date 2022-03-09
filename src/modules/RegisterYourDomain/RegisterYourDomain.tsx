import { useForm } from "react-hook-form";

import AnchorLink from "shared/AnchorLink";
import FormTemplate from "shared/FormTemplate"
import InputErrorMessage from "shared/InputErrorMessage";
import PrimaryButton from "shared/PrimaryButton";

export const RegisterYourDomain = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    function onSubmit(data: object){
        console.log(data,{errors});
    }
    
    return <FormTemplate>
        <h1>Register Your Domain</h1>
        <h3>Please enter the below Details</h3>
        <form onSubmit={handleSubmit((data,e) => {e?.preventDefault(); onSubmit(data);})}>
            <label>Register your Domain</label>
            <input type="text" {...register('domain',{ required: 'Enter Domain'})} />
            {errors.domain && <InputErrorMessage message={errors.domain.message} />}
            <PrimaryButton type="submit" title="Submit" />
            <AnchorLink href="/forgot-password" title="Register your Domain" />
        </form>
    </FormTemplate>;
}