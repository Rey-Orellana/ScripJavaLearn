let isSubmitting = false;
const secureSubmit = (fn) => { if (!isSubmitting) { isSubmitting = true; fn(); setTimeout(() => isSubmitting = false, 2000); } };