import Icon from "@mdi/react";
import { mdiPhoneClassic, mdiWhatsapp, mdiEmailCheck } from "@mdi/js";

import "../../css/Hubungi-Kami/kontakKami.css";
const KontakKami = () => {
  return (
    <div>
      <section
        className="main-hero-kontakkami"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="img-kontakKami"></div>
        <div className="header-kontak">
          <h1>Hubungi Kami</h1>
        </div>
      </section>

      <section
        className="conten-kontak"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <h2>Terimakasih telah mengunjungi web Sembada</h2>
        <p>
          Anda dapat memilih salah satu saluran komunikasi di bawah ini, kami
          dengan senang hati akan melayani Anda.
        </p>
      </section>
      <div className="contact-container">
        <div
          className="contact-item"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Icon className="icon" path={mdiPhoneClassic} size={3} />
          <h3>Layanan Sembada Care</h3>
          <p>Hubungi kami di nomor:</p>
          <a href="tel: 021-3840786" target="blank">
            021-3840786
          </a>
          /
          <a href="tel:021-3840881" target="blank">
            021-3840881
          </a>
        </div>

        <div
          className="contact-item"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Icon className="icon" path={mdiWhatsapp} size={3} />
          <h3>Layanan WhatsApp Marketing</h3>
          <p>Hubungi kami melalui WhatsApp:</p>
          <a href="https://wa.me/6288801362000" target="blank">
            +62 888-0136-2000
          </a>
        </div>

        <div
          className="contact-item"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Icon className="icon" path={mdiEmailCheck} size={3} />
          <h3>Layanan Sembada Email</h3>
          <p>Kirim email kepada kami di:</p>
          <a href="mailto:bprsembada@bprsembada.com" target="blank">
            bprsembada@bprsembada.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default KontakKami;
