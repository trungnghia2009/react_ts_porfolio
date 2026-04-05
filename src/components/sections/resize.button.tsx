type Props = {
  btnText: string;
  btnIcons: React.ReactNode;
  btnStyle?: React.CSSProperties;
  onClick?: () => void;
};

const ResizeButton = (props: Props) => {
  const { btnText, btnIcons, btnStyle, onClick } = props;

  return (
    <button className="resize-button" style={btnStyle} onClick={onClick}>
      <span style={{ textTransform: "uppercase" }}>{btnText}</span>
      <>{btnIcons}</>
    </button>
  );
};

export default ResizeButton;
