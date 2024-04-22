import React, { useEffect, useState } from "react";
import "./styles.css";
import Button from "../Button";
import { z } from "zod";
import { maskCpf, maskPhone } from "../../hooks/mask";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form: React.FC = () => {
  interface formInterface {
    cpf?: [string];
    email?: [string];
    name?: [string];
    phone?: [string];
    check?: [string];
  }
  const schemaCpf = z.object({
    cpf: z.string().min(14).max(14),
  });

  const schemaPhone = z.object({
    phone: z
      .string()
      .min(15)
      .max(15)
      .refine(
        (value) => {
          const phone = value.replace(/\D/g, "");
          return phone[2] === "9";
        },
        {
          message: "O primeiro dígito do telefone deve ser 9.",
        }
      )
      .refine(
        (value) => {
          const phone = value.replace(/\D/g, "");
          return phone[3] !== "0";
        },
        {
          message: "O segundo dígito do telefone não deve ser zero.",
        }
      )
      .refine(
        (value) => {
          const match = value.match(/\((\d{2})\)/);
          let dddInt = 0;
          if (match && match[1]) {
            dddInt = parseInt(match[1]);
          }
          return dddInt >= 11 && dddInt <= 99;
        },
        {
          message: "O campo DDD deve ser um código de região válido no Brasil",
        }
      ),
  });

  const schemaEmail = z.object({
    email: z.string().email(),
  });

  const schemaName = z.object({
    name: z.string().refine((value) => {
      const parts = value.split(" ");
      return parts.length === 2 && parts[1] !== "";
    }),
  });

  const [cpf, setCpf] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<formInterface>();

  let validateCpf = schemaCpf.safeParse({ cpf });
  let validatePhone = schemaPhone.safeParse({ phone });
  let validateEmail = schemaEmail.safeParse({ email });
  let validateName = schemaName.safeParse({ name });

  const handleCpfChange = (event: any) => {
    setCpf(maskCpf(event));
    handleResetErrors();
  };

  const handlePhoneChange = (event: any) => {
    setPhone(maskPhone(event));
    handleResetErrors();
  };

  const handleSetEmail = (event: any) => {
    setEmail(event.target.value);
    handleResetErrors();
  };

  const handleSetName = (event: any) => {
    setName(event.target.value);
    handleResetErrors();
  };

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
    handleResetErrors();
  };

  const handleResetErrors = () => {
    setErrors({});
  };

  const handleResetInputs = () => {
    setCpf('');
    setEmail('');
    setName('');
    setPhone('');
    setIsChecked(false);
  };

  useEffect(() => {
    setErrors({});
  }, [
    validateCpf.success,
    validateEmail.success,
    validateName.success,
    validatePhone.success,
  ]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const data = {
      name,
      email,
      cpf,
      phone,
    };

    if (!isChecked) {
      setErrors({ check: ["Você deve concordar com os termos e condições."] });
      return;
    }

    api
      .post("/lead", data)
      .then((response) => {
        toast.success(response.data.message);
        handleResetInputs();
      })
      .catch((errors) => {
        setErrors(errors.response.data.errors);
      });
  };

  return (
    <form className="row g-3">
      <div className="col-md-12">
        <label className="form-label">
          Quando pretende iniciar o curso de Medicina?
        </label>
        <select id="inputState" className="form-select">
          <option selected>Selectione</option>
          <option>...</option>
        </select>
      </div>
      <ToastContainer />
      <div className="col-md-12">
        <label className="form-label">CPF</label>
        <div className="d-flex align-items-center">
          <input
            className={`form-control col-8 ${
              validateCpf.success ? "border border-success" : ""
            } ${errors?.cpf ? "border border-danger" : ""}`}
            value={cpf}
            onChange={handleCpfChange}
            maxLength={14}
          />
          {validateCpf.success && !errors?.cpf && (
            <i className="bi bi-check-circle text-success ms-1" />
          )}
        </div>
        {errors?.cpf && (
          <span className="invalid-feedback d-flex row m-0">
            {errors.cpf[0]}
          </span>
        )}
      </div>

      <div className="col-12">
        <label className="form-label">Nome completo</label>
        <div className="d-flex align-items-center">
          <input
            className={`form-control col-8 ${
              validateName.success ? "border border-success" : ""
            } ${errors?.name ? "border border-danger" : ""} `}
            value={name}
            onChange={handleSetName}
          />
          {validateName.success && !errors?.name && (
            <i className="bi bi-check-circle text-success ms-1" />
          )}
        </div>
        {errors?.name && (
          <span className="invalid-feedback d-flex row m-0">
            {errors.name[0]}
          </span>
        )}
      </div>

      <div className="col-12">
        <label className="form-label">E-mail</label>
        <div className="d-flex align-items-center">
          <input
            className={`form-control col-8 ${
              validateEmail.success ? "border border-success" : ""
            } ${errors?.email ? "border border-danger" : ""}`}
            value={email}
            onChange={handleSetEmail}
          />
          {validateEmail.success && !errors?.email && (
            <i className="bi bi-check-circle text-success ms-1" />
          )}
        </div>
        {errors?.email && (
          <span className="invalid-feedback d-flex row m-0">
            {errors.email[0]}
          </span>
        )}
      </div>

      <div className="col-12">
        <label className="form-label">WhatsApp</label>
        <div className="d-flex align-items-center">
          <input
            className={`form-control col-8 
              ${validatePhone.success ? "border border-success" : ""} 
              ${errors?.phone ? "border border-danger" : ""}
            `}
            value={phone}
            onChange={handlePhoneChange}
            maxLength={15}
          />
          {validatePhone.success && !errors?.phone && (
            <i className="bi bi-check-circle text-success ms-1" />
          )}
        </div>
        {errors?.phone && (
          <span className="invalid-feedback d-flex row m-0">
            {errors.phone[0]}
          </span>
        )}
      </div>

      <div className="col-12">
        <div className="form-check d-flex align-items-center">
          <input
            className="form-check-input success"
            type="checkbox"
            checked={isChecked}
            onClick={handleCheckboxChange}
            id="invalidCheck2"
            required
          />
          <span className="form-check-label ms-1">
            Eu concordo com os termos de uso.
          </span>
        </div>
        {errors?.check && (
          <span className="invalid-feedback d-flex row m-0">
            {errors.check[0]}
          </span>
        )}
      </div>

      <div className="col-12 d-flex justify-content-end">
        <Button type="button" btnType="success" onClick={handleSubmit}>
          <b>Prosseguir</b>
        </Button>
      </div>

      <p className="text-form">
        A nossa empresa está comprometida a proteger e respeitar sua
        privacidade, utilizaremos seus dados apenas para fins de marketing. Você
        pode alterar suas preferências a qualquer momento. Consulte as Políticas
        de Privacidade.
      </p>
    </form>
  );
};

export default Form;
