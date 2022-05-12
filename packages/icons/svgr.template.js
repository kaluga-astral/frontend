const {
  identifier,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  jsxSpreadAttribute,
} = require('@babel/types');

const generateStringAttribute = (name, value) => {
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

const attributesWithCustomValues = {
  width: generateStringAttribute('width', '1em'),
  height: generateStringAttribute('height', '1em'),
  fill: generateStringAttribute('fill', 'currentColor'),
};

module.exports = (variables, { tpl }) => {
  const svgIconJsx = jsxElement(
    jsxOpeningElement(jsxIdentifier('SvgIcon'), [
      ...variables.jsx.openingElement.attributes.filter(
        (attribute) =>
          !Object.keys(attributesWithCustomValues).includes(attribute.name.name)
      ),
      ...Object.values(attributesWithCustomValues),

      jsxSpreadAttribute(identifier('props')),
    ]),
    jsxClosingElement(jsxIdentifier('SvgIcon')),
    variables.jsx.children,
    false
  );
  const type = 'React.FunctionComponent<SvgIconProps>';
  const name = `${variables.componentName.replace('Svg', '')}`;
  const nameWithType = `${name}: ${type}`;
  const exports = [
    {
      ...variables.exports[0],
      declaration: { ...variables.exports[0].declaration, name },
    },
  ];

  return tpl`
import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ${nameWithType} = ({...props}) => (
      ${svgIconJsx}
);
 
${exports};
`;
};
