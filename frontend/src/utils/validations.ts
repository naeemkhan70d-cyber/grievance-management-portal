export const VALIDATION_MESSAGES = {
  required: (field: string) =>
    `${field} is required`,

  minLength: (
    field: string,
    length: number
  ) =>
    `${field} must be at least ${length} characters`,

  invalidEmail:
    "Please enter a valid email address",

  selectDepartment:
    "Please select a department",
};

export const isValidEmail = (
  email: string
) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );

export const validateRequired = (
  value: string
) =>
  value.trim().length > 0;

export const validateMinLength = (
  value: string,
  length: number
) =>
  value.trim().length >= length;