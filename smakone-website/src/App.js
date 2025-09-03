import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Component
import ScrollToTop from "./Component/ScrollToTop";

// Import Pages
import Home from "./Pages/Home/Home";
import Soundscape from "./Pages/Kegiatan/soundscape";
import STN from "./Pages/Kegiatan/stn";
import SAPxSNM from "./Pages/Kegiatan/SAPxSNM/SAPxSNM";
import Paintings from "./Pages/Kegiatan/SAPxSNM/Paintings";
import PaintingDetails from "./Pages/Kegiatan/SAPxSNM/PaintingDetails";
import SOC from "./Pages/Kegiatan/soc";

import Edward from "./Pages/Home/Alasan/Edward";
import Emily from "./Pages/Home/Alasan/Emily";
import Rania from "./Pages/Home/Alasan/Rania";
import Jayden from "./Pages/Home/Alasan/Jayden";

import Osis from "./Pages/Osis/Osis";

import SeleksiOsis from "./Pages/Osis/ListKepanitiaan/Osis2025";
import PanitiaBazone2024 from "./Pages/Osis/ListKepanitiaan/Bazone2024";
import PesertaTOS from "./Pages/Osis/ListKepanitiaan/TOS2025";
import CuratorsTedx from "./Pages/Osis/ListKepanitiaan/curatorsTedx2025";
import SOCTahap12025 from "./Pages/Osis/ListKepanitiaan/SOCTahap12025";
import SOC2025Gel2 from "./Pages/Osis/ListKepanitiaan/SOC25Tahap1-gel2";
import OneJournal25 from "./Pages/Osis/ListKepanitiaan/oneJournal25";
import KrizaEsports25 from "./Pages/Osis/ListKepanitiaan/krizaEsports25";
import OneFM from "./Pages/Osis/ListKepanitiaan/onefm2025.js";
import Sapxsms25 from "./Pages/Osis/ListKepanitiaan/sapxsms2025.js";
import Sapext25 from "./Pages/Osis/ListKepanitiaan/sapextend25.js";
import Sog25 from "./Pages/Osis/ListKepanitiaan/sog25.js";

import Emagz from "./Pages/Emagz/Emagz";
import Ass1st from "./Pages/Ass1st/Ass1st";
import Kedokteran from "./Pages/Ass1st/Jurusan/Kedokteran";
import Farmasi from "./Pages/Ass1st/Jurusan/Farmasi";
import Keguruan from "./Pages/Ass1st/Jurusan/Keguruan";
import Sosiologi from "./Pages/Ass1st/Jurusan/Sosiologi";
import Akutansi from "./Pages/Ass1st/Jurusan/Akutansi";
import Hukum from "./Pages/Ass1st/Jurusan/Hukum";
import Psikologi from "./Pages/Ass1st/Jurusan/Psikologi";
import Sipil from "./Pages/Ass1st/Jurusan/Sipil";
import Pertambangan from "./Pages/Ass1st/Jurusan/Pertambangan";

import TentangKami from "./Pages/TentangSMAK1/TentangSMAK1";
import Sejarah from "./Pages/TentangSMAK1/Sejarah";
import Fasilitas from "./Pages/TentangSMAK1/Fasilitas";
import Logo from "./Pages/TentangSMAK1/Logo";
import Lagu from "./Pages/TentangSMAK1/Lagu";

import KehidupanSmukiers from "./Pages/Smukiers/KehidupanSmukiers";
import Clubpage from "./Pages/Clubs/Clubpage";
import TipsBelajar from "./Pages/Smukiers/TipsBelajar";
import KegiatanSetelahKelas from "./Pages/Smukiers/KegiatanSetelahKelas";

import BPH from "./Pages/Osis/BPH/BPH";
import OSIS_1 from "./Pages/Osis/Osis_1/Osis_1";
import OSIS_2 from "./Pages/Osis/Osis_2/Osis_2";
import OSIS_3 from "./Pages/Osis/Osis_3/Osis_3";
import OSIS_4 from "./Pages/Osis/Osis_4/Osis_4";
import OSIS_5 from "./Pages/Osis/Osis_5/Osis_5";
import OSIS_6 from "./Pages/Osis/Osis_6/Osis_6";
import OSIS_7 from "./Pages/Osis/Osis_7/Osis_7";
import OSIS_8 from "./Pages/Osis/Osis_8/Osis_8";
import OSIS_9 from "./Pages/Osis/Osis_9/Osis_9";
import OSIS_10 from "./Pages/Osis/Osis_10/Osis_10";

