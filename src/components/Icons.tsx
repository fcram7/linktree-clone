import { createElement, FC } from 'react';
import * as FontAwesome from "react-icons/fa";

interface iconProps {
  iconName: keyof typeof FontAwesome,
}

const Icons: FC<iconProps> = ({ iconName }) => {
  const icon = createElement(FontAwesome[iconName])
  return ( 
    <div>
      {icon}
    </div>
  );
}
 
export default Icons;