import { FC, ReactNode } from "react";

declare global {
    type FCC<P = {}> = FC<{ children?: ReactNode } & P>;
}
