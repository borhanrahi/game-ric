import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement
          children={
            <>
              <BsSearch />
            </>
          }
        />
        <Input
          ref={ref}
          borderRadius={20}
          borderWidth={2}
          placeholder="Search for a game"
          variant="filled"
          width="100%"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
