import { AddOutlineMd } from '@astral/icons';

import { Button } from '../Button';
import { Divider } from '../Divider';
import { useMenu } from '../hooks';
import { Menu } from '../Menu';
import { MenuGroup } from '../MenuGroup';

import { OrganizationButton } from './OrganizationButton';
import { OrganizationItem } from './OrganizationItem';
import type { Organization } from './types';
import {
  OrganizationGroupTitle,
  OrganizationsButtonWrapper,
  OrganizationsWrapper,
} from './styles';

export type MenuOrganizationProps = {
  /**
   * Выбранная организация
   */
  currentOrganization?: Organization | null;
  /**
   * Список организаций
   */
  organizations: Array<{ group: string; data: Array<Organization> }>;
  /**
   * Обработчик выбора организации
   */
  onSelect: (organization: Organization) => void;
  /**
   * Обработчик клика по кнопке "Добавить организацию"
   */
  onAddOrganization: () => void;
};

export const MenuOrganization = ({
  organizations = [],
  currentOrganization,
  onAddOrganization,
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
        onAddOrganization={onAddOrganization}
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
          <Button
            startIcon={<AddOutlineMd />}
            onClick={onAddOrganization}
            fullWidth
          >
            Добавить организацию
          </Button>
        </OrganizationsButtonWrapper>
      </Menu>
    </>
  );
};
