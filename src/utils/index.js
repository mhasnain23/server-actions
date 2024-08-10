export const AddNewUserFromControl = [
    {
        name: "firstName",
        label: "firstName",
        placeholder: "Enter your first name",
        type: "input",
    },
    {
        name: "lastName",
        label: "lastName",
        placeholder: "Enter your last name",
        type: "input",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
    },
    {
        name: "address",
        label: "Address",
        placeholder: "Enter your address",
        type: "input",
    }
]

export const addNewUserFormInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
}