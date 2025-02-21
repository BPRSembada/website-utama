import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const SelectorHome = () => {
  const [homeValue, setHomeValue] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSelect = (e) => {
    const selectedValue = e.target.value;
    setHomeValue(selectedValue);
    console.log(selectedValue);

    if (selectedValue === "star") {
      window.location.href = "https://linktr.ee/marketinglendingstart";
    } else {
      setRedirect(true);
    }
  };

  if (redirect) {
    switch (homeValue) {
      case "pinjaman":
        return <Navigate to="/kreditKerja" />;
      case "Simpanan":
        return <Navigate to="/simKonvensional" />;
      case "DepositBox":
        return <Navigate to="/saveDepositBox" />;
      case "parembayan":
        return <Navigate to="/paymentPoint" />;
      case "komunitas":
        return <Navigate to="/kemitraan" />;
      case "organisasi":
        return <Navigate to="/karir" />;
      default:
        break;
    }
  }

  return (
    <div>
      <Form.Select
        value={homeValue}
        onChange={onSelect}
        className="option-home"
      >
        <option value="">Saya ingin...</option>
        <option value="star">Buka Tabungan Star</option>
        <option value="pinjaman">Pinjaman cepat, aman dan nyaman</option>
        <option value="Simpanan">Simpanan aman dan menguntungkan</option>
        <option value="DepositBox">
          Layanan Save Deposit Box aman dan bersahabat
        </option>
        <option value="parembayan">Layanan Pembayaran yg aman dan murah</option>
        <option value="komunitas">
          Mengembangkan komunitas yg bermakna bersama BPR Sembada
        </option>
        <option value="organisasi">
          Menjadi bagian dalam organisasi perusahaan yg energik dan produktif
        </option>
      </Form.Select>
    </div>
  );
};

export default SelectorHome;
