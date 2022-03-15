import { useAppSelector } from "app/hooks";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import AnchorLink from "shared/AnchorLink";
import FormTemplate from "shared/FormTemplate"
import InputErrorMessage from "shared/InputErrorMessage";
import PrimaryButton from "shared/PrimaryButton";
import { RegisterYourDomainDto } from "./interface";
import { registerYourDomain } from "./registerYourDomainSlice";

export const RegisterYourDomain = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const registerYourDomainState = useAppSelector(state => state.registerYourDomain);
    
    function onSubmit(data: object){
        console.log(data,{errors});
        dispatch(registerYourDomain(data as RegisterYourDomainDto));
    }
    
    return <FormTemplate>
        <h1>Register Your Domain</h1>
        <h3>Please enter the below Details</h3>
        {registerYourDomainState.isError && <p>{registerYourDomainState.message}</p>}
        <form onSubmit={handleSubmit((data,e) => {e?.preventDefault(); onSubmit(data);})}>
            <label>Register your Domain</label>
            <input type="text" {...register('domain',{ required: 'Enter Domain'})} />
            {errors.domain && <InputErrorMessage message={errors.domain.message} />}
            <PrimaryButton type="submit" title="Submit" />
            <AnchorLink href="/forgot-password" title="Register your Domain" />
        </form>
    </FormTemplate>;
}