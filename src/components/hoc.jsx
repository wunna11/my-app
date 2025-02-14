import React, { useEffect } from "react";

const withLogging = (WrappedComponent) => {
  return function WithLogging(props) {
    useEffect(() => {
      console.log("Component is mounted!");
    }, []);

    return <WrappedComponent {...props} />;
    };
};

const MyComponent = (props) => {
  return <div>Hello, {props.name}! {title}</div>;
};

const MyComponent1 = () => {
  return <div>Bla Bla</div>
}

const EnhancedComponent = withLogging(MyComponent);
const EnhancedComponent1 = withLogging(MyComponent1)

export default function HigherOrderComponent() {
  return (
    <div>
      <EnhancedComponent name="Alice" />
      <EnhancedComponent1 />
    </div>
  );
}
