import React from 'react';
import Link from 'next/link';

const LinkRedirect = ({ href, children, ...props }) => {
  return (
    <Link href={href}>{children}</Link>
  );
};
Link.defaultProps = {
  
}
export default LinkRedirect;
