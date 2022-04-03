import React, { memo } from 'react';


const RouteCommon = (props) => {
  const { config } = props;
  const { path, component: Container } = config;

  return (
    <>
      <Container />
    </>
  )
};

export default memo(RouteCommon);