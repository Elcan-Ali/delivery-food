import React from "react";
import AuthInput from "../atoms/auth/AuthInput";
import { nanoid } from "@reduxjs/toolkit";
import AuthButton from "../atoms/auth/AuthButton";
import AuthTitle from "../atoms/auth/AuthTitle";
import AuthSocial from "../atoms/auth/AuthSocial";
import AppleIcon from "../../assets/img/auth-apple.svg";
import GoogleIcon from "../../assets/img/auth-google.png";

function AuthForm({ title, elements, buttonText, helperText, helperLink }) {
    return (
        <div className="w-[382px] text-center">
            <AuthTitle>{title}</AuthTitle>
            <div className="flex gap-[8%] mt-[20px]">
                <AuthSocial icon={GoogleIcon} />
                <AuthSocial icon={AppleIcon} />
            </div>
            <span className="block uppercase text-[#32314259] font-medium text-[20px] my-[20px]">or</span>
            <form className="flex-center flex-col">
                <div className="flex flex-col gap-[24px]  w-full">
                    {elements.map((item) => (
                        <AuthInput key={nanoid()} {...item} />
                    ))}
                </div>
                {buttonText === "Sign In" && (
                    <p className="text-right w-full mt-[20px] text-[15px] text-color-3">
                        Forget Password ?
                    </p>
                )}
                <AuthButton>{buttonText}</AuthButton>
                <p className="text-[16px] tracking-[.3px] mt-[20px]">
                    {helperText}{" "}
                    <span className="text-color-3 font-bold">{helperLink}</span>
                </p>
            </form>
        </div>
    );
}

export default AuthForm;
