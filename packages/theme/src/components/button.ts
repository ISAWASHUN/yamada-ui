import type { ComponentStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import {
  getMemoizedObject as get,
  transparentizeColor,
  isArray,
  getColor,
  isGray,
  isAccessible,
} from "@yamada-ui/utils"

export const Button: ComponentStyle = {
  baseStyle: {
    rounded: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "slower",
    _focus: {
      outline: "none",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _readOnly: {
      cursor: "default",
      _ripple: {
        display: "none",
      },
    },
    _hover: {
      _disabled: {
        bg: ["initial", "initial"],
      },
    },
  },

  variants: {
    solid: ({
      theme: t,
      colorMode: m,
      colorScheme: c = "gray",
      errorBorderColor: ec = ["danger.500", "danger.400"],
    }) => {
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        bg: isGray(c)
          ? [`${c}.50`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        _hover: {
          bg: isGray(c)
            ? [`${c}.100`, `${c}.800`]
            : [isAccessible(c) ? `${c}.500` : `${c}.600`, `${c}.700`],
          _disabled: {
            bg: isGray(c)
              ? [`${c}.50`, `${c}.700`]
              : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          },
        },
        _invalid: {
          border: "1px solid",
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
        _focusVisible: {
          borderColor: "transparent",
          boxShadow: "outline",
        },
      }
    },
    outline: ({
      theme: t,
      colorMode: m,
      colorScheme: c = "gray",
      errorBorderColor: ec = ["danger.500", "danger.400"],
    }) => {
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        border: "1px solid",
        borderColor: [`${c}.600`, `${c}.500`],
        color: isGray(c)
          ? ["blackAlpha.800", "whiteAlpha.700"]
          : [`${c}.600`, `${c}.500`],
        bg: "transparent",
        _hover: {
          bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
        },
        _invalid: {
          borderColor: [errorBorderColor, errorBorderColor],
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
        _focusVisible: {
          boxShadow: "outline",
          _invalid: {
            borderColor: "transparent",
          },
        },
      }
    },
    link: ({ colorScheme: c = "gray" }) => ({
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: [`${c}.600`, `${c}.500`],
      _hover: {
        textDecoration: "underline",
        _disabled: {
          textDecoration: "none",
        },
      },
      _active: {
        color: [`${c}.700`, `${c}.600`],
        _disabled: {
          color: [`${c}.600`, `${c}.500`],
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _ripple: {
        display: "none",
      },
    }),
    ghost: ({
      theme: t,
      colorMode: m,
      colorScheme: c = "gray",
      errorBorderColor: ec = ["danger.500", "danger.400"],
    }) => {
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        color: isGray(c)
          ? ["blackAlpha.800", "whiteAlpha.700"]
          : [`${c}.600`, `${c}.500`],
        bg: "transparent",
        _hover: {
          bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
        },
        _invalid: {
          border: "1px solid",
          borderColor: errorBorderColor,
          boxShadow: `0 0 0 1px ${errorBorderColor}`,
        },
        _focusVisible: {
          borderColor: "transparent",
          boxShadow: "outline",
        },
      }
    },
    unstyled: {
      bg: "none",
      color: "inherit",
      display: "inline",
      lineHeight: "inherit",
      m: 0,
      p: 0,
      _ripple: {
        display: "none",
      },
    },
  },

  sizes: {
    xs: ({ theme: t }) => ({
      h: 6,
      minW: 6,
      fontSize: "xs",
      lineHeight: get(t, "sizes.6"),
      px: 2,
    }),
    sm: ({ theme: t }) => ({
      h: 8,
      minW: 8,
      fontSize: "sm",
      lineHeight: get(t, "sizes.8"),
      px: 3,
    }),
    md: ({ theme: t }) => ({
      h: 10,
      minW: 10,
      fontSize: "md",
      lineHeight: get(t, "sizes.10"),
      px: 4,
    }),
    lg: ({ theme: t }) => ({
      h: 12,
      minW: 12,
      fontSize: "lg",
      lineHeight: get(t, "sizes.12"),
      px: 6,
    }),
  },

  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray",
  },
}
