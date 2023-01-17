import { Checkbox } from "@chakra-ui/react";

const controlColor = `linear-gradient(to bottom,  ${'#3a7bfd'} 20%,${'#854cdb'} 80%)`;

const defaultClasses = ({ radius = "1px", controlRadius = "1px" }) => {
  return {
    h: "40px",
    px: "12px",
    w: "fit-content",
    _checked: {
        color:'pink',
      h: "40px",
      px: "12px",
      borderRadius: radius
    },
    "span[class*='checkbox__control']:not([data-disabled])": {
      borderRadius: controlRadius,
      _checked: {
        bg: controlColor,
      },
      _after: {
        transitionProperty: "all",
        transitionDuration: "normal",
        content: `""`,
        position: "absolute",
        width: "0px",
        height: "0px",
        bg: `transparent`,
        borderRadius: radius,
        zIndex: -1
      }
    },
    _hover: {
      "span[class*='checkbox__control']:not([data-disabled])": {
        _after: {
          width: "40px",
          height: "40px",
        }
      }
    }
  };
};

export const CheckboxStyled = ({
  children,
  rounded,
  roundedFull,
  ...props
}) => {
  let classes = defaultClasses({});

  if (roundedFull) {
    classes = defaultClasses({ radius: "99px", controlRadius: "99px" });
  }


  return (
    <Checkbox iconColor='white' sx={classes} {...props}>
      {children}
    </Checkbox>
  );
};
