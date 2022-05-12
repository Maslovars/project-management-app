type Props = {
  children?: React.ReactNode,
};

export const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      {children}
    </>
  )
};