import * as React from "react";

import Stack from "@mui/material/Stack";
import { Box, Button, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
type ButtonProps = {
  text?: string;
  handleOnClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
  outline?: Boolean;
  customClasses?: string;
  type?: "submit";
  src?: React.ReactElement;
  alt?: string;
  bgColor?: string;
  typographyCustomClass?: string;
  customClssSrc?: string;
};
function Buttons(props: ButtonProps) {
  const {
    typographyCustomClass,
    text,
    handleOnClick,
    src,
    customClasses,
    bgColor,
    type,
    customClssSrc,
  } = props;
  console.log("props: ", props);
  return (
    <Stack direction="row" spacing={2}>
      <Button className={customClasses} onClick={handleOnClick} type={type}>
        <Box
          sx={{
            display: "flex",
            textTransform: "none",
            color: "black",
          }}
        >
          <Box className={customClssSrc}>{src}</Box>
          <Typography
            sx={{
              fontFamily: "Inter",
            }}
            className={typographyCustomClass}
          >
            {text}
          </Typography>
        </Box>
      </Button>
    </Stack>
  );
}
export default Buttons;
