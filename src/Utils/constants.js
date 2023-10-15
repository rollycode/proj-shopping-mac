import { Typography, Box } from "@mui/material";

export const productImages = [
  {
    src: require("../Utils/Images/pic1.png"),
    alt: "product-pic-1",
  },
  {
    src: require("../Utils/Images/pic2.png"),
    alt: "product-pic-2",
  },
  {
    src: require("../Utils/Images/pic3.png"),
    alt: "product-pic-3",
  },

  {
    src: require("../Utils/Images/pic4.png"),
    alt: "product-pic-4",
  },
];

export const tabDetails = [
  {
    label: "Details",
    content: (
      <>
        <Typography
          sx={{
            color: "#000",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            lineHeight: "140%",
          }}
        >
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. it
          has a straight fit with well defined shoulders and a shawl collar
          culminating in a button and has been flawlessly finished with three
          jet pockets with a sartorial feel.
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 2,
            color: "#000",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            lineHeight: "120%",
          }}
        >
          <Typography>
            See the{" "}
            <a href="#" target="_blank" style={{ textDecoration: "underline" }}>
              EDITOR’S NOTE
            </a>
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography>
            Learn about The{" "}
            <a href="#" target="_blank" style={{ textDecoration: "underline" }}>
              DESIGNER
            </a>
          </Typography>
        </Box>
      </>
    ),
  },

  {
    label: "Delivery",
    content: (
      <Typography>
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </Typography>
    ),
  },
  {
    label: "Fit",
    content: (
      <Typography>
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </Typography>
    ),
  },
  {
    label: "Share",
    content: (
      <Typography>
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
      </Typography>
    ),
  },
];
