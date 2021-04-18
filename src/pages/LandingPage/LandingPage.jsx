import { useEffect, useState } from 'react';
import Datatable from '../../components/Datatable/DataTable';
import CustomModal from '../../components/Modal/Modal';

function LandingPage() {

  const [geneData, setGeneData] = useState([]);
  const [selectedGeneData, setSelectedGeneData] = useState([]);

  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setGeneData(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "https://evilfer.github.io/frontend-dev-api/data.json", true);
    xhttp.send();
  }, []);

  function onGeneSelection(id) {
    setSelectedGeneData(geneData.filter((item) => item.id === id));
  }

  return (
    <div className="landing-page">
      <Datatable geneData={geneData} setSelectedGeneData={onGeneSelection}/>
      <CustomModal geneData={selectedGeneData} setSelectedGeneData={onGeneSelection}/>
    </div>
  );
}

export default LandingPage;
