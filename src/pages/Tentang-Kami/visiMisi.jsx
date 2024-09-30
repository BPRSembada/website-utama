import "../../css/Tentang-Kami/visiMisi.css";
const VisiMisi = () => {
  return (
    <div>
      <div className="hero-section-visi"></div>

      <div className="deskripsi-simpanan-konvensional">
        <p>
          Bank Sembada berkomitmen untuk terus bertumbuh dan menjadi Bank yang
          terpercaya sebagai pilihan utama solusi keuangan layanan perbankan
          dengan menjalankan layanan berpegang pada prinsip{" "}
          <strong>"TULUS"</strong>.
        </p>
      </div>
      <section className="new-container-vismis">
        <div
          className="col-lg-6 new-visi"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
        >
          <h2>Pernyataan Visi Perusahaan</h2>
          <p>
            Menjadi Bank Perekonomian Rakyat yang terpercaya sebagai pilihan
            utama solusi keuangan layanan perbankan.
          </p>
        </div>
        <div
          className="col-lg-6 new-misi"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="300"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
        >
          <h2>Pernyataan Misi Perusahaan</h2>
          <p>
            Untuk mewujudkan pernyataan visi perusahaan tersebut, Bank Sembada
            berkomitmen dan menjunjung tinggi Filosofi <strong>“TULUS”</strong>{" "}
            yang menjadi nilai-nilai dan budaya perusahaan.
          </p>
          <ul>
            <li>
              <b>T</b>ransformasi layanan perbankan 3M (Mudah, Murah,
              Menguntungkan).
            </li>
            <li>
              <b>U</b>saha bertumbuh bersama nasabah menjadi lebih sehat dan
              kuat.
            </li>
            <li>
              <b>L</b>ingkungan sarana dan prasarana layanan berkualitas.
            </li>
            <li>
              <b>U</b>paya terus menerus meningkatkan nilai tambah layanan dan
              kepuasan seluruh stakeholder.
            </li>
            <li>
              <b>S</b>umber daya manusia yang berkompeten didukung teknologi
              informasi.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default VisiMisi;
