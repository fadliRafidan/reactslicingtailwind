
import { Route, Routes } from 'react-router-dom';
import HomePage from './section/HomePage'
import Navbar from './section/Navbar';
import AtmMap from './layouts/AtmMap'
import BengkelMap from './layouts/BengkelMap'
import JalanAlternatifMap from './layouts/JalanAlternatifMap'
import LokasiMacetMap from './layouts/LokasiMacetMap'
import LokasiRawanMap from './layouts/LokasiRawanMap'
import MasjidMap from './layouts/MasjidMap'
import MiniMarketMap from './layouts/MiniMarketMap'
import OleholehMap from './layouts/OleholehMap'
import SpbuMap from './layouts/SpbuMap'
import TerminalMap from './layouts/TerminalMap'
import WisataMap from './layouts/WisataMap'
import KondisiJalan from './layouts/KondisiJalan'
import { Switch } from 'react-router-dom';


function App() {


  return (
    <div>
      <Navbar />

      <Routes>




        <Route exact path="/" element={<HomePage />} />

        <Route path="/atm" element={<AtmMap />} />
        <Route path="/bengkel" element={<BengkelMap />} />
        <Route path="/jalanlternative" element={<JalanAlternatifMap />} />
        <Route path="/lokasimacet" element={<LokasiMacetMap />} />
        <Route path="/lokasirawan" element={<LokasiRawanMap />} />
        <Route path="/masjid" element={<MasjidMap />} />
        <Route path="/minimarket" element={<MiniMarketMap />} />
        <Route path="/oleholeh" element={<OleholehMap />} />

        <Route path="/wisata" element={<WisataMap />} />

        <Route path="/spbu" element={<SpbuMap />} />
        <Route path="/terminal" element={<TerminalMap />} />
        <Route path="/kondisijalan" element={<KondisiJalan />} />


      </Routes>




    </div>
  )
}

export default App;
