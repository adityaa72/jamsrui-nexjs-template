import { Button, ButtonConfig, JamsrUIConfig } from "@jamsrui/react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1 className="text-amber-400">Hey there</h1>
      <Button>I'm button</Button>
      <JamsrUIConfig button={{ variant: "bordered" }}>
        <Button isLoading>I'm button</Button>
        <Button color="primary">I'm button</Button>
        <Button color="secondary">I'm button</Button>
        <ButtonConfig merge={false}>
          <Button
            isModern
            radius="full"
            color="danger"
            render={<Link href="/" />}
          >
            I'm button
          </Button>
        </ButtonConfig>
      </JamsrUIConfig>{" "}
      <Button isModern radius="full" color="danger" render={<Link href="/" />}>
        I'm button
      </Button>
    </div>
  );
};

export default Page;
