import { Flex } from "antd";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { CnClassNames } from "../utilities/cn";

interface searchInputProps {
  placeholder?: string;
  isBackground?: boolean;
}

const SearchInput = ({
  placeholder = "Search",
  isBackground = true,
}: searchInputProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <Flex
      align="center"
      justify="center"
      className={CnClassNames(
        "rounded-md z-10 rounded-lg w-60 p-1",
        isBackground ? "bg-blue-50" : "bg-none"
      )}
      gap={5}
    >
      <MdOutlineSearch color="#83C9FF" size={"20px"} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={CnClassNames(
          "w-full outline-none bg-transparent placeholder:text-blue-300"
        )}
      />
    </Flex>
  );
};

export default SearchInput;
