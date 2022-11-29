import React from "react";
import styled from "styled-components";

export default function RulesModal({ setRulesModal }) {
  return (
    <ModalStyled>
      <h2>Oyunun Qaydaları</h2>
      <ol>
        <li>Oyunda resursları idarə etməlisən: yemək, pul, əhali və s.</li>
        <li>
          <strong>Qazanmaq üçün əhali sayıvı 100-ə çatdırmalısan!</strong>
        </li>
        <li>
          Hər bir resurs hansısa regionda qurduğun sektor/zonada qazanılır.
        </li>
        <li>
          Hər bir regionda ən çox 1 sektor qura bilərsən və qurmaq üçün pul
          xərcləməlisən. Regionda qurulan sektoru sonradan ləğv edib yenisini
          qura bilmərsən!
        </li>
        <li>
          Yemək <i className="fa-solid fa-apple-whole"></i> üçün kənd
          təsərrüfatı sektoru qurmalısan. Hər əhalin artdıqca tur başına yemək
          sayın da azalacaq.{" "}
          <strong> Yemək sayın 0a düşsə aclığa görə oyunu uduzacaqsan! </strong>
        </li>
        <li>
          Pul <i className="fa-solid fa-money-bill"></i> üçün neft və yemək
          resurslarıvı ticarət zonasında sata bilərsən. Əhalin də xoşbəxtlikdən
          asılı olaraq hər tur üçün vergi verir. Turizm zonası da tikdiyin otel
          sayı və mədəniyyət xalı bonusuyla sənə pul qazandırır.
        </li>
        <li>
          Neft <i className="fa-solid fa-oil-well"></i> neft sektorunda neft
          quyusu qazaraq yaxud neft şirkəti quraraq qazanılır. Nefti ticarət
          zonasında sata bilərsən. Ancaq bir ticarət zonasında neft satdıqca
          onun bazar qiyməti azalacaq və həmin yerdə satdığın nefti daha ucuza
          satmalı olacaqsan
        </li>
        <li>
          Əhali <i className="fa-solid fa-people-group"></i> xoşbəxtliyin 65dən
          çox olduqda hər tur +1 artır. Əgər xoşbəxtlik 65dən çoxdusa adambaşına
          +2, 35-65 arasıdırsa adambaşına +1, 35dən aşağıdırsa adambaşına 0
          vergi alacaqsan. Hər artan əhaliyə görə yemək artımın -1 və xoşbəxtlik
          -2 azalır. <strong>Əhali sayın 100ə çatdıqda oyunu udacaqsan!</strong>
        </li>
        <li>
          Xoşbəxtlik <i className="fa-solid fa-face-smile"></i> üçün sosial
          zonadan istifadə edə bilərsən. Hər 3 mədəniyyət xalına görə də +1
          xoşbəxtlik qazanırsan. Xoşbəxtliyi yüksək tutaraq əhali artımı və
          yüksək vergidən gələn pul qazanlrsan.
          <strong>Xoşbəxtlik 0a düşdükdə oyunu uduzursan!</strong>
        </li>
        <li>
          Mədəniyyət <i className="fa-solid fa-palette"></i> üçün mədəniyyət
          zonasından istifadə edə bilərsən. Mədəniyyət xalın xoşbəxtliyivə və
          turizmdən gələn gəlirivə müsbət təsir göstərir
        </li>
        <li>
          Ordu <i className="fa-solid fa-person-military-rifle"></i> üçün hərbi
          zonadan əsgər ala bilərsən. Hər 5 turdan bir əsgər sayın -1 azalacaq.{" "}
          <strong>Ordun 0-a düşdükdə işğal olunub oyunu uduzacaqsan!</strong>
        </li>
      </ol>
      <button onClick={() => setRulesModal(false)}>
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  ol {
    background: white;
    color: #092235;
    width: 700px;
    padding: 2rem 3rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 2.2rem;
  }

  button {
    position: fixed;
    right: 10%;
    top: 10%;
    background: transparent;
    border: 0;
    font-size: 2.5rem;
    color: #ff4742;
    cursor: pointer;
  }
`;
