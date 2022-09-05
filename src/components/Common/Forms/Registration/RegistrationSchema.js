import * as yup from "yup";

export const RegistrationSchema = yup.object().shape({
	full_name: yup.string().required(),
	email: yup.string().email().min(4).required(),
	password: yup.string().required(),
});
