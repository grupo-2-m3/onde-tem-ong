import { useContext, useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiFilterOffFill, RiFilterFill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import Card from "../../components/DashboardCard/Card";
import { api } from "../../services/api";
import { StyledDashboard } from "./styled";
import notFoundImg from "../../assets/imgs/magnifier.jpg";
import HeaderFull from "../../components/HeaderFull/HeaderFull";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

export interface iOng {
  e: iOng
  name: string;
  userId: number;
  bio: string;
  category: string;
  id: number;
  background: string;
  avatar: string;
}
const DashboardLoggedPage = () => {
  const [filterState, setfilterState] = useState<boolean>(false);
  const [ongs, setOngs] = useState<iOng[] | undefined>(undefined);
  const [auxOngs, setAuxOngs] = useState<iOng[] | undefined>(undefined);
  const [searchValue, setSearchValue] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);


  let mockOngs: iOng[];
  let filterCategories: string[] = [];
  let filters: string[] = [];

  if (ongs) {
    mockOngs = ongs;
    filterCategories = mockOngs.map((e) => e.category);
    filters = filterCategories.filter((e, i, arr) => {
      return arr.indexOf(e) === i;
    });
  }
  async function getOngs() {
    try {
      // setLoading(true)
      const response = await api.get<iOng[]>(`ongs`);
      response && setOngs(response.data);
      setOngs(response.data);
      setAuxOngs(response.data);
    } catch (err) {
      console.error(err);
    }
    finally {

    }
  }
  function handleFilterButton(event: React.MouseEvent<HTMLElement>) {
    let target = event.target as HTMLElement;
    if (target.innerHTML === "Todos") {
      setAuxOngs(ongs);
    } else {
      setAuxOngs(
        ongs?.filter(
          (e) => e.category.toLowerCase() === target.innerHTML.toLowerCase()
        )
      );
    }
    setNotFound(false);
    setSearchValue("");
  }

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let found: iOng[] | undefined = [];
    found = ongs?.filter(
      (e) =>
        e.category.toLowerCase().includes(searchValue) ||
        e.name.toLowerCase().includes(searchValue)
    );
    setAuxOngs(found);
    if (found?.length === 0) {
      setNotFound(true);
    }
    setSearchValue("");
  }

  const token = localStorage.getItem("@token");

  useEffect(() => {
    if (token) {
      getOngs();
    } else {
      // navigate("/login")
    }
  }, []);


  return (
    <>
      <HeaderFull>
        <Link to={"/"}>Dashboard Inicial</Link>
      </HeaderFull>
      <StyledDashboard>
        <div className="container">
          <section className="searchSection container">
            <div className="searchDiv ">
              <form
                onSubmit={(e) => {
                  handleSearchSubmit(e);
                }}
                action=""
              >
                <input
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.currentTarget.value);
                  }}
                  type="text"
                  placeholder="Pesquisar"
                />
                <button type="submit">
                  <BiSearchAlt2 />
                </button>
              </form>
              <button
                className="filterBtn"
                onClick={() => {
                  setfilterState(!filterState);
                }}
              >
                {filterState ? (
                  <RiFilterOffFill></RiFilterOffFill>
                ) : (
                  <RiFilterFill></RiFilterFill>
                )}{" "}
              </button>
            </div>
            <div
              className={filterState ? "popUpFilters" : "catogoriesFilterDiv"}
            >
              <span>Categorias</span>
              <ul className="categoriesList">
                <Button
                  onClick={(e) => handleFilterButton(e)}
                  styled={"filled"}
                >
                  Todos
                </Button>
                {filters &&
                  filters?.map((e, i) => {
                    return (
                      <Button
                        key={i}
                        onClick={(e) => handleFilterButton(e)}
                        styled={"filled"}
                      >
                        {e?.charAt(0).toUpperCase() + e?.slice(1)}
                      </Button>
                    );
                  })}
              </ul>
            </div>
          </section>

          <section className="ongsSection ">
            <ul
              className={
                filterState ? "ongsList downPull container" : "ongsList "
              }
            >
              <>
                {auxOngs &&
                  auxOngs.map((e, i) => {
                    return (
                      <Card
                        e={e}
                        name={e.name}
                        category={e.category}
                        id={e.id}
                        background={e.background}
                        avatar={e.avatar}
                        key={i}
                        userId={e.userId}
                        bio={e.bio}
                      ></Card>
                    );
                  })}
              </>
            </ul>
          </section>
        </div>
        <div className={notFound ? "searchNotFound" : "hidden"}>
          <img src={notFoundImg} id="notFoundImg" alt="" />
          <h3>
            Ooops! Não encontramos resultados para sua busca... Gostaria de
            procurar novamente?{" "}
          </h3>
        </div>
      </StyledDashboard>
    </>
  );
};

export default DashboardLoggedPage;
