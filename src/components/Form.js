import React from "react";
import GoogleLogin from "react-google-login";

const Form = ({ setStateGetData, setUploadContent }) => {
  const responseGoogle = (response) => {
    if (response.tokenObj) {
      setStateGetData(true);
      setUploadContent(true);
    }
  };

  return (
    <form className="container jumbotron">
      <div className="form-group col-md-4 mx-auto">
        <p className="font-weight-bold text-center ">
          iniciar sesion con Google
        </p>
        <GoogleLogin
          clientId="210357938956-ah2sf2tp8d7mpbbmmmesjgf5pap6rpkr.apps.googleusercontent.com"
          buttonText="Iniciar sesion"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </form>
  );
};

export default Form;
