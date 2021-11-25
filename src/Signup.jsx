import { useForm } from "react-hook-form";
import { signup } from "../src/api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../src/authenticate";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // call API đăng ký tài khoản
    signup(data)
      .then((response) => {
        console.log("dang ky", response.data);
        authenticate(response.data.user);
        toast.success("Đăng ký thành cmn công");

        navigate("/signin");
      })
      .catch((error) => toast.error(error.response.data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Đăng ký</h2>
      <div>
        <input
          type="email"
          {...register("email")}
          placeholder="Email của bạn"
        />
      </div>
      <div>
        <input
          type="password"
          {...register("password")}
          placeholder="Mật khẩu"
        />
      </div>
      <button>Đăng ký</button>
    </form>
  );
};

export default Signup;
