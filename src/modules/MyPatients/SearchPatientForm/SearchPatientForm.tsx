import FormTemplate from "shared/FormTemplate"

export const SearchPatientForm = () => {
    return <FormTemplate>
    <form>
        <input type="text" placeholder="Name" />
        <select name="gender">
            <option selected disabled>-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <input type="text" placeholder="MRN" />
        <button type="submit" className="primary">Search</button>
    </form>
</FormTemplate>
}