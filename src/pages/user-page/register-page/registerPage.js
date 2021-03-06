import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormError from "../../../common/FormError";
import { NotificationManager } from "react-notifications";
import callApi from "../../../common/callApi";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "../../../actions/actions";
import { withRouter } from "react-router-dom";
import { getValueInput, validateInput } from "../../../common/validate";
import Waiting from "../../../common/waiting";

function RegisterPage(props) {
  const { t } = useTranslation("translation");
  const dispatchLogin = useDispatch();
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const [stateInput, setStateInput] = useState({
    firstname: {
      errorMessage: "",
    },
    lastname: {
      errorMessage: "",
    },
    email: {
      errorMessage: "",
    },
    phone: {
      errorMessage: "",
    },
    password: {
      errorMessage: "",
    },
    confirmPass: {
      errorMessage: "",
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const inputFirstname = useRef();
  const inputEmail = useRef();
  const inputLastname = useRef();
  const inputPhone = useRef();
  const inputPassword = useRef();
  const inputConfirmPass = useRef();

  const handleInputValidate = (e) => {
    const { name } = e.target;
    const { errorMessage } = validateInput(
      name,
      getValueInput(
        name,
        inputEmail,
        inputFirstname,
        inputLastname,
        inputPhone,
        inputPassword,
        inputConfirmPass
      ),
      inputPassword.current.value
    );
    const newState = { ...stateInput[name] };
    newState.errorMessage = errorMessage;
    setStateInput({ ...stateInput, [name]: newState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = inputFirstname.current.value;
    const lastName = inputLastname.current.value;
    const email = inputEmail.current.value;
    const phone = inputPhone.current.value;
    const password = inputPassword.current.value;
    const confirmPassword = inputConfirmPass.current.value;

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phone !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (password !== confirmPassword) {
        NotificationManager.warning(t("register.pass-again"));
        return false;
      }
      checkEmailDuplicate();
      setIsWaiting(true);
    } else {
      NotificationManager.warning(t("register.require"));
      setIsWaiting(false);
    }
  };

  const checkEmailDuplicate = () => {
    callApi(`users?email=${inputEmail.current.value}`, "get", null).then(
      (res) => {
        if (res.data.length === 0) {
          handleLogin();
          return false;
        } else {
          NotificationManager.warning(t("register.email-exist"));
          return true;
        }
      }
    );
  };

  const handleLogin = () => {
    const user = {
      id: uuidv4(),
      email: inputEmail.current.value,
      firstName: inputFirstname.current.value,
      lastName: inputLastname.current.value,
      password: inputPassword.current.value,
      phone: inputPhone.current.value,
      role: "menber",
    };

    callApi(`users`, "Post", user).then((res) => {
      if (res && res.status === 201) {
        localStorage.setItem(
          "Token",
          JSON.stringify({
            ...res.data,
            password: "******",
            role: "***",
          })
        );
        NotificationManager.success(t("register.success"));

        setTimeout(() => {
          setIsWaiting(false);
          dispatchLogin(actLogin());
        }, 500);
      } else NotificationManager.error(t("resgiter.err"));
    });
  };

  if (loggedIn || localStorage.getItem("Token") !== null) {
    props.history.goBack();
    return null;
  }

  return (
    <main>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Waiting />
        </div>
      ) : (
        <section className="register">
          <div className="box">
            <div className="register__content">
              <div className="register__content__title title-content">
                <h1
                  style={{ textShadow: "-2px 2px 2px rgba(229,229,229,0.74)" }}
                >
                  {t("register.h1")}
                </h1>
              </div>
              <div className="register__content__form form">
                <form onSubmit={handleSubmit}>
                  <div className="register__content__form__title1">
                    <h3
                      style={{
                        textShadow: "-2px 2px 2px rgba(229,229,229,0.74)",
                      }}
                    >
                      {t("register.h3")}
                    </h3>
                  </div>
                  <div className="form-group">
                    <label>
                      {t("register.first-name")} <span>*</span>
                    </label>
                    <input
                      type="text"
                      ref={inputFirstname}
                      name="firstname"
                      onKeyUp={handleInputValidate}
                    />
                    <FormError
                      errorMessage={stateInput.firstname.errorMessage}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      {t("register.last-name")} <span>*</span>
                    </label>
                    <input
                      type="text"
                      ref={inputLastname}
                      name="lastname"
                      onKeyUp={handleInputValidate}
                    />
                    <FormError
                      errorMessage={stateInput.lastname.errorMessage}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      {t("register.email")} <span>*</span>
                    </label>
                    <input
                      type="email"
                      ref={inputEmail}
                      name="email"
                      onKeyUp={handleInputValidate}
                    />
                    <FormError errorMessage={stateInput.email.errorMessage} />
                  </div>
                  <div className="form-group">
                    <label>
                      {t("register.phone")} <span>*</span>
                    </label>
                    <input
                      type="phone"
                      ref={inputPhone}
                      name="phone"
                      onKeyUp={handleInputValidate}
                    />
                    <FormError errorMessage={stateInput.phone.errorMessage} />
                  </div>
                  <div className="register__content__form__title2">
                    <h3
                      style={{
                        textShadow: "-2px 2px 2px rgba(229,229,229,0.74)",
                      }}
                    >
                      {t("register.info-login")}
                    </h3>
                  </div>
                  <div className="form-group">
                    <label>
                      {t("register.password")} <span>*</span>
                    </label>
                    <input
                      type="password"
                      ref={inputPassword}
                      name="password"
                      onKeyUp={handleInputValidate}
                    />
                    <FormError
                      errorMessage={stateInput.password.errorMessage}
                    />
                  </div>
                  <div className="form-group">
                    <label>{t("register.confirm")}</label>
                    <input
                      type="password"
                      ref={inputConfirmPass}
                      name="confirmPass"
                      onKeyUp={handleInputValidate}
                    />
                    <FormError
                      errorMessage={stateInput.confirmPass.errorMessage}
                    />
                  </div>
                  <div className="register__content__form__btn btn-form">
                    <button
                      type="submit"
                      style={{ boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)" }}
                    >
                      {isWaiting ? (
                        <div className="btn-view">
                          <Waiting />
                        </div>
                      ) : (
                        t("register.btn-register")
                      )}
                    </button>
                    <button
                      type="button"
                      style={{ boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)" }}
                      onClick={() => props.history.goBack()}
                    >
                      <i className="fas fa-reply"></i>
                      {t("register.btn-back")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default withRouter(RegisterPage);
