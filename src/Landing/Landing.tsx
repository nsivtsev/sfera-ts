import React from "react";
import main from "../Landing/img/main.png";

export default function Landing() {
    return (
        <div className="bg-black flex flex-col text-white">
            <div className="landing__big-logo">
                <img src={main} alt="СФЕРА" className="max-w-3xl m-auto"/>
            </div>
            <div className="text-center landing__container">
                <p className="landing__slogan">
                    Внешние и внутренние визуальные данные <br />
                    на одной платформе: любая высота, любой ракурс.
                </p>
                <div className="text-center landing__about">
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
                </div>
            </div>
        </div>
    );
}
