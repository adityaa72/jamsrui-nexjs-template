"use client";

import { ButtonConfig } from "@jamsrui/react";

type Props = {
  children: React.ReactNode;
};

declare module "@jamsrui/react" {
  export namespace Button {
    export interface Props {
      isModern?: boolean;
    }
  }
}

export const UIConfig = (props: Props) => {
  const { children } = props;
  return (
    <ButtonConfig
      props={(props) => {
        const { variant, isModern } = props;
        return {
          radius: variant === "solid" ? "none" : undefined,
          size: isModern ? "xs" : undefined,
        };
      }}
    >
      {children}
    </ButtonConfig>
  );
};
