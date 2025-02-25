import "../../css/Tentang-Kami/laporanKeuangan.css";
import { Accordion } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiClipboardTextOutline } from "@mdi/js";
const LaporanTataKelola = () => {
  return (
    <div>
      <div className="hero-section-keuangan"></div>
      <section className="cont-keuangan">
        <h2>Laporan Keuangan Bank Sembada</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Laporan Tata Kelola 2023</Accordion.Header>
            <Accordion.Body>
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <h3>Laporan Tata Kelola 2023</h3>
                </div>
                <a
                  href="LaporanTataKelolaTahun2023.pdf"
                  download="LaporanTataKelolaTahun2023.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
              <br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Laporan Tata Kelola 2022</Accordion.Header>
            <Accordion.Body>
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <h3>Laporan Tata Kelola 2022</h3>
                </div>
                <a
                  href="LaporanTataKelolaTahun2022.pdf"
                  download="LaporanTataKelolaTahun2022.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
              <br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
};
export default LaporanTataKelola;
