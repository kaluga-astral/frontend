import { styled } from '../styles';

export const StyledDatePickerWrapper = styled.div`
  .react-datepicker {
    background-color: ${({ theme }) => theme.palette.background.paper};
    box-shadow: ${({ theme }) => theme.elevation[200]};
    border-radius: ${({ theme }) => theme.spacing(1)};
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(4, 6)};
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
        color: ${({ theme }) => theme.palette.grey[600]};
        margin-top: ${({ theme }) => theme.spacing(3)};
        margin-bottom: ${({ theme }) => theme.spacing(2)};
      }
      &--selected > button {
        color: ${({ theme }) => theme.palette.common.white};
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
      &--outside-month > button {
        color: ${({ theme }) => theme.palette.grey[600]};
      }
    }
  }
`;
