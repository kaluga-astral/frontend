import { styled } from '../styles';

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    min-width: 320px;
    min-height: 300px;
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(4)};

    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: ${({ theme }) => theme.spacing(1)};
    box-shadow: ${({ theme }) => theme.elevation[200]};

    &-popper {
      z-index: ${({ theme }) => theme.zIndex.drawer};
    }

    & .react-datepicker__day-names,
    .react-datepicker__week {
      display: flex;
      justify-content: space-between;
      width: 287px;
    }

    & .react-datepicker__day {
      & > button {
        font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
      }

      &--outside-month > button {
        color: ${({ theme }) => theme.palette.grey[600]};
      }

      &--disabled > button {
        color: ${({ theme }) => theme.palette.grey[300]};
        font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

        cursor: default;
      }

      &--selected > button {
        color: ${({ theme }) => theme.palette.common.white};

        background-color: ${({ theme }) => theme.palette.primary.main};
      }

      &--today > button {
        position: relative;

        font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
      }

      &--disabled > button:focus {
        outline: none;
      }

      &--disabled:not(.react-datepicker__day--selected) > button:hover,
      &--disabled:not(.react-datepicker__day--selected) > button:active {
        background-color: transparent;
      }

      &--disabled:focus-visible {
        outline: none;
      }

      &--today > button::before {
        position: absolute;
        bottom: ${({ theme }) => theme.spacing(1)};

        width: 33px;
        height: 2px;

        background-color: ${({ theme }) => theme.palette.primary[900]};

        content: '';
      }

      &--today > .react-datepicker__day--selected > button::before {
        background-color: ${({ theme }) => theme.palette.primary[200]};
      }

      &-name {
        width: 41px;
        margin-top: ${({ theme }) => theme.spacing(3)};
        margin-bottom: ${({ theme }) => theme.spacing(2)};

        color: ${({ theme }) => theme.palette.grey[600]};
        font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
        font-size: ${({ theme }) => theme.typography.h7.fontSize};
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
`;