import NoMatchPages from "./Pages/NoMatchPages/NoMatchPages";

import AlumniPage from "./Pages/Alumni/alumni";
import Billy from "./Pages/Alumni/BillyStevanus";
import Scoot from "./Pages/Alumni/ScottMoses";
import Nicole from "./Pages/Alumni/NicoleCharlene";
import Seni from "./Pages/Kegiatan/seni";
import Pramuka from "./Pages/Kegiatan/pramuka";
import DoFEIA from "./Pages/Kegiatan/DoFEIA";
import Kegiatan from "./Pages/Kegiatan/Kegiatan";
import OneCast from "./Pages/Kegiatan/onecast";
import BukuAcara from "./Pages/Home/Buku_Acara";

import CodeOne from "./Pages/Clubs/CodeOne";
import F1RST from "./Pages/Clubs/F1RST/F1RST";
import Monograph from "./Pages/Clubs/Monograph/Monograph";
import Shutterone from "./Pages/Clubs/Shutterone/Shutterone";
import SYC from "./Pages/Clubs/SYC/SYC";
import SmukiezChoir from "./Pages/Clubs/SmukiezChoir/SmukiezChoir";
import Serenity from "./Pages/Clubs/Serenity";
import Flashone from "./Pages/Clubs/Flashone/Flashone";
import Cressendo from "./Pages/Clubs/Cressendo/Cressendo";
import SClub from "./Pages/Clubs/scj";
import MUN from "./Pages/Clubs/MUN";
import Kriza from "./Pages/Clubs/kriza";
import EDS from "./Pages/Clubs/EDS/EDS";
import OneMUN from "./Pages/Clubs/OneMUN/OneMUN";
import OneJournal from "./Pages/Clubs/OneJournal/OneJournal";
import OneAID from "./Pages/Clubs/OneAID";
import Mask from "./Pages/Clubs/Mask/Mask";


