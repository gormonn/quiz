import React, { useCallback, useEffect, useState } from "react";
import { Form } from "./Form";
import { getPeopleList } from "../api/people";

const Columns = () =>
  [
    {
      key: "name",
    },
    {
      key: "birth_year",
    },
  ].map(({ key }) => <th key={key}>{key}</th>);

const People = ({ items }) => {
  return items.length
    ? items.map(({ name, birth_year }) => (
        <tr key={name} className="bg-light">
          <td>{name}</td>
          <td>{birth_year}</td>
        </tr>
      ))
    : null;
};

export function PeopleList() {
  const [projects, setProjects] = useState([]);

  const getPeople = useCallback((name = "") => {
    getPeopleList(name)
      .then(({ data }) => {
        setProjects(data.results);
      })
      .catch((err) => {
        console.error({ err });
      });
  }, []);

  useEffect(() => getPeople(), [getPeople]);

  return (
    <>
      <Form callback={getPeople} />

      <div className="table-responsive">
        <table className="table table-sm table-inverse">
          <thead>
            <tr>
              <Columns />
            </tr>
          </thead>
          <tbody>
            <People items={projects} />
          </tbody>
        </table>
      </div>
    </>
  );
}
