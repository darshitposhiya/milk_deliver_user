import * as yup from 'yup';

export const loginValidate = {
    initialState: { email: '', password: '', rolle: '' },
    schema: yup.object().shape({
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is must be required"),
        password: yup
            .string()
            .min(4)
            .trim()
            .required('Password is must be required'),
    })
}

export const forgotPasswordValidate = {
    initialState: { email: '' },
    schema: yup.object().shape({
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is must be required"),
    })
}

export const resetPasswordValidate = {
    initialState: { password: '', confirmPassword: '' },
    schema: yup.object().shape({
        password: yup
            .string()
            .min(4)
            .trim()
            .required('Password is must be required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], "Password must match")
            .trim()
            .required('Confirm password is must be required'),
    })
}

export const registerValidate = {
    initialState: { name: '', email: '', phone_code: '', phone: '', password: '', confirmPassword: '' },
    schema: yup.object().shape({
        name: yup
            .string()
            .min(2, "Name must be at least 2 characters")
            .trim()
            .required('Name is must be required'),
        email: yup
            .string()
            .email("Email must be a valid email")
            // .matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            .required("Email is must be required"),
        phone_code: yup
            .string()
            .required('Country code'),
        phone: yup
            .string()
            .min(7, "Please enter a valid mobile number.")
            .max(15, "Please enter a valid mobile number.")
            .matches(/^[0-9]+$/)
            .trim()
            .required('Phone number is must be required'),
        password: yup
            .string()
            .min(4)
            .trim()
            .required('Password is must be required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], "Password must match")
            .trim()
            .required('Confirm password is must be required'),
    })
}

export const addNewAddressValidate = {
    initialState: { country: '', house_no: '', area: '', landmark: '', state: '', city: '', address: '' },
    schema: yup.object().shape({
        country: yup
            .string()
            .trim()
            .required('Country is must be required'),
        house_no: yup
            .string()
            .trim()
            .required('House no/Falt no is must be required'),
        area: yup
            .string()
            .trim()
            .required('Area is must be required'),
        landmark: yup
            .string()
            .trim()
            .required('Landmark is must be required'),
        state: yup
            .string()
            .trim()
            .required('state is must be required'),
        city: yup
            .string()
            .trim()
            .required('City is must be required'),
        address: yup
            .string()
            .trim()
            .required('Address is must be required'),
    })
}

export const editProfileValidate = {
    initialState: { name: '', email: '', phone: '' },
    schema: yup.object().shape({
        name: yup
            .string()
            .min(2, "Name must be at least 2 characters")
            .trim()
            .required('Name is must be required'),
        phone: yup
            .string()
            .min(7, "Please enter a valid mobile number.")
            .max(15, "Please enter a valid mobile number.")
            .matches(/^[0-9]+$/)
            .trim()
            .required('Phone number is must be required'),
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is must be required"),
    })
}


