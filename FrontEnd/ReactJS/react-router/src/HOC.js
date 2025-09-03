/*import React from "react";
 
// Higher Order Component (HOC)
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Current Props: ", props); // Logs props for debugging
    return <WrappedComponent {...props} />;
  };
};
// Extends parents / reused
// A simple functional component
const Hello = ({ name , salary }) => {
  return <h2>Hello, {name }{salary}!</h2>;
};
 
// Enhance Hello with logging functionality
const HelloWithLogger = withLogger(Hello);
 
export default function HocComponent() {
  return (
    <div>
      <HelloWithLogger name="Preety"  salary="20000"/>
      <HelloWithLogger name="Deepika"  salary="30000"/>
    </div>
  );
}*/
import React from "react";
 
// Higher Order Component (HOC) - Logger
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Current Props: ", props); // Logs props for debugging
    return <WrappedComponent {...props} />;
  };
};
 
// Higher Order Component (HOC) - Authentication
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = props.isAuthenticated; // check auth from props
 
    if (!isAuthenticated) {
      return <h3>⚠️ Please login to view this content.</h3>;
    }
 
    return <WrappedComponent {...props} />;
  };
};
 
// A simple functional component
const Hello = ({ name, salary }) => {
  return <h2>Hello, {name}, your salary is {salary}!</h2>;
};
 
// Enhance Hello with Logger
const HelloWithLogger = withLogger(Hello);
 
// Enhance Hello with Auth
const HelloWithAuth = withAuth(Hello);
 
// Combine both (Auth + Logger)
const HelloWithAuthAndLogger = withAuth(withLogger(Hello));
 
export default function HocComponentWithAuth() {
  return (
    <div>
      <h1>HOC Example</h1>
 
      {/* Only Logger */}
      <HelloWithLogger name="Preety" salary="20000" />
 
      {/* Only Auth */}
      <HelloWithAuth name="Deepika" salary="30000" isAuthenticated={true} />
 
      {/* Auth + Logger */}
      <HelloWithAuthAndLogger name="Rahul" salary="40000" isAuthenticated={true} />
    </div>
  );
}
 
 