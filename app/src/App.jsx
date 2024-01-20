import { useEffect, useState } from "react";
import styled from "styled-components";
import { FoodCartContainer } from "./components/FoodCartContainer";

// eslint-disable-next-line react-refresh/only-export-components
export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const resp = await fetch(BASE_URL);
        const data = await resp.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.log("fetchFoodData ~ error: 👆👆👆👆👆👆👆", error);
      }
    };

    fetchFoodData();
  }, []);

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <Container>
      <TopContainer>
        <img src="/logo.svg" alt="company logo" />

        <input type="text" placeholder="Search food" />
      </TopContainer>

      <FilterContainer>
        {filterBtns.map((value) => (
          <Button
            isSelected={selectedBtn === value.type}
            key={value.name}
            onClick={() => filterFood(value.type)}
          >
            {value.name}
          </Button>
        ))}
      </FilterContainer>

      <FoodCartContainer data={filteredData}></FoodCartContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.header`
  min-height: 140px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 1em;
    padding-left: 10px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;

  margin-bottom: 40px;
`;
export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 12px 24px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #42b618;
  }
`;
