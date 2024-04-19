import React, { useEffect } from "react";
import "./styles.css";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Form: React.FC = () => {

  const schema = z.object({
    cpf: z.number().min(11).max(11),
    name: z.string(),
    email: z.string().email(),
    whatsapp: z.string().max(14),
    check: z.boolean(),
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: zodResolver(schema), // Use o Zod como resolver de validação
  });

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

      <div className="col-md-12">
        <label className="form-label">CPF</label>
        <input className="form-control" {...register("cpf")} />
      </div>

      <div className="col-md-12">
        <label className="form-label">Nome completo</label>
        <input className="form-control" {...register("name")} />
      </div>

      <div className="col-12">
        <label className="form-label">E-mail</label>
        <input
          className="form-control"
          {...register("email")}
        />
        {errors.email && <span>teste</span>}
      </div>

      <div className="col-12">
        <label className="form-label">WhatsApp</label>
        <input className="form-control" {...register("whatsapp")} />
      </div>

      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input success"
            type="checkbox"
            id="gridCheck"
            {...register("email")}
            />
          <label className="form-check-label">
            Eu concordo com os termos de uso.
          </label>
            {errors.email && <p className="text-danger">teste</p>}
        </div>
      </div>

      <div className="col-12 d-flex justify-content-end">
        <Button type="submit" btnType="success">
          Prosseguir
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
