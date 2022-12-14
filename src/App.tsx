import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Footer from './Components/Footer';
import Form from './Components/Form';
import NavBar from './Components/NavBar';
import CountriesTable from './Components/Table';
import { countriesAtom } from './recoil/atoms/Countries';

function App() 
{
  const countries = useRecoilValue<Country[]>(countriesAtom);
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add("dark");
    document.getElementsByTagName("body")[0].classList.add("dark:bg-black");
  },[]);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <Form />
      {
        countries.length !== 0 && (
          <CountriesTable countries={countries}/>
        )          
      }
      <Footer />
    </div>
  );
}

export default App;
