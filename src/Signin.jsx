import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../src/firebase/firebase.config";
import { useForm } from "react-hook-form";
import { signin } from "../src/api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../src/authenticate";

const Signin = () => {
  const provider = new GoogleAuthProvider();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const googleSignin = async () => {
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  };

  const onSubmit = (data) => {
    // call API đăng ký tài khoản
    signin(data)
      .then((response) => {
        console.log(response.data);
        toast.success("Đăng nhập thành cmn công");

        // Lưu thông tin vào localStorage
        authenticate(response.data.user);

        // Lấy thông tin
        if (response.data.user.id === 1) {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((error) => toast.error(error.response.data));
  };
  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button>Đăng nhập</button>
        {/* <button onClick={googleSignin}>Sign in with google</button> */}
      </form>
    </div>
  );
};
export default Signin;
