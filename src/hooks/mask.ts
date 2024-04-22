export function maskCpf(event: any) {
  let formattedCpf = event.target.value.replace(/\D/g, "");
  formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, "$1.$2");
  formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, "$1.$2");
  formattedCpf = formattedCpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return formattedCpf;
}

export function maskPhone(event: any) {
  let formattedPhone = event.target.value.replace(/\D/g, "");
  formattedPhone = formattedPhone.replace(/^(\d{2})(\d)/g, "($1) $2");
  formattedPhone = formattedPhone.replace(/(\d)(\d{4})$/, "$1-$2");

  return formattedPhone;
}
