"use client";

import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { useRegistrationForm } from "@/hooks/useRegistrationForm";

export function RegistrationForm() {
  const { register, onSubmit, errors, isSubmitting } = useRegistrationForm();

  return (
    <Form onSubmit={onSubmit} className="_social_registration_form">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <Input
            id="registration-first-name"
            type="text"
            label="First Name"
            wrapperClassName="_social_registration_form_input _mar_b14"
            labelClassName="_social_registration_label _mar_b8"
            className="form-control _social_registration_input"
            error={errors.firstName?.message}
            {...register("firstName")}
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <Input
            id="registration-last-name"
            type="text"
            label="Last Name"
            wrapperClassName="_social_registration_form_input _mar_b14"
            labelClassName="_social_registration_label _mar_b8"
            className="form-control _social_registration_input"
            error={errors.lastName?.message}
            {...register("lastName")}
          />
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Input
            id="registration-email"
            type="email"
            label="Email"
            wrapperClassName="_social_registration_form_input _mar_b14"
            labelClassName="_social_registration_label _mar_b8"
            className="form-control _social_registration_input"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Input
            id="registration-password"
            type="password"
            label="Password"
            wrapperClassName="_social_registration_form_input _mar_b14"
            labelClassName="_social_registration_label _mar_b8"
            className="form-control _social_registration_input"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Input
            id="registration-repeat-password"
            type="password"
            label="Repeat Password"
            wrapperClassName="_social_registration_form_input _mar_b14"
            labelClassName="_social_registration_label _mar_b8"
            className="form-control _social_registration_input"
            error={errors.repeatPassword?.message}
            {...register("repeatPassword")}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
          <div className="form-check _social_registration_form_check">
            <input
              className={[
                "form-check-input _social_registration_form_check_input",
                errors.agreeToTerms ? "is-invalid" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              type="checkbox"
              id="registration-agree-to-terms"
              {...register("agreeToTerms")}
            />
            <label
              className="form-check-label _social_registration_form_check_label"
              htmlFor="registration-agree-to-terms"
            >
              I agree to terms & conditions
            </label>
            {errors.agreeToTerms && (
              <div className="invalid-feedback d-block">
                {errors.agreeToTerms.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
          <div className="_social_registration_form_btn _mar_t40 _mar_b60">
            <button
              type="submit"
              className="_social_registration_form_btn_link _btn1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Register now"}
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}
