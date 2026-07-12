"use client";

import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { useLoginForm } from "@/hooks/useLoginForm";
export function LoginForm() {
  const { register, onSubmit, errors, isSubmitting } = useLoginForm();

  return (
    <Form onSubmit={onSubmit} className="_social_login_form">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Input
            id="login-email"
            type="email"
            label="Email"
            wrapperClassName="_social_login_form_input _mar_b14"
            labelClassName="_social_login_label _mar_b8"
            className="form-control _social_login_input"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Input
            id="login-password"
            type="password"
            label="Password"
            wrapperClassName="_social_login_form_input _mar_b14"
            labelClassName="_social_login_label _mar_b8"
            className="form-control _social_login_input"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
          <div className="form-check _social_login_form_check">
            <input
              className="form-check-input _social_login_form_check_input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
              readOnly
            />
            <label
              className="form-check-label _social_login_form_check_label"
              htmlFor="flexRadioDefault2"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
          <div className="_social_login_form_left">
            <p className="_social_login_form_left_para">Forgot password?</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
          <div className="_social_login_form_btn _mar_t40 _mar_b60">
            <button
              type="submit"
              className="_social_login_form_btn_link _btn1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Login now"}
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}
