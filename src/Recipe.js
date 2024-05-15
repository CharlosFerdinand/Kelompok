import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import "./recipeStyle.css";

export default function Recipe() {
  const opts = {
    //OPTIONS
    height: "320",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const [videoId, setId] = useState("");
  var playerPosition = useRef();
  var adaanPosition = useRef();
  var lenjerPosition = useRef();
  var kulitPosition = useRef();
  var telurPosition = useRef();
  var kapalSelamPosition = useRef();

  function moveToAdaan() {
    window.scrollTo({
      top: adaanPosition.current.offsetTop,
      behavior: "smooth",
    });
  }
  function moveToLenjer() {
    window.scrollTo({
      top: lenjerPosition.current.offsetTop,
      behavior: "smooth",
    });
  }
  function moveToKulit() {
    window.scrollTo({
      top: kulitPosition.current.offsetTop,
      behavior: "smooth",
    });
  }
  function moveToTelur() {
    window.scrollTo({
      top: telurPosition.current.offsetTop,
      behavior: "smooth",
    });
  }
  function moveToKapalSelam() {
    window.scrollTo({
      top: kapalSelamPosition.current.offsetTop,
      behavior: "smooth",
    });
  }

  function playAdaan() {
    setId("P1v2Tbza8_A");
    window.scrollTo({
      top: playerPosition.current.offsetTop - 200,
      behavior: "smooth",
    });
  }
  function playLenjer() {
    setId("Ao4nw-hrgqE");
    window.scrollTo({
      top: playerPosition.current.offsetTop - 200,
      behavior: "smooth",
    });
  }
  function playKulit() {
    setId("LbiNxlXIbaA");
    window.scrollTo({
      top: playerPosition.current.offsetTop - 200,
      behavior: "smooth",
    });
  }
  function playTelur() {
    setId("oFTehTikmAA");
    window.scrollTo({
      top: playerPosition.current.offsetTop - 200,
      behavior: "smooth",
    });
  }
  function playKapalSelam() {
    setId("IDNjglrGRYU");
    window.scrollTo({
      top: playerPosition.current.offsetTop - 200,
      behavior: "smooth",
    });
  }
  return (
    <div className="background">
      <img src={require("./IMG/Pempek/campuranPempek.jpg")} className="bgIMG" />
      <div className="headFiller"></div>
      <div className="daWrap">
        <h1>Recipe</h1>
        <br />
        <div className="video-player" ref={playerPosition}>
          <YouTube videoId={videoId} opts={opts} />
        </div>
        <div className="recipe">
          <div className="recipeContent">
            <div className="recipeTitle">
              <br />
              <h1>List:</h1>
              <button onClick={moveToAdaan} className="pempekList">
                <h4>1. Pempek Adaan.</h4>
              </button>
              <br />
              <button onClick={moveToLenjer} className="pempekList">
                <h4>2. Pempek Lenjer.</h4>
              </button>
              <br />
              <button onClick={moveToKulit} className="pempekList">
                <h4>3. Pempek Kulit.</h4>
              </button>
              <br />
              <button onClick={moveToTelur} className="pempekList">
                <h4>4. Pempek Telur.</h4>
              </button>
              <br />
              <button onClick={moveToKapalSelam} className="pempekList">
                <h4>5. Pempek Kapal Selam.</h4>
              </button>
              <br />
              <a id="PempekAdaan" />
              <br />
            </div>
            <div className="recipeTitle">
              <h1 className="underline" ref={adaanPosition}>
                1. Pempek Adaan (+Saos Cuko).
              </h1>
              <h5>Kredit: Devina Hermawan</h5>
              <button onClick={playAdaan} className="recipeButton">
                Jalankan Video
              </button>
            </div>
            <br />
            <p className="bahan">Bahan adonan:</p>
            <p>
              1 kg ikan tenggiri giling
              <br />
              500 gr es serut / air es
              <br />
              4 sdm garam
              <br />
              5 sdm gula pasir
              <br />
              4 sdm kaldu jamur / penyedap
              <br />
              6 siung bawang putih, blender halus
              <br />
              2 butir putih telur
              <br />
              800 gr sagu
              <br />
              100 gr bawang merah, cincang kasar
              <br />
              4 batang daun bawang, iris
              <br />
              50 ml minyak panas
              <br />
              150 ml santan
              <br />
              <br />
            </p>
            <p className="bahan">
              Bahan cuko: <br />
            </p>
            <p>
              500 gr gula merah batok
              <br />
              60 gr cabai rawit hijau
              <br />
              12 siung bawang putih
              <br />
              2 sdm ebi kering, rendam air hangat
              <br />
              2 sdm cuka
              <br />
              30 gr asam jawa, rendam air hangat <br />
              2 sdt garam
              <br />
              2 sdm gula pasir
              <br />
              750 ml air
              <br />
              <br />
            </p>
            <p className="bahan">Cara membuat: </p>
            <p>
              1. Untuk kuah cuko, didihkan air, gula dan asam jawa, masak hingga
              mendidih. <br />
              2. Blender ebi, cabai rawit hijau, bawang putih dan sedikit air
              hingga halus. <br />
              3. Saring kuah cuko kemudian masukkan bumbu halus ke dalam kuah
              cuko. Tambahkan garam, gula pasir dan cuka, masak hingga mendidih
              dan matang. <br />
              4. Siram daun bawang dengan minyak panas, aduk rata. <br />
              5. Untuk adonan, masukkan ikan tenggiri, garam, kaldu jamur dan
              gula pasir ke dalam mixer, aduk hingga lengket. <br />
              6. Masukkan es serut, mixer hingga menyatu kemudian masukkan
              bawang putih, putih telur dan tepung sagu, aduk hingga merata.{" "}
              <br />
              7. Masukkan bawang merah, daun bawang dan santan, aduk rata.{" "}
              <br />
              8. Bentuk bulat adonan dengan scoop ice cream yang sudah di
              celupkan ke dalam minyak lalu goreng hingga kecokelatan di api
              sedang, tiriskan. <br />
              9. Untuk tekstur lebih krispi, potong-potong pempek yang sudah
              matang lalu goreng kembali hingga kering, tiriskan. <br />
            </p>
          </div>

          <a id="PempekLenjer" />
          <hr />

          <div className="recipeContent">
            <div className="recipeTitle" ref={lenjerPosition}>
              <h1>2. Pempek Lenjer.</h1>
              <h5>Kredit: susi kitchen</h5>
              <button onClick={playLenjer} className="recipeButton">
                Jalankan Video
              </button>
            </div>
            <br />
            <p className="bahan">Bahan adonan: </p>
            <p>
              1 kg ikan tenggiri giling
              <br />
              400 ml air
              <br />
              2 butir telur
              <br />
              2 sdm garam
              <br />
              1/2 sdm gula
              <br />
              penyedap rasa (bisa kaldu jamur) secukupnya
              <br />
              750 gr tepung sagu
              <br />
              <br />
            </p>
            <p className="bahan">Cara membuat:</p>
            <p>
              1. Masukkan ikan tenggiri giling, air, garam, gula, dan penyedap
              rasa ke dalam baskom.
              <br />
              2. Pecahkan telur dan kocok telurnya lalu dimasukkan ke dalam
              baskom.
              <br />
              3. Aduk adonan.
              <br />
              4. Ketika adonan mulai mengental, masukkan beberapa tepung sagu
              dan aduk adonan.
              <br />
              5. Setelah tepung mulai tercampur dengan adonan, tambahkan
              beberapa tepung sagu dan diulang hingga adonan tidak terlalu
              lengket lagi
              <br />
              6. Taburkan tepung sagu di atas permukaan.
              <br />
              7. Ambil adonan secukupnya lalu digulung.
              <br />
              8. Didih air di wajan dengan api sedang.
              <br />
              9. masukkan adonan ke dalam wajan.
              <br />
              10. Setelah 10 menit, adonan dibalik.
              <br />
              11. Biarkan adonan selama 10 menit atau ketika adonan telah mulai
              membesar. <br />
              12. Angkat adonan lalu tiriskan. <br />
            </p>
          </div>

          <a id="PempekKulit" />
          <hr />

          <div className="recipeContent">
            <div className="recipeTitle" ref={kulitPosition}>
              <h1>3. Pempek Kulit.</h1>
              <h5>Kredit: Ulfa Khairunnisa Santoso</h5>
              <button onClick={playKulit} className="recipeButton">
                Jalankan Video
              </button>
            </div>
            <br />
            <p className="bahan">Bahan Adonan:</p>

            <p>
              1 kg kulit ikan tenggiri giling
              <br />
              35 gr garam halus
              <br />
              20 gr penyedap rasa
              <br />
              5 gr baking powder
              <br />
              15 gr lada bubuk
              <br />
              200 gr santan kara
              <br />
              4 butir telur
              <br />
              100 gr bawang merah (diiris) <br />
              100 gr daun bawang (diiris) <br />
              100 gr tepung terigu
              <br />
              700 gr tepung tapioka
              <br />
              minyak goreng
              <br />
              <br />
            </p>
            <p className="bahan">Cara membuat:</p>

            <p>
              1. Campurkan garam, penyedap rasa, baking powder, dan lada kedalam
              santan dan aduk hingga larut. <br />
              2. Tuangkan santan dan kulit ikan tenggiri kedalam baskom lalu
              diaduk hingga tercampur rata. <br />
              3. Pecahkan telur dan masukkan ke dalam adonan dan diaduk hingga
              tercampur rata. <br />
              4. Masukkan bawang merah dan daun bawang yang telah diiris ke
              dalam adonan lalu diaduk hingga tercampur rata. <br />
              5. Masukkan tepung terigu ke dalam adonan lalu diaduk hingga
              tercampur rata. <br />
              6. Masukkan 600 gr tepung tapioka ke dalam adonan lalu diaduk
              hingga tercampur rata. Diusahakan aduknya dari ujung baskom dan
              perlahan-lahan sambil memutar agar pempek tidak mengeras. <br />
              7. Panaskan minyak goreng dengan api sedang. <br />
              8. Taburkan tepung tapioka di tangan lalu ambil adonan sekepal
              tangan. <br />
              9. Taburkan beberapa tepung tapioka ke adonan lalu bentukkan
              adonan berbentuk penyet bulat. <br />
              10. Masukkan adonan yang telah dibentuk kedalam minyak goreng.{" "}
              <br />
              11. Angkat adonan yang telah menjadi kuning keemasan dan sedikit
              gelap lalu ditiris. <br />
            </p>
          </div>

          <a id="PempekTelur" />
          <hr />

          <div className="recipeContent">
            <div className="recipeTitle" ref={telurPosition}>
              <h1>4. Pempek Telur.</h1>
              <h5>Kredit: ria zi</h5>
              <button onClick={playTelur} className="recipeButton">
                Jalankan Video
              </button>
            </div>
            <br />
            <p className="bahan">Bahan adonan:</p>
            <p>
              500 gr ikan giling, bisa gabus, tenggiri
              <br />
              400 gr sagu tani
              <br />
              400ml air
              <br />
              2,5 sdt garam
              <br />
              1 sdt gula pasir <br />
              1 sdt penyedap rasa
              <br />
              minyak goreng
              <br />
              <br />
              Bahan isian: <br />
              4 butir telur
              <br />
              1/4 sdt garam
              <br />
              <br />
            </p>
            <p className="bahan">Cara membuat:</p>
            <p>
              1. Untuk isiannya, pecahkan telur dan masukkan garam lalu diaduk
              rata.
              <br />
              2. Masukkan isian kedalam botol kecap.
              <br />
              3. Untuk adonan, masukkan air, ikan giling, garam, gula, dan
              penyedap rasa lalu aduk hingg tercampur rata dan adonan terasa
              lembut dan kental.
              <br />
              4. Masukkan sagu perlahan sambil diaduk hingga rata.
              <br />
              5. Terus aduk hingga adonan menjadi lembek.
              <br />
              6. Siapkan pot air dan masukkan minyak secukupnya agar pempek
              tidak lengket lalu dididihkan.
              <br />
              7. Taburkan sagu ke tangan, lalu ambil sekepal adonan.
              <br />
              8. Bentukkan adonan menjadi bola lalu tekan jempol ke tengah
              adonan dan dibentuk menjadi seperti mangkok.
              <br />
              9. Masukkan isian ke dalam lubang lalu pinggirannya dicubit hingga
              isian tertutup rapat.
              <br />
              10. Masukkan adonan ke dalam pot.
              <br />
              11. Angkat adonan yang mengapung dan melendung lalu ditiriskan.
              <br />
            </p>
          </div>

          <a id="PempekKapalSelam" />
          <hr />

          <div className="recipeContent">
            <div className="recipeTitle" ref={kapalSelamPosition}>
              <h1>5. Pempek Kapal Selam.</h1>
              <h5>Kredit: Yongki Gunawan</h5>
              <button onClick={playKapalSelam} className="recipeButton">
                Jalankan Video
              </button>
            </div>
            <br />
            <p className="bahan">Bahan adonan:</p>
            <p>
              1,2 kg ikan tenggiri giling
              <br />
              30 gr gula pasir 15 gr MSG
              <br />
              24 gr garam
              <br />
              600 gr air
              <br />
              1,2 kg sagu tani
              <br />
              1 butir telur bebek
              <br />
              2 lembar daun salam
              <br />
              <br />
              Bahan saus cuka:
              <br />
              100 gr asem jawa
              <br />
              1,2 kg air mineral
              <br />
              50 gr tauco kuning
              <br />
              50 gr bawang putih
              <br />
              100 gr cabai rawit hijau
              <br />
              35 gr garam
              <br />
              250 gr gula aren
              <br />
              350 gr kecap manis
              <br />
              2 gr cuka
              <br />
              2 lembar daun salem
              <br />
              <br />
            </p>
            <p className="bahan">Cara membuat:</p>
            <p>
              1. Untuk pempeknya, masukkan ikan tenggiri, gula pasir, dan MSG
              kedalam mixer dan diaduk deengan kecepatan rendah.
              <br />
              2. Setelah menjadi lembut, masukkan air dikit-dikit.
              <br />
              3. Jika menggunakan mixer, pindahkan adonan ke baskom lain ketika
              adonan udah menjadi lembut.
              <br />
              4. Masukkan garam lalu diaduk hingga rata.
              <br />
              5. Masukkan sagu tani dikit-dikit sambil diaduk.
              <br />
              6. Seletah adonan tercampur rata dan dapat di angkat secara
              keseluruhannya, diamkan adonan selama 15- 20 menit.
              <br />
              7. Untuk isian dari pempeknya, pecahkan telur bebek dan pisahkan
              tiap bagian kuningnya.
              <br />
              8. Ambil 150 gr adonan dan bentuklah adonan menjadi bola lalu
              bagian tengahnya ditekan hingga ada ruangan untuk menaruk kuning
              telur.
              <br />
              9. taruk kuning telur ke dalam adonan lalu pincit ujung adonan
              untuk menutup kuning telur.
              <br />
              10. Ambil adonan sebanyak satu kepalan lalu di gulung.
              <br />
              11. Panaskan air dengan 2 daun salam hingga mendidih, lalu
              masukkan adonan pempek.
              <br />
              12. Selagi merebus pempek, buat saus cukanya. Untuk cukanya,
              masukkan 500 gr air dan asem jawa ke dalam mangkok bersih.
              <br />
              13. Hancurkan asem jawa dengan tangan di dalam air lalu airnya
              disaring.
              <br />
              14. Masukkan air yang ada di mangkok, tauco kuning, bawang putih,
              garam, gula aren, dan cabe rawit hijau ke dalam blender.
              <br />
              15. Hidupkan blender hingga semuah bahan tercampur rata, lalu
              masukkan kecap manis dan 700 gr air ke dalam blender lalu
              diaduk-aduk.
              <br />
              16. Rebus saus cuka dengan 2 lembar daun salam dan diberi sedikit
              cuka. Berhenti merebus saus cuka ketika mulai mendidih.
              <br />
              17. Balik ke pempek, tiriskan pempek lalu gorengkan pempek dalam
              minyak goreng untuk sementara.
              <br />
              18. Pempek lalu disaji di piring dengan saus cuka, timun yang
              telah diiris, dan mie.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
