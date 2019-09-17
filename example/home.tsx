import * as React from "react";

import { t, T, Switcher } from "..";

const Foo = () => {
  // We can use this as a function and not just a React Component
  const text = t({
    children: "help.test",
    replacements: { firstName: "Debo", phoneNumber: "205.555.1234" }
  });
  return (
    <div>
      <h4>{text}</h4>
    </div>
  );
};

export function Home() {
  return (
    <div>
      <div>
        <label>Choose your languge:</label>
        <Switcher />
      </div>
      <Foo />
      <p>
        <T>login.email</T>
      </p>
      <p>
        <T>login.password</T>
      </p>
      <p>
        <T replacements={{ firstName: "Deric" }}>register.welcome</T>
      </p>
      <p>
        <T>register.firstName</T>
      </p>
      <p>
        <T>register.lastName</T>
      </p>
      <p>
        <T replacements={{ firstName: "Debo", phoneNumber: "205.555.1234" }}>
          help.test
        </T>
      </p>
    </div>
  );
}
