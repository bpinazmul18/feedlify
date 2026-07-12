import { LoginForm } from "@/components/auth/LoginForm";
import Image from "@/components/ui/Image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="_social_login_wrapper _layout_main_wrapper">
      <div className="_shape_one">
        <Image
          src="/assets/images/shape1.svg"
          alt=""
          className="_shape_img"
          preload
        />
        <Image
          src="/assets/images/dark_shape.svg"
          alt=""
          className="_dark_shape"
        />
      </div>
      <div className="_shape_two">
        <Image src="/assets/images/shape2.svg" alt="" className="_shape_img" />
        <Image
          src="/assets/images/dark_shape1.svg"
          alt=""
          className="_dark_shape _dark_shape_opacity"
        />
      </div>
      <div className="_shape_three">
        <Image
          src="/assets/images/shape3.svg"
          alt=""
          className="_shape_img"
          preload
        />
        <Image
          src="/assets/images/dark_shape2.svg"
          alt=""
          className="_dark_shape _dark_shape_opacity"
        />
      </div>
      <div className="_social_login_wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="_social_login_left">
                <div className="_social_login_left_image">
                  <Image
                    src="/assets/images/login.png"
                    alt="Image"
                    className="_left_img"
                    preload
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="_social_login_content">
                <div className="_social_login_left_logo _mar_b28">
                  <Image
                    src="/assets/images/logo.svg"
                    alt="Image"
                    className="_left_logo"
                  />
                </div>
                <p className="_social_login_content_para _mar_b8">
                  Welcome back
                </p>
                <h4 className="_social_login_content_title _titl4 _mar_b50">
                  Login to your account
                </h4>
                <button
                  type="button"
                  className="_social_login_content_btn _mar_b40"
                >
                  <Image
                    src="/assets/images/google.svg"
                    alt="Image"
                    className="_google_img"
                  />
                  <span>Or sign-in with google</span>
                </button>
                <div className="_social_login_content_bottom_txt _mar_b40">
                  {" "}
                  <span>Or</span>
                </div>
                <LoginForm />
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="_social_login_bottom_txt">
                      <p className="_social_login_bottom_txt_para">
                        Dont have an account?{" "}
                        <Link href="/register">Create New Account</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
