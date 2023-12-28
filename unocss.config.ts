import { defineConfig } from "@unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
    presets: [
        presetUno(),
        //@ts-expect-error
        presetIcons({
            extraProperties: {
                "vertical-align": "middle",
                "margin-top": "-.2em",
                display: "inline-block",
            },
        }),
        presetWebFonts({
            fonts: {
                title: "Poppins:300,400,700,900",
                sans: "Barlow:500,700",
            },
        }),
    ],
});
