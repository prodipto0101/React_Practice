import React, { useState, useEffect } from "react";

const FastComponent = () => {
  return (
    <div>
      <h2>✅ Fast Component Loaded!</h2>
    </div>
  );
};
const SlowComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <h2>⏳ Loading Slow Component...</h2>
      ) : (
        <h2>🐢 Slow Component Loaded!</h2>
      )}
    </React.Fragment>
  );
};

const CoCurrent = () => {
  return (
    <React.Fragment>
      <FastComponent />
      <SlowComponent />
    </React.Fragment>
  );
};
export default CoCurrent;
