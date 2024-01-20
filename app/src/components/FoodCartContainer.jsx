import { styled } from "styled-components";
import { BASE_URL, Button } from "../App";
// eslint-disable-next-line react/prop-types
export const FoodCartContainer = ({ data = [] }) => {
  const foods = data || [];
  return (
    <FoodCardContainer>
      <FoodCards>
        {foods.map(({ image, name, text, price }, idx) => {
          return (
            <FoodCard key={idx}>
              <div className="food_image">
                <img src={BASE_URL + image} alt="" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>₹ {price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          );
        })}
      </FoodCards>
    </FoodCardContainer>
  );
};

const FoodCardContainer = styled.main`
  max-width: 1200px;
  background-image: url("/bg.png");
  background-color: red;
  background-size: cover;
  height: calc(100vh - 220px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-radius: 20px;

  display: flex;
  padding: 8px;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      02 90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  .food_info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
    }
    button {
      font-size: 12px;
    }
  }
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
`;
