import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatForm: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatForm }: Props) => {
  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

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
