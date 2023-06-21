import { HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <div>
      <HStack p="10px">
        <Link href="/">
          <Image src={logo} boxSize="60px" maxHeight="100%" />
        </Link>
        <SearchInput onSearch={(searchText) => onSearch(searchText)} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
}

export default NavBar;
