import React from "react";
import GoogleLogin from "react-google-login";

const Form = ({ setStatus }) => {
  const responseGoogle = (response) => {
    console.log(response.tokenObj);

    if (response.tokenObj) {
      setStatus(true);
    }
  };

  return (
    <form className="container jumbotron ">
      <div className="form-group col-md-4 mx-auto">
        <p className=" font-weight-bold text-center ">
          iniciar sesion con google
        </p>
      </div>
      <div className="form-group col-md-4 mx-auto">
        <button className="btn btn-primary btn-lg btn-block">Google </button>
      </div>
      <GoogleLogin
        // 2
        clientId="210357938956-ah2sf2tp8d7mpbbmmmesjgf5pap6rpkr.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </form>
  );
};

export default Form;
