const {
  identifier,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  jsxSpreadAttribute,
} = require('@babel/types');

const attributesWithCustomValues = {
  width: { name: 'width', value: '1em' },
  height: { name: 'height', value: '1em' },
  viewBox: { name: 'viewBox', value: '0 0 24 24' },
};

const generateStringAttribute = ({ name, value }) => {
  return {
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name,
    },
    value: {
      type: 'StringLiteral',
      value,
    },
  };
};

module.exports = (variables, { tpl }) => {
  const svgIconJsx = jsxElement(
    jsxOpeningElement(jsxIdentifier('SvgIcon'), [
      ...variables.jsx.openingElement.attributes.filter(
        (attribute) =>
          !Object.keys(attributesWithCustomValues).includes(attribute.name.name)
      ),
      ...Object.values(attributesWithCustomValues).map(({ name, value }) =>
        generateStringAttribute({ name, value })
      ),

      jsxSpreadAttribute(identifier('props')),
    ]),
    jsxClosingElement(jsxIdentifier('SvgIcon')),
    variables.jsx.children,
    false
  );
  const name = `${variables.componentName}: React.FunctionComponent<SvgIconProps>`;

  return tpl`
import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ${name} = ({...props}) => (
      ${svgIconJsx}
);
 
${variables.exports};
`;
};
