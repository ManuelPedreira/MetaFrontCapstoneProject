const markaziText = "MarkaziText, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
const karla = "Karla, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace";

const theme = {
  color: {
    primary: {
      main: "#495E57",
      detail: "#F4CE14",
      detailDark: "#E0BA00",
      detailDarker: "#CCAA00",
    },
    secondary: {
      main: "#EE9972",
      detail: "#FBDABB",
    },
    highlight: {
      primary: "#333",
      primaryStrong: "black",
      secondary: "#EDEFEE",
      secondaryStrong: "white",
      middle: "#999",
    },
    background: {
      primary: "white",
      primarySoft: "#ebedec",
      primaryTransparent: "rgba(255, 255, 255, 0.9)",
      secondary: "black",
      secondarySoft: "#222",
    },
  },
  radiuses: {
    medium: "16pt",
  },
  transitions: {
    normal: "0.3s",
  },
  text: {
    title: {
      fontFamily: markaziText,
      fontSize: "60pt",
    },
    subtitle: {
      fontFamily: markaziText,
      fontSize: "40pt",
    },
    normal: {
      fontFamily: karla,
      fontSize: "16pt",
    },
    card: {
      fontFamily: karla,
      lineHeight: "1.5",
      headFontSize: "16pt",
      textFontSize: "14pt",
    },
    navigationBar: {
      fontFamily: karla,
      fontSize: "14pt",
      fontWeight: 600,
    },
  },
  frames: {
    section: {
      padding: "0.5rem 2rem",
      paddingMobile: "1.2rem",
    },

    resolution: {
      desktop: "1200px",
      phoneBreak: {
        minWidth: "799px",
        maxWidth: "798px",
      },
    },
  },
};

export default theme;