function App() {
  return (
    <div className="w-full h-full font-Product">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BukuAcara" element={<BukuAcara />} />
        <Route path="/kegiatan/" element={<Kegiatan />} />
        <Route path="/kegiatan/soc" element={<SOC />} />
        <Route path="/kegiatan/soundscape" element={<Soundscape />} />
        <Route path="/kegiatan/sap" element={<STN />} />
        <Route path="/kegiatan/sapxsnm" element={<SAPxSNM />} />
        <Route path="/kegiatan/sapxsnm/artwork" element={<Paintings />} />{" "}
        {/* ketuker istilah artwork sama paintings pas bikin */}
        <Route
          path="/kegiatan/sapxsnm/artwork/:id"
          element={<PaintingDetails />}
        />
        <Route path="/kegiatan/seni" element={<Seni />} />
        <Route path="/kegiatan/scj" element={<SClub />} />
        <Route path="/kegiatan/pramuka" element={<Pramuka />} />
        <Route path="/kegiatan/onecast" element={<OneCast />} />
        <Route path="/kegiatan/DoFE" element={<DoFEIA />} />
        {/* Clubs */}
        <Route path="/clubs/scj" element={<SClub />} />
        <Route path="/clubs/muneds" element={<MUN />} />
        <Route path="/clubs/kr1za" element={<Kriza />} />
        <Route path="/Clubs" element={<Clubpage />} />
        <Route path="/clubs/codeone" element={<CodeOne />} />
        <Route path="/clubs/f1rst" element={<F1RST />} />
        <Route path="/clubs/monograph" element={<Monograph />} />
        <Route path="/clubs/shutterone" element={<Shutterone />} />
        <Route path="/clubs/SYC" element={<SYC />} />
        <Route path="/clubs/smukiezchoir" element={<SmukiezChoir />} />
        <Route path="/clubs/serenity" element={<Serenity />} />
        <Route path="/clubs/Flashone" element={<Flashone />} />
        <Route path="/clubs/Cressendo" element={<Cressendo />} />
        <Route path="/clubs/OneMUN" element={<OneMUN />} />
        <Route path="/clubs/EDS" element={<EDS />} />
        <Route path="/clubs/OneJournal" element={<OneJournal />} />
        <Route path="/clubs/oneaid" element={<OneAID />} />
        <Route path="/clubs/Mask" element={<Mask />} />

        {/* Alasan */}
        <Route path="/alasan/Edward" element={<Edward />} />
        <Route path="/alasan/Emily" element={<Emily />} />
        <Route path="/alasan/Rania" element={<Rania />} />
        <Route path="/alasan/Jayden" element={<Jayden />} />
        <Route path="/tentang_smak1" element={<TentangKami />} />
        <Route path="/tentang_smak1/sejarah" element={<Sejarah />} />
        <Route path="/tentang_smak1/fasilitas" element={<Fasilitas />} />
        <Route path="/tentang_smak1/logo" element={<Logo />} />
        <Route path="/tentang_smak1/lagu" element={<Lagu />} />
        <Route path="/Kehidupan_smukiers" element={<KehidupanSmukiers />} />
        <Route path="/Clubs" element={<Clubpage />} />
        <Route path="/Kehidupan_smukiers/tips" element={<TipsBelajar />} />
        <Route
          path="/Kehidupan_smukiers/kegiatan"
          element={<KegiatanSetelahKelas />}
        />
        <Route path="/Kehidupan_smukiers/Alumni" element={<AlumniPage />} />
        <Route
          path="/Kehidupan_smukiers/Alumni/BillyStevanus"
          element={<Billy />}
        />
        <Route
          path="/Kehidupan_smukiers/Alumni/ScottMoses"
          element={<Scoot />}
        />
        <Route
          path="/Kehidupan_smukiers/Alumni/NicoleCharlene"
          element={<Nicole />}
        />
        {/* Hasil Seleksi Kepanitiaan */}
        {/* Hasil Seleksi Kepanitiaan */}
        {/* Hasil Seleksi Kepanitiaan */}
        <Route path="/OSIS/panitiabazone2024" element={<PanitiaBazone2024 />} />
        <Route path="/OSIS/PengumumanOSIS2025" element={<SeleksiOsis />} />
        <Route path="/OSIS/PesertaTOS2025" element={<PesertaTOS />} />
        <Route path="/OSIS/CuratorsTEDx2025" element={<CuratorsTedx />} />
        <Route path="/OSIS/SOC2025" element={<SOCTahap12025 />} />
        <Route path="/OSIS/soc2025-gel2-final" element={<SOC2025Gel2 />} />
        <Route path="/OSIS/onejournal2025" element={<OneJournal25 />} />
        <Route path="/OSIS/krizaesports2025" element={<KrizaEsports25 />} />
        <Route path="/OSIS/onefm2025" element={<OneFM />} />
        <Route path="/OSIS/sapxsms2025" element={<Sapxsms25 />} />
        <Route path="/OSIS/sapxsms2025-extended" element={<Sapext25 />} />
        <Route path="/OSIS/sog2025" element={<Sog25 />} />
        {/* OSIS */}
        <Route path="/OSIS" element={<Osis />} />
        <Route path="/OSIS/bph" element={<BPH />} />
        <Route path="/OSIS/bidang1" element={<OSIS_1 />} />
        <Route path="/OSIS/bidang2" element={<OSIS_2 />} />
        <Route path="/OSIS/bidang3" element={<OSIS_3 />} />
        <Route path="/OSIS/bidang4" element={<OSIS_4 />} />
        <Route path="/OSIS/bidang5" element={<OSIS_5 />} />
        <Route path="/OSIS/bidang6" element={<OSIS_6 />} />
        <Route path="/OSIS/bidang7" element={<OSIS_7 />} />
        <Route path="/OSIS/bidang8" element={<OSIS_8 />} />
        <Route path="/OSIS/bidang9" element={<OSIS_9 />} />
        <Route path="/OSIS/bidang10" element={<OSIS_10 />} />
        <Route path="/OSIS/Emagz" element={<Emagz />} />
        <Route path="/OSIS/ASS1ST" element={<Ass1st />} />
        <Route path="/OSIS/ASS1ST/Kedokteran" element={<Kedokteran />} />
        <Route path="/OSIS/ASS1ST/Farmasi" element={<Farmasi />} />
        <Route path="/OSIS/ASS1ST/Keguruan" element={<Keguruan />} />
        <Route path="/OSIS/ASS1ST/Sosiologi" element={<Sosiologi />} />
        <Route path="/OSIS/ASS1ST/Akutansi" element={<Akutansi />} />
        <Route path="/OSIS/ASS1ST/Hukum" element={<Hukum />} />
        <Route path="/OSIS/ASS1ST/Psikologi" element={<Psikologi />} />
        <Route path="/OSIS/ASS1ST/Teknik_sipil" element={<Sipil />} />
        <Route path="/OSIS/ASS1ST/Pertambangan" element={<Pertambangan />} />
        <Route path="*" element={<NoMatchPages />} />
      </Routes>
    </div>
  );
}

export default App;
