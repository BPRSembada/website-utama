import React from "react";
import "../component/lps.css";

const LPS = () => {
  return (
    <div className="cont_main_LPS">
      <div className="LPS_jaminan">
        <div className="img_lps_page">
          <img src="LPS/lps_SEMBADA.jpg" alt="" />
        </div>
        <div className="des_LPS_page">
          <h3>
            LPS menjamin simpanan s.d 2 Miliyar per Nasabah Bank<sup>*</sup>
          </h3>
          <p>
            <sup>*</sup>Simpanan meliputi giro, deposito, sertifikat deposito,
            tabungan, dan/atau bentuk lainnya yang dipersamakan dengan itu
            sesuai dengan peraturan perundang-undangan di bidang perbankan.
          </p>
          <h3 className="mt-4">
            Tingkat Bunga Penjaminan Untuk Simpanan di BPR s.d{" "}
            <strong>6,75%</strong>
          </h3>
          <p>
            Lembaga Penjamin Simpanan (LPS) menetapkan nilai besaran simpanan
            yang dijamin per 1 Juni 2024 sesuai dengan Pengumuman Nomor:
            Peng-4/DSPS/2024. Tingkat Bunga Penjaminan untuk simpanan di Bank
            Perkreditan Rakyat berlaku mulai 1 Juni 2024 hingga 30 September
            2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LPS;
