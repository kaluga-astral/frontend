import { styled } from '../styles';

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    background-color: ${({ theme }) => theme.palette.background.paper};
    box-shadow: ${({ theme }) => theme.elevation[200]};
    border-radius: ${({ theme }) => theme.spacing(1)};
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(4)};
    min-width: 320px;
    min-height: 300px;

    & .react-datepicker__day-names,
    .react-datepicker__week {
      width: 287px;
      display: flex;
      justify-content: space-between;
    }

    & .react-datepicker__day {
      & > button {
        font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
      }
      &-name {
        width: 41px;
        text-align: center;
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.typography.h7.fontSize};
        font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
        color: ${({ theme }) => theme.palette.grey[600]};
        margin-top: ${({ theme }) => theme.spacing(3)};
        margin-bottom: ${({ theme }) => theme.spacing(2)};
      }
      &--outside-month > button {
        color: ${({ theme }) => theme.palette.grey[600]};
      }
      &--selected > button {
        color: ${({ theme }) => theme.palette.common.white};
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
      &--today {
        & > button {
          position: relative;
          font-weight: ${({ theme }) => theme.typography.fontWeightMedium};

          &:before {
            content: '';
            position: absolute;
            height: 2px;
            width: 33px;
            background-color: ${({ theme }) => theme.palette.primary[900]};
            bottom: ${({ theme }) => theme.spacing(1)};
          }
        }
        &.react-datepicker__day--selected {
          & > button {
            &:before {
              background-color: ${({ theme }) => theme.palette.primary[200]};
            }
          }
        }
      }
      &--disabled {
        &:not(.react-datepicker__day--selected) > button {
          &:hover,
          :active {
            background-color: transparent;
          }
        }

        & > button {
          cursor: default;
          color: ${({ theme }) => theme.palette.grey[300]};
          font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

          &:focus {
            outline: none;
          }
        }

        &:focus-visible {
          outline: none;
        }
      }
    }
  }
`;
