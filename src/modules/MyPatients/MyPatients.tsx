import DefaultLayout from "layout/DefaultLayout"
import FormTemplate from "shared/FormTemplate"

export const MyPatients = () => {
    return <DefaultLayout>
        <div className="container">
            <div>
                <h3>Search Patient</h3>
                <FormTemplate>
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
            </div>
        </div>
    </DefaultLayout>
}