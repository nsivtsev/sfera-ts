import React from "react";
import './landing.css'
import main from "./img/main.png";
import aboutLogo from "./img/about_logo.png"
import logo from "./img/logo.png"
import userSquare from "./img/user-square.svg"

export default function Landing() {
    return (
        <div className="bg-black flex flex-col text-white">
            <div className="landing__navbar m-auto flex justify-between items-center">
                <img src={logo} alt="СФЕРА" className=""/>
                <span className="landing__navbar-button inline-flex items-center">
                    <span className="mr-1">ВХОД</span>
                    <img src={userSquare} alt="Войти"/>
                </span>
            </div>
            <div className="landing__big-logo">
                <img src={main} alt="СФЕРА" className="w-3xl m-auto"/>
            </div>
            <div className="text-center landing__container">
                <p className="landing__slogan">
                    Внешние и внутренние визуальные данные <br />
                    на одной платформе: любая высота, любой ракурс.
                </p>
                <button className="bg-white hover:bg-gray-500 hover:text-white text-gray-600 rounded-lg px-3.5 py-1.5 landing__slogan-button mt-2">
                    ВОЙТИ
                </button>
                <div className="text-center landing__about max-w-2xl m-auto">
                    <p className="landing__about-header">
                        ЗАГОЛОВОК
                    </p>
                    <p>
                        Наша поддержка на каждом шаге. Начиная с управления парком беспилотных летательных аппаратов, заканчивая анализом объекта и  полной документацией.
                    </p>
                    <p>
                        Платформа вкладывает значительные средства
                        для обеспечения безопасности данных наших клиентов.
                    </p>
                    <p>
                        Данные технологии мощной цифровой реконструкции упростят рабочий процесс и оптимизируют внутренние ресурсы.
                    </p>
                    <p>
                        Используйте силу визуальных данных, чтобы сократить расходы бюджета и ненужные часы планирования.
                    </p>
                    <img src={aboutLogo} alt="СФЕРА" className="w-3xl m-auto mt-12"/>
                </div>
            </div>
        </div>
    );
}
