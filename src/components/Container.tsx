export const Container = (props: container) => {

  return <div className={`left-Container ${props.height} ${props.width}`}>
    {props.children}
  </div>;
};

interface container {
  height?: string;
  width?: string;
  children? : IchildrenBody | IchildrenBody[]
}

type IchildrenBody = boolean | undefined |null | JSX.Element


