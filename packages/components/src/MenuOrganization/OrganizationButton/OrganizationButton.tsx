import { AddOutlineMd } from '@astral/icons';
import { forwardRef } from 'react';

import { Button } from '../../Button';
import { Chevron } from '../../Chevron';
import { OverflowTypography } from '../../OverflowTypography';
import { Typography } from '../../Typography';
import { OrganizationWrapper } from '../OrganizationItem/styles';
import { OrganizationData } from '../styles';
import { Organization } from '../types';

import { OrganizationBtn } from './styles';

export type OrganizationButtonProps = {
  onClick: () => void;
  isOpen: boolean;
  currentOrganization?: Organization | null;
  onAddOrganization: () => void;
};

export const OrganizationButton = forwardRef<
  HTMLButtonElement,
  OrganizationButtonProps
>(({ onClick, isOpen, currentOrganization, onAddOrganization }, ref) => {
  if (!currentOrganization) {
    return (
      <Button startIcon={<AddOutlineMd />} onClick={onAddOrganization}>
        Добавить организацию
      </Button>
    );
  }

  const { name, inn, kpp } = currentOrganization;

  return (
    <OrganizationBtn
      ref={ref}
      variant="text"
      onClick={onClick}
      endIcon={<Chevron isActive={isOpen} />}
    >
      <OrganizationWrapper>
        <OverflowTypography variant="h6">{name}</OverflowTypography>
        <OrganizationData container spacing={2}>
          <Typography variant="caption" color="textSecondary">
            ИНН {inn}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            КПП {kpp}
          </Typography>
        </OrganizationData>
      </OrganizationWrapper>
    </OrganizationBtn>
  );
});
