import { Meta } from '@storybook/react';

import { Tooltip } from '../Tooltip';
import { Tag } from '../Tag';
import { MenuItem } from '../MenuItem';
import { OverflowTypography } from '../OverflowTypography';
import { styled } from '../styles/styled';

import { Autocomplete } from './Autocomplete';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=8620-116375&mode=design&t=LIHrMjQSPzLTny2z-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
};

export default meta;

type IOption = {
  value: string;
  title: string;
};

const OPTIONS: IOption[] = [
  { value: '1', title: 'Value 1' },
  { value: '2', title: 'Value 2' },
  { value: '3', title: 'Value 3' },
  { value: '4', title: 'Value 4' },
  { value: '5', title: 'Value 5' },
  { value: '6', title: 'Value 6' },
  { value: '7', title: 'Value 7' },
  { value: '8', title: 'Value 8' },
  {
    value: '9',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci, aliquam aliquid delectus ipsam laboriosam magni molestias possimus ullam voluptatibus!',
  },
  {
    value: '10',
    title:
      '12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vero?',
  },
];

const Wrapper = styled.div`
  min-width: 300px;
`;

export const Example = () => (
  <Wrapper>
    <Autocomplete<IOption, false, false, false>
      options={OPTIONS}
      label="Выберите вариант"
      getOptionLabel={(params) => params.title}
    />
  </Wrapper>
);

export const Multiple = () => (
  <Wrapper>
    <Autocomplete<IOption, true, false, false>
      options={OPTIONS}
      label="Multiple"
      multiple
      getOptionLabel={(params) => params.title}
    />
  </Wrapper>
);

export const FreeSolo = () => (
  <Wrapper>
    <Autocomplete<IOption, false, false, true>
      options={OPTIONS}
      label="FreeSolo"
      freeSolo
      getOptionLabel={(params) => params.title}
    />
  </Wrapper>
);

export const MultipleCustomTags = () => (
  <Wrapper>
    <Autocomplete<IOption, true, false, false>
      multiple
      options={OPTIONS}
      label="Multiple custom tags"
      getOptionLabel={(params) => params.title}
      renderTags={(tags, getTagProps) => {
        return tags.map((tag, index) => {
          const { title } = tag;
          const { onDelete, ...tagProps } = getTagProps({ index });
          const isCustom = index === 0;

          return (
            <Tooltip title={isCustom && 'Custom tag'}>
              <Tag
                {...tagProps}
                onDelete={isCustom ? undefined : onDelete}
                color="warning"
                size="small"
                label={title}
                variant="light"
              />
            </Tooltip>
          );
        });
      }}
    />
  </Wrapper>
);

export const Error = () => (
  <Wrapper>
    <Autocomplete<IOption, false, false, false>
      label="Error"
      options={OPTIONS}
      helperText="Ошибка"
      getOptionLabel={(params) => params.title}
      error
    />
  </Wrapper>
);

export const Success = () => (
  <Wrapper>
    <Autocomplete<IOption, false, false, false>
      label="Success"
      options={OPTIONS}
      helperText="Успех"
      getOptionLabel={(params) => params.title}
      success
    />
  </Wrapper>
);

export const Small = () => (
  <Wrapper>
    <Autocomplete<IOption, false, false, false>
      label="Small"
      size="small"
      options={OPTIONS}
      getOptionLabel={(params) => params.title}
    />
  </Wrapper>
);

export const NoData = () => (
  <Wrapper>
    <Autocomplete<IOption, true, false, false>
      label="No data"
      size="small"
      multiple
      options={[]}
      getOptionLabel={(params) => params.title}
      required
    />
  </Wrapper>
);

export const CustomRenderOption = () => (
  <Wrapper>
    <Autocomplete<IOption, false, false, false>
      label="Custom render option"
      size="small"
      options={OPTIONS}
      getOptionLabel={(params) => params.title}
      renderOption={(props, option) => (
        <MenuItem {...props} key={props.id}>
          <OverflowTypography rowsCount={2}>
            {`Custom render option - ${option.title}`}
          </OverflowTypography>
        </MenuItem>
      )}
    />
  </Wrapper>
);

export const CustomRenderInput = () => (
  <Wrapper>
    <Autocomplete<IOption, true, false, false>
      label="Custom render input"
      size="small"
      options={OPTIONS}
      getOptionLabel={(params) => params.title}
      renderOption={(props, option) => (
        <MenuItem {...props} key={props.id}>
          <OverflowTypography rowsCount={2}>
            {`Custom render option - ${option.title}`}
          </OverflowTypography>
        </MenuItem>
      )}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <label>{params.label}</label>
          <input
            type="text"
            ref={params.inputProps.ref}
            value={params.inputProps.value}
            onMouseDown={params.inputProps.onMouseDown}
            placeholder={params.placeholder}
          />
        </div>
      )}
    />
  </Wrapper>
);
