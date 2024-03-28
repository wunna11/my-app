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
  return <div>Hello, {props.name}!</div>;
};

const EnhancedComponent = withLogging(MyComponent);

export default function HigherOrderComponent() {
  return (
    <div>
      <EnhancedComponent name="Alice" />
    </div>
  );
}
