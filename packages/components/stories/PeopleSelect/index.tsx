import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Select, { DataType } from "../Select";

interface PeopleSelectProps {
  selected: DataType;
  onChange: (data: DataType) => void;
}

const PeopleSelect = ({ onChange, selected }: PeopleSelectProps) => {
  const [selfSelected, setSelected] = useState<DataType>();

  const query = useQuery(["people-key"], () => axios.get(`/people`), {
    select: (data) => data.data.people,
  });

  if (query.status === "loading") return <>loading</>;
  if (query.status === "success") {
    return (
      <Select
        data={query.data}
        selected={selfSelected || selected || query.data[0]}
        onChange={(e) => {
          onChange(e);
          setSelected(e);
        }}
      />
    );
  }
  return <>error</>;
};

export default PeopleSelect;
