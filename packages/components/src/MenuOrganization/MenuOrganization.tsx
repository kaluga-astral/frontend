import { AddOutlineMd } from '@astral/icons';

import { Button } from '../Button';
import { Divider } from '../Divider';
import { useMenu } from '../hooks';
import { Menu } from '../Menu';
import { MenuGroup } from '../MenuGroup';

import { OrganizationButton } from './OrganizationButton';
import { OrganizationItem } from './OrganizationItem';
import { Organization } from './types';
import {
  OrganizationGroupTitle,
  OrganizationsButtonWrapper,
  OrganizationsWrapper,
} from './styles';

export type MenuOrganizationProps = {
  currentOrganization?: Organization | null;
  organizations: Array<{ group: string; data: Array<Organization> }>;
  onSelect: (organization: Organization) => void;
};

export const MenuOrganization = ({
  organizations = [],
  currentOrganization,
  onSelect,
}: MenuOrganizationProps) => {
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

  const handleOnSelect = (organization: Organization) => () => {
    onSelect(organization);
    handleCloseMenu();
  };

  return (
    <>
      <OrganizationButton
        isOpen={open}
        onClick={handleOpenMenu}
        currentOrganization={currentOrganization}
        ref={anchorRef}
      />
      <Menu
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleCloseMenu}
        MenuListProps={{ disablePadding: true }}
      >
        <OrganizationsWrapper>
          {currentOrganization && (
            <OrganizationGroupTitle>
              <MenuGroup label="Текущая организация">
                <OrganizationItem {...currentOrganization} selected />
              </MenuGroup>
            </OrganizationGroupTitle>
          )}
          {organizations.map(({ group, data }) => (
            <OrganizationGroupTitle key={group}>
              <MenuGroup label={group}>
                {data.map((organization) => {
                  return (
                    <OrganizationItem
                      key={organization.id}
                      onClick={handleOnSelect(organization)}
                      {...organization}
                    />
                  );
                })}
              </MenuGroup>
            </OrganizationGroupTitle>
          ))}
        </OrganizationsWrapper>
        <Divider />
        <OrganizationsButtonWrapper>
          <Button startIcon={<AddOutlineMd />} fullWidth>
            Добавить организацию
          </Button>
        </OrganizationsButtonWrapper>
      </Menu>
    </>
  );
};
