import type { ComponentMultiStyle } from "@yamada-ui/core"
import { isAccessible, isGray, shadeColor, tintColor } from "@yamada-ui/utils"

export const Calendar: ComponentMultiStyle = {
  baseStyle: {
    container: {
      gap: "md",
    },
    header: {},
    label: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
    },
    labelIcon: {
      color: ["blackAlpha.500", "whiteAlpha.500"],
    },
    control: {
      color: ["blackAlpha.500", "whiteAlpha.500"],
      fontSize: "1.25em",
      _hidden: {
        opacity: 0,
        pointerEvents: "none",
      },
    },
    prev: {},
    next: {},
    content: {},
    year: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    month: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    button: {
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        boxShadow: "none",
        _focusVisible: {
          boxShadow: "0 0 0 3px rgba(125, 125, 125, 0.6)",
        },
      },
    },
    date: {},
    weekday: {
      userSelect: "none",
      color: ["blackAlpha.700", "whiteAlpha.600"],
      justifyContent: "center",
      alignItems: "center",
    },
    day: {
      _weekend: {
        color: ["red.600", "red.400"],
      },
      _outside: {
        color: ["blackAlpha.500", "whiteAlpha.500"],
      },
      _holiday: {
        color: ["red.600", "red.400"],
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        boxShadow: "none",
        _focusVisible: {
          boxShadow: "0 0 0 3px rgba(125, 125, 125, 0.6)",
        },
      },
    },
  },

  variants: {
    solid: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      button: {
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: {
            bg: ["initial", "initial"],
          },
        },
        _selected: {
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
      },
      day: {
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: {
            bg: ["initial", "initial"],
          },
        },
        _today: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 58)(t, m),
          ],
        },
        _selected: {
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
          borderColor: ["transparent", "transparent"],
        },
      },
    }),
    subtle: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      button: {
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: {
            bg: ["initial", "initial"],
          },
        },
        _selected: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 58)(t, m),
          ],
          color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
        },
      },
      day: {
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: {
            bg: ["initial", "initial"],
          },
        },
        _today: {
          bg: [
            tintColor(`${c}.50`, 24)(t, m),
            shadeColor(`${c}.300`, 76)(t, m),
          ],
        },
        _selected: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 58)(t, m),
          ],
          color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
          borderColor: ["transparent", "transparent"],
        },
      },
    }),
    unstyled: {
      container: {
        gap: "inherit",
        fontSize: "inherit",
      },
      content: {
        w: "auto",
      },
      label: {
        h: "auto",
        pointerEvents: "inherit",
        _hover: {
          bg: "inherit",
        },
        _active: {
          bg: "inherit",
          pointerEvents: "inherit",
        },
      },
      labelIcon: {
        color: "inherit",
      },
      control: {
        fontSize: "inherit",
        w: "auto",
        h: "auto",
        _hover: {
          bg: "inherit",
        },
        _active: {
          bg: "inherit",
        },
        _hidden: {
          opacity: "inherit",
          pointerEvents: "inherit",
        },
      },
      button: {
        h: "auto",
        _hover: {
          bg: "inherit",
        },
        _active: {
          bg: "inherit",
        },
        _disabled: {
          opacity: "inherit",
          cursor: "inherit",
          boxShadow: "inherit",
          _focusVisible: {
            boxShadow: "inherit",
          },
        },
      },
      weekday: {
        userSelect: "auto",
        color: "inherit",
        w: "auto",
        h: "auto",
      },
      day: {
        w: "auto",
        h: "auto",
        _hover: {
          bg: "inherit",
        },
        _active: {
          bg: "inherit",
        },
        _weekend: {
          color: "inherit",
        },
        _outside: {
          color: "inherit",
        },
        _holiday: {
          color: "inherit",
        },
        _disabled: {
          opacity: "inherit",
          cursor: "inherit",
          boxShadow: "inherit",
          _focusVisible: {
            boxShadow: "inherit",
          },
        },
      },
    },
  },

  sizes: {
    sm: {
      container: {
        fontSize: "xs",
      },
      content: {
        w: 56,
      },
      label: {
        h: 8,
      },
      control: {
        w: 8,
        h: 8,
      },
      button: {
        h: 8,
      },
      weekday: {
        w: 8,
        h: 8,
      },
      day: {
        w: 8,
        h: 8,
      },
    },
    md: {
      container: {
        fontSize: "sm",
      },
      content: {
        w: "17.5rem",
      },
      label: {
        h: 10,
      },
      control: {
        w: 10,
        h: 10,
      },
      button: {
        h: 10,
      },
      weekday: {
        w: 10,
        h: 10,
      },
      day: {
        w: 10,
        h: 10,
      },
    },
    lg: {
      container: {
        fontSize: "md",
      },
      content: {
        w: "21rem",
      },
      label: {
        h: 12,
      },
      control: {
        fontSize: "1.5em",
        w: 12,
        h: 12,
      },
      button: {
        h: 12,
      },
      weekday: {
        w: 12,
        h: 12,
      },
      day: {
        w: 12,
        h: 12,
      },
    },
    full: {
      container: {
        w: "full",
        fontSize: "md",
      },
      content: {
        w: "full",
      },
      label: {
        h: 12,
      },
      control: {
        fontSize: "1.5em",
        w: 12,
        h: 12,
      },
      button: {
        h: 12,
      },
      weekday: {
        w: "full",
        h: 12,
      },
      day: {
        w: "full",
        h: 12,
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}
