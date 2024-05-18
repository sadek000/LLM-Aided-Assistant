/**
 * The base colors for the  ALDR Tech Dashboard.
 * You can add new color using this file.
 * You can customized the colors for the entire  ALDR Tech Dashboard using thie file.
 */

// types
interface ColorsTypes {
  main: string;
  focus: string;
}

interface GradientsTypes {
  main: string;
  state: string;
}

interface SocialMediaColorsTypes {
  main: string;
  dark: string;
}

interface BadgeColorsTypes {
  background: string;
  text: string;
}

interface Types {
  background:
    | {
        default: string;
        sidenav?: string;
        card?: string;
      }
    | any;
  white:
    | {
        main: string;
        focus: string;
      }
    | any;
  text:
    | {
        main: string;
        focus: string;
        primary?: string;
        secondary?: string;
        disabled?: string;
      }
    | any;
  transparent:
    | {
        main: string;
      }
    | any;
  black:
    | {
        light: string;
        main: string;
        focus: string;
      }
    | any;
  primary: ColorsTypes | any;
  secondary: ColorsTypes | any;
  info: ColorsTypes | any;
  success: ColorsTypes | any;
  warning: ColorsTypes | any;
  error: ColorsTypes | any;
  light: ColorsTypes | any;
  dark: ColorsTypes | any;
  grey:
    | {
        [key: string | number]: string;
      }
    | any;
  gradients:
    | {
        primary: GradientsTypes;
        secondary: GradientsTypes;
        info: GradientsTypes;
        success: GradientsTypes;
        warning: GradientsTypes;
        error: GradientsTypes;
        light: GradientsTypes;
        dark: GradientsTypes;
      }
    | any;
  socialMediaColors:
    | {
        facebook: SocialMediaColorsTypes;
        twitter: SocialMediaColorsTypes;
        instagram: SocialMediaColorsTypes;
        linkedin: SocialMediaColorsTypes;
        pinterest: SocialMediaColorsTypes;
        youtube: SocialMediaColorsTypes;
        vimeo: SocialMediaColorsTypes;
        slack: SocialMediaColorsTypes;
        dribbble: SocialMediaColorsTypes;
        github: SocialMediaColorsTypes;
        reddit: SocialMediaColorsTypes;
        tumblr: SocialMediaColorsTypes;
      }
    | any;
  badgeColors:
    | {
        primary: BadgeColorsTypes;
        secondary: BadgeColorsTypes;
        info: BadgeColorsTypes;
        success: BadgeColorsTypes;
        warning: BadgeColorsTypes;
        error: BadgeColorsTypes;
        light: BadgeColorsTypes;
        dark: BadgeColorsTypes;
      }
    | any;
  coloredShadows:
    | {
        [key: string]: string;
      }
    | any;
  inputBorderColor: string;
  tabs:
    | {
        indicator:
          | {
              boxShadow: string;
            }
          | any;
      }
    | any;
}

const colors: Types = {
  background: {
    default: process.env.REACT_APP_BACKGROUND_DEFAULT,
    sidenav: process.env.REACT_APP_BACKGROUND_SIDENAV,
    card: process.env.REACT_APP_BACKGROUND_CARD,
  },

  text: {
    main: process.env.REACT_APP_TEXT_MAIN,
    focus: process.env.REACT_APP_TEXT_FOCUS,
    primary: process.env.REACT_APP_TEXT_PRIMARY,
    secondary: process.env.REACT_APP_TEXT_SECONDARY,
    disabled: process.env.REACT_APP_TEXT_DISABLED,
  },

  transparent: {
    main: process.env.REACT_APP_TRANSPARENT_MAIN,
  },

  white: {
    main: process.env.REACT_APP_WHITE_MAIN,
    focus: process.env.REACT_APP_WHITE_FOCUS,
  },

  black: {
    light: process.env.REACT_APP_BLACK_LIGHT,
    main: process.env.REACT_APP_BLACK_MAIN,
    focus: process.env.REACT_APP_BLACK_FOCUS,
  },

  primary: {
    main: process.env.REACT_APP_PRIMARY_MAIN,
    focus: process.env.REACT_APP_PRIMARY_FOCUS,
  },

  secondary: {
    main: process.env.REACT_APP_SECONDARY_MAIN,
    focus: process.env.REACT_APP_SECONDARY_FOCUS,
  },

  info: {
    main: process.env.REACT_APP_INFO_MAIN,
    focus: process.env.REACT_APP_INFO_FOCUS,
  },

  success: {
    main: process.env.REACT_APP_SUCCESS_MAIN,
    focus: process.env.REACT_APP_SUCCESS_FOCUS,
  },

  warning: {
    main: process.env.REACT_APP_WARNING_MAIN,
    focus: process.env.REACT_APP_WARNING_FOCUS,
  },

  error: {
    main: process.env.REACT_APP_ERROR_MAIN,
    focus: process.env.REACT_APP_ERROR_FOCUS,
  },

  light: {
    main: process.env.REACT_APP_LIGHT_MAIN,
    focus: process.env.REACT_APP_LIGHT_FOCUS,
  },

  dark: {
    main: process.env.REACT_APP_DARK_MAIN,
    focus: process.env.REACT_APP_DARK_FOCUS,
  },

  grey: {
    100: process.env.REACT_APP_GREY_100,
    200: process.env.REACT_APP_GREY_200,
    300: process.env.REACT_APP_GREY_300,
    400: process.env.REACT_APP_GREY_400,
    500: process.env.REACT_APP_GREY_500,
    600: process.env.REACT_APP_GREY_600,
    700: process.env.REACT_APP_GREY_700,
    800: process.env.REACT_APP_GREY_800,
    900: process.env.REACT_APP_GREY_900,
  },

  gradients: {
    primary: {
      main: "#EC407A",
      state: "#D81B60",
    },

    secondary: {
      main: "#747b8a",
      state: "#495361",
    },

    info: {
      main: "#49a3f1",
      state: "#1A73E8",
    },

    success: {
      main: "#66BB6A",
      state: "#43A047",
    },

    warning: {
      main: "#FFA726",
      state: "#FB8C00",
    },

    error: {
      main: "#EF5350",
      state: "#E53935",
    },

    light: {
      main: "#EBEFF4",
      state: "#CED4DA",
    },

    dark: {
      main: "#42424a",
      state: "#191919",
    },
  },

  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribbble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },

  badgeColors: {
    primary: {
      background: "#f8b3ca",
      text: "#cc084b",
    },

    secondary: {
      background: "#d7d9e1",
      text: "#6c757d",
    },

    info: {
      background: "#aecef7",
      text: "#095bc6",
    },

    success: {
      background: "#bce2be",
      text: "#339537",
    },

    warning: {
      background: "#ffd59f",
      text: "#c87000",
    },

    error: {
      background: "#fcd3d0",
      text: "#f61200",
    },

    light: {
      background: "#ffffff",
      text: "#c7d3de",
    },

    dark: {
      background: "#8097bf",
      text: "#1e2e4a",
    },
  },

  coloredShadows: {
    primary: "#e91e62",
    secondary: "#110e0e",
    info: "#00bbd4",
    success: "#4caf4f",
    warning: "#ff9900",
    error: "#f44336",
    light: "#adb5bd",
    dark: "#404040",
  },

  inputBorderColor: process.env.REACT_APP_INPUT_BORDER_COLOR,

  tabs: {
    indicator: {
      boxShadow: process.env.REACT_APP_TABS_INDICATOR_BOXSHADOW,
    },
  },
};

export default colors;
