import styled from "styled-components";

const Link = styled.a`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 140px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s linear;
  &:hover {
    text-decoration: underline;
    transform: translateY(-3px);
  }
`;

const InstagramLink = () => {
  return (
    <Link href="https://www.instagram.com/vlada_cake/" target="_blank">
      Дізнатися більше
    </Link>
  );
};

export default InstagramLink;
