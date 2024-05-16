import { styled } from '../styles';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { Breadcrumbs } from '../Breadcrumbs';

export const Wrapper = styled.header`
  display: grid;
  grid-area: header;
  grid-template:
    'breadcrumbs breadcrumbs breadcrumbs'
    'back-btn title actions'
    'back-btn description description'
    'sub-header sub-header sub-header' / min-content 1fr auto;

  padding: ${({ theme }) => theme.spacing(0, 6)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;

    padding: unset;
  }
`;

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  grid-area: breadcrumbs;

  margin-bottom: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const BackButton = styled(IconButton)`
  grid-area: back-btn;

  margin-right: ${({ theme }) => theme.spacing(2.5)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-right: ${({ theme }) => theme.spacing(1)};
    margin-left: ${({ theme }) => `-${theme.spacing(3)}`};
  }
`;

export const PageSubheader = styled.div`
  grid-area: sub-header;

  padding-top: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Description = styled(Typography)`
  grid-area: description;

  padding-top: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const Title = styled(Typography)`
  grid-area: title;
  align-self: center;

  line-height: ${({ theme }) => theme.typography.pxToRem(32)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    /* TODO По макету нужно использовать Typography в варианте h4, но в настоящее время размер шрифта не совпадает
    предположительно нужно адаптировать шрифты под мобилку.
    Удалить явный размер шрифта после адаптации Typography и динамической установки variant от устройства
    */
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: ${({ theme }) => theme.typography.pxToRem(20)};
  }
`;

export const Actions = styled.div`
  display: contents;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: fixed;
    z-index: ${({ theme }) => theme.zIndex.appBar - 2};
    bottom: 0;
    left: 0;

    display: block;

    width: 100%;
    height: 80px;
    padding: ${({ theme }) => theme.spacing(4)};

    background-color: ${({ theme }) => theme.palette.common.white};
    box-shadow: 0 -1px 10px 0 rgb(7 45 87 / 10%);
  }
`;

export const MobileWrapper = styled.div`
  display: contents;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;

    min-height: 48px;
    padding: ${({ theme }) => theme.spacing(0, 4)};

    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
