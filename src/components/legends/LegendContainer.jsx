import Form from "react-bootstrap/Form";
import { Container, Row } from "react-bootstrap";
import { data } from "../../data";
import LegendCard from "./LegendCard";
import { useState } from "react";

const LegendContainer = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <div>
      <Form.Control
        className="w-50 mx-auto my-2"
        type="search"
        placeholder="Search"
        onChange={handleChange}
      />
      <Container className="p-3 my-3 card-container">
        <Row xs={1} md={2} xl={3} className="justify-content-center g-3">
          {filterData.map((legend) => (
            <LegendCard key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
