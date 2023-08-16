import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatForm: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatForm }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform?.id}
            onClick={() => onSelectPlatForm(platform)}
          >
            {platform?.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
